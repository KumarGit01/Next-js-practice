import {signIn,signOut} from 'next-auth/react'
const K = ()=>{
    const HandleSi=async()=>{
      await signIn('github') 
    }
    const HandleSo=async()=>{
      await signOut()  
    }
    return(
        <>
        <h1>Sign In</h1>
        <button onClick={HandleSi}>SignIn</button>
        <button onClick={HandleSo}>SignOut</button>
        </>
    )
} 

export default K