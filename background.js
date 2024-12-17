chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: main
    });
});

async function main() {
    // Click "ad center"
    const adCenterButton = document.getElementsByClassName('ytp-ad-button');
    console.log('Clicking Ad Center Button...');
    adCenterButton[0].click();

    // Click "Block ad"
    await sleep(650);
    clickIframeEements('.mUIrbf-LgbsSe', '2');

    // Click "Continue"
    await sleep(500);
    clickIframeElements('.WvipBf-LgbsSe-LoDsGd', '3');

    // Click exit X
    clickIframeElements('.VfPpkd-Bz112c-LgbsSe', '4');

    function clickIframeElements(buttonClass) {
        const iframe = document.querySelector('iframe');
    
        if (!iframe) {
            throw new Error('FAILED: iframe not found');
        }
    
        // Access the iframe's document
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // Find the button by class
        const button = iframeDocument.querySelector(buttonClass); // Find the button by class
    
        if (button) {
            console.log(`Clicking ${buttonClass} Element...`);
            button.click();
        } else {
            throw new Error('FAILED: Element not found');
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
