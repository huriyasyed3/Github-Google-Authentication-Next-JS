'use client'

import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'


export default function SignOutPage  () {
  return (
    <div>
        <h1>Sign Out</h1>
        <p className='text-sm text-center text-gray-400'>Are you sure you want to sign out?</p>
        <Button className='w-full bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded ' 
        onClick={()=>signOut()}>SignOut</Button>
    </div>
  )
}
