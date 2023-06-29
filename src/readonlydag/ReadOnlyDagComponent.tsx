import React, { useEffect } from "react";
//@ts-ignore
import { useNiceDag } from "@ebay/nice-dag-react";
import "./ReadOnlyDagComponent.css";
const NodeData = [
  {
    id: "start",
  },
  {
    id: "task",
    dependencies: ["start"],
  },
  {
    id: "task2",
    dependencies: ["start"],
  },
  {
    id: "end",
    dependencies: ["task", "task2"],
  },
  {
    id: "task3",
    dependencies: [ "task2"],
  },
  {
    id: "task4",
    dependencies: [ "task2"],
  },
  {
    id: "task5",
    dependencies: [ "task4"],
  }
];

function renderNode({ node }):any {
  return <SampleNode node={node} />
}

function SampleNode({ node }): any {
  return (
    <div className="my-first-dag-node">
      <span>{node.id}</span>
    </div>
  );
}

function getNodeSize({ node }): any {
  return {
    width: 60,
    height: 60,
  };
}

export default function ReadOnlyDagComponent(): JSX.Element {
  const { niceDag, niceDagEl, render } = useNiceDag({
    initNodes: NodeData,
    renderNode,
    // @ts-ignore
    getNodeSize
  });

  useEffect(() => {
    if (niceDag) { //check if niceDag exists
      const bounds = niceDagEl.current.getBoundingClientRect();
      niceDag.center({
        width: bounds.width,
        height: 400,
      });
    };
  }, [niceDag, niceDagEl]);

  return ( <div>
    <div className="my-first-dag" ref={niceDagEl} />
    {render()}
  </div>
  );
}
