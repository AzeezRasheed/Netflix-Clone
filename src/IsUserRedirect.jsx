import React from 'react'
import { Route, Redirect, Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function IsUserRedirect({ element: Comp, path, user, loginPath, ...rest }) {

    const location = useLocation()

    return (
        <Route
            path={path}
            {...rest}
            render={
                () => {
                    if (!user) {
                        return <Comp {...rest} />
                    } else {
                        <Navigate
                            to={{
                                pathname: loginPath,
                                state: {
                                    prevLocation: path,
                                    error: "You need to login first!",
                                },
                            }}
                        />
                    }
                    //  return null
                }
            }
        >
        </Route>
    )
}

export default IsUserRedirect