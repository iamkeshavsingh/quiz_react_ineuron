import { Breadcrumb, Form } from "react-bootstrap";

function Question({ question, options = [], id, idx, select, response }) {

    return (
        <div className="m-4 p-2">
            <Breadcrumb listProps={{
                className: 'flex-column'
            }}>
                <div className="row p-4">
                    <p className="font-weight-bold">Question {idx + 1}.</p>
                    <p>{question}</p>
                </div>
                <div className="row flex-column p-4">
                    <Form>
                        {options.map((option, oidx) => {
                            return (
                                <Form.Check
                                    type="radio"
                                    id={oidx + 1}
                                    name={id}
                                    label={option}
                                    onChange={select}
                                    checked={oidx + 1 === Number(response)}
                                />
                            );
                        })}
                    </Form>
                </div>
            </Breadcrumb>
        </div>
    );
}


export default Question;