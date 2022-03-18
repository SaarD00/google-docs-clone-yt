import dynamic from 'next/dynamic'
import React from 'react'
import Modal from '@material-tailwind/react/Modal'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import { useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { useRouter } from 'next/router'
import { Button } from '@material-tailwind/react/Button'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
)

function TextEditor() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [input, setInput] = useState('')

  const createInvLink = () => {
    if (!input) return
    setInput('')
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
          onKeyDown={(e) => e.key === 'Enter' && createInvLink()}
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
        <Button color="blue" onClick={createInvLink} ripple="light">
          Create
        </Button>
      </ModalFooter>
    </Modal>
  )
  return (
    <div className="h- min-h-screen bg-[#F8F9FA] pb-16">
      <Editor
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 bg-white shadow-lg max-w-4xl mx-auto mb-12 border p-5 min-h-screen "
      />
    </div>
  )
}

export default TextEditor
