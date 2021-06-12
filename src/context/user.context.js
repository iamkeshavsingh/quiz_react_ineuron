import React from 'react';

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

    signup = () => {
        this.setState({
            isLoggedIn: true
        });
    }

    render() {
        var { children } = this.props;
        return (
            <User.Provider value={{
                user: this.state,
                signup: this.signup
            }} >
                {children}
            </User.Provider>
        );
    }
}
