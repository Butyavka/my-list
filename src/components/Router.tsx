import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {PRIVATE_ROUTES, PUBLIC_ROUTES} from '../routes'
import {ROUTS} from '../consts/routes'

const Router = () => {

  const login = false
  return login ? (
    <Routes>
      {PRIVATE_ROUTES.map(route => <Route key={ route.path } path={ route.path } element={ route.Component() }/>)}
      <Route
        path="*"
        element={ <Navigate to={ ROUTS.LISTS } replace/> }
      />
    </Routes>
  ) : (
    <Routes>
      {PUBLIC_ROUTES.map(route => <Route key={ route.path } path={ route.path } element={ route.Component() }/>)}
      <Route
        path="*"
        element={ <Navigate to={ ROUTS.LOGIN } replace/> }
      />
    </Routes>
  )
}

export default Router