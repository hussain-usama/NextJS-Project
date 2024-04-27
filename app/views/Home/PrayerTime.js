import Buttons from '@/app/components/Buttons'
import React from 'react'
import ArrowIcon from '../../../public/images/ArrowIcon.png'
import FajarIcon from '../../../public/images/FajarIcon.png'
import ZuhrIcon from '../../../public/images/ZuhrIcon.png'
import Asricon from '../../../public/images/Asricon.png'
import MaghribIcon from '../../../public/images/MaghribIcon.png'
import IshaIcon from '../../../public/images/IshaIcon.png'
import Image from 'next/image'

const parayerSchedule = [
    {
        name: 'Fajr',
        icon: FajarIcon,
        gradientto: 'from-prayer-one-to',
        gradientFrom: 'to-prayer-one-from',
        time: '5:24',
        textColor: 'text-black'
    },
    {
        name: 'Dhuhr',
        icon: ZuhrIcon,
        gradientto: 'from-prayer-two-to',
        gradientFrom: 'to-prayer-two-from',
        time: '12:10',
        textColor: 'text-black'
    },
    {
        name: 'Asr',
        icon: Asricon,
        gradientto: 'from-prayer-three-to',
        gradientFrom: 'to-prayer-three-from',
        time: '3:09',
        textColor: 'text-black'
    },
    {
        name: 'Magrib',
        icon: MaghribIcon,
        gradientto: 'from-prayer-four-to',
        gradientFrom: 'to-prayer-four-from',
        time: '5:24',
        textColor: 'text-black'
    },
    {
        name: 'Isha',
        icon: IshaIcon,
        gradientto: 'from-prayer-five-to',
        gradientFrom: 'to-prayer-five-from',
        time: '6:50',
        textColor: 'text-white'
    },
]
function PrayerTime() {
    return (
        <div className='p-10 [background:#F7FBFC]'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className='col-span-1 sm:col-span-1'>

                    <p className='uppercase font-normal [font-size:50px]'>Prayer Timing</p>
                    <div className='flex'>
                        <p className='[color:#C8AC91] mr-1'>29th November 2023</p>
                        <p>Wednesday, 15th Jamada Al Awwal, 1445</p>
                        <p>Dubai, U.A.E</p>
                    </div>
                </div>
                <div className='col-span-1 sm:col-span-1'>
                    <div className='flex justify-end'>
                        <div className='mr-2'>
                            <Buttons text='How to pray' icon={ArrowIcon} bgColor={'#AEDBE1'} />
                        </div>
                        <Buttons text='Calculate Prayer Time' icon={ArrowIcon} bgColor={'#FAD8DF'} />
                    </div>
                </div>
            </div>
            <div className=" my-5 grid grid-cols-5 sm:grid-cols-5 gap-4">
                {parayerSchedule.map(item => {

                    return (
                        <div key={item.name} className='col-span-1 sm:col-span-1'>
                            <div class={`rounded-3xl bg-gradient-to-b ${item.gradientto} ${item.gradientFrom} relative [height:300px] [width:auto] text-center`} >
                                <div className='pt-5 w-100 flex justify-center'>
                                    <Image src={item.icon} alt={item?.name} />
                                </div>
                                <p className={`${item.textColor}`}>{item.name}</p>
                                <p className={`${item.textColor} absolute [bottom:30px] [left:45%]`}>{item.time}</p>
                            </div>

                        </div>
                    )
                })}
            </div>
            <div className=" my-2 grid grid-cols-5 sm:grid-cols-5 gap-4">
                <div className='col-span-1 sm:col-span-1'>
                    <div className='flex justify-between rounded-3xl px-3 py-2 [background:#DAECB8]'>
                        <p>Shurooq</p>
                        <p>6:42</p>
                    </div>
                </div>
                <div className='col-span-1 sm:col-span-1'></div>
                <div className='col-span-1 sm:col-span-1'></div>
                <div className='col-span-1 sm:col-span-1'></div>
                <div className='col-span-1 sm:col-span-1'>
                    <div className='flex justify-between rounded-3xl px-3 py-2 [background:#DBDEF0]'>
                        <p>Last third of the night/ Sahr</p>
                        <p>1:26-5:22</p>
                    </div>
                </div>
            </div>
            <div className=" my-2 grid grid-cols-5 sm:grid-cols-5 gap-4">
                <div className='col-span-1 sm:col-span-1'>
                    <div className='flex justify-between rounded-3xl px-3 py-2 [background:#DAECB8]'>
                        <p>Dhuha</p>
                        <p>6:52-11:55</p>
                    </div>
                </div>
                <div className='col-span-1 sm:col-span-1'></div>
                <div className='col-span-1 sm:col-span-1'></div>
                <div className='col-span-1 sm:col-span-1'></div>
                <div className='col-span-1 sm:col-span-1'>
                    <div className='flex justify-between rounded-3xl px-3 py-2 [background:#E9EBF2]'>
                        <p>Jawf of the night</p>
                        <p>1:26-3:24</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrayerTime
