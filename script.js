
let onButton = document.querySelector(".on-button");


onButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ['addiction-css.css']
  });
});
