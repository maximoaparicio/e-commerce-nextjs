import Image from 'next/image'
import Link from 'next/link'

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' },
  { src: '/assets/icons/black-heart.svg', alt: 'heart' },
  { src: '/assets/icons/user.svg', alt: 'user' },
]

function Navbar() {
  return (
    <header className="text-xl font-bold leading-[3rem]">
      <nav className="nav">
        <Link className="flex items-center gap-1" href="/">
          <Image alt="logo" height={27} src="/assets/icons/logo.svg" width={27} />
          <p className="nav-logo">
            Best<span className="text-primary">Price</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              alt={icon.alt}
              className="object-contain"
              height={27}
              src={icon.src}
              width={27}
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
