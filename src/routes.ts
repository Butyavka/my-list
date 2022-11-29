import {ROUTS} from './consts/routes'
import Login from './components/pages/Login'
import Lists from './components/pages/Lists'

export const PUBLIC_ROUTES = [
  {
    path: ROUTS.LOGIN,
    Component: Login
  }
]

export const PRIVATE_ROUTES = [
  {
    path: ROUTS.LISTS,
    Component: Lists
  }
]