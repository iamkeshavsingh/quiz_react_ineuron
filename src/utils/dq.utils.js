import { db } from './firebase.utils';


export const getQuestions = () => {
    return db
        .collection('questions')
        .get()
        .then(qs => {
            var questions = [];
            qs.forEach(doc => {
                var questionObj = doc.data();
                questions.push({ ...questionObj, id: doc.id });
            });
            return questions;
        })
};