import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export const HighlightsSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top center",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <section id="highlights">
      <h2>现在，就是升级的最佳时机。</h2>
      <h3>全新 MacBook Pro，为你带来这些超凡体验。</h3>
      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="laptop" />
            <p>处理高负载任务，速度最高提升至 9.8 倍。</p>
          </div>
          <div>
            <img src="/sun.png" alt="Sun" />
            <p>
              令人惊叹的
              <br />
              Liquid Retina XDR
              <br />
              显示屏。
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>
              专为
              <br /> <span>Apple Intelligence</span>
              <br />
              打造。
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="Battery" />
            <p>
              续航再提升
              <span className="green-gradient"> 提升至 14 小时 </span>
              以上。
              <span className="text-dark-100"> (总续航能力 24 小时。)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
