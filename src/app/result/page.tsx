"use client"

import ResultPages from "@/screens/result";
import { useSearchParams } from "next/navigation";
import React from "react";

function Pages() {
  const searchParams = useSearchParams();
  const tiktokUrl = searchParams.get("tiktokUrl");
  const productName = searchParams.get("productName");

  return (
    <ResultPages tiktokUrl={tiktokUrl ?? ""} productName={productName ?? ""} />
  );
}

export default Pages;
