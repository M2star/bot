import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserTraitInput = () => {
  return (
    <div className="flex flex-col space-y-2 p-4 border border-gray-300 rounded-md max-w-md">
      {/* Label */}
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 rounded-full border-2 border-green-500 flex items-center justify-center">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <label className="text-sm font-medium text-gray-700">User Trait</label>
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

      {/* Fallback Input */}
      <input
        type="text"
        placeholder="Enter fallback value"
        className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default UserTraitInput;
