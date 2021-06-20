import React, { useState, useEffect } from 'react';
import Protected from "../../components/Protected/Protected";
import QuestionList from '../../components/QuestionList/QuestionList';
import Header from '../../components/Header/Header';

import { getQuestions } from '../../utils/dq.utils';


function Quiz({ history }) {

    var [questions, setQuestions] = useState([]);
    var [response, setResponse] = useState({});

    function submitQuiz() {
        var confirm = window.confirm('Are you sure you want to submit?');
        if (confirm) {
            var results = 0;
            questions.forEach((ques) => {
                var { id, answer } = ques;
                if (response[id]) {
                    if (Number(response[id]) === answer) results++;
                }
            });
            history.push('/result', {
                result: results
            });
        }
    }

    function handleSelect(e) {
        var questionId = e.target.name;
        var userChoice = e.target.id;

        setResponse({
            ...response,
            [questionId]: userChoice
        });
    }

    useEffect(() => {
        getQuestions()
            .then(ques => setQuestions(ques))
    }, []);

    return (
        <Protected>
            <Header />
            <QuestionList submit={submitQuiz} response={response} ques={questions} select={handleSelect} />
        </Protected>
    );
}


export default Quiz;