import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sidebarData } from "@/data/sidebar-data";
import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

const DraggableCard = ({ item }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: item.id,
    data: item
  });

  return (
    <Card
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={cn("flex items-center justify-center flex-col",isDragging ? "opacity-50" : "")}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-3xl">{item.icon}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p>{item.name}</p>
      </CardContent>
    </Card>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-1/4 border-r border-border p-4">
      <div className="grid grid-cols-2 gap-10">
        {sidebarData.map((item) => (
          <DraggableCard key={item.id} item={item} />
        ))}
        {/* {sidebarData.map((item) => (
          <Card
            key={item.id}
            className="flex items-center justify-center flex-col"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl">{item.icon}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>{item.name}</p>
            </CardContent>
          </Card>
        ))} */}
      </div>
    </aside>
  );
};

export default Sidebar;
