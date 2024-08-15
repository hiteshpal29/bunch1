import React from 'react'

import Design2Section from './degine2Section'
import Group10Wrapper from './group10Wrapper'
import Group2Section from './group2section'
import Group3Section from './gropu3section'
import ImageSection from './imageSection'
import WrapperSection from './wrapper'
import Design4Section from './degine4Section'
import DesignSection from './degineSection'
import Design3Section from './degine3Section'
import Group11 from './group11'



const Home =()=>{
    return(
        <>
         <div className="background">
      <DesignSection />
      <Group2Section />
      <Group3Section />
      <ImageSection />
      <Design2Section />
      <Design3Section />
      <WrapperSection />
      <section class="group-8"></section>
      <Design4Section />
      <Group10Wrapper />
      <Group11 />
    </div>
        </>
    )
}

export default Home