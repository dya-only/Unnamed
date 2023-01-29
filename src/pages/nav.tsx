import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'

export default function Nav() {
  const [ScrollY, setScrollY] = useState(0)
  const [isUnder, setIsUnder] = useState("")
  
  const handleFollow = () => {
    setScrollY(window.pageYOffset)

    if (ScrollY > 200) {
      setIsUnder("_nav_")
    } else {
      setIsUnder("_nav")
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
        <button className="btn">로그인</button>
      </nav>
      : null }
    </Fragment>
  )
}
