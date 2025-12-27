import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export const ShowcaseSection = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });
      timeline
        .to(".mask img", {
          transform: "scale(1.1)",
        })
        .to(".content", {
          opacity: 1,
          y: 0,
        });
    }
  }, []);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" autoPlay loop muted playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" />
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>
            <div className="space-y-5 mt-7 pe-10">
              <p>
                M4，全新登场，
                <span className="text-white">下一代 Apple 自研芯片</span>
                ，强劲性能，为你的创意与效率重构可能。
              </p>
              <p>
                它为 iPad Pro 注入 Apple Intelligence，
                无论是书写、创作，或处理专业任务，都更加从容流畅。
                薄、轻，却依然强大。
              </p>
              <p>
                全新的显示引擎带来惊人的精度、色彩还原与亮度表现。 新一代 GPU
                支持硬件加速光线追踪， 将主机级画面渲染能力，带到你的指尖。
              </p>
              <p className="text-primary">了解 Apple Intelligence</p>
            </div>
          </div>
          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>最高可达</p>
              <h3>快 4 倍</h3>
              <p>专业性能渲染速度（相比 M2）</p>
            </div>
            <div className="space-y-2">
              <p>最高可达</p>
              <h3>提升 1.5 倍</h3>
              <p>CPU 性能表现（相比 M2）</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
