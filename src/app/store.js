import { configureStore } from "@reduxjs/toolkit";
// import reducers
import { cardsReducer } from "../features/cards/cardsSlice.js";
import { quizzesReducer } from "../features/quizzes/quizzesSlice.js";
import { topicsReducer } from '../features/topics/TopicsSlice.js';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer,
  },
});
