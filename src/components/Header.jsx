import Tractor from '../assets/images/tractor.png'
import { Link, useLocation } from 'react-router-dom'


export default function Header() {
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname){
      return true
    }
  }

  return (
<nav className="flex flex-wrap items-center justify-between p-6 bg-teal-600">
  <div className="flex items-center flex-shrink-0 mr-6 text-white ">
    <Link to="/">
  <img className="ml-3 mr-4" src={Tractor} alt="icon of a tractor" />
     </Link>
     <Link to='/'>
      <span className="text-2xl font-semibold tracking-tight">Farm Helper</span>
      </Link>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
      <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <Link to="/" className={pathMatchRoute('/') ? "block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white" : "block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"}>
        Home
      </Link>
      <Link to="/about"  className={pathMatchRoute('/about') ? "block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white" : "block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"}>
        About
      </Link>
      <Link to="/calculator" className={pathMatchRoute('/calculator') ? "block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white" : "block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"}>
        Calculator
      </Link>
      <Link to="/zones" className={pathMatchRoute('/zones') ? "block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white" : "block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"}>
        Grow Zones
      </Link>
    </div>
  </div>
</nav>
  )
}
