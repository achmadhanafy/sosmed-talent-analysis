import { AnalysisRequest, AnalysisResponse } from "@/types/analyze.type";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body: AnalysisRequest = await req.json();

    // TODO: Call your AI backend here
    // Example:
    const response = await fetch(
      "http://localhost:5678/webhook-test/talent-result/product",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();

    return NextResponse.json<AnalysisResponse>(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to analyze talent" },
      { status: 500 }
    );
  }
}
