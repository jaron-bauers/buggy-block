chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: main
    });
});

async function main() {
    const adInfoIcon = "ytp-ad-button";
    const buttons = document.getElementsByClassName(adInfoIcon);
    
    for (const button of buttons) {
        console.log("Clicking Ad Info Button...");
        button.click();
    }

    // Directly attempt to click buttons inside iframes
    await sleep(1000);
    clickIframeElements("mUIrbf-LgbsSe", "2");
    await sleep(1000);
    clickIframeElements("WvipBf-LgbsSe-LoDsGd", "3");
    await sleep(1000);
    clickIframeElements("VfPpkd-Bz112c-LgbsSe", "4");

    function clickIframeElements(buttonClass, test) {
        const iframe = document.querySelector("iframe");
    
        if (!iframe) {
            console.log("Iframe not found.");
            return;
        }
    
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document; // Access the iframe's document
        const button = iframeDocument.querySelector(`.${buttonClass}`); // Find the button by class

        console.log(button);
    
        if (button) {
            console.log(`Clicking element inside iframe! ${test}`);
            button.click();
        } else {
            console.log(`Element not found inside iframe. ${test}`);
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
