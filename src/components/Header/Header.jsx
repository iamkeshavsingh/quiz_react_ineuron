import { Button, Navbar } from 'react-bootstrap';
import User from '../../context/user.context';

function Header() {
    return (
        <User.Consumer>
            {({ user }) => (
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>Quiz App</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="d-flex align-items-center">
                            <span className="text-white">Signed in as: {user.name}</span>
                            <Button className="btn btn-primary ml-3">Logout</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            )}
        </User.Consumer>
    );
}


export default Header;