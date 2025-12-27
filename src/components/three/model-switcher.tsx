import {
  PresentationControls,
  // type PresentationControlProps,
} from "@react-three/drei";
import { useRef, type FC } from "react";
import { MacbookModel14, MacbookModel16 } from "../models";
import type { Mesh, Object3D } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  SCALE_LARGE_DESKTOP,
  SCALE_LARGE_MOBILE,
  SCALE_SMALL_DESKTOP,
  SCALE_SMALL_MOBILE,
} from "../../constants";

const ANIMATION_DURATION = 1;
// 当一个模型被隐藏时，模型需要移出屏幕的距离
const OFFSET_DISTANCE = 5;

// 设置模型的透明度
const fadeMeshes = (group: Object3D | null, opacity: number) => {
  if (!group) return;
  // 遍历模型中的所有子对象，将它们的透明度设置为0
  group.traverse(child => {
    // 检查子对象是否是网格模型，并且是否有材质
    if ((child as Mesh).isMesh && (child as Mesh).material) {
      const material = (child as Mesh).material;
      // 检查材质是否是数组，如果不是数组，说明是单个材质
      if (!Array.isArray(material)) {
        // 确保材质是可透明的
        material.transparent = true;
        // 使用GSAP库来实现平滑的透明度变化动画
        gsap.to(material, {
          opacity,
          duration: ANIMATION_DURATION,
        });
      }
    }
  });
};

// 移动模型
const moveGroup = (group: Object3D | null, x: number) => {
  if (!group) return;
  // group.position：模型的位置向量，用于设置模型在场景中的位置
  gsap.to(group.position, {
    x,
    duration: ANIMATION_DURATION,
  });
};

interface ModelSwitcherProps {
  scale: number;
  isMobile: boolean;
}

export const ModelSwitcher: FC<ModelSwitcherProps> = ({ scale, isMobile }) => {
  const macbookModel14Ref = useRef<Object3D | null>(null);
  const macbookModel16Ref = useRef<Object3D | null>(null);

  const showLargeMacbook =
    scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  const controlsConfig = {
    // snap:设置为true时，模型在用户旋转结束后，自动回到正前方视野或默认位置
    snap: true,
    // speed:设置旋转和平移的速度，值越大速度越快
    speed: 1,
    // zoom:设置缩放的灵敏度，值越大越敏感
    zoom: 1,
    // polar:设置垂直方向上允许旋转的角度范围，默认是[-Math.PI, Math.PI]，即允许在360度范围内旋转
    polar: [-Math.PI, Math.PI] as [number, number],
    // azimuth:设置水平方向上允许旋转的角度范围，默认是[-Infinity, Infinity]，即允许在360度范围内旋转
    azimuth: [-Infinity, Infinity] as [number, number],
    config: {
      // mass:设置模型的质量，值越大旋转越敏感
      mass: 1,
      // tension:设置模型的张力，值越大旋转越敏感
      tension: 0,
      // friction:设置模型的摩擦力，值越大旋转越敏感
      friction: 26,
    },
  };

  useGSAP(() => {
    moveGroup(
      macbookModel14Ref.current,
      showLargeMacbook ? -OFFSET_DISTANCE : 0
    );
    moveGroup(
      macbookModel16Ref.current,
      showLargeMacbook ? 0 : OFFSET_DISTANCE
    );
    fadeMeshes(macbookModel14Ref.current, showLargeMacbook ? 0 : 1);
    fadeMeshes(macbookModel16Ref.current, showLargeMacbook ? 1 : 0);
  }, [scale]);

  return (
    <>
      {/* PresentationControls:允许用户旋转和平移模型 */}
      <PresentationControls {...controlsConfig}>
        <group ref={macbookModel16Ref}>
          <MacbookModel16
            scale={isMobile ? SCALE_LARGE_MOBILE : SCALE_LARGE_DESKTOP}
          />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={macbookModel14Ref}>
          <MacbookModel14
            scale={isMobile ? SCALE_SMALL_MOBILE : SCALE_SMALL_DESKTOP}
          />
        </group>
      </PresentationControls>
    </>
  );
};
