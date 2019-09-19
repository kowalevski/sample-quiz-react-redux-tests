import { combineReducers } from "redux";
import {} from "react-redux";
import {
  SET_DECK,
  SetDeckAction,
  LOAD_DECKS,
  LoadDecksAction
} from "../actions/actionTypes";
import { DeckStore, DecksStore, RootStore } from "../types";

const deckReducer = (state: DeckStore = null, action: SetDeckAction) => {
  switch (action.type) {
    case SET_DECK:
      return action.payload;
    default:
      return state;
  }
};

const decksReducer = (state: DecksStore = [], action: LoadDecksAction) => {
  switch (action.type) {
    case LOAD_DECKS:
      return action.payload;
    default:
      return state;
  }
};

export const getDeck = (state: RootStore) => state.deck;
export const getDecks = (state: RootStore) => state.decks;

export default combineReducers({
  deck: deckReducer,
  decks: decksReducer
});
