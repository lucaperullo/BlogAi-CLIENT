import { Show, SimpleGrid } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel } from 'swiper';
import Card from 'lib/components/card';
import { useEffect } from 'react';
import { useStateValue } from 'context/stateProvider';


export default function () {
  const [state,dispatch] = useStateValue()
  useEffect(() => {
    console.log(state)
  }, [])
  return (
    <SimpleGrid column={{
      base: 1,
      lg: 2,
      xl: 3,
    }}>
      <Show above='sm'>

      </Show>
      <Swiper
      style={{width: '100%', height: '400px'}}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className="mySwiper"
      >
       {Array.from({ length: 10 }).map((_, i) => (
          <SwiperSlide key={i}>
            <Card size="lg"
              title="Title"
              content="Content"
              cover="https://images.unsplash.com/photo-1611831928379-8e1b0e1b2b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
          </SwiperSlide>
       ))}
      </Swiper>
    
    </SimpleGrid>
  )
}
