import React from "react";
import clsx from "clsx";
import { TestComponentProps } from "./TestComponent.types";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={clsx(
      "border border-black border-solid p-4 w-96 text-center",
      `${theme === "secondary" ? "bg-black text-white" : "bg-white text-black"}`
    )}
  >
    <h1 className="text-3xl">I'm the test component</h1>
    <h2>Made with love by Harvey</h2>
  </div>
);

export default TestComponent;
