import React from 'react'
import Image from 'next/image'
import ArrowIcon from '../../../public/images/ArrowIcon.png'
import EngClass from '../../../public/images/EngClass.png'
import ArabicClass from '../../../public/images/ArabicClass.png'
import Women from '../../../public/images/Women.svg'
import Girl from '../../../public/images/Girl.svg'
import Boy from '../../../public/images/Boy.svg'
import Buttons from '@/app/components/Buttons'
import ShadowButton from '@/app/components/ShadowButton'
function ShceduleCourse() {
    return (
        <div className='lg:pl-20'>
            <div className="grid">
                <ShadowButton text='COURSES'/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className='col-span-1 sm:col-span-1'>
                    <p className='uppercase [font-size:_clamp(1.5em,5vw,2.5em)]'>Schedule & <br /> Courses</p>
                    <p className=''>You are welcome to schedule and visit the center for one-on-one sessions to learn more about Islam, to become a Muslim or to learn to pray.</p>
                    <div className='my-5'>
                        <Buttons text='View All Courses' icon={ArrowIcon} bgColor={'#FAD8DF'} />
                    </div>
                    <div className='flex'>
                        <Image src={Girl} className='mr-5' />
                        <Image src={Women} className='mr-5' />
                        <Image src={Boy} className='mr-5' />
                    </div>
                </div>
                <div className='col-span-1 sm:col-span-1'>
                    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg">
                        <Image className="w-full" src={EngClass} alt="Women's English Class" />
                        <div className="absolute bottom-0 left-0 right-0  bg-opacity-50 p-4">
                        <Buttons text='Every Sunday, 4:45PM - 6:00PM' bgColor={'#F6D6C8'} />
                            <div className="font-normal text-white text-2xl my-1">Women's English classes</div>
                            <p className="text-sm text-white">Women Only | Free of charge</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 sm:col-span-1'>
                    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg">
                        <Image className="w-full" src={ArabicClass}  height={310} alt="Women's English Class" />
                        <div className="absolute bottom-0 left-0 right-0  bg-opacity-50 p-4">
                        <Buttons text='Every Sunday, 4:45PM - 6:00PM' bgColor={'#F6D6C8'} />
                            <div className="font-normal text-white text-2xl my-1">Women's English classes</div>
                            <p className="text-sm text-white">Women Only | Free of charge</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShceduleCourse
