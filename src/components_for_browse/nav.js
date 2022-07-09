import { useContext, useEffect, useState } from "react";
import Me from '../components_for_browse/Images/logo.svg'
import My from '../components_for_browse/Images/Netflix-avatar.png'
import '../nav.css'
import { FirebaseContext } from '../components/Firebase'
// import {firebaseAuth} from "../components/Firebase"
// import { signOut, onAuthStateChanged } from "@firebase/auth";
import * as ROUTES from '../components/routes';
import { Link } from "react-router-dom";
import {FaSearch} from 'react-icons/fa'
import {FaPowerOff} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
// import { getAuth } from "@firebase/auth";

function Nav(){
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [showSearch, setShowSearch] = useState(false)
    const [inputHover,setInputHover] = useState(false)
    const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
 

    const [handleShow, setHandleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                setHandleShow(true)
            }else setHandleShow(false)
        });
        return() => {
            // console.log(user)
            window.removeEventListener('scroll')
        }
    }, [])

    function ControlSignOut(){
      firebase.auth().signOut()
        localStorage.removeItem('user')
        navigate(ROUTES.SIGN_IN)
        
    }
    // console.log(user.displayName)
    return(
        <div className={`nav ${handleShow && "nav__black"}`}>
            <a className="aForNav" href={ROUTES.HOME}> <img src={Me}  className="nav__logo" alt="About Image" /></a>
           <header className="Link">
           <ul className="Links">
          <li>
            <a className="aForNav" href="/">Home</a>
          </li>
          <li>
          <a className="aForNav" href="/tv">Tv Shows</a>
          </li>
          <li>
          <a className="aForNav" href="/movies">Movies</a>
          </li>
          <li>
          <a className="aForNav" href="/myList">My List</a>
          </li>
           </ul>
           </header>
           <div className={`search ${showSearch ? 'show-search' : '' }`}>
               <button className='buttonForNavSearch' onFocus={() => setShowSearch(true)} onBlur={() => {
                   if(!inputHover) setShowSearch(false)
               }}>
                   <FaSearch className="SVG"/>
               </button>
               <input className={`inputForNavSearch ${showSearch ? 'inputForNavSearchOn' : '' }`} type='text' placeholder="Search" 
               onMouseEnter={() => {setInputHover(true)}} 
               onMouseLeave={() => {setInputHover(false)}}
               onBlur={() => {
                   setInputHover(false)
                   setShowSearch(false)
               }}/>
           </div>
            <header className="Frame">
                 <div className="Profile">
                 <div className="Picture"><img src={My} className="nav__avatar" alt="About Image" /></div>
                 <div className="Dropdown">
                     <div className="Group">
                         <p className="TextLink" onClick={ControlSignOut}><FaPowerOff/> Sign out</p>
                     </div>
                 </div>
                 </div>
             

            </header>
            
             {/* <Header.Frame>
             <Header.Group> */}
            {/* <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
             {/* <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
            </Header.Group>
            </Header.Frame> */}

            {/* <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
            data-testid="user-profile"
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles> */}

           
        </div>
    )
}

export default Nav;