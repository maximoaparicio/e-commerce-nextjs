import Image from 'next/image'

import Searchbar from '@/components/Searchbar'
import HeroCarousel from '@/components/HeroCarousel'

export default function Home() {
  return (
    <>
      <section className="px-6 py-24 md:px-20  md:py-12">
        <div className="flex gap-16 max-xl:flex-col">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image alt="arrow-right" height={16} src="/assets/icons/arrow-right.svg" width={16} />
            </p>
            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> BestPrice</span>
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you convert, engage, and
              retain more.
            </p>
            <Searchbar />
          </div>
          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">nigger</div>
      </section>
    </>
  )
}
