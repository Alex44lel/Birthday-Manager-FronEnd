import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="text-center mb-8 md:mb-4 border-t border-gray-800">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5 mt-10">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <img className="w-10 h-10 fill" src='/images/logo.png'/>
                </Link>
              </div>
              <div className="text-gray-600">This is a free proyect created to help those who struggle with birthday management</div>
            </div>

           

          </div>

          {/* Bottom area */}
          <div className="text-center">

            
            {/* Copyrights note */}
            <div className="text-gray-600 text-sm mr-4">&copy; Alejandro Cañada. All rights reserved.</div>

          </div>
        </div>
      </div>
    </footer>
  )
}
