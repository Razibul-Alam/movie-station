
import React,{useEffect, useState} from 'react';
import { InputGroup, Row,FormControl} from 'react-bootstrap';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import SingleMovie from '../SingleMovie/SingleMovie';

const Movies = () => {
    const [movies,setMovies]=useState([])
    const [searchText,setSearchText]=useState('')
    const [category,setCategory]=useState('movie')

     // input handle for search
   const handleInput=(e)=>{
    setSearchText(e.target.value) 
    }
    // load all data
    useEffect(()=>{
      let url;
      // the url changed conditionally normal
      searchText?url=`https://www.omdbapi.com/?s=${searchText}&apikey=f57739d1&type=${category}`:url=`https://www.omdbapi.com/?s=harry&apikey=f57739d1&type=${category}`

      fetch(url)
      .then(res=>res.json())
      .then(data=>setMovies(data.Search))
            },[searchText,category])

    return (
        <div className='container mt-5'>
             <div className="text-center d-flex justify-content-center my-5">

               {/* Search box */}
       <InputGroup className="mb-3 w-75">
 <FormControl
 onChange={handleInput}
   placeholder="Search movie"/>
</InputGroup>

{/* category filter component */}
<CategoryFilter category={category} setCategory={setCategory}/>
       </div>
        <Row xs={1} md={3} className="g-4">
        {movies?.map(movie=><SingleMovie movie={movie} key={movie.imdbID}/>)}
      </Row>
      </div>
    );
};

export default Movies;