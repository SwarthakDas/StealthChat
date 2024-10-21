"use client"

import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import {User} from 'next-auth'
import { Button } from './ui/button'

const Navbar = () => {

    const {data: session}= useSession()

    const user: User= session?.user as User


  return (
    <nav className='p-4 md:p-6 shadow-md w-full'>
        <div className='container mx-auto flex flex-col justify-between'>
            <a className='text-2xl font-bold m-2 md:mb-0' href="">StealthChat</a>
            {
                session?(
                    <>
                    <span className='mr-4 '>Welcome, {user?.username || user?.email}</span>
                    <Button className='absolute right-8 top-8 '  onClick={()=>signOut()}>Logout</Button>
                    </>
                ) : (
                    <Link href='/sign-in'>
                        <Button className=' absolute right-8 top-5 md:w-auto font-semibold'>Login</Button>
                    </Link>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar
