// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method === 'POST') {
    const params = req.body
    console.log(params.name)
    res.status(200).json({ name: 'a ' + params.name })
  } else {
    // Handle any other HTTP method
  }

}
