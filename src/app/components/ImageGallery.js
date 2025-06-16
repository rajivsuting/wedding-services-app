"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ImageGallery({ images, className = "" }) {
  const [index, setIndex] = useState(-1);

  return (
    <div className={className}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="relative aspect-square cursor-pointer group"
            onClick={() => setIndex(idx)}
          >
            <Image
              src={image.src}
              alt={image.alt || "Gallery image"}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              loading={idx < 4 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        carousel={{
          padding: "16px",
          spacing: "16px",
        }}
        animation={{ fade: 300 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
}
