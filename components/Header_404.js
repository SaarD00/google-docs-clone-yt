import React from 'react'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Link from 'next/link'

export default function Header_404() {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-md">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className=" h-20 w-28 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="ml-2  text-2xl text-gray-700 ">Docs</h1>

      <div className="mx-20 flex flex-grow items-center space-x-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-700 px-5 py-2  focus-within:bg-gray-50 focus-within:text-gray-800 focus-within:shadow-md md:mx-20 ">
        <p className="text-gray-800">Stuck? Want to back to Home Page?</p>
        <button className="text-md rounded-full bg-gradient-to-r from-red-600 to-orange-700 px-2 py-3">
          <Link href="/">Click here</Link>
        </button>
      </div>
    </header>
  )
}
