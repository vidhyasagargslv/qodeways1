"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { increment, decrement, reset} from '@/lib/features/CounterSlice'


function page() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <>
        <h1 className='text-center'>This is counter</h1>
        <h1 className='text-center'>{count}</h1>
        <div className='text-center'>
          <button className='bg-blue-500 w-24 text-white px-4 py-2 rounded-md mr-2' onClick={() => dispatch(increment())}>+</button>
          <button className='bg-orange-500 w-24 text-white focus:outline px-4 py-2 rounded-md mr-2' onClick={() => dispatch(decrement())}>-</button>
          <button className='bg-red-500 w-24 text-white px-4 py-2 rounded-md mr-2' onClick={() => dispatch(reset())}>reset</button>
          
        </div>
    </>
  )
}

export default page