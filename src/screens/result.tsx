interface Props {
  tiktokUrl: string;
  productName: string
}

export default function ResultPages({tiktokUrl, productName}:Props) {

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 text-center">
          🎯 Analysis Result
        </h1>

        <div className="mt-6 space-y-4">
          <div className="p-4 border rounded-md bg-gray-50">
            <h2 className="font-semibold text-gray-700">TikTok URL</h2>
            <p className="text-blue-600 break-words">{tiktokUrl}</p>
          </div>

          <div className="p-4 border rounded-md bg-gray-50">
            <h2 className="font-semibold text-gray-700">Product Name</h2>
            <p className="text-gray-800">{productName}</p>
          </div>

          <div className="p-4 border rounded-md bg-blue-50">
            <h2 className="font-semibold text-blue-700">AI Match Analysis</h2>
            <p className="text-gray-700">
              (🔮 Your AI-powered insights will appear here.)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}


