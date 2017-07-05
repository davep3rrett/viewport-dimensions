// https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript

console.log('content.js is being injected');

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