/* eslint-disable react/jsx-sort-props */
'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

const heroImages = [
  { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch' },
  { imgUrl: '/assets/images/hero-2.svg', alt: 'bag' },
  { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp' },
  { imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer' },
  { imgUrl: '/assets/images/hero-5.svg', alt: 'chair' },
]

function HeroCarousel() {
  return (
    <div className="hero-carousel">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        // interval={2000}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            key={image.alt}
            alt={image.alt}
            className="object-contain"
            height={484}
            src={image.imgUrl}
            width={484}
          />
        ))}
      </Carousel>

      <Image
        alt="arrow"
        className="absolute -left-[15%] bottom-0 z-0 max-xl:hidden"
        height={175}
        src="assets/icons/hand-drawn-arrow.svg"
        width={175}
      />
    </div>
  )
}

export default HeroCarousel
