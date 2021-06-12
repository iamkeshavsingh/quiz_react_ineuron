import { Redirect } from 'react-router-dom';
import User from '../../context/user.context';

function SignUp() {
    return (
        <User.Consumer>
            {({ user, signup }) => user.isLoggedIn ? (
                <Redirect to='/quiz' />
            ) : (
                <div>
                    <button onClick={signup}>SingUp</button>
                </div>
            )}
        </User.Consumer>
    );
}


export default SignUp;