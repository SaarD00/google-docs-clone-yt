import dynamic from 'next/dynamic'
import React from 'react'
import { useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { useRouter } from 'next/router'

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
