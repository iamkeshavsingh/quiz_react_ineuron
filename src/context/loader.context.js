import React from 'react';

import LoaderComponent from '../components/Loader/Loader';


var Loader = React.createContext(false);
Loader.displayName = 'Loader';

export default Loader;


export class LoaderProvider extends React.Component {

    state = {
        isLoading: false
    };

    start = () => {
        this.setState({
            isLoading: true
        });
    }

    stop = () => {
        this.setState({
            isLoading: false
        });
    }

    render() {
        var { children } = this.props;
        return (
            <Loader.Provider value={{
                start: this.start,
                stop: this.stop
            }}>
                {children}
                {this.state.isLoading && <LoaderComponent />}
            </Loader.Provider>
        );
    }
}




