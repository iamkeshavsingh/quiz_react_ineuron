import { useState } from 'react';
import Question from '../Question/Question';


function QuestionList({ ques, select, response, submit }) {

    var [activeIdx, setActiveIdx] = useState(0);

    function handlePrev() {
        if (activeIdx > 0) {
            setActiveIdx(activeIdx - 1);
        }
    }

    function handleNext() {
        if (activeIdx < ques.length - 1) {
            setActiveIdx(activeIdx + 1);
        }
    }

    if (ques.length === 0) return null;

    return (
        <div>
            <Question response={response[ques[activeIdx].id]} {...ques[activeIdx]} idx={activeIdx} select={select} />
            <div className="d-flex justify-content-end align-items-center p-4">
                <button onClick={submit} className="btn btn-danger mr-2">Submit The Quiz</button>
                <button onClick={handlePrev} className="btn btn-primary mr-2">Previous</button>
                <button onClick={handleNext} className="btn btn-info">Next</button>
            </div>
        </div>
    );
}


export default QuestionList;