// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sqlite3 from 'sqlite3'

type Data = {
  res: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const params = req.query as any
    const db = new sqlite3.Database('db/dev.db')

    // let sqlREAD = `SELECT * FROM user WHERE email="${sessionStorage.getItem("Email")}"`
    let sqlREAD = `SELECT * FROM user`

    db.all(sqlREAD, [], (e, rows) => {
      if (e) throw e

      // let wishID = JSON.parse(rows[0].wish_id)

      console.log('params id', params.id)
      console.log('string', rows)
      // console.log('parse', wishID)
    })

    // let sql = `UPDATE user SET wish_id='1sw2o@naver.com' WHERE email = ${sessionStorage.getItem("Email")}`

    // db.run(sql, (e) => {
    //   if (e) return console.error(e.message)

    //   console.log('updated', db)
    // })

    db.close()
    res.status(200).json({ res: 'success' })

  } else {
    // Handle any other HTTP method
  }
}