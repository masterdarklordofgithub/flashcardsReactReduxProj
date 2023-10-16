import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";
import Topic from "../features/topics/Topic";
import Topics from "../features/topics/Topics";
import AppLayout from "./AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="topics" element={<Topics />} />
          <Route path="topics/new" element={<NewTopicForm />} />
          <Route path="topics/:topicId" element={<Topic />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="quizzes/new" element={<NewQuizForm />} />
          <Route path="quizzes/:quizId" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
