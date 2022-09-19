'use strict';
// Initialize background page
//chrome.runtime.getBackgroundPage(function(backgroundPage) {
 // console = backgroundPage.console;
//})
function enablePrivacy(event){
  
    chrome.browserAction.setBadgeText({text: 'ON'});
    chrome.tabs.executeScript({file: './lib/jquery-3.6.1.min.js'});
    chrome.tabs.executeScript({file: './src/require.js'});
    chrome.tabs.executeScript({file: './src/NaiveBayes_Classifier.js'});
    chrome.tabs.executeScript({file: './src/classifierSaver.js'});
    chrome.tabs.executeScript({file: './src/test7.js'});
    chrome.tabs.executeScript({file: './src/main.js'});
    chrome.tabs.executeScript({file: './background.js'});
  
	window.close();
}

   
function disablePrivacy() {
    chrome.browserAction.setBadgeText({text: 'OFF'});
    enablePrivacy().stop();
    window.close();
      return;
}
function openSettings() {
    window.open(chrome.runtime.getURL('options/options.html'));
}

//Enables/Disables cookie deletion script
document.getElementById('enableProtection').addEventListener('click', enablePrivacy);
document.getElementById('disableProtection').addEventListener('click', disablePrivacy);
//Gets settings page when settings button is pressed
document.getElementById('settings').addEventListener('click', openSettings);
