import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from '../pages/Login/Firebase/firebase.init'


initializeFirebase() 

const useFirebase = ()=>{
    const [user, setUser] = useState({})

    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
  
    const auth = getAuth()

    const registerUser = (email, password, history) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            
            setAuthError('')
            history.replace('/')
            
          })
          .catch((error) => {
           
            
            setAuthError(error.message)
           
          })
          .finally(() => setIsLoading(false))
          
    }

    const logInUser = (email, password,location, history) =>{
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
          const destination = location?.state?.from || '/'
          history.replace(destination)
          setAuthError('')
    
        })
        .catch((error) => {
          
          setAuthError(error.message)
        })
        .finally(() => setIsLoading(false))
    }




    useEffect(() =>{


      const unSubscribe = onAuthStateChanged(auth, (user)=>{
        if(user){
          
          setUser(user)
        }else{
          setUser({})
        }
        setIsLoading(false)
      })
      return ()=> unSubscribe

    },[])

    const logOut = () =>{
      setIsLoading(true)
        signOut(auth).then(() => {
            
          }).catch((error) => {
           
          })
          .finally(() => setIsLoading(false))
          
    }
    return {
        user,
        registerUser,
        logOut,
        logInUser,
        isLoading,
        authError,
    }
}


export default useFirebase