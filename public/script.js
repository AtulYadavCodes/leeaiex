 const saveButton = document.getElementById("saveApiKeyButton");
            const apiKeyInput = document.getElementById("apiKeyInput");

            // Load saved API key from local storage
            chrome.storage.local.get(["geminiApiKey"], (result) => {
                if (result.geminiApiKey) {
                    apiKeyInput.display = "none";
                    saveButton.display = "none";
                }
            });

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
                            chrome.storage.local.set({ geminiApiKey: apiKey }, () => {
                                alert("API key saved successfully!");
                                apiKeyInput.style.display = "none";
                                saveButton.style.display = "none";
                            });
                        }
                        catch(error)
                        {
                            apiKeyInput.value=error.message;
                            return;
                        }
                    }checkapicorrectornot();
                }
            });