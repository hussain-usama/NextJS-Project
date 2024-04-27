import Image from 'next/image'
import React from 'react'
import Buttons from '@/app/components/Buttons'
import RightCover from '../../../public/images/RightCover.png'
import ArrowIcon from '../../../public/images/ArrowIcon.png'
import Facebook from '../../../public/images/Facebook.png'
import Instra from '../../../public/images/Instra.png'
import TwitterX from '../../../public/images/TwitterX.png'
import Youtube from '../../../public/images/Youtube.png'

function HomeCover() {
  return (
    <div>
      <div className="grid align-center grid-cols-5 gap-4">
        <div className=" col-start-2 col-span-3">
          <p className="font-normal leading-none uppercase [font-size:_clamp(1.5em,5vw,3.5em)] [color:#BABCC5] " > spreading the</p>
          <p className="font-normal leading-none uppercase [font-size:_clamp(1.5em,5vw,3.5em)] [color:#BABCC5] " >knowledge & love</p>
          <p className="font-normal leading-none uppercase [font-size:_clamp(1.5em,5vw,3.5em)] [color:#BABCC5] lg:[margin-left:18rem] " >of Allah</p>

          <div className='my-5'>
            <p>A non-profit Islamic Center under the supervision of the <br /> Department of Islamic Affairs and Charitable Activities <br /> in the Emirate of Dubai.</p>
            <div className='my-5'>
              <Buttons text='Learn more' bgColor={'#FAD8DF'} icon={ArrowIcon} />
            </div>
          </div>
        </div>
        <div className="">
          <Image src={RightCover} className='hidden sm:block' />
        </div>
        <div className="col-span-5 bg-cover bg-center bg-no-repeat lg:[margin-top:-16rem] [padding:4rem]" style={{ backgroundImage: "url('images/Shadow.png')" }}>
          <div className='flex'>
            <Image src={Facebook} className='mr-1' />
            <Image src={Instra} className='mr-1' />
            <Image src={TwitterX} className='mr-1' />
            <Image src={Youtube} className='mr-1' />

          </div>
        </div>
      </div>


    </div>
  )
}

export default HomeCover
