// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Xlsx from 'read-excel-file/node'
import laftel from 'laftel.js'

type Data = {
  data: any
  images: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const map = {
    Title: "title",
    Day: "week",
  }
  
  Xlsx('./src/assets/2023-1.xlsx', { map }).then(async ({ rows }: any) => {
    let imgs: any = []

    // rows.forEach((x: object, idx: number) => {
    //   laftel.search(rows[0].title).then(result => {
    //     imgs.push(result.results[idx].images[0].img_url)
    //     // imgs = result.results[0].images[0].img_url
    //     res.status(200).json({ data: rows, images: imgs })
    //   })
    // })

    for (let i = 0; i < rows.length; i++) {
      await laftel.search(rows[i].title).then((result) => {
        imgs.push(result.results[0].images[0].img_url)
        // console.log('---------------------\n' + result.results[0].images[0].img_url)
        // imgs = result.results[0].images[0].img_url
      })
    }
    res.status(200).json({ data: rows, images: imgs })

  })
}