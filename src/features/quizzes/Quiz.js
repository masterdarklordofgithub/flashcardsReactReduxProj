import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";
import Card from "../cards/Card";
// import quiz selector
import { selectQuizzes } from './quizzesSlice.js';
//On the '/quizzes/:quizId' page:

//Users can view an individual quiz and flip cards over

export default function Quiz() {
  const quizzes = useSelector(selectQuizzes)//{}; // replace this with a call to your selector to get all the quizzes in state
  const { quizId } = useParams();
  const quiz = quizzes[quizId];



  if (!quiz) {
    return <Navigate to={ROUTES.quizzesRoute()} replace />
  }



  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
