import React, { ReactNode } from "react";

interface Props {
    label: string
    value: string
    topContent?: ReactNode;
}

function Card({label, value, topContent}:Props) {
  return (
    <div className="p-4 bg-gray-50 rounded-md shadow-sm">
      {topContent}
      <p className="text-lg font-bold text-black">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}

export default Card;
