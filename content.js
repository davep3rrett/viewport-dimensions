chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction'
});

chrome.runtime.onMessage.addListener( function(msg, sender, sendResponse) {
  if(msg.from === 'popup' && msg.subject === 'dimensionsRequest') {
    const dimensions = {
      width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    }
    sendResponse(dimensions);
  };
});