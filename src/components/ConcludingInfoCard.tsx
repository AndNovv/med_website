import React from 'react'

const ConcludingInfoCard = ({ cardInfo }: { cardInfo: { text: JSX.Element } }) => {
    return (
        <div className='rounded-2xl shadow-custom lg:text-[1.2rem] text-base leading-[26px] md:px-8 px-4 py-2 bg-gradient-to-r from-[#FBFDFF] to-[#D8EFFF] hover:scale-[1.02] cursor-pointer transition-all'>
            <div className='mt-3 mb-5'>{cardInfo.text}</div>
        </div>
    )
}

export default ConcludingInfoCard