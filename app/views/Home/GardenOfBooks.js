import React from 'react'
import AdultImg1 from '../../../public/images/AdultOne.png'
import AdultImg2 from '../../../public/images/AdultTwo.png'
import TranslateImg1 from '../../../public/images/TranslateImg1.png'
import TranslateImg2 from '../../../public/images/TranslateImg2.png'
import ChildrenImg1 from '../../../public/images/ChildrenImg1.png'
import ChildrenImg2 from '../../../public/images/ChildrenImg2.png'
import MNM from '../../../public/images/MNM.png'
import TeacherImg1 from '../../../public/images/TeacherImg1.png'
import TeacherImg2 from '../../../public/images/TeacherImg2.png'
import Image from 'next/image'
import Cards from '@/app/components/Cards'

const BookCards = [
    {
        heading: 'Adults',
        bgColor: '#AEDBE1',
        imageOne: AdultImg1,
        imageTwo: AdultImg2,
        desc: 'Walk through our garden of books to learn more about Allah',
    },
    {
        heading: 'Translated Books',
        bgColor: '#FAD8DF',
        imageOne: TranslateImg1,
        imageTwo: TranslateImg2,
        desc: 'Walk through our garden of books to learn more about Allah',
    },
    {
        heading: 'Children',
        bgColor: '#C0DF88',
        imageOne: ChildrenImg1,
        imageTwo: ChildrenImg2,
        desc: 'Walk through our garden of books to learn more about Allah',
    },
    {
        heading: 'New Muslim/Non Muslim',
        bgColor: '#DECBB8',
        imageOne: MNM,
        desc: 'Walk through our garden of books to learn more about Allah',
    },
    {
        heading: 'Teacher Manual',
        bgColor: '#F6D6C8',
        imageOne: TeacherImg1,
        imageTwo: TeacherImg2,
        desc: 'Walk through our garden of books to learn more about Allah',
    },

]

function GardenOfBooks() {
    return (
        <div className='px-5 py-10 my-10 [background-color:#F7FBFC]'>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className='col-span-1 sm:col-span-1'>
                    <Cards cardContent={BookCards[0]} />
                </div>
                <div className='col-span-1 sm:col-span-1 text-center'>
                    <div className='flex justify-center w-100'>
                    <div class={`flex justify-center items-center tracking-widest font-semibold cursor-pointer bg-gradient-to-r from-[#AEDBE1] [font-size:14px] [padding:1rem] [border-radius:25px] [width:120px] [height:36px]`}>
                        BOOKS
                    </div>

                    </div>
                    <p className='uppercase font-normal [font-size:50px]'>Garden of <br/>books</p>
                    <p>Walk through our garden of books to learn more about Allah</p>
                    <Cards cardContent={BookCards[1]} />
                </div>
                <div className='col-span-1 sm:col-span-1'>
                    <Cards cardContent={BookCards[2]} />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className='col-span-1 sm:col-span-1' style={{marginTop: window.innerWidth >600 && '-14rem'}}>
                    <Cards cardContent={BookCards[3]} />
                </div>
                <div className='col-span-1 sm:col-span-1'>

                </div>
                <div className='col-span-1 sm:col-span-1' style={{marginTop: window.innerWidth >600 && '-14rem'}}>
                    <Cards cardContent={BookCards[4]} />
                </div>
            </div>
        </div>
    )
}

export default GardenOfBooks
