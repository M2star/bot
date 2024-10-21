import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { FaFileAlt, FaUpload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "../ui/button";

const mediaSelectorOptions = [
  { value: "image", label: "IMAGE" },
  { value: "video", label: "VIDEO" },
  { value: "audio", label: "AUDIO" },
  { value: "file", label: "FILE" },
];

export function MediaUploader() {
  const [inputMessage, setInputMessage] = React.useState("");
  const [buttonLabel, setButtonLabel] = React.useState("");
  const [uploadedMedia, setUploadedMedia] = React.useState(null);
  const [uploadedMediaType, setUploadedMediaType] = React.useState("");

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleMediaChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setUploadedMedia({ url: fileUrl, name: file.name });
      setUploadedMediaType(file.type);
    }
  };

  const removeMedia = () => {
    setUploadedMedia("");
    setUploadedMedia("");
  };

  return (
    <div className="border-red-200 border rounded-md bg-orange-100 p-2 space-y-4 w-full max-w-full">
      <div className="w-full">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select media type" />
          </SelectTrigger>
          <SelectContent>
            {mediaSelectorOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-full">
        <Label htmlFor="url">Enter or paste URL</Label>
        <Input id="url" />
      </div>
      <div className="w-full">
        <div className="space-y-2 bg-white rounded-md px-2 py-1 w-full">
          <div className="w-full h-36 max-w-96 realtive border-b">
            {uploadedMedia ? (
              <>
                <div
                  className="absolute text-white z-10 cursor-pointer"
                  onClick={removeMedia}
                >
                  <IoClose />
                </div>
                <MediaPreview
                  mediaType={uploadedMediaType}
                  media={uploadedMedia}
                />
              </>
            ) : (
              <label className="flex items-center justify-center w-full h-32 border-dashed border-gray-400 rounded-md cursor-pointer">
                <input
                  type="file"
                  accept="image/*,video/*,audio/*,application/pdf"
                  onChange={handleMediaChange}
                  className="hidden"
                />
                <FaUpload className="text-gray-500" size={24} />
                <span className="text-gray-500 ml-2">Add Media</span>
              </label>
            )}
          </div>

          <Textarea
            value={inputMessage}
            onChange={handleInputChange}
            placeholder="caption..."
            maxLength="1024"
            className="resize-none w-full min-h-[4rem] overflow-hidden border-none focus:outline-none text-xs"
          />
          <p className="text-xs text-end ">{inputMessage.length}/1024</p>
        </div>
      </div>
      <div className="w-full">
        <Button variant="outline" className="w-full text-xs space-x-2">
          <strong className="text-base pr-2">+</strong>Add Button
        </Button>
      </div>
      <div className=" flex flex-col w-full">
        <Label className="text-xs mb-1">Set delay</Label>
        <Input
          type="text"
          maxLength={4}
          placeholder="Typee delay in seconds.."
          className="text-xs"
        />
      </div>
    </div>
  );
}

const MediaPreview = ({ mediaType, media }) => {
  console.log(mediaType);
  if (typeof mediaType === "string") {
    switch (true) {
      case mediaType.startsWith("image/"):
        return (
          <Image
            src={media.url}
            alt="Uploaded"
            className="w-full h-full object-cover rounded-md"
            width={50}
            height={50}
          />
        );

      case mediaType.startsWith("video/"):
        return (
          <video
            src={media.url}
            controls
            className="w-full h-full object-cover rounded-md"
          />
        );

      case mediaType.startsWith("audio/"):
        console.log(media);
        return (
          <div className="bg-gray-200 p-2 w-full h-full  ">
            <audio
              src={media.url}
              controls
              className="w-auto h-auto"
              onError={(e) => console.error("Audio playback error:", e)}
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        );

      case mediaType.startsWith("application/pdf"):
        return (
          <div className="w-full h-full flex items-center justify-center bg-gray-200  flex-col gap-4">
            <spam className="text-3xl">
              <FaFileAlt />
            </spam>
            <p className="text-sm">{media.name}</p>
          </div>
        );

      default:
        return <p className="text-xs text-red-500">Unsupported media type</p>;
    }
  }
};
