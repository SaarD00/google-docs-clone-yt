import React from 'react'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import { useSession } from 'next-auth/react'

export default function Header() {
  const { data: session } = useSession()
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

      <div className="mx-20 flex flex-grow items-center rounded-lg bg-gray-100 px-5 py-2 text-gray-600 focus-within:bg-gray-50 focus-within:text-gray-800 focus-within:shadow-md md:mx-20 ">
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="search"
          className="flex-grow bg-transparent px-5 outline-none"
        />
      </div>
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>
      <img
        loading="lazy"
        className="hover:border-sky-400transition-transform ml-2 h-12 w-12 cursor-pointer rounded-full border border-sky-600 duration-200 ease-out hover:scale-110 hover:border-4 sm:hidden md:inline-flex"
        src={session.user.image}
        alt=""
      />
    </header>
  )
}
