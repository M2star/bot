import React from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FaPlus, FaPlusCircle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaCircleExclamation } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import MultiSelect from "../ui/multi-selector";
import { UploadMediaCard } from "../upload-media";
import UserTraitInput from "./user-traied-input";

const frameworksList = [
  { value: "media", label: "Add a media" },
  { value: "video", label: "Add a video" },
  { value: "document", label: "Add a document" },
];
const MainCard = () => {
  const [message, setMessage] = React.useState("");
  const [selectedFrameworks, setSelectedFrameworks] = React.useState([]);
  const handleText = (e) => {
    const val = e.target.value;
    setMessage(message);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  return (
    <div className="bg-pink-100 w-full p-3 rounded-sm">
      <div>
        <Textarea
          onChange={handleText}
          placeholder="type message here..."
          row={4}
          className="rounded-md w-full p-2 h-auto resize-none overflow-hidden"
        />
        <div className="flex items-center">
          <Button variant="ghost " className="px-0 mr-2 text-xs">
            <FaPlus size={10} className="mr-2" /> Add variable
          </Button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="p-0 text-xs">
                <FaCircleExclamation />
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div>
          <span className="text-sm">Add more</span>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="selected type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">None</SelectItem>
              <SelectItem value="dark">Button</SelectItem>
              <SelectItem value="system">List</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="bg-white my-3 p-3 ">
          <div className="grid w-full max-w-full items-center gap-1.5">
            <Label htmlFor="picture">Button</Label>
            <Input
              id="picture"
              type="text"
              maxLength="20"
              placeholder="write text for button"
            />
          </div>
          <Button
            variant="ghost"
            className="text-sm me-3 my-0 text-green-800 py-1 px-0 hover:bg-transparent hover:text-green-800"
          >
            <FaPlusCircle className="me-1" />
            Add a button
          </Button>
          <Button
            variant="ghost"
            className="text-sm text-green-800 my-0 py-1 px-0 hover:bg-transparent hover:text-green-800"
          >
            <FaPlusCircle className="me-1" />
            Add a variable
          </Button>
        </div>
        <div>
          <Collapsible className="border p-4 my-3 bg-white rounded-lg">
            <CollapsibleTrigger className="w-full text-start">
              variable
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className=" bg-gray-100 ">
                <UserTraitInput />
              </div>
              <Button
                variant="ghost"
                className="text-sm text-green-800 py-1 px-0 hover:bg-transparent hover:text-green-800"
              >
                <FaPlusCircle className="me-1" />
                Add a variable
              </Button>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div>
          <span className="text-sm">Add an attachment</span>
          <MultiSelect
            options={frameworksList}
            onValueChange={setSelectedFrameworks}
            defaultValue={selectedFrameworks}
            placeholder="Select frameworks"
            variant="inverted"
            className="bg-white hover:bg-white"
            animation={2}
            maxCount={3}
          />
        </div>
        <div className="my-3">
          <UploadMediaCard
            accept={"image/png, image/jpeg"}
            placeholder={"JPEG or PNG, 1080×1080"}
          />
          <UploadMediaCard
            accept={"video/mp4, video/avi, video/quicktime"}
            placeholder={""}
          />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
