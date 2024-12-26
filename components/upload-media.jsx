import * as React from "react";
import { ImageIcon } from "lucide-react"; // Optional: Use an icon library or replace with your own.

export const UploadMediaCard = ({accept, placeholder}) => {
  return (
    <div className="border-2 border-dotted border-gray-300 rounded-md p-6 bg-gray-50 flex flex-col items-center justify-center max-w-md mx-auto">
      {/* Icon */}
      <ImageIcon className="h-10 w-10 text-gray-400 mb-4" />

      {/* Description */}
      <p className="text-sm text-gray-500 mb-4">{placeholder}</p>

      {/* Upload Button */}
      <label
        htmlFor="media-upload"
        className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md cursor-pointer hover:bg-green-600"
      >
        Upload Media
        <input
          id="media-upload"
          type="file"
          className="hidden"
          accept={accept}
        />
      </label>
    </div>
  );
};
