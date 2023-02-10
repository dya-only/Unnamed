import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import Logo from '../assets/logo.png'

export default function Nav() {
  const [ScrollY, setScrollY] = useState(0)
  const [isUnder, setIsUnder] = useState("_nav_")
  
  const handleFollow = () => {
    setScrollY(window.pageYOffset)

    if (ScrollY > 100) {
      setIsUnder("_nav_")
    } else {
      // setIsUnder("_nav")
      setIsUnder("_nav_")
    }
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch()
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  return (
    <Fragment>
      { isUnder ?
      <nav className={ isUnder }>
        <div className="header-title">
          <Image className='logo' src={Logo} alt={''} />
          <div className="nav-title">애뉴미티</div>
        </div>
        <FontAwesomeIcon className="icon" icon={faRightToBracket} />
      </nav>
      : null }
    </Fragment>
  )
}
