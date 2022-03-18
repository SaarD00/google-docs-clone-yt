import React, { useState } from 'react'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import { useRouter } from 'next/router'
import Modal from '@material-tailwind/react/Modal'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import TextEditor from '../components/TextEditor'
import Head from 'next/head'
import Dropdown from '@material-tailwind/react/Dropdown'
import DropdownItem from '@material-tailwind/react/DropdownItem'
import DropdownLink from '@material-tailwind/react/DropdownLink'
import Link from 'next/link'
import { Editor } from 'react-draft-wysiwyg'

export default function EditorPage() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [input, setInput] = useState('')
  var elem = document.documentElement
  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    }
  }

  function closeFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }

  const quit = () => {
    router.push('/')
  }
  const newwindow = () => {
    router.push('/')
  }

  const createInvLink = () => {
    router.push('/editor')
  }
  const modal = (
    <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
      <ModalBody className="flex cursor-pointer">
        <p className="flex cursor-pointer text-gray-400">
          Thanks for using this clone, it would be greatful if this reaches to
          more people.
        </p>
        <Link href="/">
          <p className="text-blue-600">link: http://localhost:3000</p>
        </Link>
      </ModalBody>
      <ModalFooter className="flex">
        <Button
          color="blue"
          ripple="light"
          className=""
          onClick={() => setShowModal(false)}
        >
          Thanks
        </Button>
      </ModalFooter>
    </Modal>
  )

  return (
    <div>
      <Head>
        <title>Google docs clone editor</title>
        <link ref="icon" href="/favicon.ico" />
      </Head>

      {modal}
      <header className="flex items-center justify-center p-3 pb-1">
        <span onClick={() => router.push('/')} className="cursor-pointer">
          <Icon name="description" size="5xl" color="blue" />
        </span>
        <div className="flex-grow px-2">
          <h2 className="text-3xl">Docs</h2>
          <div className="-ml-1 flex h-8 items-center space-x-1 text-sm text-gray-600">
            {/* File Dropdown Menu */}
            <Dropdown
              color="gray"
              buttonText="File"
              buttonType="link"
              size="regular"
              ripple="dark"
              className="option"
              iconOnly={false}
            >
              <DropdownItem
                href="/editor"
                color="lightBlue"
                ripple="light"
                onClick={newwindow}
              >
                New
              </DropdownItem>
              <hr className="border-t border-dashed border-slate-400"></hr>
              <DropdownItem color="red" ripple="light" onClick={quit}>
                Quit
              </DropdownItem>
            </Dropdown>
            {/* Edit dropdown menu */}
            <Dropdown
              color="gray"
              buttonText="Edit"
              buttonType="link"
              size="regular"
              ripple="dark"
              className="option"
              iconOnly={false}
            ></Dropdown>
            {/* View Dropdown Menu */}
            <Dropdown
              color="gray"
              buttonText="View"
              buttonType="link"
              size="regular"
              ripple="dark"
              className="option"
              iconOnly={false}
            >
              <DropdownItem
                color="lightBlue"
                ripple="light"
                onClick={openFullscreen}
              >
                Toggle Fullscreen
              </DropdownItem>
              <hr className="border-t border-dashed border-slate-400"></hr>
              <DropdownItem
                color="red"
                ripple="light"
                onClick={closeFullScreen}
              >
                Close fullscreen
              </DropdownItem>
            </Dropdown>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
          </div>
        </div>
        <div onClick={() => setShowModal(true)} className="">
          <Button
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            className="h-10"
          >
            <Icon name="people" size="md" />
            Share
          </Button>
        </div>

        <img
          className="ml-2 h-10 cursor-pointer rounded-full"
          src="https://yt3.ggpht.com/vWhrLST40Di1kGkW-HJr7wxU5kdYIfTCcTIR8wCMlfJaFLHKo0u2FbzrvIiktVM0-afCVxFFow=s176-c-k-c0x00ffffff-no-rj"
        />
      </header>

      <TextEditor />
    </div>
  )
}
