// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const params = req.body

  if (params.day == '0') {
    res.status(200).json({ title: 'Test Anime Title <3' })
  } else {
    res.status(200).json({ title: 'Test Anime Title UwU' })
  }
}