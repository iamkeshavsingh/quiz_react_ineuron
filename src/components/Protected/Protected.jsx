import { useContext } from 'react';
import { Redirect } from 'react-router';
import User from '../../context/user.context';

function Protected({ children }) {

    var user = useContext(User);
    return user.isLoggedIn ? children : <Redirect to='/signup' />
}


export default Protected;