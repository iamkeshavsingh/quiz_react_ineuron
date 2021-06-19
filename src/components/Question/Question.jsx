import { Breadcrumb, Form } from "react-bootstrap";

function Question({ question, options = [], idx }) {
    return (
        <div className="mt-4 p-2">
            <Breadcrumb listProps={{
                className: 'flex-column'
            }}>
                <div className="row p-4">
                    <p className="font-weight-bold">Question {idx + 1}.</p>
                    <p>{question}</p>
                </div>
                <div className="row flex-column p-4">
                    {options.map((option, oidx) => {
                        return (
                            <Form>
                                <Form.Check
                                    type="radio"
                                    id={`${idx}${oidx}`}
                                    name={`${idx}question`}
                                    label={option}
                                />
                            </Form>
                        );
                    })}
                </div>
            </Breadcrumb>
        </div>
    );
}


export default Question;