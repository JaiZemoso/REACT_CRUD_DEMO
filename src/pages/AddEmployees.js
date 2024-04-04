import axios from "axios";
import { useRef } from "react";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddEmployees = () =>{
    const name = useRef('');
    const jobRole = useRef('');
    const experience = useRef('');
    const navigate = useNavigate();

    const addEmployeeHandler =()=>{
        let payload = {
            name: name.current.value,
            role: jobRole.current.value,
            experience:Number(experience.current.value)
        }

        axios.post("http://localhost:5000/employee",payload).then(()=>{
                navigate("/")
        })
        
    }


    return (
        <>
        <Container className="mt-2">
            <Row>
                <Col className="col-md-8 offset-md-2">
                    <legend>Add new Employee Data</legend>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" ref={name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formJobRole">
                        <Form.Label>Job Role</Form.Label>
                        <Form.Control type="text" ref={jobRole}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formExperience">
                        <Form.Label>Experience</Form.Label>
                        <Form.Control type="text" ref={experience}/>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={addEmployeeHandler}>Add</Button>    
                </Col>
            </Row>
        </Container>
        </>

    )
}

export default AddEmployees;