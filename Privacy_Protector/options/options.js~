
function openRules() {
    window.close();
    window.open(chrome.runtime.getURL('options/consentPreferences.html'));
   
}

function openManual() {
    window.close();
    window.open(chrome.runtime.getURL('options/Manual.html'));
   
}

function openAuto() {
    window.close();
    window.open(chrome.runtime.getURL('options/Auto.html'));
   
}

function openAbout() {
    window.close();
    window.open(chrome.runtime.getURL('options/aboutUs.html'));
}


//When the Consent Preferences button is pressed open consentPreferences.html page
document.getElementById('consentPreferences').addEventListener('click',openRules);

//When the Manually Add CMP button is pressed opens the Manual.html page 
document.getElementById('ManualAddCMP').addEventListener('click', openManual);

//When the Automatic scan button is pressed opens the Auto.html page
document.getElementById('AutoScanCMP').addEventListener('click', openAuto);

//When the about button is pressed opens the aboutUs.html page
document.getElementById('aboutus').addEventListener('click', openAbout);

