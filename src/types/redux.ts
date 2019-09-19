import { Deck } from "./memorize";

export type DeckStore = Deck | null;

export type DecksStore = Deck[];

export type RootStore = {
  deck: DeckStore;
  decks: DecksStore;
};
