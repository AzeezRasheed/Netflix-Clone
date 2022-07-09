import React from "react";
import * as ROUTES from '../src/components/routes'
import { Route, Routes, Navigate } from 'react-router-dom'
import ForApp from "./ForApp";
import Browse from "./components/Browse";
import Sign_in from "./components/Sign_in";
import Sign_up from "./components/Sign_up";
import './index.css'
import IsUserRedirect from './IsUserRedirect'

function App() {
  const user = {}
  return (
    <>
      {/* <MainNav/> */}
      <Routes>

        {/* <IsUserRedirect path={ROUTES.SIGN_IN} user={user} loginPath={ROUTES.BROWSE} element={<Sign_in />} /> */}
        <Route path={ROUTES.SIGN_IN} element={<Sign_in />} />
        <Route path={ROUTES.HOME} element={<ForApp />} />
        <Route path={ROUTES.BROWSE} element={<Browse />} />
        {/* <Route path={ROUTES.SIGN_IN} element={<IsUserRedirect user={user} loginPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}><Sign_in/></IsUserRedirect>}/> */}
        {/* <IsUserRedirect path={ROUTES.SIGN_IN} user={user} loginPath={ROUTES.BROWSE}>
          <Navigate to={'/signup'}/>
        </IsUserRedirect> */}

        {/* <Route path={ROUTES.SIGN_IN} element={<IsUserRedirect><Sign_in /></IsUserRedirect>} /> */}
        <Route path={ROUTES.SIGN_UP} element={<Sign_up />} />
      </Routes>
    </>

  )
}

export default App;