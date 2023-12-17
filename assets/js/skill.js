// 作品清單
const skills = [
  {
    title: "Programming Language",
    items: [
      "Golang / Gin / Gorm / Swaggo",
      "Python / Flask",
      "Dart / Flutter",
      "R",
    ],
  },
  {
    title: "Database",
    items: ["MySQL", "SQLite", "Firebase / Firestore", "Amazon DynamoDB"],
  },
  {
    title: "APIs",
    items: ["RESTful API", "GraphQL"],
  },
  {
    title: "Cloud Service",
    items: [
      "@title GCP",
      "Cloud Run / Cloud Function / Cloud Storage / App Engine / Compute Engine / Google Analytics",
      "@blank",
      "@title AWS",
      "EC2 / Lambda / IoT Core / Fargate",
    ],
  },
  {
    title: "Version Control",
    items: ["Git", "GitLab", "GitHub"],
  },
  {
    title: "Tools / Development",
    items: [
      "Swagger / Postman / Docker",
      "Trello / DrawSQL / XMind / Figma",
      "Markdown / Obsidian",
      "VS Code / X code",
      "Linux / Windows / MacOS",
      "Scrum / 3-layer architecture/ MVC / DDD",
    ],
  },
];

// 將技能資訊動態生成HTML
const skillsContainer = document.getElementById("skills-container");

skills.forEach((skill, _) => {
  const article = document.createElement("article");
  article.classList.add("col-4", "col-12-xsmall", "work-item");
  const skillsList = skill.items
    .map((item) => {
      if (item.startsWith("@title")) {
        // 取第七個位置開始，標題為粗體
        return `<strong>${item.substring(7)}</strong><br />`;
      } else if (item.startsWith("@blank")) {
        return `<br />`;
      } else {
        return `${item}<br />`;
      }
    })
    .join("");

  article.innerHTML = `
  <h3>${skill.title}</h3>
  <p>
    ${skillsList}
  </p>
  `;
  skillsContainer.appendChild(article);
});
