const ProjectType = {
  FullStack: 0,
  Backend: 1,
  Frontend: 2,
};

class ProjectModel {
  constructor({
    title, // 專案名稱
    mainSkill, // 主要技能
    description, // 專案描述
    imageSrc, // 專案封面
    type = ProjectType.FullStack, // 前端/後端/全端
    projectLink, // 專案連結
    linkBtnTitle = "Source Code", // 專案連結按鈕標題
    videoLink = null, // demo影片連結
  }) {
    this.title = title;
    this.mainSkill = mainSkill;
    this.description = description;
    this.imageSrc = imageSrc;
    this.type = type;
    this.videoLink = videoLink;
    this.projectLink = projectLink;
    this.linkBtnTitle = linkBtnTitle;
  }
}

// 作品清單
const projects = [
  // Backend
  new ProjectModel({
    title: "Ordering System (Backend)",
    mainSkill:
      "Golang、MySQL、Restful API、FCM、Cloud Run、Swagger、Docker、Git、Postman、Trello、DrawSQL",
    description:
      "一款具有商店管理與客戶點餐的餐廳點餐系統，商業使用者可輕鬆管理多個商店、菜單與座位，並即時接收客戶點餐訂單。" +
      "而客戶也可掃描QRCode進行快速點餐，及時接收餐點製作狀態。",
    imageSrc: "images/projects/ordering_system_database_structure.png",
    type: ProjectType.Backend,
    projectLink: "https://github.com/phzeng0726/ordering-system-backend",
  }),
  // Full Stack
  new ProjectModel({
    title: "Accounting App",
    mainSkill: "Flutter(Bloc & DDD)、SQLite、Firestore、i18n、Git、XMind",
    description:
      "記帳 APP 是我在工作之餘的空閒時間自製的作品，" +
      "功能包含帳本記錄、文字化帳戶列表、視覺化統計圖表、字體調適、日期區間篩選...等。",
    imageSrc: "images/projects/accounting_app_video_cover.png",
    projectLink: "https://github.com/phzeng0726/qq-accounting-app-demo",
    videoLink: "http://youtu.be/Qtp0XSlX6XM",
  }),
  new ProjectModel({
    title: "Chat App",
    mainSkill:
      "Flutter(Bloc & DDD)、Firebase Auth、Firestore、Cloud Storage、Git、XMind",
    description:
      "簡單的聊天APP，是短時間內製作用來Demo的小小作品，" +
      "功能包含好友新增、資料驗證、用戶註冊、即時傳訊、主題切換、多國語言切換...等。",
    imageSrc: "images/projects/chat_app_video_cover.png",
    projectLink: "https://github.com/phzeng0726/chat-app-demo",
    videoLink: "http://youtu.be/YN8_XEp8O7Y",
  }),
  // Frontend
  new ProjectModel({
    title: "Earth Mission App",
    mainSkill:
      "Flutter(Bloc & DDD)、GraphQL、Firebase、FCM、WeChat API、Dotnet...等",
    description:
      "Acer Earth Mission App 將創意與綠意結合，透過 21 天行動與多項挑戰，邀請用戶一起參與綠能行動！" +
      "此 App 目前已於 Play Store 與 App Store 上架，並於 2023 年台北國際電腦展上公開發表，" +
      "同年獲得 2023 年紅點設計獎的肯定與 Google Play Store 2023 年度最佳應用程式。",
    imageSrc: "images/projects/earth_mission_app_reddot_cover.png",
    type: ProjectType.Frontend,
    projectLink: "https://apps.apple.com/tw/app/earth-mission-app/id1633165996",
    linkBtnTitle: "Download",
  }),
  new ProjectModel({
    title: "Order Ease 餐點輕鬆訂",
    mainSkill:
      "Flutter(Bloc & MVC)、Restful API(dio)、FCM、Git、Postman、Trello",
    description:
      "餐點輕鬆訂可用來讓用戶進行快速點餐的APP，用戶一鍵可掃描商家提供的座位QRCode進行快速點餐，" +
      "並結合Firebase Cloud Messaging (FCM)及時接收餐點製作狀態。",
    imageSrc: "images/projects/order_ease_app_video_cover.png",
    type: ProjectType.Frontend,
    projectLink: "https://github.com/phzeng0726/order-ease-app-demo",
    videoLink: "http://youtu.be/ILitfBOQzME",
  }),
  new ProjectModel({
    title: "Portfolio Website",
    mainSkill: "HTML、CSS、Javascript、Github Actions(CI/CD)、Git",
    description: "個人作品集網站",
    imageSrc: "images/projects/portfolio_website_cover.png",
    type: ProjectType.Frontend,
    projectLink: "https://github.com/phzeng0726/portfolio-website",
  }),
];

// 將作品資訊動態生成HTML
const projectsContainer = document.getElementById("projects-container");
const frontendProjectsContainer = document.getElementById(
  "frontend-projects-container"
);

projects.forEach((project, _) => {
  const article = document.createElement("article");
  article.classList.add("col-6", "col-12-xsmall", "work-item");

  article.innerHTML = `
  <a href="${
    project.videoLink == null ? project.imageSrc : project.videoLink
  }" class="image fit thumb">
    <img src="${project.imageSrc}" alt="${project.title}" />
  </a>
  <h3>${project.title}</h3>
  <div class="project-detail">
    <h6 class="project-main-skill-style">主要技術: ${project.mainSkill}</h6>
    <p>${project.description}</p>
    <a href="${project.projectLink}" class="source-code-style">${
    project.linkBtnTitle
  } ></a>
  </div>
  `;
  if (project.type == ProjectType.Frontend) {
    frontendProjectsContainer.appendChild(article);
  } else {
    projectsContainer.appendChild(article);
  }
});
