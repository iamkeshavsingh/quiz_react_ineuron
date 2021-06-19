import React from 'react';
import Protected from "../../components/Protected/Protected";
import QuestionList from '../../components/QuestionList/QuestionList';
import Header from '../../components/Header/Header';

import { getQuestions } from '../../utils/dq.utils';

class Quiz extends React.Component {

    state = {
        questions: []
    };

    componentDidMount() {
        getQuestions()
            .then(ques => this.setState({ questions: ques }))
    }

    render() {
        return (
            <Protected>
                <Header />
                <QuestionList ques={this.state.questions} />
            </Protected>
        );
    }
}


export default Quiz;