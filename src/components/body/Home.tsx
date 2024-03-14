import React, {  useEffect } from 'react'
import { userContext,username_context } from '../../App'
import Chart from './Chart'
import useFetch from '../hook/Usefetch'
import {  useNavigate } from 'react-router-dom'
import Loader from '../Loader/Loader'




export default function Home() {
  const nav =useNavigate()
  const {user_id}=React.useContext(username_context)

const{Persons,filterPerson,setPersons}=React.useContext(userContext)

const {data,loading,error} =   useFetch({url:`https://skill-api.penneithendral.workers.dev/user_skills/${user_id}`})
console.log("home",data)
// setPersons(data?.data?.results)
 
  useEffect(()=>{ 
  setPersons(data?.results)
  console.log(Persons,"home")

},[data]
  
  )

console.log(Persons,"asdf");

  return (
    
    <>{error? nav('/auth'):
       <div className='box-border flex flex-col gap-4 m-3'>
		
    <h2 className='flex flex-row justify-center w-full font-bold text-3xl text-white '>Person Details</h2>

        <div className='flex flex-row flex-wrap  max-md:mx-7 gap-6 justify-center' >
          {


        loading ?//array.map((item,index)=> <Loader key={index}/>)
           <div className='flex flex-col h-screen justify-center items-center'><Loader/></div> :  
        filterPerson?.map((person) => (
         <Chart name={person.username} rating={person.rating} skills={person.skill_name} skill_id={person.skill_id}  receiver_id={person.user_id}    /> ))

}
        </div>
    </div>
   
    
}   </>
  )

}
