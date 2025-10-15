# 🧠 RAG Use Case — Hackathon Project Agent

## 1️⃣ Problem / Knowledge Gap
Large language models (LLMs) lack **real-time, domain-specific data**.  
Our hackathon agent bridges that gap by connecting the LLM to **external data sources** that contain up-to-date or specialized information (e.g., product specifications, policies, or service metrics).

**Knowledge Gap:**  
LLMs are trained on static data. The agent will dynamically retrieve live facts, closing the gap between model memory and real-world updates.

---

## 2️⃣ External Data Source
Example:  
**Public REST API** returning JSON data about company services or project information.  
e.g., `https://api.example.com/v1/services`

Other possible sources:
- HTML documentation pages
- CSV/JSON datasets
- Vector databases (e.g., Pinecone, Weaviate)
- PDF document stores

---

## 3️⃣ Type of Data
- **Structured data:** product lists, metadata, versions, service SLAs (JSON)
- **Unstructured data:** documentation text, FAQs
- **Metadata:** timestamps, author, last-updated field

---

## 4️⃣ RAG Flow (Step-by-step)

| Step | Description |
|------|--------------|
| **1. User Query** | User asks a question in chat or prompt. |
| **2. Intent Detection** | Agent checks if external data is needed. |
| **3. Tool Invocation** | The `Tool` class from `agent_tools.js` is called. |
| **4. External Retrieval** | Tool fetches relevant JSON/text data via API. |
| **5. Context Construction** | Retrieved snippet + user query combined into prompt. |
| **6. Model Generation** | LLM generates grounded answer using retrieved info. |
| **7. Result Validation** | Optional consistency or citation checks. |
| **8. Response Delivery** | Final answer with citations returned to the user. |

---

## 5️⃣ Integration with Tool

**Code Example:**

```js
const { Tool } = require('./agent_tools');

(async () => {
  const tool = new Tool();

  const res = await tool.run({
    query: "What is the SLA for service X?",
    sourceUrl: "https://example.com/api/serviceX"
  });

  console.log("Retrieved Data (RAG Input):");
  console.log(res.result); // structured object with snippet, timestamp, etc.

  // Example: Use res.result.snippet as part of the context for your LLM
})();
