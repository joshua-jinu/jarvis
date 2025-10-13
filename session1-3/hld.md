# High-Level Design (HLD) — Jarvis

## 1. Project Title

**Jarvis – Your Personal AI Assistant**

## 2. Team Members

* Joshua Jinu
* Levi Samuel
* Ruthwik SS
* Anamika Kana
* Kanchi Hegde

## 3. Problem Statement

Managing information, summarizing content, and performing routine tasks can be time-consuming. Users often need multiple tools for different tasks such as document summarization, web scraping, or controlling music.

**Jarvis** solves this by providing a single AI-powered assistant that understands voice or text commands, summarizes content, and interacts with external tools like Spotify, improving productivity and workflow efficiency.

## 4. Core Components

### UI

* Built using Next.js and Tailwind CSS
* Text and voice input area for commands
* Output section displays summaries, responses, or actions
* Minimal, user-friendly design focused on clarity and speed

### AI Integration

* Powered by Google Gemini API for natural language understanding and response generation
* Processes user input, summarizes content, interprets commands, and generates structured outputs

### Tools & Tech Stack

| Layer        | Tech                       |
| ------------ | -------------------------- |
| Frontend     | Next.js, Tailwind CSS      |
| Backend      | Python + FastAPI           |
| AI API       | Gemini API                 |
| Voice I/O    | Web Speech API, pyttsx3    |
| PDF Parsing  | PyMuPDF                    |
| Web Scraping | newspaper3k, BeautifulSoup |
| Spotify API  | Spotify Web API            |
| Version Ctrl | Git & GitHub               |

## 5. LLM’s Primary Task

* Analyze user commands, extract intent, and interact with external tools or content.
* Tasks include:

  * Summarizing PDFs and webpages
  * Answering questions based on content (RAG)
  * Controlling Spotify playback
  * Maintaining conversational context and tone

## 6. Inputs and Outputs

**Input**

* Text or voice commands from the user
* Uploaded PDFs or URLs for summarization
* Optional parameters (e.g., summary length, tone)

**Output**

* Summarized content with key points and sentiment
* JSON for structured function calls (Spotify control, etc.)
* Natural language responses reflecting the user’s command or question

## 7. Expected Outcome

* Users can interact with a single AI assistant to:

  * Quickly summarize documents and webpages
  * Control media playback via natural language
  * Perform intelligent actions based on structured AI understanding
* Improves productivity, saves time, and simplifies multi-tool workflows

## 8. System Diagram

```
+---------------------------+
|       Next.js Frontend    |
|  (Text/Voice Input UI)    |
+------------+--------------+
             |
             v
+---------------------------+
|       FastAPI Backend     |
| - Handles API calls       |
| - Processes commands      |
| - Calls Gemini API        |
+------------+--------------+
             |
             v
+---------------------------+
|       Gemini API          |
| - Summarizes content      |
| - Generates structured    |
|   outputs & responses     |
+------------+--------------+
             |
             v
+---------------------------+
| Frontend Output/Action    |
| - Displays summary        |
| - Executes Spotify cmds   |
+---------------------------+
```

## GitHub Submission Folder Structure

```
/session-1-3/
 ├── hld.md
 ├── Readme.md
```
