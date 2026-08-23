import React, { useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { WindowControls } from '#components'
import { gallery } from '#constants'
import { Search, Image as ImageIcon, Layers, ListFilter } from 'lucide-react'

const Photos = () => {
  // Duplicate gallery items to create a dense grid
  const items = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    img: gallery[i % gallery.length].img
  }))

  return (
    <>
      {/* Top Header Controls (macOS style window dots) */}
      <div id='window-header' className="bg-[#0e0e0e] border-b border-white/10">
        <WindowControls target="photos" />
        <p className="text-white/50 text-xs font-semibold">Photos</p>
      </div>

      <div className='relative w-full h-full bg-black overflow-y-auto pb-32 no-scrollbar'>
        
        {/* iOS Sticky Header */}
        <div className='sticky top-0 z-20 px-4 pt-6 pb-2 ios-glass border-b border-white/5 flex justify-between items-end'>
          <div>
            <h1 className='text-white text-3xl font-bold tracking-tight'>Library</h1>
            <p className='text-gray-400 text-xs mt-0.5 font-medium'>1,908 Items</p>
          </div>
          
          <div className='flex items-center gap-2 mb-1'>
            <button className='bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full size-8 flex items-center justify-center text-white'>
              <ListFilter size={16} />
            </button>
            <button className='bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 text-white text-sm font-semibold'>
              Select
            </button>
          </div>
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

        {/* Floating Bottom Nav */}
        <div className='fixed bottom-6 left-1/2 -translate-x-1/2 z-30'>
          <div className='ios-glass bg-[#1c1c1e]/80 backdrop-blur-3xl border border-white/10 rounded-full flex items-center p-1.5 shadow-2xl'>
            
            <button className='flex flex-col items-center justify-center w-20 py-2 rounded-full bg-white/10 text-white'>
              <ImageIcon size={22} className="mb-1" />
              <span className='text-[10px] font-medium'>Library</span>
            </button>
            
            <button className='flex flex-col items-center justify-center w-24 py-2 rounded-full text-gray-400 hover:text-white transition-colors'>
              <Layers size={22} className="mb-1" />
              <span className='text-[10px] font-medium'>Collections</span>
            </button>
            
            <button className='flex flex-col items-center justify-center w-20 py-2 rounded-full text-gray-400 hover:text-white transition-colors'>
              <Search size={22} className="mb-1" />
              <span className='text-[10px] font-medium'>Search</span>
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

const PhotosWindow = WindowWrapper(Photos, "photos")
export default PhotosWindow
