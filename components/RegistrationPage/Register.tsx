"use client";
import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { registerSuccess, registerFailure } from '@/lib/features/authSlice';
import { useRouter } from 'next/navigation';

export interface FormData {
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

export interface FormErrors {
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
  apiError?: string;
}

export default function Register() {
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
    orgAddress: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const dispatch = useDispatch();
  const router = useRouter();

   const validateForm = (): boolean => {
    let tempErrors: FormErrors = {};
    if (!formData.username || formData.username.trim() === '')
      tempErrors.username = 'Username is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = 'Valid email is required';
    if (!formData.password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(formData.password))
      tempErrors.password = 'Password must be 8+ chars with uppercase, lowercase, and number';
    if (!formData.confirmPassword || formData.password !== formData.confirmPassword)
      tempErrors.confirmPassword = 'Passwords must match';
    if (!formData.firstName || formData.firstName.trim() === '')
      tempErrors.firstName = 'First name is required';
    if (!formData.secondName || formData.secondName.trim() === '')
      tempErrors.secondName = 'Second name is required';
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber))
      tempErrors.phoneNumber = 'Phone number must be 10 digits';
    if (!formData.role || formData.role.trim() === '') tempErrors.role = 'Role is required';
    if (!formData.orgName || formData.orgName.trim() === '')
      tempErrors.orgName = 'Organisation name is required';
    if (!formData.orgAddress || formData.orgAddress.trim() === '')
      tempErrors.orgAddress = 'Organisation address is required';
    if (formData.orgPhone && !/^\d{10}$/.test(formData.orgPhone)) {
      tempErrors.orgPhone = 'Organisation phone must be 10 digits';
    }
    
  
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };


  /** 
 * Handles the form submission for user registration.
 * Validates form data, submits it to the registration API endpoint,
 * and manages the authentication state using Redux.
 * On successful registration, redirects to the Profile page.
 * 
 * @param {FormEvent} e - The form submission event
 * @returns {Promise<void>}
 */
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (!validateForm()) return;

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
        phone: formData.orgPhone || '', // Ensure phone is a string
        address: formData.orgAddress,
      },
    };
    console.log(submitData);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors((prev) => ({ ...prev, apiError: data.message || 'Registration failed' }));
        dispatch(registerFailure(data.message || 'Registration failed'));
        return;
      }

      //todo Store token and user in Redux
      dispatch(registerSuccess({ token: data.accessToken, user: data.user}));
      router.push('/Profile'); 
    } catch (error) {
      setErrors((prev) => ({ ...prev, apiError: 'Something went wrong' }));
      dispatch(registerFailure('Something went wrong'));
    }
  };
 

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-8">
      <div className="hidden md:block md:w-4/12 mr-12">
        <Image src="/Register.png" alt="Registration Illustration" priority={true} layout="responsive" width={500} height={500} />
      </div>

      <form className="w-full md:w-6/12 px-10 py-20 bg-white shadow-md rounded" onSubmit={handleSubmit} method='POST'>
        <h1 className="text-2xl font-bold text-blue-600 text-center -mt-10 mb-5">Registration</h1>
        {errors.apiError && <p className="text-red-500 text-center mb-4">{errors.apiError}</p>}

        {/* Form fields */}
        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:gap-5">
            <input
              type="text"
              placeholder="UserName"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`md:w-1/2 pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease focus:border-blue-500 outline-none ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              className={`md:w-1/2 pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease focus:border-blue-500 outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
          {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

          <div className="flex flex-col md:flex-row md:gap-5">
            <div className="w-full max-w-sm min-w-[200px]">
              <input
                type="password"
                name="password"
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease focus:border-blue-500 outline-none ${errors.password ? 'border-red-500' : 'border-slate-200'}`}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease focus:border-blue-500 outline-none ${errors.confirmPassword ? 'border-red-500' : 'border-slate-200'}`}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>
          </div>
        </div>

        {/* USer details */}
        <fieldset className="border border-blue-600 rounded-lg p-4 mb-4 flex flex-col md:gap-2">
          <legend className="text-blue-500 font-semibold border border-blue-200 px-2">User Details</legend>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease md:mr-2 md:mb-0 md:w-1/2 capitalize focus:border-blue-500 outline-none ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            />
            <input
              type="text"
              placeholder="Second Name"
              name="secondName"
              value={formData.secondName}
              onChange={handleChange}
              className={`pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease md:mr-2 md:mb-0 md:w-1/2 capitalize focus:border-blue-500 outline-none ${errors.secondName ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
          {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
          {errors.secondName && <p className="text-red-500 text-xs">{errors.secondName}</p>}
          <div className="flex flex-col md:flex-row">
            <input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease md:mr-2 md:mb-0 md:w-1/2 capitalize focus:border-blue-500 outline-none ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
            />
            <input
              type="text"
              placeholder="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease md:mr-2 md:mb-0 md:w-1/2 capitalize focus:border-blue-500 outline-none ${errors.role ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
          {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
          {errors.role && <p className="text-red-500 text-xs">{errors.role}</p>}
        </fieldset>

        {/* Organisation details */}
        <fieldset className="border border-blue-600 rounded-lg p-4 mb-4 flex flex-col md:gap-2">
          <legend className="text-blue-500 font-semibold border border-blue-200 px-2">Organisation Details</legend>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Organisation Name"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              className={`pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease md:mr-2 md:mb-0 md:w-1/2 capitalize focus:border-blue-500 outline-none ${errors.orgName ? 'border-red-500' : 'border-gray-300'}`}
            />
            <input
              type="tel"
              placeholder="Organisation Phone Number"
              name="orgPhone"
              value={formData.orgPhone}
              onChange={handleChange}
              className={`pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease md:mr-2 md:mb-0 md:w-1/2 capitalize focus:border-blue-500 outline-none ${errors.orgPhone ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
          {errors.orgName && <p className="text-red-500 text-xs">{errors.orgName}</p>}
          <input
            type="text"
            placeholder="Organisation Address"
            name="orgAddress"
            value={formData.orgAddress}
            onChange={handleChange}
            className={`pl-3 pr-3 py-2 mb-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border rounded-md transition duration-300 ease md:mr-2 md:mb-0 md:w-full capitalize focus:border-blue-500 outline-none ${errors.orgAddress ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.orgAddress && <p className="text-red-500 text-xs">{errors.orgAddress}</p>}
        </fieldset>

        <div className="flex justify-center">
          <button type="submit" className="bg-blue-600 text-white rounded-full py-2 px-4 w-6/12">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

