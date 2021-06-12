import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Quiz from './Quiz';
import Result from './Result';
import SignUp from './SignUp';

function AppRoutes() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => {
                    return <Redirect to='/quiz' />
                }} />
                <Route path="/quiz" component={Quiz} />
                <Route path="/result" component={Result} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </Router>
    );
}


export default AppRoutes;
