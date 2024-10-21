"use client";

import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import React, { useMemo } from "react";
import { FlowCustomeCard } from "../flow-custom-node/flow-custome-card";
import { useDroppable } from "@dnd-kit/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setNodes } from "@/redux/flow-slice/flowSlice";

// const nodes = [
//     {
//         id: '1',
//         data: { label: 'Hello' },
//         position: { x: 0, y: 0 },
//         type: 'flowCustomeCard',
//     },
// ];

const Flow = ({ edges, setEdges }) => {
  const nodeType = React.useMemo(
    () => ({ flowCustomeCard: FlowCustomeCard }),
    [FlowCustomeCard]
  );
  const { nodes = [] } = useSelector((state) => state.flow);
  const [updateNodes, setUpdateNodes] = React.useState(nodes);
  const dispatch = useDispatch();
  const { setNodeRef } = useDroppable({
    id: "react-flow-canvas",
  });

  React.useEffect(() => {
    setUpdateNodes(nodes);
  }, [nodes]);

  const onNodesChange = React.useCallback(
    (changes) => {
      const updatedNewNodes = applyNodeChanges(changes, updateNodes);
      setUpdateNodes(updatedNewNodes)
    },
    [updateNodes]
  );

  console.log(nodes);

  const onEdgesChange = React.useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = React.useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div className="w-full" ref={setNodeRef}>
      <ReactFlow
        nodes={updateNodes}
        edges={edges}
        nodeTypes={nodeType}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
