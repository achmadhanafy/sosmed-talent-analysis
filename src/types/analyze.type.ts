export interface AnalysisRequest {
  sosmedUrl: string;
  products: string;
}

export interface AnalysisResponse {
  "data": {
    "mediaUrl": string,
    "name": string,
    "avatar": string,
    "followers_count": number,
    "likes_count": number,
    "score": number,
    "recent_videos_total_comments": number,
    "recent_videos_total_views": number,
    "isRecommended": boolean,
    "analysis_summary": string
  }
}

export interface ErrorResponse {
  error: string;
}