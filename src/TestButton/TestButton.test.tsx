/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import TestButton from "./TestButton";
import { TestButtonProps } from "./TestButton.types";
import "jest-styled-components";

describe("Test Component", () => {
  let props: TestButtonProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<TestButton {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TestButton");

    expect(component).toMatchSnapshot();
  });
});
