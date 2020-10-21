import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Pagination from './pagination';
import useAjax from '../hooks/useAjax';
import Header from './header.js';
import ToggleShowProvider from '../context/hideShow';
import ToggleHideShow from './toggleHideShow';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.scss';
import PaginationContext from '../context/paginationCo';
import ChangeNumberOfPages from './itemperpage';



const ToDo = () => {

  const [_addItem, _toggleComplete, _getTodoItems, _deleteItem, list] = useAjax();
  // const [itemsPerPage, setItemsPerPage] = useState(3);
  // const [currentPage, setCurrentPage] = useState(1);


  useEffect(_getTodoItems, []);

  // // Get current posts
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

  // // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <header>
        <Header />
      </header>
      <Container>
      <ToggleShowProvider list={list}>

        <Row className="justify-content-md-center">
          <Col><h2>
            There are {list.filter(item => item.complete == 'pending').length} Items To Complete
        </h2></Col>

        <Col>  <ToggleHideShow /> </Col>
        </Row>
        <Row className="todo">
          <Col className="form">
            <div>
              <TodoForm handleSubmit={_addItem} />
            </div></Col>
          <PaginationContext list={list}>

            <Col >

                <ChangeNumberOfPages />

                <TodoList
                  // list={currentItems}
                  handleComplete={_toggleComplete}
                  handleDelete={_deleteItem}
                />


              <Row >
                <Pagination
                  // itemsPerPage={itemsPerPage}
                  totalItems={list.length}
                // paginate={paginate}
                // currentPage={currentPage}

                />
              </Row>
            </Col>
          </PaginationContext>
        </Row>
        </ToggleShowProvider>

      </Container>
    </>
  );
};

export default ToDo;