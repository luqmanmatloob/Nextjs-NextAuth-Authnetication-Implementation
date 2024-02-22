import React from 'react'
import Link from 'next/link'

const Reg = () => {
  return (
    <div>
          <div className="w-[100vh] h-[100vh] flex justify-center mx-auto align-middle items-center">
        <div className="flex ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Register
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to luqbook, where your thoughts are not policed
            </p>
            <div className="flex justify-center">

              <Link href="/">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign In</button>
              </Link>

              <Link href="/">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Sign Up</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Reg
