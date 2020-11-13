import React,{useState} from 'react';
import { Card, Container, Badge,Col,Row,Button,Modal } from 'react-bootstrap'
function IssueCard(props) {
    const [modalopen, setmodalopen] = useState(true)
    return (
        <Modal size="md" show={modalopen} >
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <h5>Project : {props.name}</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5>Priority : <span><Badge variant={props.variant}>{props.priority}</Badge></span></h5>


                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5>Expected result:</h5>
                                <Card>
                                    <Card.Body>{props.expected}</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5>Actual result</h5>
                                <Card>
                                    <Card.Body>{props.actual}</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5>Summery</h5>
                                <Card>
                                    <Card.Body>{props.summary}</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={() => setmodalopen(false)}>Close</Button>
                            </Col>
                        </Row>
                    </Container>

                </Modal.Body>


            </Modal>

    )
}
export default IssueCard;