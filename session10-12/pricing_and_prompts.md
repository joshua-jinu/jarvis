# Pricing and Prompts (Sessions 10–12)

## A. Pricing Research

- **Date of research:** 2025-10-13  
- **Project:** Jarvis — AI Virtual Assistant powered by Google Gemini  
- **Sources checked:**
  - https://cloud.google.com/vertex-ai/generative-ai/pricing
  - https://ai.google.dev/pricing

### Summary Table

| Model            | Billing Unit | Cost (USD)             | Cost (INR ₹)         | Notes                                     |
|------------------|--------------|------------------------|----------------------|-------------------------------------------|
| Gemini 1.5 Flash | per 1K tokens | $0.002 (in) / $0.006 (out) | ₹0.17 / ₹0.50     | Used in Jarvis for fast voice commands    |
| Gemini 1.5 Pro   | per 1K tokens | $0.01 (in) / $0.03 (out)  | ₹0.83 / ₹2.50     | Used for summarizing PDFs and long text   |
| Gemini 1.0 Pro   | Free (AI Studio) | $0.00              | ₹0.00               | Used during Jarvis prompt testing phase   |

---

## B. Cost Estimation Examples

### 1. Summarizing a PDF Document (Jarvis feature)

- Input tokens: ~3,300  
- Output tokens: ~500  
- Model: Gemini 1.5 Pro

**Cost:**
- Input: 3.3 x ₹0.83 = ₹2.74  
- Output: 0.5 x ₹2.50 = ₹1.25  
- **Total: ₹3.99 per request**

---

### 2. Parsing a Voice Command (Jarvis feature)

- Input tokens: 100  
- Output tokens: 50 (JSON format)  
- Model: Gemini 1.5 Flash

**Cost:**
- Input: 0.1 x ₹0.17 = ₹0.017  
- Output: 0.05 x ₹0.50 = ₹0.025  
- **Total: ₹0.042 per request**

---

## C. Prompt Refinement — Before / After (Jarvis Use Cases)

### 1. PDF Summarization (Jarvis Feature)

**Before:**  
> Summarize this file.

**After (RTFC):**  
> **Role:** You are an academic assistant within Jarvis.  
> **Task:** Read and summarize the uploaded PDF content.  
> **Format:** JSON with `summary`, `key_points`, and `tone`.  
> **Constraint:** Keep it under 200 words. Avoid direct quotes.

**Why it improved:**  
Structured format and word limit improve quality and reduce token costs. Enables clear backend parsing in Jarvis.

---

### 2. Voice Command to JSON (Spotify Control in Jarvis)

**Before:**  
> Play my favorite song.

**After (RTFC):**  
> **Role:** You are Jarvis’s music assistant.  
> **Task:** Convert user voice command into structured JSON for Spotify playback.  
> **Format:** JSON with `action`, `song_title`, and `artist`.  
> **Constraint:** Return only JSON. No extra explanation.  
> Input: “Play *Blinding Lights* by The Weeknd”

**Why it improved:**  
Outputs clean JSON for direct use in Spotify API integration inside Jarvis.

---

### 3. Webpage Summarization (Jarvis Feature)

**Before:**  
> What is this page about?

**After (RTFC):**  
> **Role:** You are a Jarvis web summarization tool.  
> **Task:** Summarize the core ideas of the input article.  
> **Format:** JSON with `summary`, `key_points`, `bias_level`.  
> **Constraint:** Max 150 words. Maintain a neutral tone.  
> [Insert scraped article text]

**Why it improved:**  
Creates a clean, structured summary that fits Jarvis’s UI and avoids hallucinations or opinionated output.

---

### 4. Tool Calling via Gemini (Jarvis Backend)

**Before:**  
> Can you do this?

**After (RTFC):**  
> **Role:** You are a routing engine in Jarvis.  
> **Task:** Determine the appropriate tool to call and generate required parameters.  
> **Format:** JSON with `function_name` and `arguments`.  
> **Constraint:** No explanations. Return only valid tool call JSON.  
> Input: “Summarize this PDF and tell me the tone.”

**Why it improved:**  
Makes function calls predictable and easy to automate within Jarvis's FastAPI backend.

---

## D. Model Choice & Cost Recommendation for Jarvis

| Feature                   | Model Used        | Reason                                     |
|---------------------------|-------------------|--------------------------------------------|
| Spotify commands          | Gemini 1.5 Flash  | Fast + cheap for short, frequent calls     |
| PDF/document summarization| Gemini 1.5 Pro    | Can handle longer input + structured output|
| Prompt testing            | Gemini 1.0 Pro    | Free, good for early development           |

---

### Estimated Hackathon Usage & Cost (INR)

| Task                     | Volume | Model           | Approx Cost |
|--------------------------|--------|------------------|-------------|
| PDF Summaries            | 100    | Gemini 1.5 Pro   | ₹399        |
| Voice/Spotify Commands   | 300    | Gemini 1.5 Flash | ₹12.60      |
| **Total (INR)**          | —      | —                | **~₹412**   |

---

## E. Reflection

Working on the Jarvis project helped us understand how prompt clarity directly impacts both the cost and quality of LLM responses. Using the RTFC framework, we were able to refine vague instructions into actionable and structured prompts.

This was especially important for Jarvis, where responses need to be precise, predictable, and easy to parse by backend systems like FastAPI. We also learned how to choose the right Gemini model based on the task — using Flash for low-cost tasks like voice commands and Pro for complex summarizations.

We now feel confident in designing cost-efficient and reliable AI workflows for real-world assistant applications like Jarvis.

---
