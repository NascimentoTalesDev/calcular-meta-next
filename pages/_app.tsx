import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { B612_Mono } from 'next/font/google'

const font = B612_Mono({ 
  subsets: ['latin'],
  weight: '400'
})

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className={`${font.className}bg-white h-screen p-2 text-white `}>
      <Component {...pageProps} />
    </div>
  ) 
}
