import React from 'react'

const SecondMythDataCard = ({ cardData }: { cardData: { image: React.JSX.Element, percentage: string, text: React.JSX.Element, description: string } }) => {
    return (
        <div className='text-center bg-[#FDD96640] rounded-lg flex flex-col justify-start items-center'>
            {cardData.image}
            <h2 className='font-bold text-6xl mb-2'>{cardData.percentage}</h2>
            <p className='mb-3'>{cardData.text}</p>
            <p className='text-sm font-light mb-4'>{cardData.description}</p>
        </div>
    )
}

export default SecondMythDataCard
