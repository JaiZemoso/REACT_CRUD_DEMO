import axios from "axios";
import { useEffect, useRef } from "react";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
    const {id} = useParams();
    const name = useRef('');
    const jobRole = useRef('');
    const experience = useRef('');
    const navigate= useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:5000/employee/${id}`).then((response)=>{
            let data = response.data;
            name.current.value = data.name;
            jobRole.current.value = data.role;
            experience.current.value = data.experience;
                
        })
    })

    const updateEmployeeHandler =()=>{
        let payload = {
            name: name.current.value,
            role: jobRole.current.value,
            experience:Number(experience.current.value)
        }

        axios.put(`http://localhost:5000/employee/${id}`,payload).then(()=>{
                navigate("/");
        })
        
    }

    return <> 
    <Container className="mt-2">
            <Row>
                <Col className="col-md-8 offset-md-2">
                    <legend>Update Employee Data</legend>
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
                    <Button variant="primary" type="button" onClick={updateEmployeeHandler}>Update</Button>    
                </Col>
            </Row>
        </Container>
    </>
};

export default EditEmployee;