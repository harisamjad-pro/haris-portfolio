import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 w-full">
      <nav className="px-24 max-xl:px-16 max-lg:px-12 max-md:px-8 max-sm:px-4 py-6 flex items-center justify-center">
        <ul className="px-2 py-2 bg-neutral-200/40 backdrop-blur-xl rounded-full text-base font-medium text-black max-sm:w-full">
          <li className="flex items-center justify-between gap-24 max-sm:gap-6">
            <Link href="/" className="relative">
              <Image
                src="/Haris.jpg"
                alt="Haris Amjad"
                width={96}
                height={96}
                className="w-12 h-12 object-cover rounded-full relative z-20"
              />
              <div className="w-full h-full bg-green-400 rounded-full animate-ping absolute z-10 left-0 top-0"></div>
            </Link>
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Work</Link>
              </li>
              <li>
                <Link href="/" className="bg-neutral-800 text-green-400 px-4 py-2 rounded-full">Contact</Link>
              </li>
            </ul>
          </li>
          {/* <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/" className="bg-neutral-800 text-green-400 px-4 py-2 rounded-full">Contact</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}
