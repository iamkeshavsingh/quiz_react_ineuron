import { auth } from '../../utils/firebase.utils';

function Result({ history, location }) {

    if (!location.state) {
        history.push('/signup');
        return null;
    }
    auth.signOut();

    return (
        <div>{location.state.result}</div>
    );
}


export default Result;