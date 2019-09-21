import React from "react";
import { shallow } from "enzyme";
import { DeckControl, State } from "../DeckControl";

const props = {
  addDeck: jest.fn()
};
const newTitle = "new title";
const changedNote = "some new note";
const changedField = "some new field";

describe("DeckControl component", () => {
  const wrapper = shallow(<DeckControl {...props} />);

  it("renders the form title", () => {
    const title = wrapper.find("h4");

    expect(title.text()).toEqual("Create a new deck");
  });

  it("renders a link to memorize section", () => {
    expect(wrapper.find("NavLink").props().label).toEqual("↩️ Memorize");
  });

  it("renders a form", () => {
    expect(wrapper.find("Form").exists()).toBeTruthy();
  });

  it("renders a button 'Add Card'", () => {
    expect(
      wrapper
        .find("WithTheme(Button)")
        .at(0)
        .props().label
    ).toEqual("Add Card");
  });

  it("renders a submit button 'Save new deck'", () => {
    expect(
      wrapper
        .find("WithTheme(Button)")
        .at(1)
        .props().label
    ).toEqual("Save new deck");
  });

  describe("updating the title state", () => {
    beforeEach(() => {
      wrapper
        .find("WithTheme(TextInput)")
        .at(0)
        .simulate("change", { target: { value: "new title" } });
    });

    it("updates the title in state", () => {
      const state = wrapper.state() as State;
      expect(state.title).toEqual(newTitle);
    });
  });

  describe("adding a new card", () => {
    const cardIndex = 0;

    beforeAll(() => {
      wrapper
        .find("WithTheme(Button)")
        .at(0)
        .simulate("click");
    });

    it("adds a new card in state", () => {
      const state = wrapper.state() as State;
      expect(state.cards.length).toBe(1);
    });

    it("renders 'note' text-field", () => {
      expect(
        wrapper
          .find('WithTheme(TextInput)[name="note"]')
          .at(cardIndex)
          .props().placeholder
      ).toEqual("Note");
    });

    it("renders 'field' text-field", () => {
      expect(
        wrapper
          .find('WithTheme(TextInput)[name="field"]')
          .at(cardIndex)
          .props().placeholder
      ).toEqual("Field");
    });

    describe("updating the card's 'note'", () => {
      beforeEach(() => {
        wrapper
          .find('WithTheme(TextInput)[name="note"]')
          .at(cardIndex)
          .simulate("change", {
            target: { name: "note", value: changedNote }
          });
      });

      it("updates a 'note' in state", () => {
        const state = wrapper.state() as State;
        expect(state.cards[cardIndex].note).toEqual(changedNote);
      });
    });

    describe("updating the card's 'field'", () => {
      beforeEach(() => {
        wrapper
          .find('WithTheme(TextInput)[name="field"]')
          .at(cardIndex)
          .simulate("change", {
            target: { name: "field", value: changedField }
          });
      });

      it("updates a 'field' in state", () => {
        const state = wrapper.state() as State;
        expect(state.cards[cardIndex].field).toEqual(changedField);
      });
    });
  });
});
