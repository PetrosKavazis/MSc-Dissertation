 /**
    * Given a token and a label, calculate the probability that
    * the document has the label given that the token is in the document.
    * We do this by calculating the much easier to find Bayesian equivalent:
    * the probability that the token appears, given the label (the word
   frequency in that category).
    * This method also adjusts for rare tokens.
    * @param token
    * @param label
    * @returns {number}
  
var localClassifier = {'test':'{"classFeatures":{"reject":true,"custom":true,"accept":true },"classTotals":{"Reject":4,"custom":7, "accept":2},"totalExamples":11,"smoothing":1},"docs":[{"label":"Reject","text":["deni"]},{"label":"Reject","text":["reject"]},{"label":"Reject","text":["refus"]},{"label":"custom","text":["set","prefer"]},{"label":"custom","text":["set"]},{"label":"custom","text":["option"]},{"label":"custom","text":["prefer"]},{"label":"custom","text":["customis"]},{"label":"custom","text":["manag"]}],"features":{"deni":1,"reject":1,"refus":1,"set":2,"prefer":2,"option":1,"customis":1,"manag":1},"stemmer":{},"lastAdded":9,"events":{"_events":{},"_eventsCount":0}}'};
 

var localClassifier = {'test':'{"classFeatures":{"reject":true,"custom":true,"accept":true },"classTotals":{"Reject":4,"custom":7, "accept":2}}'};



//localClassifier = localClassifier.split(":").pop();
//localClassifier = localClassifier.substring(localClassifier.indexOf(":") + 1);


savedClassifier.set('SetupClassifier',localClassifier);


var localClassifier = savedClassifier.get('SetupClassifier');
SavedClassifierSplitter(JSON.parse(localClassifier));
 function nukeoption{   }

nukeoption();





    chrome.cookies.getAll({}, function (all_cookies) {
            var count = all_cookies.length;
            for (var i = 0; i < count; i++) {
                removeCookie(all_cookies[i]);
             }
            });

*/

    /*
chrome.tabs.onActivated.addListener( function(activeInfo){
    chrome.tabs.get(activeInfo.tabId, function(tab){
        y = tab.url;
        console.log("you are here: "+y);
    });
});

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
    if (tab.active && change.url) {
        console.log("you are here: "+change.url);           
    }
});
}
    
/*
for (var lockey in localClassifier) {
 var values = localClassifier[lockey];
}

console.log(values);



function chrome.tabs.onActivated.addListener( function(activeInfo){
    chrome.tabs.get(activeInfo.tabId, function(tab){
        y = tab.url;
        console.log("you are here: "+y);
    });
});

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
    if (tab.active && change.url) {
        console.log("you are here: "+change.url);           
    }
});

//function bannerHandler{



this.cookies_ = {};

function addCookie(cookie) {
   	var key = cookie.name+cookie.domain+cookie.hostOnly+cookie.path+cookie.secure+cookie.httpOnly+cookie.session+cookie.storeId;
	console.log(key);
  	this.cookies_[key] = cookie;
}

function listener(info) {
	var cookie = info.cookie;
	addCookie(cookie);
}

if (!chrome.cookies) {
	  chrome.cookies = chrome.experimental.cookies;
	}
  	chrome.browserAction.onClicked.addListener(function(tab) {
		chrome.cookies.getAll({}, function(cookies) {
			chrome.cookies.onChanged.addListener(listener);
			for( var i in cookies ) {
				addCookie(cookies[i]);
			}
		});
		//runProcess(tab);


	});

function runProcess(tab) {
	var domain = extractDomain(tab.url);
	for (var i in this.cookies_) {
	   	var cookie = this.cookies_[i];
		if( ("."+domain).indexOf(cookie.domain) != -1 ) {
			  url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain + cookie.path;
		    chrome.cookies.remove({"url": url, "name": cookie.name});
		}
	}
}
    function extractDomain(url) {
	return url.match(/:\/\/(.[^/:]+)/)[1];
}
    */


function removeAll(url){
    chrome.cookies.
   chrome.cookies.getAll({}, function(cookies) {
       for (var i in cookies) {
	    
        chrome.cookies.remove({"url": 'https://stackoverflow.com/', "name":'notice-ssb'});
     }
  });
}
console.log("removing cookies");
//removeAll('https://stackoverflow.com/');

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.executeScript(null,{file:'./src/main.js'});
});
