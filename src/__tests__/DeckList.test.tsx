import React from "react";
import { shallow } from "enzyme";
import { DeckList } from "../DeckList";
import { deckListMock } from "../__mocks__/deck";

const props = {
  decks: deckListMock,
  setDeck: jest.fn(),
  loadDecks: jest.fn()
};

describe("DeckList", () => {
  const wrapper = shallow(<DeckList {...props} />);

  it("renders true count of decks", () => {
    const decks = wrapper.find('[data-test-id="DeckList.Deck"]');

    expect(decks).toHaveLength(deckListMock.length);
  });
});
