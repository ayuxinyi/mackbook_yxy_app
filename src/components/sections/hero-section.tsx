import { useEffect, useRef } from "react";

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      // 设置视频播放的速度
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MackBook Pro</h1>
        <img src="/title.png" alt="一段关于MacBook Pro的文字" />
      </div>
      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
      <button>立即购买</button>
      <p>¥12,999 起或每月 ¥1,083 分 12 期支付</p>
    </section>
  );
};
