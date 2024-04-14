import Link from 'next/Link'
import { signIn,signOut,useSession } from 'next-auth/react'
const Navbar=() =>{
    const { data: session } = useSession()
   console.log(session)
return(
    <div className='Navbar'>
    <div style={{background:'black'}}>
    <h3 style={{color:'White'}}>Kumar<span style={{color:'red'}}>.</span></h3>
    </div>
    <div className="menu">
 <h3>   <Link href='/'>Home</Link></h3>
 <h3><Link href='/input'>Input</Link></h3>
      
      {!session ?
        <h3>
            <ha onClick={async(e)=>{
            e.preventDefault()
          await  signIn('github');
        }}>
            SignIn</ha></h3> :
            <h3>
            <ha onClick={async(e)=>{
            e.preventDefault()
          await signOut()
        }}>
            SignOut</ha></h3> }
    </div>
    </div>
)
}
export default Navbar