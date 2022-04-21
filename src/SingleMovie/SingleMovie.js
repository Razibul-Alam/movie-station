import React,{useState,useEffect} from 'react';
import { Card,Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleMovie = ({movie}) => {
  // destructuring properties from movie object
  const{Title,Poster,Year,imdbID}=movie;
    return (
      <Col>
        <Card>
        <Card.Img variant="top" style={{height:'30rem'}}src={Poster} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <div className='d-flex justify-content-between'>
          <Link to={`movie/${imdbID}`}>Details</Link>
          <p>Realesed in: {Year}</p>
          </div>
        </Card.Footer>
      </Card>
      </Col>
    );
};

export default SingleMovie;