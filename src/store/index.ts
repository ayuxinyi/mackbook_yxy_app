import { create } from "zustand";
import { SCALE_LARGE_DESKTOP } from "../constants";

type State = {
  color: string;
  scale: number;
  texture: string;
};

type Actions = {
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  setTexture: (texture: string) => void;
  reset: () => void;
};

// 定义 MacBook 状态管理 store
const useMacbookStore = create<State & Actions>(set => ({
  // 定义MacBook颜色状态
  color: "#2e2c2e",
  setColor: (color: string) => set({ color }),

  // 定义MacBook尺寸状态
  scale: SCALE_LARGE_DESKTOP,
  setScale: (scale: number) => set({ scale }),

  // 定义3D模型纹理状态
  texture: "/videos/feature-1.mp4",
  setTexture: (texture: string) => set({ texture }),

  // 重置MacBook状态
  reset: () =>
    set({
      color: "#2e2c2e",
      scale: SCALE_LARGE_DESKTOP,
      texture: "/videos/feature-1.mp4",
    }),
}));

export default useMacbookStore;
