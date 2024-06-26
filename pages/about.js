import { getSession } from "next-auth/react";

function About({ data }) {
  return <div className='layout-About'>About {data}</div>; 
}

export default About;

export async function getServerSideProps(context) {
  const session = await getSession(context); // Use getSession from next-auth directly
console.log(session)
if(!session){
    return{
        redirect:{
            destination:'/api/auth/signin?callbackurl=https://next-js-practice-mu-one.vercel.app/',
            permanent : false,
        },
    }
}
  return {
    props: {
    data : session ? 'kumar' : "raj" , // Pass the session object directly
    }
  };
}
