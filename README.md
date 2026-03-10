# LeeAIEx

LeeAIEx is a Chrome extension that adds an AI assistant to LeetCode problem pages.

It provides:

- A popup to save your Gemini API key.
- A floating button on LeetCode problems.
- A right-side chat panel with progressive hints, then custom questions.

## Screenshots

![LeeAIEx Screenshot 1](./screenshot1.png)
![LeeAIEx Screenshot 2](./screenshot2.png)
![LeeAIEx Screenshot 3](./screenshot3.png)
![LeeAIEx Screenshot 4](./screenshot4.png)

## Features

- LeetCode integration through a content script on problem pages.
- Hint-first flow: users can request hints before custom chat input appears.
- Gemini API key stored in Chrome extension local storage.
- Backend proxy support with Express and Google GenAI.

## Project Structure

```text
leeaiex/
|- public/
|  |- manifest.json
|  |- popup.html
|  |- popup.css
|  |- script.js
|  |- button.js
|  |- background.js
|- backend/
|  |- index.js
|  |- package.json
|- README.md
```

## How It Works

1. Open the extension popup and save a Gemini API key.
2. Visit a LeetCode problem page.
3. Click Ask LeeAIex floating button.
4. Use the Hint button first. After 3 hints, custom text input appears.
5. The extension sends requests to the backend endpoint and renders the AI response in the sidebar.

## Extension Setup (Chrome)

1. Clone this repository.
2. Open Chrome and go to chrome://extensions.
3. Enable Developer mode.
4. Click Load unpacked.
5. Select the public folder.

## Backend Setup (Optional Local Server)

The extension currently calls a hosted endpoint in both popup and chat scripts.
If you want to run backend locally:

1. Go to backend folder.
2. Install dependencies.
3. Create a .env file.
4. Start the server.

```bash
cd backend
npm install
```

Create .env:

```env
PORT=3000
GEMINI_API_KEY=your_gemini_api_key
```

Run:

```bash
npm start
```

To actually use local backend, update request URLs in:

- public/script.js
- public/button.js

Change:

- https://leeaiex.onrender.com/backend

To:

- http://localhost:3000/backend

## Permissions Used

From manifest:

- activeTab
- scripting
- storage

## Notes

- The popup hides the input/button after an API key is already saved.
- The backend accepts API key from request header geminiApiKey or from GEMINI_API_KEY env variable.

## License

MIT
