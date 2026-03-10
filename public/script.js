 const saveButton = document.getElementById("saveApiKeyButton");
            const apiKeyInput = document.getElementById("apiKeyInput");

            // Load saved API key from local storage
           function keyverif(){
          result=  localStorage.getItem(["geminiApiKey"])
                if (result) {
                    apiKeyInput.display = "none";
                    saveButton.display = "none";
                }
            };keyverif();

            saveButton.addEventListener("click", () => {
                const apiKey = apiKeyInput.value.trim();
                if (apiKey !== "") {
                    async function checkapicorrectornot()
                    {
                        try {
                            const response = await fetch("https://leeaiex.onrender.com/backend", {
                                method: "POST",
                                headers:{
                                    "Content-Type": "application/json",
                                    "geminiApiKey": apiKey
                                }
                            });
                            if(!response.ok)
                                throw new Error("API key is invalid. Please enter a valid API key.");
                            else
                            {
                                localStorage.setItem( 'geminiApiKey', apiKey );
                                apiKeyInput.value="API key saved successfully!";
                              
                              
                            
                            
                            
                            }
                        }
                        catch(error)
                        {
                            apiKeyInput.value=error.message;
                            return;
                        }
                    }checkapicorrectornot();
                }
            });