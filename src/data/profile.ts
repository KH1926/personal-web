export type SkillGroup = {
  group: string;
  items: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  description: string;
};

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
};

export type AchievementType = "论文" | "竞赛" | "奖项" | "荣誉";

export type Achievement = {
  type: AchievementType;
  title: string;
  organization: string;
  date: string;
  summary: string;
  link?: string;
};

export const profile = {
  name: "你的姓名",
  title: "本科生 / 研究兴趣：智能系统、数据分析与工程建模",
  location: "中国",
  summary:
    "这里填写一段 80-120 字的个人简介，概括你的研究方向、工程能力、项目经历和当前目标。首版先使用占位内容，后续可以直接在这个文件中替换。",
  email: "your.email@example.com",
  githubUrl: "https://github.com/your-username",
  cvUrl: "",
};

export const education: EducationItem[] = [
  {
    school: "某某大学",
    degree: "专业名称 · 本科",
    period: "2023 - 至今",
    description:
      "可填写主修方向、核心课程、实验室经历、导师课题或与个人方向相关的学习重点。",
  },
  {
    school: "学术训练与项目实践",
    degree: "科研训练 / 工程实践",
    period: "2024 - 至今",
    description:
      "可填写数学建模、软件开发、数据分析、论文阅读、工程竞赛等综合训练经历。",
  },
];

export const researchInterests = [
  "智能制造与生产调度",
  "多目标优化与数学建模",
  "数据可视化与决策支持",
  "Web 应用与工程系统设计",
];

export const skills: SkillGroup[] = [
  {
    group: "编程与工程",
    items: ["Python", "TypeScript", "Astro", "React", "Node.js", "Git"],
  },
  {
    group: "数据与建模",
    items: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "优化建模"],
  },
  {
    group: "研究表达",
    items: ["论文阅读", "技术写作", "实验复现", "图表设计", "汇报展示"],
  },
];

export const projects: Project[] = [
  {
    title: "智能生产管控 MES 系统",
    summary:
      "围绕生产计划、设备状态、工序调度和仿真验证构建的工程系统展示项目，可替换为真实项目描述。",
    tags: ["MES", "调度", "仿真", "Web"],
    image: "images/project-system.svg",
    githubUrl: "https://github.com/your-username/project",
  },
  {
    title: "数学建模与优化分析",
    summary:
      "展示建模思路、算法实现、数据处理、可视化输出与论文结果一致性检查等综合能力。",
    tags: ["数学建模", "优化", "Python", "可视化"],
    image: "images/project-modeling.svg",
  },
  {
    title: "数据分析与可视化作品",
    summary:
      "面向科研汇报或工程决策的数据分析页面，强调信息结构、图表表达与结论可解释性。",
    tags: ["数据分析", "可视化", "Dashboard"],
    image: "images/project-visual.svg",
  },
];

export const achievements: Achievement[] = [
  {
    type: "论文",
    title: "待补充论文或技术报告题目",
    organization: "课程论文 / 研究训练 / 投稿期刊",
    date: "2026",
    summary:
      "填写论文主题、方法贡献、实验数据来源和你负责的部分。首版保留为占位内容。",
  },
  {
    type: "竞赛",
    title: "数学建模或工程创新竞赛经历",
    organization: "竞赛组织方",
    date: "2025",
    summary:
      "填写竞赛题目、团队分工、模型方法、程序实现和最终成绩。可链接到项目页。",
  },
  {
    type: "奖项",
    title: "奖学金或专业竞赛奖项",
    organization: "学校 / 学院 / 竞赛组委会",
    date: "2025",
    summary: "填写奖项等级、评选依据和与个人方向相关的证明价值。",
  },
  {
    type: "荣誉",
    title: "学生工作、科研训练或志愿服务荣誉",
    organization: "学校 / 学院",
    date: "2024",
    summary: "填写荣誉背景、职责范围和可公开展示的成果。",
  },
];
