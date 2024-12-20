
import React from 'react'
import { Button } from './ui/button'
import { SparklesCore } from './ui/sparkles'
const Events = () => {
  return (
    <>
        <div className="  relative  bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className='flex flex-col justify-between py-6 gap-8 z-20'>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Events
      </h1>
      <p className='text-white z-20 px-[6rem] md:px-[10rem] text-justify'>We will continuously organize events to engage users in adding data to the platform, which can be further used to calibrate our search engine's accuracy.
      These events can be anything from hackathons to data collection drives to educational workshops. We want to create a community of users who are passionate about improving our search engine and making it the best it can be. Data collection drives: We could organize data collection drives where users help us to collect new data for our search engine. This could involve anything from scraping the web to transcribing historical documents. Educational workshops: We could host educational workshops to teach users about the importance of data quality and how to collect data responsibly. We could also teach users how to use our search engine and how to provide feedback to help us improve it. We believe that by engaging users in the data collection and curation process, we can create a search engine that is more accurate and relevant to the needs of our users.</p>
      <Button variant="destructive" className='w-[10vw] text-sm font-medium mx-[10rem] px-[5rem] '>Read More...</Button>
      </div>
    </div>
    </>
  )
}

export default Events