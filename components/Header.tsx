"use client";
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { HiOutlineSun } from 'react-icons/hi';

export default function Header() {
  return (
    <header className="fixed top-0 w-full">
      <nav className="px-24 max-xl:px-16 max-lg:px-12 max-md:px-8 max-sm:px-4 py-6 flex items-center justify-center">
        <ul className="ps-2 pe-4 py-2 border border-neutral-200 bg-neutral-200/20 backdrop-blur-xl rounded-full text-sm font-medium text-black max-sm:w-full">
          <li className="flex items-center justify-between gap-24 max-sm:gap-6">
            <Link href="/" className="relative">
              <Image
                src="/Haris.jpg"
                alt="Haris Amjad"
                width={96}
                height={96}
                className="w-12 h-12 object-cover rounded-full relative z-20"
              />
              <div className="w-full h-full bg-blue-400 rounded-full animate-ping scale-[70%] absolute z-10 left-0 top-0"></div>
            </Link>
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/" className="hover:text-blue-600">About</Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-600">Work</Link>
              </li>
              <li>
                <Link href="/" className="bg-neutral-800 hover:bg-black text-blue-400 px-4 py-2 rounded-full">Contact</Link>
              </li>
              {/* <li>
                <button onClick={() => console.log("Toggle Mode")} className="flex"><HiOutlineSun className="size-4" /></button>
              </li> */}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
