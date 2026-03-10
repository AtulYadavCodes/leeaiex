LeeAIEx: Context-Aware AI Orchestration for LeetCode

LeeAIEx is a high-performance Chrome Extension (Manifest V3) designed to transform the LeetCode learning experience. Unlike traditional "solution-bot" tools, LeeAIEx acts as a Socratic Mentor, utilizing a state-gated AI pipeline to provide progressive pedagogical hints before allowing direct interaction.

🚀 Key Technical Highlights

Socratic State Machine: Engineered a "Hint-First" logic gate that requires 3 progressive hints before unlocking custom chat, optimizing for long-term skill retention.

Stateless Proxy Architecture: Developed a Node.js/Express backend that handles secure Gemini AI orchestration without persisting sensitive user credentials.

BYOK (Bring Your Own Key) Integration: Implemented a privacy-first model where users manage their own API keys via chrome.storage.local.

Secure Key Exchange (Proposed): Designed for RSA-2048 asymmetric encryption, where keys are encrypted on the client-side using a server-provided public key, ensuring zero-knowledge transit.

Manifest V3 Compliant: Built using the latest extension standards, utilizing service workers and asynchronous message passing for a non-blocking UI.

🏗️ System Architecture

LeeAIEx operates through a distributed architecture:

Content Layer (Content Scripts): Injects a React-based Floating Action Button (FAB) and handles DOM-scraping of problem descriptions and constraints.

Configuration Layer (Popup): Manages user authentication and API key validation via a dedicated verification endpoint.

Service Layer (Service Worker): Bridges communication between the content script and the external backend proxy.

Orchestration Layer (Node.js Backend): A lightweight proxy that sanitizes inputs and routes prompts to the Google Gemini Pro model.

🛠️ Project Structure

leeaiex/
├── public/                 # Extension Frontend (Manifest V3)
│   ├── manifest.json       # Permission & Script declarations
│   ├── popup.html/css/js   # API Key management UI
│   ├── button.js           # FAB & DOM Injection logic
│   └── background.js       # Background service worker
├── backend/                # Orchestration Proxy
│   ├── index.js            # Express server & AI logic
│   └── package.json        # Dependencies (Google Generative AI)
└── README.md



⚡ Setup & Installation

Extension (Manual Load)

Clone the repository.

Navigate to chrome://extensions in Google Chrome.

Toggle Developer Mode (top right).

Click Load Unpacked and select the /public directory.

Backend (Self-Hosting Optional)

The extension is pre-configured to use a hosted instance. To run your own:

cd backend && npm install

Configure .env with your PORT and GEMINI_API_KEY.

Update the endpoint URL in public/script.js and public/button.js.

🔒 Security & Privacy

LeeAIEx follows the Principle of Least Privilege:

Zero Persistence: User API keys are never stored on the backend database.

Encryption in Transit: All communication is handled via HTTPS. Future iterations include RSA-based payload encryption for sensitive headers.

Scoped Permissions: Only requests access to leetcode.com and storage.

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.