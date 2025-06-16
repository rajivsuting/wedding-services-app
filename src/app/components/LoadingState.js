"use client";

import { useEffect, useState } from "react";

export default function LoadingState({ type = "default" }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  switch (type) {
    case "card":
      return (
        <div className="animate-pulse">
          <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      );

    case "text":
      return (
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      );

    case "image":
      return (
        <div className="animate-pulse">
          <div className="bg-gray-200 rounded-lg h-64"></div>
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ee4c59]"></div>
        </div>
      );
  }
}
