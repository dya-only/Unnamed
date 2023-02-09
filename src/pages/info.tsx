import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Info(props: any) {

  return (
    <div className="">
      <div className="title-window">
        <div className="window-title">{ props.name }</div>
        <div className="window-btns">
          <button className='info-in-btn' onClick={() => { sessionStorage.setItem('InfoWindow', 'false') }}><FontAwesomeIcon className='window-btn' icon={faXmark} /></button>

        </div>
      </div>
      <div className="info-window">
        <img className='info-img' src={ props.img } alt="" />
        <div className="">{ props.name }</div>
        <div className="">방영 요일: { props.week }</div>
        <div className="">장르: { props.genres }</div>
      </div> 
    </div>
  )
}