'use client'
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import React from 'react'

export default function SignInPage() {

  return (
    <>
      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-full md:w-1/3 xl:w-1/3 p-6">
          <div className="bg-gradient-to-r from-gray-300 to-pink-300 rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2 text-black">
              Google Authentication
            </h2>
            <p className="text-lg mb-4 text-gray-600">
              Authenticate with Google to access our website.
            </p>
            <Button
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => signIn("google")}
            >
              Sign In with Google
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/3 p-6">
          <div className="bg-gradient-to-r from-gray-300 to-pink-300 rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2 text-black">
              GitHub Authentication
            </h2>
            <p className="text-lg mb-4 text-gray-600">
              Authenticate with GitHub to access our website.
            </p>
            <Button
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => signIn("github")}
            >
              Sign In with GitHub
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
