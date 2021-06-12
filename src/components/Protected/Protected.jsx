import { Redirect } from 'react-router';
import User from '../../context/user.context';

function Protected({ children }) {

    return (
        <User.Consumer>
            {({ user }) => user.isLoggedIn ? children : (
                <Redirect to='/signup' />
            )}
        </User.Consumer>
    );
}


export default Protected;