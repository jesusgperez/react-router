import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu(){
  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li>
            <NavLink 
              //className={({isActive})=>''}
              style={({isActive})=>({color: isActive ? 'red':'blue'})}
              to={route.to}
              >{route.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const routes = []
routes.push({
  to: '/',
  text: 'Home'
})
routes.push({
  to: '/blog',
  text: 'Blog'
})
routes.push({
  to: '/profile',
  text: 'Profile'
})

export {Menu}