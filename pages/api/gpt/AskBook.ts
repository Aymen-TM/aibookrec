// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import query from '@/lib/queryAPI'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  bookTitle: string | undefined,
  image:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {Author,Category} = req.body
  let prompt =""
  if(Author!=""){
    prompt = `recommend a random book title in the ${Category} category by ${Author}?`
  }else{
    prompt = `recommend a random book title in the ${Category} category?`
  }


    // ChatGPT query
    const title = await query(prompt)

    //Google Books api
    const googleApiRes = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
    const googleApiData = await googleApiRes.json()
    const image = googleApiData.items[0].volumeInfo.imageLinks.thumbnail
    
    
  res.status(200).json({ bookTitle: title,image:image })
}
