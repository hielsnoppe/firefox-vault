function saveOptions (e) {
  
  chrome.storage.local.set({
    apiVersion: document.querySelector("#apiVersion").value
    endpoint: document.querySelector("#endpoint").value
  });
}

function restoreOptions () {

  chrome.storage.local.get("apiVersion", (res) => {
    console.log(res);
  });

  chrome.storage.local.get("apiVersion", (res) => {
    document.querySelector("#apiVersion").value = res.apiVersion || "v1";
  });

  chrome.storage.local.get("endpoint", (res) => {
    document.querySelector("#endpoint").value = res.endpoint || "";
  });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
