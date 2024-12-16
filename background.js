chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: main
    });
});

function main() {
    const xpath = '//*[@id="button:l"]';
    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    
    if (result.singleNodeValue) {
        console.log("Element 1 is present!");
        
        // Ensure you're calling the function correctly
        clickIframeElements("//*[@id='yDmH0d']/c-wiz/div/div[3]/div/div/div[1]/div[2]/button/span[4]", "2");
        checkContinueButtonVisibility();
        clickIframeElements("//*[@id='yDmH0d']/c-wiz/div/div[2]/div[2]/div/button", "4");
    } else {
        console.log("Element 1 not found.");
    }

    function clickIframeElements(xpath, test) {
        const iframe = document.querySelector("iframe");  // Select the iframe element
    
        if (!iframe) {
            console.log("Iframe not found.");
            return;
        }
    
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;  // Get the document inside the iframe
    
        const result = document.evaluate(xpath, iframeDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        const element = result.singleNodeValue;
    
        if (element) {
            console.log("Element is present inside the iframe! " + test);
        } else {
            console.log("Element not found inside the iframe. " + test);
        }
    }

    function checkContinueButtonVisibility() {
        // Use your provided XPath to find the CONTINUE button inside the iframe
        const xpath = "//*[@id='yDmH0d']/div[9]/div/div[2]/span/div/div/div[2]/div[2]";
    
        // Select the iframe (adjust this selector if there are multiple iframes)
        const iframe = document.querySelector("iframe");
        if (!iframe) {
            console.log("Iframe not found.");
            return;
        }
    
        // Access the iframe's document
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    
        // Locate the button using your XPath
        const result = iframeDocument.evaluate(xpath, iframeDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        const continueButton = result.singleNodeValue;
    
        if (continueButton) {
            // Check if the button is visible
            const isVisible = continueButton.offsetWidth > 0 && continueButton.offsetHeight > 0;
            if (isVisible) {
                console.log("The CONTINUE button is visible.");
            } else {
                console.log("The CONTINUE button is present but not visible.");
            }
        } else {
            console.log("The CONTINUE button was not found.");
        }
    }
}