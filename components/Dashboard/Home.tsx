import {
  Clock3,
  Flag,
  Hourglass,
  TicketCheck,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div className="w-full h-[95dvh] text-black">
      <h1 className="text-[2rem] font-bold text-blue-600 p-3 italic font-sans">
        Welcome <span className="not-italic font-serif">Vidhya Sagar</span>
      </h1>
      <div className="w-full min-h-[80vh] p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
          {/* Card 1 - Completed */}
          <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-sky-700 bg-opacity-90 backdrop-blur-sm p-4 shadow-lg">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center ">
                <h1 className="text-zinc-200 uppercase font-semibold leading-10 text-lg tracking-wider border-l-4 border-violet-100 pl-2">
                  Total
                </h1>
                <Flag />
              </div>
              <p className="text-2xl font-semibold text-white">37</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-gradient-to-br from-green-600 to-lime-500 bg-opacity-90 backdrop-blur-md p-4 shadow-lg">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center ">
                <h1 className="text-zinc-200 uppercase font-semibold leading-10 text-lg tracking-wider border-l-4 border-violet-100 pl-2">
                  Completed
                </h1>
                <TicketCheck />
              </div>
              <p className="text-2xl font-semibold text-white">30</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-gradient-to-br from-yellow-600 to-amber-300 bg-opacity-90 backdrop-blur-md p-4 shadow-lg">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center ">
                <h1 className="text-zinc-200 uppercase font-semibold leading-10 text-lg tracking-wider border-l-4 border-violet-100 pl-2">
                  InProgress
                </h1>
                <Hourglass />
              </div>
              <p className="text-2xl font-semibold text-white">2</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl bg-gradient-to-br from-red-500 to-red-800 bg-opacity-90 backdrop-blur-md p-4 shadow-lg">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center ">
                <h1 className="text-zinc-200 uppercase font-semibold leading-10 text-lg tracking-wider border-l-4 border-violet-100 pl-2">
                  Todo
                </h1>
                <Clock3 />
              </div>
              <p className="text-2xl font-semibold text-white">5</p>
            </div>
          </div>

          {/* Card 5 - Tall vertical card */}
          <div className="bg-[#4f4f4f] bg-opacity-30 backdrop-blur-md md:row-span-3 rounded-2xl p-4 shadow-lg">
            <h3 className="text-zinc-200 uppercase font-semibold leading-10 text-lg tracking-wider border-l-4 border-violet-500 pl-2 mb-4">
              Projects
            </h3>
            <div className="projects ">
              <div className="project1 bg-opacity-70 backdrop-blur-lg rounded-2xl p-3 shadow-md h-12 cursor-pointer flex items-center justify-center mt-4 border border-violet-600 bg-violet-500 transition duration-300 ">
                <p className="text-white font-thin text-center capitalize">
                  Legal Notice Management
                </p>
              </div>
              <div className="project2 bg-opacity-70 backdrop-blur-lg rounded-2xl p-3 shadow-md h-12 cursor-pointer flex items-center justify-center mt-4 border border-yellow-400 bg-yellow-400 hover:text-black transition duration-300 ">
                <p className="text-white font-thin text-center capitalize">
                  Vinamra Arts
                </p>
              </div>
              <div className="project3 bg-opacity-70 backdrop-blur-lg rounded-2xl p-3 shadow-md h-12 cursor-pointer flex items-center justify-center mt-4 border border-teal-600 bg-teal-500 transition duration-300 has:hover:bg-opacity-20">
                <p className="text-white font-thin text-center capitalize">
                  VIP
                </p>
              </div>
              <div className="project4 bg-opacity-70 backdrop-blur-lg rounded-2xl p-3 shadow-md h-12 cursor-pointer flex items-center justify-center mt-4 border border-lime-700 bg-lime-500 transition duration-300 has:hover:bg-opacity-20">
                <p className="text-white font-thin text-center capitalize">
                  Qodeways
                </p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
            <div className="Quote rounded-2xl border p-4 shadow-lg md:col-span-2 ">
              
            </div>

          {/* Card 8 - Wide card */}
          <div className="bg-[#4f4f4f] bg-opacity-30 backdrop-blur-xl md:col-span-2 md:row-span-2 rounded-2xl p-4 shadow-lg">
            <h3 className="text-zinc-200 uppercase font-semibold leading-10 text-lg tracking-wider border-l-4 border-violet-500 pl-2 mb-2">
              Engagement Analysis
            </h3>
            <div className="h-44 relative">
              <svg viewBox="0 0 140 50" className="w-full h-full">
                {/* Y-axis values */}
                <text x="0" y="10" fontSize="3" fill="white">
                  100
                </text>
                <text x="0" y="25" fontSize="3" fill="white">
                  50
                </text>
                <text x="0" y="40" fontSize="3" fill="white">
                  0
                </text>

                {/* X-axis months */}
                <text x="15" y="48" fontSize="3" fill="white">
                  Jan
                </text>
                <text x="30" y="48" fontSize="3" fill="white">
                  Feb
                </text>
                <text x="45" y="48" fontSize="3" fill="white">
                  Mar
                </text>
                <text x="60" y="48" fontSize="3" fill="white">
                  Apr
                </text>
                <text x="75" y="48" fontSize="3" fill="white">
                  May
                </text>
                <text x="90" y="48" fontSize="3" fill="white">
                  Jun
                </text>
                <text x="105" y="48" fontSize="3" fill="white">
                  Jul
                </text>
                <text x="120" y="48" fontSize="3" fill="white">
                  Aug
                </text>

                {/* Graph line */}
                <polyline
                  points="10,40 25,30 40,35 55,20 70,25 85,10 100,15 115,5 130,20"
                  fill="none"
                  stroke="violet"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>

          {/* Card 9 - Fixed position */}
          <div className="Active_contacts bg-[#4f4f4f] bg-opacity-30 backdrop-blur-xl md:col-start-4 md:row-start-2 md:row-span-4 rounded-2xl p-4 shadow-lg">
            <h1 className="text-zinc-200 uppercase font-semibold leading-10 text-base tracking-wider border-l-4 border-violet-500 pl-2 mb-4">
              Active Contacts
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <p className="text-lg font-semibold text-zinc-200">Swapnil</p>
                  <p className="text-sm text-zinc-400">Senior Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div>
                  <p className="text-lg font-semibold text-zinc-200">Pratap</p>
                  <p className="text-sm text-zinc-400">Senior Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <p className="text-lg font-semibold text-zinc-200">
                    Rahul Yadav
                  </p>
                  <p className="text-sm text-zinc-400">Intern</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <p className="text-lg font-semibold text-zinc-200">Rishi</p>
                  <p className="text-sm text-zinc-400">Intern</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-pink-600 flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="text-lg font-semibold text-zinc-200">
                    Akshitha
                  </p>
                  <p className="text-sm text-zinc-400">Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center text-white font-bold">
                  V
                </div>
                <div>
                  <p className="text-lg font-semibold text-zinc-200">
                    Vidhya Sagar
                  </p>
                  <p className="text-sm text-zinc-400">Intern</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 10 - Wide bottom card */}
          <div className="bg-[#4f4f4f] bg-opacity-40 backdrop-blur-md md:col-span-3 rounded-2xl p-4 shadow-lg">
            <h1 className="text-zinc-200 uppercase font-semibold leading-10 text-lg tracking-wider border-l-4 border-violet-500 pl-2">
              Social Media
            </h1>
            {/* <div className="flex gap-4 mt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-black flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-black flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
              >
                <i className="fab fa-medium-m text-xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
              >
                
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div> */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="https://github.com/vidhyasagargslv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="github w-12 h-12 rounded cursor-pointer">
                  <Image
                    src="/github.png"
                    alt="GitHub"
                    width={50}
                    height={50}
                  />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/vidhyasagargandi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="linkedin w-12 h-12 rounded cursor-pointer">
                  <Image
                    src="/linkedin.png"
                    alt="Linkedin"
                    width={50}
                    height={50}
                  />
                </div>
              </Link>

              <Link
                href="https://medium.com/@vidhyasagargandi2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="medium w-12 h-12 rounded cursor-pointer">
                  <Image
                    src="/medium.png"
                    alt="medium"
                    width={50}
                    height={50}
                  />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/vidhya_sagar_gslv___/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="Insta w-12 h-12 rounded cursor-pointer">
                  <Image
                    src="/instagram-48.png"
                    alt="Insta"
                    width={50}
                    height={50}
                  />
                </div>
              </Link>
              <Link
                href="https://x.com/Vidhyasagargslv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="X w-12 h-12 rounded cursor-pointer">
                  <Image src="/X.png" alt="X" width={50} height={50} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
