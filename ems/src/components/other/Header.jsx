import React,{useState} from 'react'

const Header = (props) => {

  // const [username,setUsername]=useState('')
  // if(!data){
  //   setUsername('admin')
  // }else{
  //   setUsername(data.firstname)
  // }


  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>

      <h1 className='text-2xl font-medium'>
        hello <br /> <span className='text-3xl font-semibold'>username</span>
        </h1>
      <button onClick={logOutUser}
       className='bg-red-700 text-white px-5 py-2 rounded-sm text-lg font-medium'>
        logout</button>
    </div>
  )
}

export default Header
