import { createSlice } from '@reduxjs/toolkit';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {
            //This quizzes object will eventually hold all quizzes keyed by id
        }
    },
    reducers: {
        addQuiz(state, action) {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = {
                id,
                name,
                topicId,
                cardIds
            }
        }
    }
});

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export const quizzesReducer = quizzesSlice.reducer;