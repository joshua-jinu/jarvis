<<<<<<< HEAD
# Jarvis – Your Personal AI Assistant

**Jarvis** is an AI virtual assistant designed to enhance learning and development workflows. It's a versatile companion that understands voice or text commands, helps process information, controls music, and more, powered by Google's Gemini API and integrated with real-world tools.

---

## Features

- **Chat + Voice Interaction:** Interact with Jarvis via text or voice. It uses the browser's Web Speech API for input and Google TTS (or pyttsx3) for responses.

- **PDF Summarization:** Upload PDFs for Gemini to extract, summarize, and answer questions based on their content, maintaining context.

- **Webpage Summarization:** Provide a URL; Jarvis scrapes, summarizes, and answers questions about the article's content.

- **Spotify Control:** Manage Spotify playback (play, pause, skip) through chat or voice commands using the Spotify Web API.

- **Gemini AI Integration:** Gemini API is central to Jarvis's natural language understanding, summarization, and intelligent interactions.

---

## Tech Stack

| Layer        | Tech                           |
| ------------ | ------------------------------ |
| Frontend     | **Next.js**, Tailwind CSS      |
| Voice I/O    | **Web Speech API**, pyttsx3    |
| Backend      | **Python + FastAPI**           |
| AI API       | **Gemini API**                 |
| PDF Parsing  | **PyMuPDF**                    |
| Web Scraping | **newspaper3k**, BeautifulSoup |
| Spotify API  | Spotify Web API                |

---

## Technical Implementation Concepts

Key AI concepts are implemented as follows:

- **Prompting**
  Crafting effective inputs for Gemini is crucial. User input directly becomes the prompt for chat, while summarization prompts include extracted text with clear instructions. For Spotify, natural language commands are translated into structured prompts for Gemini to identify intent and parameters.

- **Structured Output**
  Jarvis leverages Gemini's JSON output for reliable parsing and actions. Summaries are returned in a specific JSON format, including summary, key_points, and sentiment. Spotify commands also yield JSON with action and parameters like song_title and artist, enabling direct API calls.

- **Function Calling**
  This connects Gemini's understanding to external tools. Gemini is provided with tool functions (e.g., summarize_document, control_spotify) to identify relevant functions and extract arguments from user requests. Jarvis's backend executes these functions based on Gemini's requests, and Gemini then generates natural language responses.

- **RAG (Retrieval Augmented Generation)**
  RAG enables Jarvis to answer questions based on PDF/webpage content. Extracted text is chunked, and embeddings are created and stored. User questions are embedded to retrieve relevant text chunks, which are then augmented to the original query. Gemini uses this augmented prompt to generate grounded responses, preventing hallucinations.
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> df0aa29 (Initial commit of frontend project)
