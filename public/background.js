chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    if(message.content=="ready"){
        sendResponse({content:sender.tab.url});
    }
})