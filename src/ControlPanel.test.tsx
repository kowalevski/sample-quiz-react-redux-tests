import React from "react";
import { mount } from "enzyme";
import ControlPanel from "./ControlPanel";

describe("ControlPanel component", () => {
  let wrapper = mount(<ControlPanel />);

  it('renders the button "Clear"', () => {
    expect(
      wrapper
        .find('[data-test-id="Button.Clear"]')
        .at(1)
        .text()
    ).toBe("Clear");
  });

  describe("when the form is rendering", () => {
    it("renders component Form", () => {
      expect(wrapper.find("Form").exists()).toBe(true);
    });

    it("renders component TextInput", () => {
      expect(wrapper.find('[data-test-id="Field.Note"]').exists()).toBe(true);
    });

    it('renders button "Submit"', () => {
      expect(
        wrapper
          .find('[data-test-id="Button.Submit"]')
          .at(1)
          .text()
      ).toEqual("Submit");
    });
  });
});
