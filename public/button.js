// ==========================
// Module: Floating Button Injector
// ==========================

let url =""; let c=0;

chrome.runtime.sendMessage({content : "ready"},(response)=>{
    url=response.content;
});
function messagecreator(message,typ)
{
    console.log(url);
    const chat=document.createElement("h1");
    chat.innerHTML=` ${message}`;
    chat.style.fontSize="12px";

    chat.style.borderRadius="5px";
    chat.style.marginBottom="10px";
    if(typ === "user") {
        chat.style.color="lightgreen";
     chat.style.border="0.5px solid lightgreen";
        chat.style.textAlign="right";
        chat.style.right="0px";
        chat.style.marginLeft="58px";
        chat.style.padding="10px";
        

    } else {
        chat.style.color="white";
         chat.style.border="0.5px solid white";
        chat.style.textAlign="left";
        chat.style.left="0px";
        chat.style.marginRight="58px";
        chat.style.padding="10px";
        chat.style.paddingLeft="10px";
    }
    
    document.getElementById("leeaiexchatbox").appendChild(chat);
    document.getElementById("leeaiexchatbox").scrollTop=document.getElementById("leeaiexchatbox").scrollHeight;
}

 function aibackend(message)
{
    const l=document.createElement("label");
    if(c==1) l.innerHTML=" starting server...Please wait";
    else 
         l.innerHTML=" leeaiex is getting answer...Please wait";
    l.style.color="white";
    l.style.position="absolute";
    l.style.left="10px";
    document.getElementById("leeaiexchatbox").appendChild(l);

    message=url+message;
   fetch("https://leeaiex.onrender.com/backend",{
    method:"POST",
    headers:{"Content-Type":"text/plain"} ,
    body:url+message   
}).then(response=>response.text()).catch(error=>{messagecreator(error.message,"web")})
   .then(datat=>{
    document.getElementById("leeaiexchatbox").removeChild(l);
    document.getElementById("hint").disabled=false;

    document.getElementById("leeaiexinput").disabled=false;
         messagecreator(datat, "web");
   })
}
if(!(document.getElementById("leeaiebutton")))
{

    const button=document.createElement("button");
    button.id="leeaiebutton";
    button.style.position="fixed";
    button.style.bottom="100px";
    button.style.right="20px";
    button.style.zIndex="999";
    button.style.height="50px";
    button.style.width="100px";
    button.style.backgroundColor="#F08B51";
    button.innerHTML="Ask LeeAIex";
    button.style.border="1px solid black";
    button.style.borderRadius="5px";
    button.style.fontSize="10px";
    button.style.color="white";

    // Hover effects
    button.addEventListener("mouseover", ()=>{ button.style.backgroundColor = "lightblue"; });
    button.addEventListener("mouseout", ()=>{ button.style.backgroundColor = "#F08B51"; });

    document.body.appendChild(button);

    // ==========================
    // Module: Main Chat Window Trigger
    // ==========================
    button.addEventListener("click", ()=>{
        if(!(document.getElementById("leeaiexdiv")))
        {
            // --------------------------
            // Module: Chat Window Container
            // --------------------------
            var div=document.createElement("div");
            div.id="leeaiexdiv";
            div.style.position="fixed";
            div.style.top="0";
            div.style.right="0";
            div.style.zIndex="9999";
            div.style.border="1px solid black";
            div.style.width="380px";
            div.style.height="100vh";
            div.style.backgroundColor="rgba(0,0,0,0.9)";
            document.body.appendChild(div);

            // --------------------------
            // Module: Header + Close Button
            // --------------------------
            const label=document.createElement("label");
            label.innerHTML="Ask LeeAIex";
            label.style.color="white";
            label.style.position="absolute";
            label.style.top="20px";
            label.style.left="10px";
            label.style.fontSize="10px";
            div.appendChild(label);

            const buttonminimize=document.createElement("button");
            buttonminimize.innerHTML="❌ Close ";
            buttonminimize.style.color="white";
            buttonminimize.style.position="absolute";
            buttonminimize.style.fontSize="10px";
            buttonminimize.style.backgroundColor="transparent";
            buttonminimize.style.top="20px";
            buttonminimize.style.right="10px";
            div.appendChild(buttonminimize);
            buttonminimize.addEventListener("click", ()=>{ div.style.display="none"; });

            const line=document.createElement("hr");
            line.style.color="white";
            line.style.position="absolute";
            line.style.top="50px";
            line.style.width="100%";
            line.style.margin="1px";
            line.style.border="1px solid white";
            div.appendChild(line);

            // --------------------------
            // Module: Chatbox Area
            // --------------------------
            const chatbox=document.createElement("div");
            chatbox.id="leeaiexchatbox";
            chatbox.style.position="fixed";
            chatbox.style.top="60px";
            chatbox.style.width="380px";
            chatbox.style.height="80vh";
            chatbox.style.backgroundColor="rgba(10,0,0,0)";
            chatbox.style.border="1px solid black";
            chatbox.style.overflowY="scroll";
            chatbox.style.padding="10px";
            chatbox.style.color="white";
            chatbox.style.fontSize="12px";
            chatbox.style.borderRadius="5px";
            chatbox.innerHTML=`
            <pre style="overflow-hidden color:orange; font-size:10px;">



            
            How to use on LeetCode:

            Open a LeetCode problem.

            Click the LEEAIEX button (on your screen).

            Ask your question or Click on the hint button
            
            → like “How do I approach this?” 
            or 
            “What’s the time complexity hint?”.

            Get guidance — 
            LEEAIEX explains step-by-step thinking
            so you can solve it yourself.

            Why use it?
            ✔ Helps you learn problem-solving
            ✔ Gives structured hints and explanations.
            ✔ Saves time by focusing
                </pre>
                `
            div.appendChild(chatbox);

            // --------------------------
            // Module: Input Box (hidden initially)
            // --------------------------
            const input=document.createElement("input");
            input.id="leeaiexinput";
            input.style.width="90%";
            input.style.height="50px";
            input.style.border="1px solid white";
            input.style.margin="20px";
            input.style.color="white";
            input.style.display="none";
            input.style.borderRadius="5px";
            input.style.fontSize="10px";
            input.style.backgroundColor="transparent";
            input.placeholder="Ask LeeAIex...Press Enter to send";
            input.style.bottom="0";
            input.style.position="absolute";

            addEventListener("keypress", (event) => {
                if(event.key === "Enter") {
                    input.value= input.value.trim();
                    if(input.value != "") {
                        messagecreator(input.value, "user");
                        aibackend(input.value);
                        input.value="";input.disabled=true;
                    }
                }
            });
            div.appendChild(input);

            // --------------------------
            // Module: Hint Button (before input unlocks)
            // --------------------------
            const hint=document.createElement("button");
            hint.id="hint";
            hint.innerHTML=` Get Hint from LeeAIex <br> (you will get hint 3 times before custom input appears)`;
            hint.style.color="white";
            hint.style.position="absolute";
            hint.style.fontSize="10px";
            hint.style.margin="20px";
            hint.style.width="90%";
            hint.style.height="50px";
            hint.style.border="1px solid white";
            hint.style.backgroundColor="transparent";
            hint.style.bottom="0px";
            div.appendChild(hint);

            hint.addEventListener("click", ()=>{
                c++;
                 if(c==1)  document.getElementById("leeaiexchatbox").innerHTML= "";
                hint.disabled=true;
                messagecreator(" hint for this , help me solve this question on screen  ","user");
                aibackend("hint"+c, "web");
                if(c>=3) {
                    input.style.display="block";
                    hint.style.display="none";
                } else {
                    input.style.display="none";
                    hint.style.display="block";
                }
               
            });
        }
        else {
            document.getElementById("leeaiexdiv").style.display="block";
        }
   });
}
