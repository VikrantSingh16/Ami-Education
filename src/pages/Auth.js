import * as React from 'react';

import Register from "./Register";
import Login from './Login';
import Dashboard from './Dashboard';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth'

function Auth() {
  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = React.useState(null)

  React.useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth,
      async authenticatedUser => {
        if(authenticatedUser) {
          setUser(authenticatedUser.email)
          setAuthState('Dashboard');
        } else {
          setUser(null);
          setAuthState('login')
        }
      })

      return unSubscribeAuth;
  }, [user])

  if(authState === null) return <div className='font-bold text-center text-5xl'>loading...</div>
  if(authState === 'login') return <Login setAuthState={setAuthState} setUser={setUser}/>
  if(authState === 'register') return <Register setAuthState={setAuthState} setUser={setUser}/> 
  if(user) return <Home user={user} setAuthState={setAuthState} setUser={setUser}/>
}

export default Auth;