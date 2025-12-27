import clsx from "clsx";
import useMacbookStore from "../../store";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import { StudioLight } from "../three";
import { ModelSwitcher } from "../three";
import { useMediaQuery } from "react-responsive";
import { SCALE_LARGE_DESKTOP, SCALE_SMALL_DESKTOP } from "../../constants";

export const ProductSection = () => {
  const { color, setColor, scale, setScale } = useMacbookStore();
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });

  return (
    <section id="product-viewer">
      <h2>产品介绍</h2>
      <div className="controls">
        <p className="info">
          {scale === SCALE_SMALL_DESKTOP ? "14" : "16"} 英寸 MacBook Pro （
          {color === "#adb5bd" ? "银色" : "太空黑"}）
        </p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active"
              )}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
            />
          </div>
          <div className="size-control">
            <div
              onClick={() => setScale(SCALE_SMALL_DESKTOP)}
              className={clsx(
                scale === SCALE_SMALL_DESKTOP
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(SCALE_LARGE_DESKTOP)}
              className={clsx(
                scale === SCALE_LARGE_DESKTOP
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLight />
        {/* <OrbitControls enableZoom={false} /> */}
        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
};
