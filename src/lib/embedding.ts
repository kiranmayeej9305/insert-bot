// src/lib/embedding.ts
import { OpenAIApi, Configuration } from "openai-edge";

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

export async function generateEmbeddings(text: string): Promise<number[]> {
  try {
    console.log("Generating embeddings for text:", text);
    
    const response = await openai.createEmbedding({
      model: "text-embedding-ada-002",
      input: text.replace(/\n/g, " "),
    });

    const result = await response.json();
    
    // Log the full result from OpenAI to inspect it
    console.log("OpenAI embedding result:", JSON.stringify(result, null, 2));
    
    if (!result.data || !Array.isArray(result.data) || result.data.length === 0) {
      throw new Error("Embedding result is empty or not in the expected format.");
    }
    
    return result.data[0].embedding;
  } catch (error) {
    console.error("Error in generateEmbeddings:", error);
    throw error;
  }
}
