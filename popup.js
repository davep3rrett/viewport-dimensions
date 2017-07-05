window.addEventListener('DOMContentLoaded', function() {
	chrome.tabs.query({
		active: true,
		currentWindow: true,
	}, function (tabs) {
		chrome.tabs.sendMessage(
			tabs[0].id, {from: 'popup', subject: 'dimensionsRequest'}, function(response) {
				document.getElementById('width').textContent = 'w: ' + response.width + 'px';
				document.getElementById('height').textContent = 'h: ' + response.height + 'px';
			});
	});
});