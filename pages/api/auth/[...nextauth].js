import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth'
import { FirebaseAdapter } from '@next-auth/firebase-adapter'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { db } from '../../../firebase'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    // ...add more providers here
  ],
})
