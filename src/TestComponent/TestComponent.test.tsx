/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import TestComponent from "./TestComponent";
import { TestComponentProps } from "./TestComponent.types";
import "jest-styled-components";

describe("Test Component", () => {
  let props: TestComponentProps;

  beforeEach(() => {
    props = {
      theme: "primary",
    };
  });

  const renderComponent = () => render(<TestComponent {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toMatchSnapshot();
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "secondary";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toMatchSnapshot();
  });
});
