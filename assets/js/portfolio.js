// 作品清單
const projects = [
    {
      imageSrc: "images/projects/ordering_system_cover_large_padding.png",
      title: "Ordering System (Backend)",
      description: "一款具有商店管理與客戶點餐的餐廳點餐系統，商業使用者可輕鬆管理多個商店、菜單與座位，並即時接收客戶點餐訂單。而客戶也可掃描QRCode進行快速點餐，及時接收餐點製作狀態..."
    },
    {
      imageSrc: "images/projects/order_ease_yellow.png",
      title: "Order Ease 餐點輕鬆訂",
      description: "餐點輕鬆訂可用來讓用戶進行快速點餐的APP，用戶一鍵可掃描商家提供的座位QRCode進行快速點餐，並結合Firebase Cloud Messaging (FCM)及時接收餐點製作狀態..."
    },
    {
      imageSrc: "images/projects/chat_app_cover.png",
      title: "Chat App",
      description: "簡單的聊天APP"
    }
  ];
  
  // 將作品資訊動態生成HTML
  const projectsContainer = document.getElementById("projects-container");
  
  projects.forEach((project, index) => {
    const article = document.createElement("article");
    article.classList.add("col-6", "col-12-xsmall", "work-item");
  
    article.innerHTML = `
      <a href="${project.imageSrc}" class="image fit thumb" data-video-id="VIDEO_ID_${index}">
        <img src="${project.imageSrc}" alt="${project.title}" />
      </a>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
  
    projectsContainer.appendChild(article);
  });
  