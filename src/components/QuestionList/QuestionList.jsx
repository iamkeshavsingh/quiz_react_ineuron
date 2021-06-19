import Question from '../Question/Question';

function QuestionList({ ques }) {

    return ques.map((question, idx) => <Question {...question} idx={idx} />);
}


export default QuestionList;