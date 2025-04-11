import React from 'react'

const QuestionList = ({questionData}) => {
  return (
    <div>
      <h1>Trivia Game</h1>
      <div>
        {questionData.map((questionPack, index) => (
            <div key={index}>
                <h2>{questionPack.question}</h2>
                <ul>
                    
                </ul>
            </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionList
