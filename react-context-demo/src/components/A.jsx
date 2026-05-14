import {useContext,useRef,useEffect} from 'react'
import { CounterContext } from '../contexts/CounterContext.js'
import { UserContext } from "../contexts/UserContext.js";
function A() {
  let inputRef=useRef(null)
  let {counter1,changeCounter1}=useContext(CounterContext)
  console.log("component a ren")
  useEffect(()=>{
    inputRef.current.focus()
  })
  return (
    <div className='text-center shadow-2xl p-10'>
        <p className='text-3xl'>Component A</p>
        <p className='text-2xl mt-10'>Counter1:{counter1}</p>
        <button onClick={changeCounter1} className="bg-blue-600 mt-10 p-2 border-2">Change Counter1</button>
        {/* <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.mail}</p>
        <button onClick={changeUserDetails}>Update UserName</button> */}
        <input ref={inputRef} type="text" className='border-2 my-5'/>
    </div>
  )
}

export default A