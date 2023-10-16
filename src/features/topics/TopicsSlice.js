import { createSlice } from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quizzesSlice';

// Create a new slice of the Redux store for topics
export const topicsSlice = createSlice({
    name: 'topics', // Name the slice "topics"
    initialState: {
        topics: {

        }
    },
    reducers: {
        // Define a reducer function to add a new topic to the store
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: []
            }
        },
    },
    extraReducers: (builder) => {
        // Define an extra reducer function to handle adding a quiz to a topic
        builder
            .addCase(addQuiz, (state, action) => {
                const { topicId, id } = action.payload;

                // If the topic doesn't exist, return early
                if (!state.topics[topicId]) {
                    return;
                }

                // Check if the quiz ID already exists in the topic's quiz IDs array
                const idExists = state.topics[topicId].quizIds.includes(id);

                // If the quiz ID doesn't exist, add it to the topic's quiz IDs array
                if (!idExists) {
                    state.topics[topicId].quizIds.push(id);
                } else {
                    console.log('quiz id', id, 'already exists');
                }
            })
    },
});

// Export selectors, actions, and the reducer function from the slice
export const selectTopics = state => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export const topicsReducer = topicsSlice.reducer;