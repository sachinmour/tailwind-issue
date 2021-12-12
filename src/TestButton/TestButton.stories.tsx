import * as React from "react";
import TestButton from "./TestButton";

export default {
  title: "TestButton",
};

export const WithBar = () => <TestButton foo="bar" />;

export const WithBaz = () => <TestButton foo="baz" />;
