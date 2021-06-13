import { Spinner } from 'react-bootstrap';
import './Loader.css';

function Loader() {

    return (
        <div className="Loader">
            <Spinner variant="danger" animation="grow" size="lg"></Spinner>
        </div>
    );
}


export default Loader;