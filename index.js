chrome.browserAction.onClicked.addListener(function (tab) {
    // for the current tab, inject the "unstyler.js" file & execute it
    chrome.tabs.executeScript(tab.id, {
        file: 'unstyler.js'
    });
});