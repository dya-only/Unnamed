// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import laftel from 'laftel.js'

type Data = {
  anime: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const params = req.query as any
    console.log(params.name)
    
    await laftel.search(params.name).then((result) => {
      res.status(200).json({ anime: result.results[0] })
    })
  } else {
    // Handle any other HTTP method
  }
}