import Image from 'next/image'
import React from 'react'

function Buttons(props) {
    return (
        <div>
            <button className="text-black-200 py-2 px-4 rounded-full flex items-center justify-center space-x-3" style={{ backgroundColor: props.bgColor }}>
                <span>{props?.text ?? ''}</span>
                {props.icon ? <Image src={props.icon} width={props.width ?? 20} height={props.height ?? 20} /> : null }
            </button>
        </div>
    )
}


export default Buttons