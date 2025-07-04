import React from 'react'

export default function page() {
  return (
    <div className="mt-44 mb-24">
      <div className="px-24 max-xl:px-16 max-lg:px-12 max-md:px-8 max-sm:px-4 grid gap-24 w-full justify-center">
        <div className="w-2xl max-sm:w-full flex flex-col">
          <h1 className="text-5xl max-md:text-4xl leading-14 max-md:leading-10 text-center font-semibold text-neutral-400"><span className="text-black">Hi, I'm Haris.</span><br />A Full-stack <span className="text-green-600">developer</span> focused on clean UI and <span className="text-blue-600">fast</span> applications.</h1>
        </div>
        <div className="w-2xl max-sm:w-full flex flex-col items-center gap-8">
          <h1 className="text-5xl max-md:text-4xl leading-14 max-md:leading-10 text-center font-semibold text-black"><span className="text-neutral-400 uppercase text-sm">Get in touch</span><br />Let's Create Cool Stuff Together!</h1>
          <button className="w-fit cursor-pointer text-sm font-medium px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full">Start Project</button>
        </div>
      </div>
    </div>
  )
}
