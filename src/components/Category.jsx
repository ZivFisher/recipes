import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks}  from 'react-icons/gi'
import { Link, NavLink } from 'react-router-dom'
// import '../index.css'

const Category = () => {
  return (
    <div className='List'>
        <NavLink className='NavLink' to='/cuisine/Italian'>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink>
        <NavLink className='NavLink' to='/cuisine/American'>
            <FaHamburger/>
            <h4>American</h4>
        </NavLink>
        <NavLink className='NavLink' to='/cuisine/Thai'>
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink>
        <NavLink className='NavLink'to='/cuisine/Chinese'>
            <GiChopsticks/>
            <h4>Chinese</h4>
        </NavLink>
    </div>
  )
}

export default Category