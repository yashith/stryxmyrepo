import React from 'react';
import { Card, Container, Badge } from 'react-bootstrap'
function IssueCard(props) {

    return (
        <Container>
            <Card
                style={
                    {
                    }
                }
                varient="flush">
                <Card.Body>
                    <div
                        style={
                            {
                                display: 'flex',
                                flex: 3,
                                justifyContent: 'space-around',
                                alignItems: 'center'
                            }
                        }>
                        <Badge variant={props.badgetype}>{props.priority}</Badge>

                        <span>{props.id}</span>
                        <span>{props.summ}</span>

                    </div>
                </Card.Body>
            </Card>
        </Container>

    )
}
export default IssueCard;