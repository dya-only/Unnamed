// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Xlsx from 'read-excel-file/node'

type Data = {
  // day: number
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const map = {
    Title: "title",
    Day: "week",
  }

  Xlsx('./src/assets/2023-1.xlsx', { map }).then(({ rows }) => {
    res.status(200).json({ data: rows })
  })
}