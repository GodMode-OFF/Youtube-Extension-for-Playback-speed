// popup.js

document.getElementById("setSpeedBtn").addEventListener("click", () => {
    const speed = parseFloat(document.getElementById("speed").value);
  
    if (speed > 0 && speed <= 4) {
      // Query the currently active tab
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
  
        if (activeTab) {
          // Dynamically inject content.js into the active tab
          chrome.scripting.executeScript(
            {
              target: { tabId: activeTab.id },
              files: ["content.js"]
            },
            () => {
              // After injecting, send a message to the content script
              chrome.tabs.sendMessage(activeTab.id, { type: "SET_SPEED", speed });
            }
          );
        } else {
          alert("No active tab found.");
        }
      });
    } else {
      alert("Speed must be between 0.1 and 4.");
    }
  });
  