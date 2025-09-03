"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "./Input";

export default function AnalysisForm() {
  const [tiktokUrl, setTiktokUrl] = useState("");
  const [productName, setProductName] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      tiktokUrl,
      productName,
    }).toString();
    router.push(`/result?${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto space-y-4"
    >
      <Input placeholder="https://www.tiktok.com/@username/video/123..." value={tiktokUrl} label="TikTok URL" onChange={setTiktokUrl}/>
      <Input placeholder="Baby Care" value={productName} label="Product Name" onChange={setProductName}/>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Analyze Talent
      </button>
    </form>
  );
}
