
import React,{useState,useEffect} from 'react';
import {Card} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const[details,setDetails]=useState({})
    const{movieId}=useParams()
    // load single movie using movieId
    useEffect(()=>{
     fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=f57739d1`)
     .then(res=>res.json())
     .then(data=>setDetails(data))
    },[movieId])

//    destructuring properties from details state
    const{Title,Poster,Director,Actors,Released,Awards,imdbRating}=details;

    return (
      <>
    <div className='mt-5 d-flex justify-content-center'>
    <Card className='p-3'>
  <Card.Header>{Title}</Card.Header>
  <Card.Body>
  <Card.Img variant="top" style={{height:'30rem'}}src={Poster} />
    <blockquote className="blockquote mb-0">
     <div className='d-flex justify-content-between mb-2'>
     <small>
        {' '}
        Released in {Released}{' '}
      </small>
      <small>
        {' '}
       ImdbRating: {imdbRating}{' '}
      </small>
     </div>
      <h6>Actors: {Actors}</h6>
      <h6>Awards: {Awards}</h6>
      <footer className="blockquote-footer mt-2">
        Directed by <cite title="Source Title">{Director}</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
       </div>
       </>
       
    );
};

export default MovieDetails;