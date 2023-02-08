import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'

export default function Info(props: any) {

  console.log(props)
  return (
    <div className="info-window">
      <div className="">정보 창</div>
      <img className='info-img' src={ props.img } alt="" />
      <div className="">{ props.name }</div>
      <div className="">방영 요일: { props.week }</div>
      <div className="">장르: { props.genres }</div>
    </div> 
  )
}