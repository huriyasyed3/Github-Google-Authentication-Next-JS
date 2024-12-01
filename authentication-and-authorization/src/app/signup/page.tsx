'use client'
import { signIn } from "next-auth/react";
import Navbar from "../navbar/page";

export default function Signup() {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-800 to-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Create an Account
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">Or sign up with:</p>
          <button
            onClick={() => signIn("google")}
            className="w-full px-4 py-2 mt-2 text-white bg-pink-600 rounded-md hover:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign up with Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="w-full px-4 py-2 mt-2 text-white bg-pink-600 rounded-md hover:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign up with Github
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
