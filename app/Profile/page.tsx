"use client";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { RootState } from '@/lib/store'; 

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
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Second Name:</strong> {user.secondName}</p>
            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Organisation Name:</strong> {user.organisation.name}</p>
            <p><strong>Organisation Phone:</strong> {user.organisation.phone || 'Not provided'}</p>
            <p><strong>Organisation Address:</strong> {user.organisation.address}</p>
            <p className="text-green-600"><strong>Access Token:</strong> {token}</p>
          </div>

        </div>
      );
      
}
export default Profile;