import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Table, Row, Col, Button, Card, NavLink, Form, FormControl, Modal,Badge} from 'react-bootstrap';
//import Modal from 'react-modal'
import IssueForm from '../CreateIssue/IssueForm'
import Issuecard from '../IssueTable/Issecard'
import { borderRadius } from 'react-select/src/theme';
//import Pagination from './Pagination';

// Dummy data & prority labaling function

var bug = [
    {
        priority: "High",
        id: "1",
        summary: "Summary 1",
        result:"",
        expected:'',
    }
    , {
        priority: "Medium",
        id: "2",
        summary: "Summary 2",
        result:"",
        expected:'',
    },
    {
        priority: "Low",
        id: "3",
        summary: "Summary 3",
        result:"",
        expected:'',
    }
];

function bagetype(priority) {

    switch (priority) {
        case 'High':
            return 'danger';
        case 'Medium':
            return 'warning';
        case 'Low':
            return 'success'
    }
}




function ProjectIssues() {
    const [isModelOpen, setisModelOpen] = useState(false);
    const [buglist, setbuglist] = useState([])
    
    return (
        <div className="">

            <Row >
                <div className="col-md-2 bg-dark">
                    <Col className=" text-white  ">

                        <Row> <NavLink className="d-inline p-2 bg-dark text-white" to="/Projectlist"> LOGO</NavLink>
                        </Row>
                        <Row> <NavLink className="d-inline p-2 bg-dark text-white" to="/Projectlist">  Summary</NavLink>
                        </Row>
                        <Row> <NavLink className="d-inline p-2 bg-dark text-white" to="/Projectlist"> Dashboard</NavLink>
                        </Row>
                        <Row> <NavLink className="d-inline p-2 bg-dark text-white" to="/Projectlist"> Reports </NavLink>
                        </Row>



                    </Col>

                </div>
                <div className="ml-2 mt-2 col-md-9">
                    <Col className="">
                        <Row className="">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Project 1</Card.Title>
                                    <Card.Text>
                                        Description <br></br>
                          Project Name, ID,
                          Customer ID
                       </Card.Text>

                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className="border border-dark mt-2 mb-2" >
                            <div className="d-flex p-2 bd-highlight">
                                <Col md={4}>


                                    <Button className="mr-sm-2" variant="info" data-toggle="tooltip" title="Go to issues"
                                        onClick={() => setisModelOpen(true)}
                                    >
                                        Add Issue</Button>
                                    <Modal size="lg" show={isModelOpen}>
                                        <Modal.Body>
                                            <IssueForm cl={() => setisModelOpen(false)} buglist={buglist} setbuglist={setbuglist}/>
                                           
                                        </Modal.Body>

                                    </Modal>

                                </Col>
                                <Col md={3}>
                                    <Link to="BclNext/ProjectIssues">
                                        <Button variant="dark" data-toggle="tooltip" title="Go to issues">Sort By</Button>
                                    </Link>
                                </Col>
                                <Col md={5}>
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" /> {/* Margin right(Padding , Small and up by 2) */}
                                    </Form>
                                </Col>
                            </div>
                        </Row>
                        {/* <Row>

                            {
                                bug.map((bug) => <Issuecard id={'#' + bug.id} summ={bug.Summary} priority={bug.priority} badgetype={bagetype(bug.priority)} />)
                            }


                        </Row> */}
                        <Row>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>
                                            #id
                                        </th>
                                        <th>
                                            Summary
                                        </th>
                                        <th> 
                                            Priority
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        buglist.map((bug)=>                                    
                                            <tr>
                                                <td>{'#' + bug.id}</td>
                                                <td>{bug.summary}</td>
                                                <td><Badge variant={bagetype(bug.priority)}>{bug.priority}</Badge></td>
                                            </tr>                                    
                                        )
                                    }
                                </tbody>
                            </Table>
                        </Row>



                        <Row >

                            <div>
                                <Card className=" mu-2">
                                    <Card.Body>

                                        <Card.Text>
                                            pagination
                       </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        </Row>
                    </Col>
                </div>
            </Row>

        </div>
    )
}
export default ProjectIssues;
