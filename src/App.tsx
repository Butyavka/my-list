import React from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Router from './components/Router'
import Navbar from './components/Navbar'
import firebase from 'firebase/compat/app'

firebase.initializeApp({
  apiKey: 'AIzaSyDvuHAiGHhx2lnGllmWPZD8_xvlhuC7Uy8',
  authDomain: 'my-list-533af.firebaseapp.com',
  projectId: 'my-list-533af',
  storageBucket: 'my-list-533af.appspot.com',
  messagingSenderId: '712375835090',
  appId: '1:712375835090:web:dea63d7ecd54df0d7b900b'
})


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
