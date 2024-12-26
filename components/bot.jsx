"use client";
import React from "react";
import Sidebar from "./layout/sidebar";
import Flow from "./react-flow/flow";
import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setNodes } from "@/redux/flow-slice/flowSlice";

const Bot = () => {
  const { nodes } = useSelector((state) => state.flow);
  const [edges, setEdges] = React.useState([]);
  const dispatch = useDispatch();
  const handleDrop = (event) => {
    const { active } = event;
    const newNode = {
      id: `node-${nodes.length + 1}`,
      data: {
        label: active?.current?.type ?? "text",
        messageType: [active?.current?.type],
      },
      position: { x: 100, y: 100 },
      type: "flowCustomeCard",
    };

    dispatch(setNodes([...nodes, newNode]));
  };
  return (
    <section className="flex h-full min-h-screen">
      <DndContext onDragEnd={handleDrop}>
        <Sidebar />
        <Flow edges={edges} setEdges={setEdges} />
      </DndContext>
    </section>
  );
};

export default Bot;
