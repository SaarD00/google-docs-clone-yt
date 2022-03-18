import { Button } from '@material-tailwind/react/Button'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Image
        src="https://links.papareact.com/1ui"
        height="300"
        width="550"
        objectFit="contain"
        onClick={signIn}
      />
    </div>
  )
}

export default Login
