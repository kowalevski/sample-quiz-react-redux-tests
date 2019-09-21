import { Deck as DeckType } from "../types";

export const deckMock: DeckType = {
  id: "0",
  title: "Test Deck",
  cards: [
    {
      id: "0",
      field: "test field",
      note: "test note"
    },
    {
      id: "1",
      field: "test field 2",
      note: "test note 2"
    }
  ]
};

export const deckListMock: DeckType[] = [
  deckMock,
  {
    id: "1",
    title: "Test Deck 2",
    cards: [
      {
        id: "0",
        field: "test field",
        note: "test note"
      },
      {
        id: "1",
        field: "test field 2",
        note: "test note 2"
      }
    ]
  },
  {
    id: "2",
    title: "Test Deck 3",
    cards: [
      {
        id: "0",
        field: "test field",
        note: "test note"
      },
      {
        id: "1",
        field: "test field 2",
        note: "test note 2"
      }
    ]
  }
];
