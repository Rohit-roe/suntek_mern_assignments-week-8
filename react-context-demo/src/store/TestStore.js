import {create} from 'zustand'

// create a store
export const useTest=create((set)=>({
    // state
    x:10,
    y:10,
    user:{
        name:"vikas",
        age:21
    },
    // function  to modify state
    incrementX:()=>set((state)=>({x:state.x+1})),
    decrementX:()=>set((state)=>({x:state.x-1})),
    incrementY:()=>set((state)=>({y:state.y+1})),
    incrementXByValue:(v)=>set((state)=>({x:state.x+v})),
    updateUser:(newName)=>set(state=>({user:{...state.user,age:30,name:newName}}))

}))