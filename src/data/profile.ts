export type SkillGroup = {
  group: string;
  items: string[];
};

export type ProfileStat = {
  value: string;
  label: string;
  description: string;
};

export type Highlight = {
  label: string;
  title: string;
  description: string;
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
  period: string;
  status: string;
  role: string;
  outcome: string;
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
    "面向智能系统、工程建模与数据分析方向持续积累项目经验，关注从问题抽象、算法实现到可视化表达的完整闭环。",
  statusLine: "开放科研训练、工程项目与竞赛合作机会",
  avatar: "images/profile-placeholder.svg",
  email: "your.email@example.com",
  githubUrl: "https://github.com/KH1926",
  cvUrl: "",
};

export const profileStats: ProfileStat[] = [
  {
    value: "4",
    label: "研究方向",
    description: "智能制造、优化建模、数据可视化与 Web 工程",
  },
  {
    value: "3+",
    label: "项目模块",
    description: "工程系统、建模分析、可视化表达",
  },
  {
    value: "2026",
    label: "持续更新",
    description: "用于集中沉淀简历、项目与成果材料",
  },
];

export const highlights: Highlight[] = [
  {
    label: "Research",
    title: "问题建模与实验验证",
    description:
      "从实际约束中抽象变量、目标与评价指标，并用程序验证模型结果。",
  },
  {
    label: "Engineering",
    title: "从算法到可展示系统",
    description:
      "关注数据处理、交互界面、文档说明和部署流程之间的工程一致性。",
  },
  {
    label: "Communication",
    title: "面向汇报的表达组织",
    description:
      "将复杂项目压缩为可复核的图表、结论、贡献说明和展示页面。",
  },
];

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
      "围绕生产计划、设备状态、工序调度和仿真验证构建的工程系统展示项目。",
    period: "2025 - 2026",
    status: "进行中",
    role: "系统设计 / 后端验证 / 展示材料",
    outcome: "形成可演示的业务流程、仿真接口和设计说明结构。",
    tags: ["MES", "调度", "仿真", "Web"],
    image: "images/project-system.svg",
    githubUrl: "https://github.com/KH1926/personal-web",
  },
  {
    title: "数学建模与优化分析",
    summary:
      "展示建模思路、算法实现、数据处理、可视化输出与论文结果一致性检查等综合能力。",
    period: "2024 - 2026",
    status: "可整理",
    role: "建模分析 / 程序实现 / 结果审查",
    outcome: "沉淀多轮 review、图表生成和论文-程序一致性检查流程。",
    tags: ["数学建模", "优化", "Python", "可视化"],
    image: "images/project-modeling.svg",
  },
  {
    title: "数据分析与可视化作品",
    summary:
      "面向科研汇报或工程决策的数据分析页面，强调信息结构、图表表达与结论可解释性。",
    period: "2025 - 至今",
    status: "持续更新",
    role: "数据清洗 / 图表设计 / 结论表达",
    outcome: "输出适合论文、汇报和网页展示的结构化图表材料。",
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
