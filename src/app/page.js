import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center mt-24'>
        {/* <Image 
          src=
          width={300}
          height={100}
        /> */}
        <img src='https://freelogopng.com/images/all_img/1657952217google-logo-png.png' width={380} height={100}/>
        <HomeSearch />

      </div>
    </>
  )
}

export default page