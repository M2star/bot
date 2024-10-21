"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdMessage } from "react-icons/md";
import { Button } from "../ui/button";
import { Text } from "./text";
import { IoClose } from "react-icons/io5";
import { FaRegClone } from "react-icons/fa";
import { MediaUploader } from "./media";
import { useDispatch } from "react-redux";
import { removeNodes } from "@/redux/flow-slice/flowSlice";
import { List } from "./list";

export function FlowCustomeCard({ data, id  }) {
  const dispatch = useDispatch()
  return (
    <div className="relative z-1">
      <div className="absolute -top-8 right-2 bg-white p-2 text-base border border-borderz z-0 flex items-center gap-5 rounded-md">
        <span>
          <FaRegClone />
        </span>
        <span className="cursor-pointer" onClick={() => dispatch(removeNodes(id))}>
          <IoClose />
        </span>
      </div>
      <Card className="p-2 space-y-4 ">
        <CardHeader className="p-0">
          <div className="border-l-8 border-l-blue-700 p-2 flex-grow border border-border rounded-md flex items-center relative">
            <CardTitle className="text-sm flex items-center text-blue-800">
              <span className="text-base">
                <MdMessage />
              </span>
              <span className="pl-2">Message</span>
            </CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </div>
        </CardHeader>
        <CardContent className="max-w-96 w-96 space-y-4">
          <Text />
          <MediaUploader />
          <List />
        </CardContent>
        <CardFooter className="px-0">
          <Button variant="outline" className="w-full text-xs space-x-2">
            <strong className="text-base pr-2">+</strong>Add Content
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
