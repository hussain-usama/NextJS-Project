import ShadowButton from '@/app/components/ShadowButton'
import Image from 'next/image'
import React from 'react'
import CuurentClass from '../../../public/images/CuurentClass.png'
import PastClass from '../../../public/images/PastClass.png'

function Classes() {
    return (
        <div>
            <div className="flex justify-center items-center mt-10 ">
                <ShadowButton text='CLASSES' />
            </div>
            <div className="flex justify-center items-center my-5 ">
                <p className='uppercase [font-size:40px]'>Our Classes</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='col-span-1 sm:col-span-1 p-10 [background-color:#FDF6F8] rounded-r-3xl'>
                    <div className='flex'>
                        <div>
                            <p className='font-semibold leading-none [font-size:30px] my-3'> Current <br />Classes</p>
                            <p className='mb-5'>By the favor and mercy of Allah, the classes are also broadcast live and the class links and recordings are sent on the WhatsApp groups. Click below to request access (for women, girls and boys under seven only). Please use a headset in the presence of men.</p>
                            <p className='font-semibold cursor-pointer my-1'>{`Women Classes >`} </p>
                            <p className='font-semibold cursor-pointer my-1'>{`Men Classes >`} </p>
                            <p className='font-semibold cursor-pointer my-1'>{`Girls Classes >`} </p>
                            <p className='font-semibold cursor-pointer my-1'>{`Boys Classes >`} </p>
                        </div>
                        <div>
                            <Image width={800} src={CuurentClass}/>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 sm:col-span-1 p-10 rounded-l-3xl [background-color:#EEFDFF]'>
                    <div className='flex'>
                        <div>
                            <p className='font-semibold leading-none [font-size:30px] my-3'>Past <br />Classes</p>
                            <p className='mb-5'>By the favor and mercy of Allah, the classes are also broadcast live and the class links and recordings are sent on the WhatsApp groups. Click below to request access (for women, girls and boys under seven only). Please use a headset in the presence of men.</p>
                            <p className='font-semibold cursor-pointer my-1'>{`Women Classes >`} </p>
                            <p className='font-semibold cursor-pointer my-1'>{`Men Classes >`} </p>
                            <p className='font-semibold cursor-pointer my-1'>{`Girls Classes >`} </p>
                            <p className='font-semibold cursor-pointer my-1'>{`Boys Classes >`} </p>
                        </div>
                        <div>
                            <Image width={800} src={PastClass}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Classes
