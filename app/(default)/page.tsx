export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import FindABook from '@/components/find-a-book'
import Bookfeatures from '@/components/Bookfeatures'
import NewBooks from '@/components/newBooks'


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Bookfeatures/>
       <FindABook/>
       <NewBooks/>
       <Testimonials />
      <Newsletter />

     
    </>
  )
}
