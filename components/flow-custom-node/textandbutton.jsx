"use client"
import React from "react";

import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { IoIosClose } from "react-icons/io";

export function TextAndButton() {
    const [message, setMessage] = React.useState('');
    const [btnText, setBtnText] = React.useState('');
    const handleInputChange = (e) => {
        setMessage(e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };
    const handleBtnInput = (e) => {
        setBtnText(e.target.value)
    }
    return (
        <div className="border-red-200 border rounded-md bg-orange-100 p-2 space-y-4 ">
            <div className="space-y-2 bg-white rounded-md px-2 py-1">
                <Textarea
                    value={message}
                    onChange={handleInputChange}
                    placeholder="Type message..."
                    maxLength="1024"
                    className="resize-none w-full min-h-[4rem] overflow-hidden border-none focus:outline-none text-xs"
                />
                <p className="text-xs text-end ">{message?.length ?? 0}/1024</p>
            </div>
            <div className="px-2 py-1 bg-white rounded-md relative">
                <span className="absolute top-0 left-0 text-base cursor-pointer"><IoIosClose /></span>
                <Input maxLength="20" value={btnText} placeholder="write a text" className="border-none mb-2" onChange={handleBtnInput} />
                <p className="text-xs text-end ">{btnText?.length ?? 0}/20</p>
            </div>
            <div>
                <Button variant="outline" className="w-full text-xs space-x-2">
                    <strong className="text-base pr-2">+</strong>Add Button
                </Button>
            </div>
            <div className=" flex flex-col w-full">
                <Label className="text-xs mb-1">Set delay</Label>
                <Input type="text" maxLength={4} placeholder="Typee delay in seconds.." className="text-xs" />
            </div>
        </div>
    );
}

