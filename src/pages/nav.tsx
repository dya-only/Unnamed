import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

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
        <div className="nav-title">Navbar</div>
        {/* <button className="btn">로그인</button> */}
        <FontAwesomeIcon className="icon" icon={faRightToBracket} />
      </nav>
      : null }
    </Fragment>
  )
}
