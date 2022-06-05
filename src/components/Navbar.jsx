import React from 'react';
import { Link } from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi'

const Navbar = () => {
    return (
        <div className='Nav'>
            <GiKnifeFork/>
            <Link className='Logo' to='/'>delicious</Link>
        </div>
    );
}

export default Navbar;
