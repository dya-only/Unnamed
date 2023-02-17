// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Xlsx from 'read-excel-file/node'
import laftel from 'laftel.js'

type Data = {
  data: any
  images: any
  ids: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const map = {
    Title: "title",
    Day: "week",
  }

  const Week = ['일', '월', '화', '수', '목', '금', '토']
  
  Xlsx('src/assets/2023-1.xlsx', { map }).then(async ({ rows }: any) => {
    const Today = Week[new Date().getDay()]
    let imgs: any = []
    let animes: any = []
    let ids: any = []
    
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].week === Today) animes.push(rows[i])
    }

    for (let j = 0; j < animes.length; j++) {
      await laftel.search(animes[j].title).then((result) => {
        imgs.push(result.results[0].images[0].img_url)
        ids.push(result.results[0].id)
      })
    }

    res.status(200).json({ data: animes, images: imgs, ids: ids })

  })
}