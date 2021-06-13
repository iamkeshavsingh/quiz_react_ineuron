import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import User from '../../context/user.context';

function SignUp() {
    return (
        <User.Consumer>
            {({ user, signup }) => user.isLoggedIn ? (
                <Redirect to='/quiz' />
            ) : (
                <div>
                    <Container>
                        <Row className="justify-content-center mt-4">
                            <Col md={4}>
                                <Card className="p-4">
                                    <Card.Body className="text-center">
                                        <Card.Title>Sign Up With Google</Card.Title>
                                        <Button onClick={signup} variant="primary">Sign Up</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </User.Consumer>
    );
}


export default SignUp;