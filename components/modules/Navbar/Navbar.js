import Link from 'next/link'
import PcNav from './PcNav/PcNav'
import MobileNav from './MobileNav/MobileNav'

function Navbar() {
  return (
    <>
      <nav>
        <MobileNav />
        <PcNav />
      </nav>
    </>
  )
}

export default Navbar