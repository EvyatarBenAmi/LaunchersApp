import React from 'react'
import { Link } from 'react-router'
import SerchLaunchers from '../components/homeC/SerchLaunchers'
import FilterLaunchers from '../components/homeC/FilterLaunchers'
import "./HomePage.css"
import Launcers from '../components/homeC/Launcers'

export default function HomePage() {
  return (
    <div>
        <nav className='navHome'>
            <h1>Home page launchers</h1>
            <SerchLaunchers/>
            <FilterLaunchers/>
            <Link to={"/addLauncher"}>add launcher</Link>
        </nav>

        <div>
            <Launcers/>
        </div>
    </div>
  )
}
