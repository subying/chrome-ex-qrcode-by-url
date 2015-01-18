/*
var lastTabId = 0;

chrome.tabs.onSelectionChanged.addListener(function(tabId) {
	lastTabId = tabId;
	chrome.pageAction.show(lastTabId);
});
	
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	lastTabId = tabs[0].id;
	chrome.pageAction.show(lastTabId);
});

*/
chrome.runtime.onInstalled.addListener(function() {
    // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { schemes:['https','http'] },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});
	