import {useContext} from 'react'
import { CounterContext } from '../contexts/CounterContext.js'
import {useTest} from '../store/TestStore.js'
function C() {
// take state from the global store
const y=useTest(state=>state.y)
const incrementY=useTest(state=>state.incrementY)
const user=useTest(state=>state.user)
const updateUser=useTest(state=>state.updateUser)

  let {counter1,changeCounter1}=useContext(CounterContext)
  console.log("component c ren")
  return (
    <div className='text-center shadow-2xl p-10'>
        <p className='text-3xl'>Component C</p>
        <p className='text-2xl mt-10 text-red-500'>Y:{y}</p>
        <p className='text-2xl mt-10 text-red-500'>user name:{user.name}</p>
        <p className='text-2xl mt-10 text-red-500'>user age:{user.age}</p>
        <p className='text-2xl mt-10'>Counter1:{counter1}</p>
        <button onClick={changeCounter1} className="bg-blue-600 mt-10 p-2 border-2">Change Counter1</button>
        <button onClick={incrementY} className="bg-amber-300 mt-10 p-2 border-2">change Y</button>
        <button onClick={()=>updateUser("ravi")} className="bg-red-500 mt-10 p-2 border-2">change user</button>
    </div>
  )
}

export default C