"use client";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { RootState } from '@/lib/store'; 
import React from 'react';

function Profile() {
  const { token, user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  console.log(user)

  useEffect(() => {
    // Check if token exists
    if (!token || typeof token !== 'string') {
      console.log('No valid token found');
      router.push('/');
      return;
    }

  }, [token, router]);

  // Render only if token and user are valid
  if (!token || !user) {
    return null; // Render nothing
  }

  return (
    
        <div className="flex flex-col items-center p-8">
          <h1 className="text-2xl font-bold text-blue-600 mb-4">User Profile</h1>
          <div className="shadow-md rounded p-6 w-full md:w-6/12">
            <p role='username_data'><strong>Username:</strong> {user.username}</p>
            <p role='emaildata'><strong>Email:</strong> {user.email}</p>
            <p role='firstname'><strong>First Name:</strong> {user.firstName}</p>
            <p role='secondname'><strong>Second Name:</strong> {user.secondName}</p>
            <p role='phonenumber'><strong>Phone Number:</strong> {user.phoneNumber}</p>
            <p role='role'><strong>Role:</strong> {user.role}</p>
            <p role='organisationname'><strong>Organisation Name:</strong> {user.organisation.name}</p>
            <p role='organisationphone'><strong>Organisation Phone:</strong> {user.organisation.phone || 'Not provided'}</p>
            <p role='organisationaddress'><strong>Organisation Address:</strong> {user.organisation.address}</p>
            <p role='token' className="text-green-600"><strong>Access Token:</strong> {token}</p>
          </div>

        </div>
      );
      
}
export default Profile;