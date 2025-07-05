import React from 'react'

export default function page() {
  return (
    <div className="mt-44 mb-24">
      <div className="px-24 max-xl:px-16 max-lg:px-12 max-md:px-8 max-sm:px-4 grid gap-24 w-full justify-center">
        <div className="mx-auto w-2xl max-sm:w-full text-center flex flex-col items-center gap-8">
          <h1 className="text-5xl max-md:text-4xl leading-14 max-md:leading-10 font-semibold text-neutral-500"><span className="text-black">Hi, I'm Haris.</span><br />A full-stack <span className="text-green-600">developer</span> focus on clean UI and <span className="text-blue-600">fast</span> apps.</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-neutral-200/40 rounded-3xl p-6 flex flex-col gap-6">
            <div>
              <h2 className="text-sm font-semibold text-neutral-500">Coding Since</h2>
              <p className="text-4xl leading-10 font-semibold text-black">April 2020</p>
            </div>
            <div className="flex flex-col gap-0 text-sm text-neutral-500 bg-white p-4 rounded-xl font-mono">
              <span>{`<!DOCTYPE html>`}</span>
              <span className="ps-4">{`<html lang="en">`}</span>
              <span className="ps-8">{`<head>`}</span>
              <span className="ps-12">{`<meta charset="UTF-8" />`}</span>
              <span className="ps-12">{`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`}</span>
              <span className="ps-8">{`<title>Document</title>`}</span>
              <span className="ps-4">{`</head>`}</span>
              <span className="ps-4">{`<body>`}</span>
            </div>
          </div>
          <div className="bg-neutral-200/40 flex flex-col">
            <code>{`<!DOCTYPE html>`}</code>
          </div>
        </div>
        <div className="mx-auto w-2xl max-sm:w-full text-center flex flex-col items-center gap-8">
          <h1 className="text-5xl max-md:text-4xl leading-14 max-md:leading-10 text-center font-semibold text-black"><span className="text-neutral-500 uppercase text-sm">Get in touch</span><br />Let's Create Cool Stuff Together!</h1>
          <button className="w-fit cursor-pointer text-sm font-medium px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full">Start Project</button>
        </div>
      </div>
    </div>
  )
}
