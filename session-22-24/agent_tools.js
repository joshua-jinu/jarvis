

const fetch = typeof globalThis.fetch === 'function' ? globalThis.fetch : null;

/** Validate that all required keys exist */
function validateInput(input, requiredKeys = []) {
  const missing = requiredKeys.filter(k => !(k in input));
  if (missing.length) throw new Error('Missing required input keys: ' + missing.join(', '));
}

/** Simple async external data fetch (stub for API, DB, or doc retrieval) */
async function fetchExternalData(url, options = {}) {
  if (!url) throw new Error('fetchExternalData requires a URL');

  if (!fetch) {
    return {
      ok: false,
      placeholder: true,
      data: `Fetch not available. Would fetch from: ${url}`
    };
  }

  const res = await fetch(url, options);
  const contentType = res.headers.get('content-type') || '';
  let data = contentType.includes('application/json') ? await res.json() : await res.text();

  return { ok: res.ok, status: res.status, data };
}

/**
 * Tool class
 * Represents the designed tool defined in tool_schema.json
 */
class Tool {
  constructor(schema = null) {
    this.schema = schema;
  }

  /**
   * run()
   * @param {Object} input — expected to contain { query, sourceUrl }
   * @returns {Promise<Object>} structured retrieval-ready result
   */
  async run(input = {}) {
    try {
      validateInput(input, ['query']);
    } catch (err) {
      return { success: false, error: err.message };
    }

    const query = input.query;
    const sourceUrl = input.sourceUrl || null;
    let external = null;

    // Attempt to fetch external data if a sourceUrl is provided
    if (sourceUrl) {
      try {
        external = await fetchExternalData(sourceUrl);
      } catch (err) {
        external = { ok: false, error: String(err) };
      }
    }

    // Create a RAG-compatible retrieval object
    const retrieval = {
      query,
      retrievedAt: new Date().toISOString(),
      sourceUrl: sourceUrl || null,
      snippet: external && external.ok
        ? (typeof external.data === 'string'
          ? external.data.slice(0, 800)
          : JSON.stringify(external.data).slice(0, 800))
        : (external && external.placeholder ? external.data : null),
      externalMeta: external
        ? { ok: external.ok || false, status: external.status || null }
        : null,
    };

    // Return structured response for RAG pipeline
    return {
      success: true,
      result: retrieval,
      rawExternal: external
    };
  }
}

module.exports = { Tool, fetchExternalData };

