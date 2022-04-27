import React from 'react'
import {Link} from 'react-router-dom';
function ViewCategory() {
  return (
    <div className='card'>
        <div className='card-header'>
            <h4>Category List
            <Link to='/admin/add-category' className='btn btn-primary btn-sm float-end'> Add Category</Link>
            </h4> 
        </div>
    </div>
  )
}

export default ViewCategory;