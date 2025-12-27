import { Environment, Lightformer } from "@react-three/drei";

// Lightformer:光线组件,柔和的光线，不会产生阴影
export const StudioLight = () => {
  return (
    <group name="lights">
      {/* 环境组件,resolution 环境贴图的分辨率 */}
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 5, -15]}
            scale={10}
            rotateY={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            rotateY={Math.PI / 2}
          />
        </group>
      </Environment>
      {/* 聚光灯组件,position 位置,angle 角度,decay 衰减,intensity 强度 */}
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        decay={0.1}
        intensity={Math.PI * 1}
      />
    </group>
  );
};
