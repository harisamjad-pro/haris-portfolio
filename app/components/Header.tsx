import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <nav className="px-4 py-6 flex gap-3 items-center justify-center">
        <ul className="ps-3 pe-4 py-2 flex items-center gap-6 bg-black rounded-full text-base font-normal text-gray-200">
          <li>
            <Link href="/">
              <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-r from-[#05A3FE] to-[#0548FE]">
                <Image
                  src="/Haris.jpg"
                  alt="Haris Amjad"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <div className="border-4 bg-black w-4 h-4 rounded-full border-black relative">
          <span className="bg-orange-400 w-2 h-2 rounded-full animate-pulse absolute"></span>
        </div>
      </nav>
    </header>
  )
}
