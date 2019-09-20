import React from "react";
// import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";
import Memorize from "./Memorize";

describe("Memorize component", () => {
  const wrapper = shallow(<Memorize />);

  it("renders the title", () => {
    const title = wrapper.find("h1");
    expect(title).toHaveLength(1);
    expect(title.text()).toEqual("Memorize");
  });

  it("renders the DeckList", () => {
    const list = wrapper.find("Connect(DeckList)");
    expect(list.exists()).toBeTruthy();
  });

  it("renders a link to form of creating new deck", () => {
    const link = wrapper
      .find("[data-test-id='Navigation.Deck.Control']")
      .dive()
      .find("Link");
    expect(link.exists()).toBeTruthy();
  });
});
