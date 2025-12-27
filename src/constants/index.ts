const navLinks = [
  { label: "商店" },
  { label: "Mac" },
  { label: "iPhone" },
  { label: "Watch" },
  { label: "Vision" },
  { label: "AirPods" },
];

const noChangeParts = [
  "Object_84",
  "Object_37",
  "Object_34",
  "Object_12",
  "Object_80",
  "Object_35",
  "Object_36",
  "Object_13",
  "Object_125",
  "Object_76",
  "Object_33",
  "Object_42",
  "Object_58",
  "Object_52",
  "Object_21",
  "Object_10",
];

const performanceImages = [
  { id: "p1", src: "/performance1.png" },
  { id: "p2", src: "/performance2.png" },
  { id: "p3", src: "/performance3.png" },
  { id: "p4", src: "/performance4.png" },
  { id: "p5", src: "/performance5.jpg" },
  { id: "p6", src: "/performance6.png" },
  { id: "p7", src: "/performance7.png" },
];

const performanceImgPositions = [
  {
    id: "p1",
    left: 5,
    bottom: 65,
  },
  {
    id: "p2",
    right: 10,
    bottom: 60,
  },
  {
    id: "p3",
    right: -5,
    bottom: 45,
  },
  {
    id: "p4",
    right: -10,
    bottom: 0,
  },
  {
    id: "p5",
    left: 20,
    bottom: 50,
  },
  {
    id: "p6",
    left: 2,
    bottom: 30,
  },
  {
    id: "p7",
    left: -5,
    bottom: 0,
  },
];

const features = [
  {
    id: 1,
    icon: "/feature-icon1.svg",
    highlight: "邮件助手",
    text: "快速总结邮件内容并生成回复草稿，助你轻松掌控收件箱。",
    styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
  },
  {
    id: 2,
    icon: "/feature-icon2.svg",
    highlight: "图像 AI",
    text: "生成或编辑图片只需一句话描述，让你的创意即时成真。",
    styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
  },
  {
    id: 3,
    icon: "/feature-icon3.svg",
    highlight: "内容总结",
    text: "将冗长文章、报告或笔记转化为简洁易读的重点摘要。",
    styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
  },
  {
    id: 4,
    icon: "/feature-icon4.svg",
    highlight: "隔空传送",
    text: "无线分享照片、大文件等内容，轻松连接 iPhone 与 Mac 等设备。",
    styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
  },
  {
    id: 5,
    icon: "/feature-icon5.svg",
    highlight: "写作助手",
    text: "无论是博客、论文还是短文案，都能让 AI 帮你润色优化，写得又快又好。",
    styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
  },
];

const featureSequence = [
  { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
  { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
  { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
  { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
  { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

const footerLinks = [
  { label: "隐私政策", link: "#" },
  { label: "使用条款", link: "#" },
  { label: "销售政策", link: "#" },
  { label: "法律声明", link: "#" },
  { label: "网站地图", link: "#" },
];

const SCALE_LARGE_DESKTOP = 0.08;
const SCALE_LARGE_MOBILE = 0.05;
const SCALE_SMALL_DESKTOP = 0.06;
const SCALE_SMALL_MOBILE = 0.03;

export {
  features,
  featureSequence,
  footerLinks,
  navLinks,
  noChangeParts,
  performanceImages,
  performanceImgPositions,
  SCALE_LARGE_DESKTOP,
  SCALE_LARGE_MOBILE,
  SCALE_SMALL_DESKTOP,
  SCALE_SMALL_MOBILE,
};
