import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToggleContext} from '../context/hideShow';
import {PaginationContext} from '../context/paginationCo';

function TodoList(props){
 const toggleContext = useContext(ToggleContext);
 const pagination = useContext(PaginationContext);
  return (
    <Container  className="ul">
       {pagination.currentItem.map(item => (
         <Container className={` complete-${item.complete}-${toggleContext.status} li`}  key={item._id}>
            <Row className="firstRow">
                <Col  key={item._id} className={`complete-${item.complete}`}  onClick={() => props.handleComplete(item._id)}>
                   {item.complete}
                 </Col>
                <Col> {item.assignee} </Col>
                <Col className="text-end">
                 <button onClick={() => props.handleDelete(item._id)}>x</button>
                </Col>
            </Row>
            <Row>
            <Col md="auto">
              {item.text} 
              </Col>
            </Row>
            <Row className="text-end">
            <Col md={{ span: 9, offset: 3 }}> Difficulty : {item.difficulty}</Col>

            </Row>
        </Container>
       ))}
    </Container>

    // <ListGroup className="ul">
    //   {list.map(item => (
    //     <ListGroup.Item
    //       className={`complete-${item.complete} li ` }
    //       key={item._id}
    //     >
    //       <span onClick={() => handleComplete(item._id)}>
    //         {item.text}  ---- {item.complete} ---- {item.assignee} 
    //       </span>
    //       <button onClick={() => handleDelete(item._id)}>x</button>

    //       </ListGroup.Item>
    //   ))}
    // </ListGroup>
  );
}


export default TodoList;