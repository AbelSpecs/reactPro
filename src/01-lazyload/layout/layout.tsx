import React from 'react'
import { childRoutes } from '../../routes/routes'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom'

export const layout = () => {
  return (
    <div>
        layout page 

        <ul>
            {
                childRoutes.map(({to, name}) => {
                    return (
                        <li key={to}>
                            <NavLink to={to} className={ ({isActive}) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>  

        <Routes >
            {
                childRoutes.map(({to, path, Component}) => {
                    return (
                        <Route key={to} path={`${path}`} element={<Component/>}/>
                    )
                })
            }
            <Route path="*" element={<Navigate to={childRoutes[0].to} replace/>}/>
        </Routes>
    </div>


  )
}

export default layout;