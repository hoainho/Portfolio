import { NavLink, useLocation, matchRoutes } from "react-router-dom";

import { HN_logo } from "../assets/icons";

const Navbar = () => {
  const {pathname} = useLocation()
  console.log('pathname', pathname);
  const isLightTheme = ['/about', '/projects', '/contact'].includes(pathname) ? true : false
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={HN_logo} alt="logo" className="h-20 w-20 object-cover rounded-full"/>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : `${isLightTheme ? 'text-black' : 'text-white'} hover:text-blue-600` }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : `${isLightTheme ? 'text-black' : 'text-white'} hover:text-blue-600`}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
