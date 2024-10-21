import { IoIosClose } from "react-icons/io";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";

export function List() {
  return (
    <div className="border-red-200 border rounded-md bg-orange-100 p-2 space-y-4 w-full max-w-full">
      <div className="px-2 py-1 bg-white rounded-md">
        <div>
          <Input
            maxLength="20"
            placeholder="Header"
            className="border-none mb-2"
          />
          <p className="text-xs text-end ">0/20</p>
        </div>
        <Separator className="my-2" />
        <div>
          <Textarea
            placeholder="body"
            maxLength="1024"
            className="resize-none w-full min-h-[4rem] overflow-hidden border-none focus:outline-none text-xs"
          />
          <p className="text-xs text-end "> 0/1024</p>
        </div>
        <Separator className="my-2" />
        <div>
          <Input
            maxLength="20"
            placeholder="footer"
            className="border-none mb-2"
          />
          <p className="text-xs text-end ">0/20</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="px-2 py-1 bg-white rounded-md relative">
          <span className="absolute top-0 left-0 text-base cursor-pointer">
            <IoIosClose />
          </span>
          <Input
            maxLength="20"
            placeholder="section"
            className="border-none mb-2"
          />
          <p className="text-xs text-end "> 0/20</p>
        </div>
        <div className="px-2 py-1 bg-white rounded-md relative">
          <span className="absolute top-0 left-0 text-base cursor-pointer">
            <IoIosClose />
          </span>
          <div>
            <Input
              maxLength="20"
              placeholder="title"
              className="border-none mb-2"
            />
            <p className="text-xs text-end "> 0/20</p>
          </div>
          <Separator className="my-2" />
          <div>
            <Input
              maxLength="20"
              placeholder="description"
              className="border-none mb-2"
            />
            <p className="text-xs text-end "> 0/20</p>
          </div>
        </div>
        <div>
          <Button variant="outline" className="w-full text-xs space-x-2">
            <strong className="text-base pr-2">+</strong>Add Item
          </Button>
        </div>
      </div>
      <div>
        <Button variant="outline" className="w-full text-xs space-x-2">
          <strong className="text-base pr-2">+</strong>Add Section
        </Button>
      </div>
      <div>
        <Input
          maxLength="20"
          placeholder="Header"
          className="border-none mb-2"
        />
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
