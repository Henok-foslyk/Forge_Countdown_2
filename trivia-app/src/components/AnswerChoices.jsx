import React from 'react'
import Button from '@mui/material/Button'
import {useState} from 'react'
import {useEffect} from 'react'

const AnswerChoices = ({wrongChoices, rightChoice}) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const [allChoices, setAllChoices] = useState([]);

    useEffect(() => {
        const shuffledChoices = [...wrongChoices];
        const randomIndex = Math.floor(Math.random() * (shuffledChoices.length + 1));
        shuffledChoices.splice(randomIndex, 0, rightChoice);
        setAllChoices(shuffledChoices);
        setSelectedAnswer(null)
        }, [wrongChoices, rightChoice]); 

    const handleSelect = (choice) => {
        setSelectedAnswer(choice);
    };

    const getTextColor = (choice) => {
        if (!selectedAnswer) return 'black';
        if (choice === rightChoice && selectedAnswer === rightChoice) return 'green';
        if (choice === selectedAnswer && selectedAnswer !== rightChoice) return 'red';
        if (choice === rightChoice && selectedAnswer !== rightChoice) return 'blue';
        return 'gray';
      };
    
    return (
    <>
        {allChoices.map((choice, index) => (
            
            <ul>
                <Button
                key={index}
                variant="text"
                onClick={() => handleSelect(choice)}
                disableRipple
                sx={{
                color: getTextColor(choice),
                textTransform: 'none',
                fontSize: '1rem',
                justifyContent: 'flex-start',
                width: 'fit-content',
                cursor: selectedAnswer ? 'default' : 'pointer',
                '&:disabled': {
                    color: getTextColor(choice), // Keep the color change on disable
                    backgroundColor: 'transparent', // No background
                     },
                }}
                disabled={!!selectedAnswer}
                >
                    {choice}
                </Button>
            </ul>
        ))}
    </>
    );
};

export default AnswerChoices;
