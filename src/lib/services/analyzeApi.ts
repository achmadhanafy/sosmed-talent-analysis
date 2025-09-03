import { AnalysisRequest, AnalysisResponse } from "@/types/analyze.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const analyzeApi = createApi({
  reducerPath: "analyzeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }), // base url for Next.js API routes
  endpoints: (builder) => ({
    analyzeTalent: builder.query<AnalysisResponse, AnalysisRequest>({
      query: (body) => ({
        url: "api/analyze",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAnalyzeTalentQuery } = analyzeApi;
