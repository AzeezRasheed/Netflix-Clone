import { render } from "@testing-library/react";
import { Route,Redirect, Navigate } from "react-router-dom";

function ProtectedRoutes({user,children,...rest}){
    
    const isAuth = useAuth( );
    const location = useLocation()
    return(  
            <Route
            {...rest}
            render={
                () => {
                  if(!user){
                      return children
                  }  
                  if(user){
                      <Navigate to={{pathname: loginPath}}/>
                  }
                }
            }
            >
            </Route>
        )

            }
            

export default ProtectedRoutes;
