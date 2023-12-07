import styles from './MobileNav.module.css'
import { RiMenuLine } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import Link from 'next/link';
import { useState } from 'react';
function MobileNav() {
    const [toggler, setToggler] = useState(true);
    const toggleHandler = () => {
        setToggler(prev => !prev)
    }
    return (
        <div className={`${styles.mobile_nav} xl:hidden`}>
            <div className={styles.nav_wrapper}>
                <button type='button' className='mt-3' onClick={() => toggleHandler()}>{
                    !toggler ? <FiX /> : <RiMenuLine />
                }</button>
                <Link href={'/'} >
                    <img src="./img/logo-mobile.png" alt="logo" />
                </Link>
            </div>
            <ul className={`${toggler ? styles.menu : styles.menu_active} font-Marcellus `}>
                <li onClick={() => setToggler(true)}>
                    <Link href={'/'}>Home</Link>
                </li>
                <li onClick={() => setToggler(true)}>
                    <Link href={'/about'}>About</Link>
                </li>
                <li onClick={() => setToggler(true)}>
                    <Link href={'/services'}>Service</Link>
                </li>
                <li onClick={() => setToggler(true)}>
                    <Link href={'/menu'}>Menu</Link>
                </li>
                <li onClick={() => setToggler(true)}>
                    <Link Link href={'/testimonial'}>testimonial</Link>
                </li>
                <li onClick={() => setToggler(true)}>
                    <Link Link href={'/reservation'}>reservation</Link>
                </li>
                <li onClick={() => setToggler(true)}>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileNav