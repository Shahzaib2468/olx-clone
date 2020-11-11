import React from 'react';
import './subNav.css'
import { Link } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function SubHeader() {
    return (
        <nav className='sub_header'>
            <div className=''>
                {/* <h4>All Accessories</h4> */}
                <input  value='All Accessories' type='text' className='all_acc' />
                <KeyboardArrowDownIcon style={{ height:"15px"}}  />
            </div>
            {
                nav.map(item=>{
                    return(
                        <Link to={item.ID}className='sub_cat'> {item.label} </Link>
                    )
                })
            }
        </nav>
    )
}
export default SubHeader;

const nav = [
    {ID: 1 , label: "Mobile Phones"},
    {ID: 5 , label: "Cars"},
    {ID: 3 , label: "Motorcycles"},
    {ID: 4 , label: "Houses"},
    {ID: 5 , label: "TV-Video-Audio"},
    {ID: 6 , label: "Tablets"},
    {ID: 7 , label: "Land & Plot"},
]