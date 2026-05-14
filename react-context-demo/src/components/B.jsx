import {useContext} from 'react'
import { CounterContext } from '../contexts/CounterContext.js'
import { useTest } from '../store/TestStore.js'
function B() {
const x=useTest(state=>state.x)
const incrementX=useTest(state=>state.incrementX)
const incrementXByValue=useTest(state=>state.incrementXByValue)
  let {counter1,changeCounter1}=useContext(CounterContext)
  console.log("component b ren")
  return (
    <div className='text-center shadow-2xl p-10'>
        <p className='text-3xl'>Component B</p>
        <p className='text-2xl mt-10 text-red-500'>X:{x}</p>
        <p className='text-2xl mt-10'>Counter1:{counter1}</p>
        <button onClick={changeCounter1} className="bg-blue-600 mt-10 p-2 border-2">Change Counter1</button>
        <button onClick={incrementX} className="bg-amber-300 mt-10 p-2 border-2">change X</button>
        <button onClick={()=>incrementXByValue(100)} className="bg-red-500 mt-10 p-2 border-2">change X by 100</button>
    </div>
  )
}

export default B