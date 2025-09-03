import Card from "@/components/Card";
import { useAnalyzeTalentQuery } from "@/lib/services/analyzeApi";
import {
  ChatBubbleLeftIcon,
  HeartIcon,
  PlayIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";

interface Props {
  tiktokUrl: string;
  productName: string;
}

function styleAnalysisSummary(summary: string): string {
  return (
    summary
      //Table
      .replace(
        /<table>/g,
        `<table class="table-auto border-collapse border border-gray-300 w-full my-4">`
      )
      .replace(
        /<th>/g,
        `<th class="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-semibold">`
      )
      .replace(/<td>/g, `<td class="border border-gray-300 px-4 py-2 text-sm">`)
      .replace(/<tr>/g, `<tr class="even:bg-gray-50">`)
      .replace(/<b>/g, `<strong class="font-semibold text-gray-800">`)
      .replace(/<\/b>/g, "</strong>")
      // Headings
      .replace(/<b>/g, `<strong class="font-semibold text-gray-800">`)
      .replace(/<\/b>/g, "</strong>")
      .replace(
        /<h1>/g,
        `<h1 class="text-2xl font-bold text-gray-900 mt-4 mb-2">`
      )
      .replace(
        /<h2>/g,
        `<h2 class="text-xl font-bold text-gray-800 mt-3 mb-2">`
      )
      .replace(
        /<h3>/g,
        `<h3 class="text-lg font-semibold text-gray-700 mt-2 mb-1">`
      )

      // Paragraphs
      .replace(/<p>/g, `<p class="text-gray-700 leading-relaxed mb-3">`)
  );
}

export default function ResultPages({ tiktokUrl, productName }: Props) {
  const { isFetching, isError, data } = useAnalyzeTalentQuery(
    { products: productName, sosmedUrl: tiktokUrl },
    { skip: !tiktokUrl || !productName }
  );

  if (isFetching) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-8 w-8 text-blue-500 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <span className="text-lg text-gray-700 font-medium">
            Please wait ...
          </span>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Failed to fetch analysis.</p>
      </main>
    );
  }

  const {
    mediaUrl,
    avatar,
    name,
    followers_count,
    likes_count,
    recent_videos_total_comments,
    recent_videos_total_views,
    isRecommended,
    analysis_summary,
    score,
  } = data?.data || {};

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8 space-y-8">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 rounded-full border"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
            <a
              href={mediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              {mediaUrl}
            </a>
          </div>
        </div>

        {/* Score */}
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <Card
            topContent={
              <center>
                <UserGroupIcon className="w-8 h-8" color="grey" />
              </center>
            }
            label="Followers"
            value={followers_count?.toLocaleString() ?? ""}
          />
          <Card
            topContent={
              <center>
                <HeartIcon className="w-8 h-8" color="red" />
              </center>
            }
            label="Likes"
            value={likes_count?.toLocaleString() ?? ""}
          />
          <Card
            topContent={
              <center>
                <PlayIcon className="w-8 h-8" color="purple" />
              </center>
            }
            label="Recent Views"
            value={recent_videos_total_views?.toLocaleString() ?? ""}
          />
          <Card
            topContent={
              <center>
                <ChatBubbleLeftIcon className="w-8 h-8" color="black" />
              </center>
            }
            label="Recent Comments"
            value={recent_videos_total_comments?.toLocaleString() ?? ""}
          />
        </div>

        {/* Recommendation */}
        <div
          className={`p-4 rounded-md text-center font-semibold ${
            isRecommended
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {isRecommended
            ? "✅ Recommended for your product"
            : "⚠️ Not Recommended for broad campaigns"}
        </div>
        {/* Score */}
         <div className="flex justify-center">
          <Card
            topContent={
              <div className="flex gap-1">
                {Array.from({
                  length: Math.max(1, Math.round((score ?? 0) / 2)),
                }).map((_, i) => (
                  <StarIcon key={i} className="w-8 h-8" color="orange" />
                ))}
              </div>
            }
            label="Score"
            value={`${score?.toString() ?? "0"}/10`}
          />
        </div>

        {/* AI Analysis Summary */}
        <div className="prose max-w-none text-black">
          <h2 className="text-2xl font-bold mb-4">AI Analysis Summary</h2>
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: styleAnalysisSummary(analysis_summary ?? ""),
            }}
          />
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link href="/" passHref>
            <span className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
              Analyze Another
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
