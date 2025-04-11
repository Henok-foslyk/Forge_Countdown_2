import React from 'react'
import AnswerChoices from './AnswerChoices'
import { decode } from 'html-entities';

const QuestionList = ({questionData}) => {
  return (
      <div>
        {questionData.map((questionPack, index) => (
            <div key={index}>
                <p>{decode(questionPack.question)}</p>
                <AnswerChoices wrongChoices={questionPack.incorrect_answers} rightChoice={questionPack.correct_answer}/>
            </div>
        ))}
      </div>
  )
}

export default QuestionList
