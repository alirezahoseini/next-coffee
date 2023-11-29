import Navbar from '@/components/modules/Navbar/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
