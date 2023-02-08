import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'

export default function Info({ data }: any) {

  return (
    <div className="info-window">
      <div className="">애니 정보 창</div>
      {/* <div className="">id: { props.id }</div> */}
      <div className="">{ data }</div>
    </div>
  )
}

export async function getStaticProps(props: any) {
  const res = await fetch('http://localhost:3000/api/info', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: props.id.toString()
    })
    const data = await res.json()
    console.log(data)

  return { data: { info: data.data } }
}