import React from 'react'
import Image from 'next/image'

function Register() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4">
    <div className="hidden md:block md:w-4/12">
      {/* Replace with your image path */}
      <Image src="" alt="Registration Illustration" layout="responsive" width={500} height={500} />
    </div>

    <form className="w-full md:w-6/12 px-10 py-20 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold text-blue-600 text-center -mt-4 mb-4">Registration</h1>
      
      <div className="mb-4">
        <div className='flex flex-col md:flex-row md:gap-5'>
            <input type="text" placeholder="UserName" className="md:w-1/2 border border-gray-300 p-2 rounded mb-2 text-black capitalize focus:border-blue-500 outline-none" />
            <input type="email" placeholder="Email ID" className="md:w-1/2 border border-gray-300 p-2 rounded mb-2 text-black capitalize focus:border-blue-500 outline-none" />
        </div>
        <div className='flex flex-col md:flex-row md:gap-5'>
            <input type="password" placeholder="Password" className="md:w-1/2 border border-gray-300 p-2 rounded mb-2 text-black capitalize focus:border-blue-500 outline-none" />
            <input type="password" placeholder="Confirm Password" className="md:w-1/2 border border-gray-300 p-2 rounded mb-2 text-black capitalize focus:border-blue-500 outline-none" />
        </div>
      </div>
      
      <fieldset className="border border-blue-600 rounded-lg p-4 mb-4 flex flex-col gap-4 ">
        <legend className="text-blue-500 font-semibold border border-blue-200 px-2">User Details</legend>
        <div className="flex flex-col md:flex-row ">
          <input type="text" placeholder="First Name" className="border border-gray-300 p-2 rounded mb-2 md:mr-2 md:mb-0 md:w-1/2 text-black capitalize focus:border-blue-500 outline-none" />
          <input type="text" placeholder="Second Name" className="border border-gray-300 p-2 rounded mb-2 md:ml-2 md:mb-0 md:w-1/2 text-black capitalize focus:border-blue-500 outline-none" />
        </div>
        
        <div className="flex flex-col md:flex-row">
          <input type="tel" placeholder="Phone Number" className="border border-gray-300 p-2 rounded mb-2 md:mr-2 md:mb-0 md:w-1/2 text-black capitalize focus:border-blue-500 outline-none" />
          <input type="text" placeholder="Role" className="border border-gray-300 p-2 rounded mb-2 md:ml-2 md:mb-0 md:w-1/2 text-black capitalize focus:border-blue-500 outline-none" />
        </div>
      </fieldset>
      
      <fieldset className="border border-blue-600 rounded-lg p-4 mb-4 flex flex-col gap-4 ">
        <legend className="text-blue-500 font-semibold border border-blue-200 px-2">Organisation Details</legend>
        <div className="flex flex-col md:flex-row">
          <input type="text" placeholder="Organisation Name" className="border border-gray-300 p-2 rounded mb-2 md:mr-2 md:mb-0 md:w-1/2 text-black capitalize focus:border-blue-500 outline-none" />
          <input type="tel" placeholder="Organisation Phone Number" className="border border-gray-300 p-2 rounded mb-2 md:ml-2 md:mb-0 md:w-1/2 text-black capitalize focus:border-blue-500 outline-none" />
        </div>
        <input type="text" placeholder="Organisation Address" className="border border-gray-300 p-2 rounded mb-2 w-full text-black capitalize focus:border-blue-500 outline-none" />
      </fieldset>
      <div className='flex justify-center'>
 
      <button type="submit" className="bg-blue-600 text-white rounded-full py-2 px-4 w-10/12 ">Submit</button>
      </div>
    </form>
  </div>
  )
}

export default Register