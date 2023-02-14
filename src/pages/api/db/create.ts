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

    // db.run('CREATE TABLE user(id integer primary key autoincrement, name text not null, email text unique, wish_id text, watched_id text)')

    // READ
    let sql = `SELECT * FROM user WHERE email="${params.email}"`
    let returnValue = false

    db.all(sql, [], (e, rows) => {
      if (e) throw e

      if (rows.length == 0) {
        db.run(`INSERT INTO user(name, email, wish_id, watched_id) VALUES(\"${ params.name }\", \"${ params.email }\", \"[]\", \"[]\")`, (e) => {
          if (e) throw e
          returnValue = true
        })
      }
      // db.run(`INSERT INTO user(name, email, wish_id, watched_id) VALUES(\"${ params.name }\", \"${ params.email }\", \"[]\", \"[]\")`, (e) => {
      //   if (e) throw e
      // })
    })

    // INSERT
    // db.run(`INSERT INTO user(name, email, wish_id, watched_id) VALUES(\"${ params.name }\", \"${ params.email }\", \"[]\", \"[]\")`, (e) => {
    //   if (e) throw e
    // })
    db.close()
    res.status(200).json({ res: returnValue })

  } else {
    // Handle any other HTTP method
  }
}