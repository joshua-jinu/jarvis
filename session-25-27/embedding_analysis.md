# Embedding Analysis – TensorFlow Projector

## Step 1: Overview
This project demonstrates how embeddings power semantic retrieval in a Retrieval-Augmented Generation (RAG) pipeline.  
Each documentation snippet was converted into a 3D vector representing its semantic meaning.  
We used **TensorFlow Embedding Projector** to visualize how related topics cluster together.

---

## Step 2: Visualization
### Embedding Vectors
| Document Context | Example Keywords | Vector |
|------------------|------------------|---------|
| Interaction/Color | button, aria-label | [0.85, 0.10, 0.40] |
| Theme/Mode | dark, theme, toggle | [-0.90, 0.05, -0.30] |
| Code Standard | react, hooks, components | [0.70, -0.80, -0.15] |
| Spacing/Design System | padding, p-10, layout | [0.10, 0.95, 0.60] |
| Data Fetching | useSWR, caching | [0.65, -0.75, 0.20] |
| Non-Technical | deadlines, project | [-0.15, -0.10, 0.90] |

These vectors were plotted in TensorFlow Projector (`projector.tensorflow.org`) by uploading:
- **metadata.tsv** (containing text labels)
- **vectors.tsv** (containing numeric coordinates)

---

## Step 3: Insights
- The **dark mode** snippet lies on the negative X-axis, close to its query vector, confirming strong semantic similarity.
- The **code standard** snippet clusters with "React" and "Hooks"-related content, showing that embeddings capture conceptual relationships.
- The **non-technical** “project deadline” point appears isolated — far from all other technical clusters, proving embeddings help separate unrelated content.

---

## Step 4: Learning Reflection
This simulation shows that:
- Embeddings represent meaning numerically.
- Dot product similarity helps retrieve semantically related documents.
- The same logic underpins real RAG systems used by modern LLMs (like ChatGPT and Gemini).

---

