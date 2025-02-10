import { NextRequest, NextResponse } from "next/server";

import { AIModel } from "@/lib/deep-research/ai/providers";
import { generateFeedback } from "@/lib/deep-research/feedback";

export async function POST(req: NextRequest) {
  try {
    const { query, numQuestions, modelId = "o3-mini" } = await req.json();

    // Retrieve API key(s) from secure cookies
    const openaiKey = req.cookies.get("openai-key")?.value;
    const firecrawlKey = req.cookies.get("firecrawl-key")?.value;

    // Add API key validation
    if (process.env.NEXT_PUBLIC_ENABLE_API_KEYS === "true") {
      if (!openaiKey || !firecrawlKey) {
        return NextResponse.json(
          { error: "API keys are required but not provided" },
          { status: 401 }
        );
      }
    }

    console.log("\n🔍 [FEEDBACK ROUTE] === Request Started ===");
    console.log("Query:", query);
    console.log("Model ID:", modelId);
    console.log("Number of Questions:", numQuestions);
    console.log("API Keys Present:", {
      OpenAI: openaiKey ? "✅" : "❌",
      FireCrawl: firecrawlKey ? "✅" : "❌",
    });

    try {
      const questions = await generateFeedback({
        query,
        numQuestions,
        modelId: modelId as AIModel,
        apiKey: openaiKey,
      });

      console.log("\n✅ [FEEDBACK ROUTE] === Success ===");
      console.log("Generated Questions:", questions);
      console.log("Number of Questions Generated:", questions.length);

      return NextResponse.json({ questions });
    } catch (error) {
      console.error("\n❌ [FEEDBACK ROUTE] === Generation Error ===");
      console.error("Error:", error);
      throw error;
    }
  } catch (error) {
    console.error("\n💥 [FEEDBACK ROUTE] === Route Error ===");
    console.error("Error:", error);

    return NextResponse.json(
      {
        error: "Feedback generation failed",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
