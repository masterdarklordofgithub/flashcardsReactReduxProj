import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";
// import selectors
import { selectQuizzes } from "../quizzes/quizzesSlice.js";
import { selectTopics } from "./TopicsSlice.js";


//On the /topics/:topicId page:

//Users can view an individual topic and all quizzes for that topic * Users can click on a quiz associated with
// a topic and be redirected to that quiz’s page * Users can click on the “Create a New Quiz” button and be 
// redirected to the page to create a new quiz

export default function Topic() {
  const topics = useSelector(selectTopics);//{};  // replace with selector
  const quizzes = useSelector(selectQuizzes)//{}; // replace with selector
  const { topicId } = useParams();
  const topic = topics[topicId];

  if (!topic) {
    return <Navigate to={ROUTES.topicsRoute()} replace />
  }

  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>{topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
