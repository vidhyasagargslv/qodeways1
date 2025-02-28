"use client"
import React, { useState, FormEvent } from 'react'
import Image from 'next/image'


interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  secondName: string;
  phoneNumber: string;
  role: string;
  orgName: string;
  orgPhone: string;
  orgAddress: string;
}


interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  secondName?: string;
  phoneNumber?: string;
  role?: string;
  orgName?: string;
  orgPhone?: string;
  orgAddress?: string;
}

function Register() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    secondName: '',
    phoneNumber: '',
    role: '',
    orgName: '',
    orgPhone: '',
    orgAddress: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    let tempErrors: FormErrors = {}
    
    if (!formData.username) tempErrors.username = 'Username is required'

    if (!formData.email) {
      tempErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid'
    }

    if (!formData.password) {
      tempErrors.password = 'Password is required'
    } else {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
      if (!passwordRegex.test(formData.password)) {
        tempErrors.password = 'Password must be at least 8 characters with one uppercase, one lowercase, and one number'
      }
    }

    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.firstName) tempErrors.firstName = 'First name is required'
    if (!formData.secondName) tempErrors.secondName = 'Second name is required'
    if (!formData.phoneNumber) tempErrors.phoneNumber = 'Phone number is required'
    if (!formData.role) tempErrors.role = 'Role is required'
    if (!formData.orgName) tempErrors.orgName = 'Organisation name is required'
    if (!formData.orgAddress) tempErrors.orgAddress = 'Organisation address is required'

    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = 'Phone number must be 10 digits'
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (validateForm()) {
      const submitData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        secondName: formData.secondName,
        phoneNumber: formData.phoneNumber,
        role: formData.role,
        organisation: {
          name: formData.orgName,
          phone: formData.orgPhone,
          address: formData.orgAddress
        }
      }
      console.log('Form submitted:', submitData)
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        secondName: '',
        phoneNumber: '',
        role: '',
        orgName: '',
        orgPhone: '',
        orgAddress: ''
      })
    } else {
      console.log('Form is invalid')

    }
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-8">
      <div className="hidden md:block md:w-4/12 mr-12">
        <Image src="/Register.png" alt="Registration Illustration" layout="responsive" width={500} height={500} />
      </div>

      <form className="w-full md:w-6/12 px-10 py-20 bg-white shadow-md rounded" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-blue-600 text-center -mt-10 mb-5">Registration</h1>
        
        <div className="mb-4">
          <div className='flex flex-col md:flex-row md:gap-5'>
            <input 
              type="text" 
              placeholder="UserName" 
              name='username'
              value={formData.username}
              onChange={handleChange}
              className={`md:w-1/2 pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease focus:border-blue-500 outline-none ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
            />
            <input 
              type="email" 
              name='email'
              placeholder="Email ID" 
              value={formData.email}
              onChange={handleChange}
              className={`md:w-1/2 pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease  focus:border-blue-500 outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
          
          <div className='flex flex-col md:flex-row md:gap-5'>
            <div className="w-full max-w-sm min-w-[200px]">
              <div className="relative">
                <input 
                  type="password"
                  name='password' 
                  placeholder="Your password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease focus:border-blue-500 outline-none ${errors.password ? 'border-red-500' : 'border-slate-200'}`}
                />
                <p className="flex items-start mt-2 text-xs text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1.5">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>
                  Use at least 8 characters, one uppercase, one lowercase and one number.
                </p>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <div className="relative">
                <input 
                  type="password" 
                  name='confirmPassword'
                  placeholder="Confirm Your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease focus:border-blue-500 outline-none ${errors.confirmPassword ? 'border-red-500' : 'border-slate-200'}`}
                />
                <p className="flex items-start mt-2 text-xs text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1.5">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>
                  Password and confirm password should be same.
                </p>
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>
          </div>
        </div>
        
        <fieldset className="border border-blue-600 rounded-lg p-4 mb-4 flex flex-col gap-4">
          <legend className="text-blue-500 font-semibold border border-blue-200 px-2">User Details</legend>
          <div className="flex flex-col md:flex-row">
            <input 
              type="text" 
              placeholder="First Name"
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className={`pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease md:mr-2 md:mb-0 md:w-1/2 capitalize focus:border-blue-500 outline-none ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            />
            <input 
              type="text" 
              placeholder="Second Name"
              name='secondName'
              value={formData.secondName}
              onChange={handleChange}
              className={`pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease md:mr-2 md:mb-0 md:w-1/2 capitalize focus:border-blue-500 outline-none ${errors.secondName ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
          
          <div className="flex flex-col md:flex-row">
            <input 
              type="tel" 
              placeholder="Phone Number"
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease md:mr-2 md:mb-0 md:w-1/2 capitalize focus:border-blue-500 outline-none ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
            />
            <input 
              type="text" 
              placeholder="Role"
              name='role'
              value={formData.role}
              onChange={handleChange}
              className={`pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease md:mr-2 md:mb-0 md:w-1/2 capitalize focus:border-blue-500 outline-none ${errors.role ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
        </fieldset>
        
        <fieldset className="border border-blue-600 rounded-lg p-4 mb-4 flex flex-col gap-4">
          <legend className="text-blue-500 font-semibold border border-blue-200 px-2">Organisation Details</legend>
          <div className="flex flex-col md:flex-row">
            <input 
              type="text" 
              placeholder="Organisation Name"
              name='orgName'
              value={formData.orgName}
              onChange={handleChange}
              className={`pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease md:mr-2 md:mb-0 md:w-1/2 capitalize focus:border-blue-500 outline-none ${errors.orgName ? 'border-red-500' : 'border-gray-300'}`}
            />
            <input 
              type="tel" 
              placeholder="Organisation Phone Number"
              name='orgPhone'
              value={formData.orgPhone}
              onChange={handleChange}
              className={`pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease md:mr-2 md:mb-0 md:w-1/2 capitalize focus:border-blue-500 outline-none ${errors.orgPhone ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
          <input 
            type="text" 
            placeholder="Organisation Address"
            name='orgAddress'
            value={formData.orgAddress}
            onChange={handleChange}
            className={`pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md  transition duration-300 ease md:mr-2  md:mb-0 md:w-full capitalize focus:border-blue-500 outline-none ${errors.orgAddress ? 'border-red-500' : 'border-gray-300'}`}
          />
        </fieldset>
        
        <div className='flex justify-center'>
          <button type="submit" className="bg-blue-600 text-white rounded-full py-2 px-4 w-6/12">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Register