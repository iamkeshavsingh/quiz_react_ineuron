import React from 'react';
import { auth, provider } from '../utils/firebase.utils';

import Loader from './loader.context';

const INIT_STATE = {
    isLoggedIn: false,
    _id: null,
    name: null
}

var User = React.createContext(INIT_STATE);
User.displayName = 'User';

export default User;

export class Authentication extends React.Component {

    state = INIT_STATE;

    start = null;
    stop = null;

    componentDidMount() {
        this.start();
        auth.onAuthStateChanged(user => {
            this.stop();
            if (!user) {
                return this.setState(INIT_STATE);
            }

            this.setState({
                isLoggedIn: true,
                name: user.displayName,
                _id: user.uid
            });
        });

        // var user = JSON.parse(localStorage.getItem('user'));
        // if(user && user.isLoggedIn){
        //     this.setState(user);
        // }
    }

    signup = () => {
        auth.signInWithPopup(provider);
        // .then(userCred => {
        //     var user = userCred.user;
        //     this.setState({
        //         isLoggedIn: true,
        //         name: user.displayName,
        //         _id: user.uid
        //     });
        // })
    }

    logout = () => {
        auth.signOut();
        // localStorage.removeItem('user');
        // this.setState(INIT_STATE);
    }

    render() {
        var { children } = this.props;
        return (
            <Loader.Consumer>
                {({ start, stop }) => {
                    this.start = start;
                    this.stop = stop;
                    return (
                        <User.Provider value={{
                            user: this.state,
                            signup: this.signup
                        }} >
                            {children}
                        </User.Provider>
                    )
                }}
            </Loader.Consumer>
        );
    }
}

