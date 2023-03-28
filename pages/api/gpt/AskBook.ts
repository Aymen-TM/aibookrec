// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import query from '@/lib/queryAPI'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  bookTitle: string | undefined,
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
    
    
  res.status(200).json({ bookTitle: title})
}
