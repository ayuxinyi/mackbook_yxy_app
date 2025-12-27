import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useMediaQuery } from "react-responsive";
import { performanceImages, performanceImgPositions } from "../../constants";

export const PerformanceSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      // Text Animation
      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      if (isMobile) return;

      // Image Positioning Timeline
      const tl = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
          // 开启滚动条标记，方便调试
          // markers: true,
        },
      });

      // Position Each Performance Image
      performanceImgPositions.forEach(item => {
        if (item.id === "p5") return;

        const selector = `.${item.id}`;
        const vars = { transform: "", left: "", right: "", bottom: "" };

        if (typeof item.left === "number") vars.left = `${item.left}%`;
        if (typeof item.right === "number") vars.right = `${item.right}%`;
        if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

        if (item.transform) vars.transform = item.transform;

        tl.to(selector, vars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            className={item.id}
            alt={item.id || `Performance Image #${index + 1}`}
          />
        ))}
      </div>

      <div className="content">
        <p>
          即便是图形密集型的工作流程，也能以你的创意节奏全速响应。 M4
          系列芯片配备新一代 硬件级加速光线追踪 GPU， 渲染画面更迅捷， 让{" "}
          <span className="text-white">游戏沉浸感与真实感，都前所未有。</span>{" "}
          同时，Dynamic Caching 动态缓存技术，
          通过优化高速片上内存的分配与利用， 大幅提升 GPU 平均使用效率——
          为要求苛刻的专业应用与 3A 游戏， 带来显著的性能飞跃。
        </p>
      </div>
    </section>
  );
};
