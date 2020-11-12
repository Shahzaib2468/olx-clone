import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Header() {
    return (
        <nav className='header'>

            <div style={{margin:"20px"}}>
                <img height='25px' src='https://olx-clone-react.web.app/static/media/logoimg.6e041e26.png' />
            </div>

            <div className='header_search'>
                <input placeholder='Your location' value='Pakistan' type='text' className='header_locationSearch' />
                <KeyboardArrowDownIcon className='header_locationhIcon' />
                
                <input placeholder='Find Cars, Mobile Phones and more...' type='text' className='searchInput' />
                <SearchIcon className='header_searchIcon' />
            </div>

            <div className='header_nav'>
                <Link>
                    <span>Login</span>
                </Link>

                <Link>
                    <button>Sell</button>
                </Link>
            </div>

        </nav>
    )
}
export default Header;