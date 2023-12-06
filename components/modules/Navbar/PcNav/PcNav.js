import Link from 'next/link'
import styles from './PcNav.module.css'

function PcNav() {
  return (
    <div className={`hidden xl:flex ${styles.pc_nav}`}>
      <Link href={'/'} >
        <img src="./img/logo-light.png" className={styles.logo} alt="logo" />
      </Link>
      <ul className='font-Marcellus'>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/services'}>Service</Link>
        </li>
        <li>
          <Link href={'/menu'}>Menu</Link>
        </li>
        <li>
          <div className={styles.drapdown}>
            <span>Pages</span>
            <div className={styles.drapdown_wrapper}>
              <ul>
                <li>
                  <Link Link href={'/testimonial'}>testimonial</Link>
                </li>
                <li>
                  <Link Link href={'/reservation'}>reservation</Link>
                </li>
              </ul>
            </div>
          </div>

        </li>
        <li>
          <Link href={'/contact'}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default PcNav