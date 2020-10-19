import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../hooks/useAjax';
import Header from './header.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.scss';

const ToDo = () => {

  const [addItem,toggleComplete,getTodoItems,deleteItem,list] = useAjax();

  useEffect(getTodoItems, []);

  return (
    <>
    <header>
        <Header />
      </header>
      <Container>
        <Row className="justify-content-md-center">
          <Col><h2>
          There are {list.filter(item => item.complete == 'pending').length} Items To Complete
        </h2></Col>
        </Row>
        <Row className="todo">
          <Col className="form"> 
           <div>
          <TodoForm handleSubmit={addItem} />
        </div></Col>
          <Col >
          <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
            handleDelete={deleteItem}
          />
        </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ToDo;