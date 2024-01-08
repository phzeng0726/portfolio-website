const apiUrl =
  "https://us-central1-personal-project-408518.cloudfunctions.net/getLastUpdatedTime";

const lastUpdatedElement = document.getElementById("last-updated");

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((lastUpdated) => {
    lastUpdatedElement.innerText = `Last updated: ${lastUpdated}`;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
