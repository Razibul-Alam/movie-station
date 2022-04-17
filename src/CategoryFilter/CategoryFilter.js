import { Dropdown } from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
const categories=['movie','series']
const CategoryFilter = ({category,setCategory}) => {
    return (
        <div>
            <Dropdown className='ms-3'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Category
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {categories.map(category=><Dropdown.Item onClick={()=>setCategory(category)}>{category}</Dropdown.Item>)}
  </Dropdown.Menu>
</Dropdown>
            
        </div>
    );
};

export default CategoryFilter;