chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
      if (changeInfo.status == 'complete' || changeInfo.url) {
        chrome.tabs.sendMessage( tabId, {
          message: 'add_claim',
          url: changeInfo.url
        })
      }
    }
);