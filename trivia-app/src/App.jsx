import { useEffect, useState } from 'react';
import './styles/App.css';
import QuestionList from './components/QuestionList';

function App() {
  const [questionData, setQuestionData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchNew, setFetchNew] = useState(false); // State to trigger data fetch

  // Function to fetch questions
  const fetchQuestions = () => {
    setIsLoading(true);
    fetch(`https://opentdb.com/api.php?amount=10&type=multiple`)
      .then((response) => response.json())
      .then((data) => {
        if (data.response_code === 0) {
          setQuestionData(data.results);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setError('There was an error fetching the data');
        console.error(error);
        setIsLoading(false);
      });
  };

  // Fetch questions when component mounts or when fetchNew changes
  useEffect(() => {
    fetchQuestions();
  }, [fetchNew]);

  // Function to handle button click
  const handleGenerateNewQuestion = () => {
    setFetchNew((prev) => !prev); // Toggle fetchNew state
  };

  return (
    <>
      <div className="outer-box">
        <h1>Trivia Questions</h1>
        <button style={{background: '#7df48a'}} onClick={handleGenerateNewQuestion} color="yellow">Generate New Question</button>
        {isLoading && <p>Loading questions...</p>}
        {error && <p>{error}</p>}
        <QuestionList questionData={questionData} />
      </div>
    </>
  );
}

export default App;
