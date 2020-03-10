$(document).ready(function(){
    chrome.tabs.onUpdated.addListener(
        function(tabId, changeInfo, tab) {
            var string = tab.url;
            if(string){
                var match = string.match(/(https:\/\/badgr\.com\/public\/badges\/)((?:[a-z][a-z0-9_]*))/i);
                if (changeInfo.status == 'complete') {
                    if(match && match.length){
                        chrome.tabs.executeScript(tab.id, {file: "script.js"});
                    }
                }
            }
        }
    );
});