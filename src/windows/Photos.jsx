import React, { useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { WindowControls } from '#components'
import { gallery } from '#constants'
import { Search, Image as ImageIcon, Layers, Heart } from 'lucide-react'

const Photos = () => {
  // Duplicate gallery items to create a dense grid
  const items = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    img: gallery[i % gallery.length].img
  }))

  return (
    <>
      {/* Top Header Controls (macOS style window dots) */}
      <div id='window-header' className="bg-[#1c1c1e] border-b border-black/50 z-50 relative">
        <WindowControls target="photos" />
        <p className="text-white/50 text-xs font-semibold">Photos</p>
      </div>

      <div className='relative w-full h-full bg-black overflow-y-auto pb-24 no-scrollbar'>
        
        {/* iOS Sticky Header */}
        <div className='sticky top-0 z-20 px-4 h-12 bg-[#1c1c1e]/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center'>
          <div className="w-16"></div> {/* Spacer for alignment */}
          <h1 className='text-white text-base font-semibold tracking-wide'>All Photos</h1>
          <button className='text-blue-500 text-[15px] font-medium w-16 text-right'>
            Select
          </button>
        </div>

        {/* Image Grid */}
        <div className='grid grid-cols-4 sm:grid-cols-5 gap-[1px] bg-black'>
          {items.map((item) => (
            <div key={item.id} className='relative aspect-square w-full'>
              <img 
                src={item.img} 
                alt="Gallery item" 
                className='w-full h-full object-cover object-center'
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* iOS Classic Bottom Nav Bar */}
        <div className='fixed bottom-0 w-full bg-[#1c1c1e]/80 backdrop-blur-xl border-t border-white/10 pb-6 pt-2 px-2 flex justify-around items-center z-30 pointer-events-auto'>
          
          <button className='flex flex-col items-center justify-center w-16 text-blue-500'>
            <ImageIcon size={24} className="mb-1 stroke-[1.5] fill-blue-500/20" />
            <span className='text-[10px] font-medium'>Photos</span>
          </button>
          
          <button className='flex flex-col items-center justify-center w-16 text-gray-400 hover:text-white transition-colors'>
            <Heart size={24} className="mb-1 stroke-[1.5]" />
            <span className='text-[10px] font-medium'>For You</span>
          </button>

          <button className='flex flex-col items-center justify-center w-16 text-gray-400 hover:text-white transition-colors'>
            <Layers size={24} className="mb-1 stroke-[1.5]" />
            <span className='text-[10px] font-medium'>Albums</span>
          </button>
          
          <button className='flex flex-col items-center justify-center w-16 text-gray-400 hover:text-white transition-colors'>
            <Search size={24} className="mb-1 stroke-[2]" />
            <span className='text-[10px] font-medium'>Search</span>
          </button>

        </div>
      </div>
    </>
  )
}

const PhotosWindow = WindowWrapper(Photos, "photos")
export default PhotosWindow
