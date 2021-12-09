import React from "react";
import clsx from "clsx";
import { TestButtonProps } from "./TestButton.types";

const TestButton: React.FC<TestButtonProps> = ({ foo }) => (
  <div
    data-testid="TestButton"
    className={clsx(
      "block bg-white text-left space-y-1 py-2 w-full",
      "sm:w-1/2 sm:space-y-0",
      "md:w-1/3 md:space-x-6",
      "dark:bg-gray-700"
    )}
  >
    {foo}
  </div>
);

export default TestButton;
