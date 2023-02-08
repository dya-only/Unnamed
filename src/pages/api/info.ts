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
  if (req.method === 'POST') {
    const params = req.body
    
    await laftel.search(params.name).then((result) => {
      console.log(result.results[0])
      res.status(200).json(JSON.stringify(result.results[0]))
    })
  } else {
    // Handle any other HTTP method
  }
}