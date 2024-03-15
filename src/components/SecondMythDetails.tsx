import React from 'react'
import SecondMythDataCard from './SecondMythDataCard'
import Heart from '@/app/icons/Heart'
import Bladder from '@/app/icons/Bladder'
import Illness from '@/app/icons/Illness'

const data = {
    paragraph1: <p className='font-bold'>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов<sup>1</sup>.</p>,
    paragraph2: <p>В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.<sup>2</sup> Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.</p>
}

const cardsData = [
    {
        image: <Heart />,
        percentage: '45,5%',
        text: <p>пациентов с <span className='font-bold'>сердечной недостаточностью<sup>1</sup></span></p>,
        description: 'Популяционное когортное исследование (N=385)'
    },
    {
        image: <Illness />,
        percentage: '55,3%',
        text: <p>пациентов с <span className='font-bold'>инфарктом миокарда<sup>1</sup></span></p>,
        description: 'Апостериорный анализ когортного исследования (N=2887)'
    },
    {
        image: <Bladder />,
        percentage: '50,5%',
        text: <p>пациентов с <span className='font-bold'>раком мочевого пузыря</span></p>,
        description: 'Исследование Национальной статистической службы (N=42642)'
    },
]

const SecondMythDetails = () => {
    return (
        <div className='bg-white rounded-2xl shadow-xl shadow-slate-400 md:p-8 sm:p-6 p-4 border border-[#01457A] text-[#01457A]'>
            <p className='mb-1 md:text-base text-sm'>{data.paragraph1}</p>
            <p className='mb-5 md:text-base text-sm'>{data.paragraph2}</p>
            <h3 className='md:text-lg text-base font-bold text-center mb-4'>Пятилетняя выживаемость пациентов</h3>
            <div className='grid sm:grid-cols-3 lg:gap-8 gap-3 grid-rows-3 sm:grid-rows-none'>
                {cardsData.map((cardData, index) => {
                    return <SecondMythDataCard cardData={cardData} key={`DetailsCard${index}`} />
                })}
            </div>
        </div>
    )
}

export default SecondMythDetails