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

    if (params.scale == 'all') {

      const sql = `SELECT * FROM user`;

      db.all(sql, [], (e, rows) => {
        if (e) throw e

        rows.forEach((row) => {
          console.log(row)
        })

        res.status(200).json({ res: rows })
      })

    }

  } else {
    // Handle any other HTTP method
  }
}