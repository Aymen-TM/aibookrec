import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { json } from 'stream/consumers'

type Props = {}

const index = ({resData}: any) => {
  
 
  return (
    <div className='h-screen'>
      <div className='h-full w-full flex flex-col justify-center items-center'>
        <Image src={resData.image} width={200} height={200} alt="thumbnail" />
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

 
  
  return { props: { resData } };
}