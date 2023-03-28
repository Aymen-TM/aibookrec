import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const index = ({resData,image}: any) => {
  
 
  return (
    <div className='h-screen'>
      <div className='h-full w-full flex flex-col justify-center items-center'>
        <Image src={image} width={200} height={200} alt="thumbnail" />
        <h1>{resData.bookTitle}</h1>
      </div>
    </div>
  )
}



export default index


export async function getServerSideProps({ query }:any) {
  const { Author,Category} = query;
  const data ={ Author,Category}


 

  const res = await fetch("http://localhost:3000/api/gpt/AskBook",{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  })
  const resData = await res.json()


    //Google Books api
    const googleApiRes = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${resData.bookTitle}`)
    const googleApiData = await googleApiRes.json()
    const image = googleApiData.items[0].volumeInfo.imageLinks.thumbnail

 
  
  return { props: { resData,image } };
}