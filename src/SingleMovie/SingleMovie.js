import React,{useState,useEffect} from 'react';
import { Card,Col } from 'react-bootstrap';

const SingleMovie = ({movie}) => {
  const[rating,setRating]=useState('')
  const{Title,Poster,Year,imdbID}=movie;
useEffect(()=>{
fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=f57739d1`)
.then(res=>res.json())
.then(data=>setRating(data.imdbRating))
},[imdbID])

    return (
      <Col>
        <Card>
        <Card.Img variant="top" style={{height:'30rem'}}src={Poster} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <div className='d-flex justify-content-between'>
          <small className="text-muted">Released in {Year}</small>
          <p>ImdbRating: {rating}</p>
          </div>
        </Card.Footer>
      </Card>
      </Col>
    );
};

export default SingleMovie;