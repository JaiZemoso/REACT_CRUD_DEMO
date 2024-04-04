import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../components/shared/DeleteConfirmation";

const AllEmployees = () =>{

    const [allEmployees, setAllEmployees] = useState([]);
    const navigate= useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [itemIDToDelete, setItemIDToDelete] = useState(0);
    
    useEffect(()=>{
        axios.get("http://localhost:5000/employee").then((response) => {
        setAllEmployees(response.data);
    });
    },[]);

    const openDeleteModalHandler = (id)=>{
      setItemIDToDelete(id);
      setShowModal(true);
    }

    const closeDeleteModalHandler = ()=>{
      setItemIDToDelete(0);
      setShowModal(false);
    }

    const confirmDeleteHandler = () =>{
      axios.delete(`http://localhost:5000/employee/${itemIDToDelete}`).then((response)=>{
        axios.get("http://localhost:5000/employee").then((response) => {
          setAllEmployees(response.data);
      })
      })
      closeDeleteModalHandler();
    }

    return <> 
    <DeleteConfirmation
    title="Delete Confirmation"
    body="ARe you sure , You want to Delete this Employee ?"
    showModal={showModal}
    closeDeleteModalHandler={closeDeleteModalHandler}
    confirmDeleteHandler = {confirmDeleteHandler}>

    </DeleteConfirmation>
    <Container className="mt-2">
        <Row>
            <Col className="col-md-4 offset-md-4">
                <Button variant="primary" type="button" onClick={() =>{ navigate("/add-employee")}}> Add New Employee</Button>
            </Col>
        </Row>
        <br/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job Role</th>
          <th>Experience</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {allEmployees.map((emp)=>(
            <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.role}</td>
            <td>{emp.experience}</td>
            <td>
            <Button variant="primary" type="button" onClick={() =>{ navigate(`/edit-employee/${emp.id}`)}}> Edit Employee</Button>
            <Button variant="danger" type="button" onClick={() =>{ openDeleteModalHandler(emp.id)}}> Delete Employee</Button>
            </td>
          </tr>

        ))}
        
        </tbody>
    </Table>
        </Container>
    </>
};

export default AllEmployees;