import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import { useSession, getSession } from 'next-auth/react'
import Modal from '@material-tailwind/react/Modal'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import { useState } from 'react'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const [showModal, setShowModal] = useState(false)
  const [input, setInput] = useState('')

  const createDocument = () => {
    if (!input) return
    setInput(input)
    setShowModal(false)
    router.push('/editor')
  }

  const modal = (
    <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
      <ModalBody>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full outline-none"
          placeholder="enter name of document"
          onKeyDown={(e) => e.key === 'Enter' && createDocument()}
        />
      </ModalBody>
      <ModalFooter className="flex">
        <Button
          color="blue"
          buttonType="link"
          onClick={(e) => setShowModal(false)}
          ripple="dark"
        >
          Cancel
        </Button>
        <Link href="/">
          <Button color="blue" onClick={createDocument} ripple="light">
            Create
          </Button>
        </Link>
        <p className="flex text-xs text-[#CACACA]">
          if "create" button dosent respond, try pressing enter
        </p>
      </ModalFooter>
    </Modal>
  )
  return (
    <div className="">
      <Head>
        <title>Google docs clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {modal}

      <section className="bg-[#F8F9FA] px-10 pb-10">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex items-center justify-between py-6">
            <h2 className="text-lg text-gray-700 lg:mx-[20%] xl:mx-[0%]">
              Start a new Document
            </h2>
            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </div>
        </div>
        <div
          onClick={() => setShowModal(true)}
          className="relative h-52 w-40 cursor-pointer border-2 hover:border-blue-700 lg:mx-[30%]"
        >
          <img src="https://links.papareact.com/pju" layout="fill" />
        </div>
        <p className=" ml-2 mt-2 text-sm font-semibold text-gray-700 lg:hidden">
          Blank
        </p>
      </section>
      <section className="overflow-hidden bg-white px-10 md:px-0">
        <div className="mx-auto max-w-3xl py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="flex-grow font-medium">My document</h2>
            <p className="mr-12">Day created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>
        </div>
        <div className="my-36 mx-5 cursor-pointer items-center overflow-hidden text-xs font-bold text-gray-500 hover:text-blue-400">
          <Footer></Footer>
        </div>
      </section>
    </div>
  )
}
