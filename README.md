# Jarvis – Your Personal AI Assistant

**Jarvis** is an AI virtual assistant designed to support both your learning and development workflows. It features voice and chat interaction, document summarization, music control, and more — powered by Google's Gemini API and real-world tools and APIs.

---

## Features

### Chat + Voice Interaction

- Text or voice-based conversation
- Speech-to-text using browser’s Web Speech API
- Text-to-speech responses using Google TTS or pyttsx3

### PDF Summarization

- Upload a PDF (notes, papers, docs)
- Extracts and summarizes content using Gemini
- Learns the basics of document processing and chunking
- Keeps that in context to answer questions based on it

### Webpage Summarization

- Input a URL of an article or blog
- Scrapes text and summarizes the content
- Teaches web scraping and LLM integration
- Answers questions based on the webpage

### Spotify Control

- Play, pause, skip tracks via chat or voice
- Uses Spotify Web API with OAuth

### Gemini AI Integration

- Natural Language using Gemini

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
