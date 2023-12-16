// 作品清單
const projects = [
  {
    demoUrl: "",
    imageSrc: "images/projects/ordering_system_cover_large_padding.png",
    title: "Ordering System (Backend)",
    description:
      "一款具有商店管理與客戶點餐的餐廳點餐系統，商業使用者可輕鬆管理多個商店、菜單與座位，並即時接收客戶點餐訂單。而客戶也可掃描QRCode進行快速點餐，及時接收餐點製作狀態。",
    feature: "",
    sourceCode: "https://github.com/phzeng0726/ordering-system-backend",
  },
  {
    demoUrl: "http://youtu.be/ILitfBOQzME",
    imageSrc: "images/projects/order_ease_app_video_cover.png",
    title: "Order Ease 餐點輕鬆訂",
    description:
      "餐點輕鬆訂可用來讓用戶進行快速點餐的APP，用戶一鍵可掃描商家提供的座位QRCode進行快速點餐，並結合Firebase Cloud Messaging (FCM)及時接收餐點製作狀態。",
    feature: "",
    sourceCode: "https://github.com/phzeng0726/order-ease-app-demo",
  },
  {
    demoUrl: "http://youtu.be/Qtp0XSlX6XM",
    imageSrc: "images/projects/accounting_app_video_cover.png",
    title: "Accounting App",
    description:
      "這個 記帳 APP 是我在工作之餘的空閒時間自製的作品，創作動機是 Play 商店裡的記帳軟體五花八門，不過許多軟體操作繁複而且塞滿了一堆廣告，於是就誕生了這個作品。",
    feature:
      "功能：帳本記錄、文字化帳戶列表、視覺化統計圖表、字體調適、日期區間篩選...等。",
    sourceCode: "https://github.com/phzeng0726/qq-accounting-app-demo",
  },
  {
    demoUrl: "http://youtu.be/YN8_XEp8O7Y",
    imageSrc: "images/projects/chat_app_video_cover.png",
    title: "Chat App",
    description: "簡單的聊天APP，是短時間內用來Demo的小小作品。",
    feature:
      "功能：好友新增、資料驗證、用戶註冊、即時傳訊、主題切換、多國語言切換...等。",
    sourceCode: "https://github.com/phzeng0726/chat-app-demo",
  },
];

// 將作品資訊動態生成HTML
const projectsContainer = document.getElementById("projects-container");

projects.forEach((project, _) => {
  const article = document.createElement("article");
  article.classList.add("col-6", "col-12-xsmall", "work-item");

  article.innerHTML = `
  <a href="${
    project.demoUrl !== "" ? project.demoUrl : project.imageSrc
  }" class="image fit thumb">
    <img src="${project.imageSrc}" alt="${project.title}" />
  </a>
  <h3>${project.title}</h3>
  <p>${project.description}</p>
  <p>${project.feature}</p>
  </br>
  <p>Read More > <a href=${project.sourceCode}>Source Code</a>。</p>
  `;

  projectsContainer.appendChild(article);
});
