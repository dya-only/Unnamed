import '@/styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <GoogleOAuthProvider clientId='870072489503-28hbupk1iscump8po398uqgpp8g4kl5r.apps.googleusercontent.com'>
    <Component {...pageProps} />
  </GoogleOAuthProvider>
}
