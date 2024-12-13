chrome.action.onClicked.addListener((tab) => {
    // Ensure the tab is valid and ready to execute the script
    if (tab.id) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: clickButtons
      }).then(() => {
        console.log('Script executed successfully!');
      }).catch(err => {
        console.error('Error executing script: ', err);
      });
    }
});
  
function clickButtons() {
    const firstButton = document.querySelector('.ytp-ad-button');
    const secondButtonSelector = '.mUIrbf-LgbsSe';
    const thirdButton = document.querySelector('.U26fgb');
    const fourthButton = document.querySelector('.yHy1rc');
  
    // Click the first button if found
    if (firstButton) {
      firstButton.click();
      console.log('First button clicked!');
    } else {
      console.log('First button not found!');
    }

    // Retry checking the second button every 100ms until found
    const secondButtonInterval = setInterval(() => {
        const secondButton = document.querySelector(secondButtonSelector);
        if (secondButton) {
            secondButton.click();
            console.log('Second button clicked!');
            clearInterval(secondButtonInterval); // Stop checking once found
        } else {
            console.log('Second button not found, retrying...');
        }
    }, 100); // Check every 100ms

    // Retry checking the third button every 100ms until found
    const thirdButtonInterval = setInterval(() => {
        const thirdButton = document.querySelector('.U26fgb');
        if (thirdButton) {
            thirdButton.click();
            console.log('Third button clicked!');
            clearInterval(thirdButtonInterval); // Stop checking once found
        } else {
            console.log('Third button not found, retrying...');
        }
    }, 100); // Check every 100ms

    // Retry checking the fourth button every 100ms until found
    const fourthButtonInterval = setInterval(() => {
        const fourthButton = document.querySelector('.yHy1rc');
        if (fourthButton) {
            fourthButton.click();
            console.log('Fourth button clicked!');
            clearInterval(fourthButtonInterval); // Stop checking once found
        } else {
            console.log('Fourth button not found, retrying...');
        }
    }, 100); // Check every 100ms
}
