'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from 'react'

export default function Navbar() {
 return (
    <>
      <header className="bg-gradient-to-r from-pink-600 to-purple-950 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gradient-to-r from-blue-500 to-purple-500 via-pink-500">
            My APP
          </Link>
          <div className="space-x-4">
          <a href="/signup"><Button className="bg-pink-600 text-md p-4 ">Sign Up</Button></a>
          </div>
        </nav>
      </header>

    </>
  )
}

