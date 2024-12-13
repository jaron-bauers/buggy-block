// background.js

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: checkElementVisibility
  });
});

function checkElementVisibility() {
  // Function to check if an element is visible
  function isElementVisible(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      console.log("Element not found");
      return false;
    }
    const style = window.getComputedStyle(element);
    const isVisible = style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
    console.log(`Element visibility: ${isVisible}`);
    return isVisible;
  }

  // Selector for the button element
  const buttonSelector = 'button.ytp-ad-button';

  // Check if the button is visible
  isElementVisible(buttonSelector);
  isElementVisible('');
  isElementVisible('');
  isElementVisible('');
}
