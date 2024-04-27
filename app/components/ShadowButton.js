import Image from 'next/image'
import React from 'react'

function ShadowButton(props) {
    return (
        <div class={`flex justify-center items-center tracking-widest font-semibold cursor-pointer bg-gradient-to-r from-[#FAD8DF] [font-size:14px] [padding:1rem] [border-radius:25px] [width:120px] [height:36px]`}>
            {props.text ?? ''}
        </div>

    )
}


export default ShadowButton