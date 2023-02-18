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
    let wishID: number[] = []

    let sqlREAD = `SELECT * FROM user WHERE email=\"${params.email || ''}\"`

    db.all(sqlREAD, [], (e, rows) => {
      if (e) throw e

      wishID = JSON.parse(rows[0].wish_id)
      if (wishID.includes(params.id.toString())) {
        // wishID.push(parseInt(params.id))
  
        // let sql = `UPDATE user SET wish_id="${JSON.stringify(wishID)}" WHERE email="${rows[0].email}"`
    
        // db.run(sql, (e) => {
        //   if (e) return console.error(e.message)
    
        //   console.log('updated', wishID)
        // })
        console.log('already exists')
      } else {
        console.log('add')
      }
      
    })


    db.close()
    res.status(200).json({ res: 'success' })

  } else {
    // Handle any other HTTP method
  }
}