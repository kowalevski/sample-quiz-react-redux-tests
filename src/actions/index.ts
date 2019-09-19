import {
  SET_DECK,
  LOAD_DECKS,
  SetDeckAction,
  LoadDecksAction
} from "./actionTypes";
import { Deck } from "../types";

export type SetDeckActionCreator = (payload: Deck) => SetDeckAction;
export type LoadDecksActionCreator = (payload: Deck[]) => LoadDecksAction;

export const setDeck: SetDeckActionCreator = payload => ({
  type: SET_DECK,
  payload
});

export const loadDecks: LoadDecksActionCreator = payload => ({
  type: LOAD_DECKS,
  payload
});
