import Inhaler1 from '@/app/icons/Inhaler1'
import Inhaler2 from '@/app/icons/Inhaler2'
import Inhaler3 from '@/app/icons/Inhaler3'
import React from 'react'

const InfoCard = ({ cardInfo }: { cardInfo: { title: JSX.Element, text: JSX.Element, index: number } }) => {
    return (
        <div className='rounded-2xl shadow-custom md:px-2 px-4 py-2 bg-gradient-to-r from-[#FBFDFF] to-[#D8EFFF] hover:scale-[1.02] cursor-pointer transition-all'>
            <div className='relative flex mx-auto w-36 md:w-28'>
                {cardInfo.index === 1 && <Inhaler1 />}
                {cardInfo.index === 2 && <Inhaler2 />}
                {cardInfo.index === 3 && <Inhaler3 />}
            </div>
            <h2 className='lg:text-[1.4rem] text-[1.2rem] leading-7 font-medium text-center'>{cardInfo.title}</h2>
            <p className='lg:text-xl text-base text-center mt-3 mb-5 leading-[26px]'>{cardInfo.text}</p>
        </div>
    )
}

export default InfoCard