import React from 'react'

function Contact() {
  return (
    <div className="w-full h-[95dvh] grid grid-cols-1 gap-4 mt-32 sm:grid-cols-2 md:grid-cols-8 md:grid-rows-5">
      <div className="sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-3 border border-white rounded">
        <section className="Links h-full bg-white shadow-lg p-5">
          <div className="flex flex-col justify-center items-center mb-5">
            <img
              src="/link.png"
              alt="Links"
              className="aspect-auto w-24 mb-3"
            />
            <p className="text-center text-lg font-semibold text-gray-700">
              Social Links
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              GitHub
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition"
            >
              Twitter
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            >
              LinkedIn
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
      <div className="sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-2 md:col-start-3 border border-white rounded-md">
        2
      </div>
      <div className="sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-2 md:col-start-5 border border-white rounded-md">
        3
      </div>
      <div className="sm:col-span-2 sm:row-span-1 md:col-span-3 md:row-span-2 md:col-start-3 md:row-start-3 border border-white rounded-md">
        4
      </div>
      <div className="sm:col-span-2 sm:row-span-1 md:col-span-3 md:row-span-2 md:col-start-6 md:row-start-3 border border-white rounded-md">
        5
      </div>
      <div className="sm:col-span-1 sm:row-span-1 md:col-start-7 md:row-start-1 border border-white rounded-md">
        6
      </div>
      <div className="sm:col-span-1 sm:row-span-1 md:col-start-8 md:row-start-1 border border-white rounded-md">
        7
      </div>
      <div className="sm:col-span-1 sm:row-span-1 md:col-start-7 md:row-start-2 border border-white rounded-md">
        8
      </div>
      <div className="sm:col-span-1 sm:row-span-1 md:col-start-8 md:row-start-2 border border-white rounded-md">
        9
      </div>
      <div className="sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-start-4 border border-white rounded-md">
        12
      </div>
    </div>
  );
}

export default Contact