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

    await laftel.search(params.name).then(result => {
      const [anime] = result.results
      if (anime != null || anime != undefined) {
        laftel.getItem(anime.id).then(result => {
          res.status(200).json({ anime: result })
        })
      } else {
        res.status(200).json({ anime: 'not found' })
      }
    })
  } else {
    // Handle any other HTTP method
  }
}