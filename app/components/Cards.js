import Image from 'next/image'
import React from 'react'

function Cards(props) {
    const { cardContent } = props
    return (
        <div>
            <div className="max-w-sm mx-auto my-4 overflow-hidden rounded-3xl bg-white shadow-lg" style={{ border: `5px solid ${cardContent.bgColor}` , height:392 }}>
                <div className="p-5">
                    <h2 className="text-xl font-semibold text-center">{cardContent?.heading}</h2>
                    <div className={`flex items-center relative ${!cardContent.imageTwo ? 'justify-center' : ''}`}>
                        <Image src={cardContent.imageOne} className={'ml-5 [z-index:2] [right:2rem] [top:7px]'} alt="Image 1"  />
                        {cardContent.imageTwo ? <Image src={cardContent.imageTwo} className={'absolute [z-index:1] [left:40%]'} alt="Image 2" /> : null}
                    </div>
                    <div className="mt-4 flex items-center lg:px-20 sm:px-10 text-center">
                        <p className="text-sm text-zinc-700">{cardContent.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
