// session-25-27/rag_pipeline.js

// Step 1: Define the documentation "vector database"
const documentation = [
  {
    text: "The primary button uses the 'blue-500' token for its background color. For accessibility, always include an 'aria-label'. This is critical for all interactive elements.",
    vector: [0.85, 0.10, 0.40] // Interaction/Color embedding
  },
  {
    text: "To implement dark mode, check the user's system preference using 'window.matchMedia'. Toggle the 'data-theme=dark' attribute on the body tag.",
    vector: [-0.90, 0.05, -0.30] // Theme/Mode embedding
  },
  {
    text: "All new components must be written using functional React hooks. Class components are deprecated and should not be used in the new codebase.",
    vector: [0.70, -0.80, -0.15] // Code Standard/Architecture embedding
  },
  {
    text: "The component library utilizes a 4-point scale for all internal padding and margin spacing. The largest padding available is 'p-10'.",
    vector: [0.10, 0.95, 0.60] // Spacing/Design System embedding
  },
  {
    text: "For fetching asynchronous data, always use the 'useSWR' or 'useQuery' library with built-in caching mechanisms to prevent re-renders.",
    vector: [0.65, -0.75, 0.20] // Data Fetching/Hooks embedding
  },
  {
    text: "Project deadlines are set for the end of the third quarter. Contact the project manager for a detailed Gantt chart.",
    vector: [-0.15, -0.10, 0.90] // Non-technical embedding
  }
];

// Step 2: Define the dot product function
function calculateDotProduct(vectorA, vectorB) {
  return vectorA.reduce((sum, val, index) => sum + val * vectorB[index], 0);
}

// Step 3: Find the most relevant document based on dot product
function findMostRelevantDocument(queryVector) {
  let bestMatch = null;
  let highestScore = -Infinity;

  documentation.forEach(doc => {
    const similarity = calculateDotProduct(queryVector, doc.vector);
    if (similarity > highestScore) {
      highestScore = similarity;
      bestMatch = doc;
    }
  });

  return bestMatch;
}

// Step 4: Simulated Queries (like in a RAG system)
const queries = [
  {
    question: "How do I make the UI dark?",
    vector: [-1.0, 0.0, -0.2] // Matches dark mode snippet
  },
  {
    question: "What is the standard for code structure?",
    vector: [0.75, -0.75, 0.0] // Matches React hooks/code standard snippet
  }
];

// Step 5: Test and display the output
queries.forEach(q => {
  const result = findMostRelevantDocument(q.vector);
  console.log("🔹 Query:", q.question);
  console.log("✅ Most Relevant Document:\n", result.text, "\n");
});
