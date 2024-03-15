import React from 'react'
import PopoverCard from './PopoverCard'
import Development from '@/app/icons/Development'
import Human from '@/app/icons/Human'
import InfoCard from './InfoCard'
import { century } from '@/app/font/font'
import { cn } from '@/lib/utils'
import TitleDecoration from '@/app/icons/TitleDecoration'
import ConcludingInfoCard from './ConcludingInfoCard'
import ConclusionLeft from '@/app/icons/ConclusionLeft'
import ConclusionRight from '@/app/icons/ConclusionRight'
import ConclusionMobile from '@/app/icons/ConclusionMobile'

const infoCardsContent = [
    {
        title: <p>Ингаляционный <span className='font-bold'>антихолинергик</span></p>,
        text: <p>Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов<sup>1</sup></p>,
        index: 1,
    },
    {
        title: <p>Ингаляционный <span className='font-bold text-nowrap'>β2-агонист</span></p>,
        text: <p>Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции</p>,
        index: 2,
    },
    {
        title: <p>Ингаляционный <span className='font-bold'>глюкокортикостероид</span> (ИГКС)</p>,
        text: <p>Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей</p>,
        index: 3,
    },

]

const concludingCardsInfo = [
    {
        text: <p>Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия;
            Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг друга<sup>1</sup>.</p>
    },
    {
        text: <p>Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА;
            Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА (8,1% vs 13,2%)<sup>1</sup>.</p>
    }
]

const MainCard = () => {
    return (
        <div className='flex text-[#01457A] flex-col w-full bg-white shadow-custom overflow-hidden mb-24'>

            <section className='relative'>
                <TitleDecoration />
                <div className='relative lg:px-11 px-7 z-10 mt-3'>
                    <h1 className={cn('text-3xl text-[2rem] text-[#01457A] font-bold', century.className)}>ХОБЛ: мифы и реальность</h1>
                    <div className='flex flex-col gap-7 mt-16'>
                        <PopoverCard cardIcon={<Human />} title={<p>ХОБЛ болеют <span className='font-bold'>преимущественно мужчины?</span></p>} contentText={'В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...'} cardIndex={1} />
                        <PopoverCard cardIcon={<Development />} title={<p><span className='font-bold'>Опасно</span> не наличие заболевания, а обострения?</p>} contentText={'Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...'} cardIndex={2} />
                    </div>
                </div>
            </section>

            <section className='mt-[6.5rem] relative'>
                <TitleDecoration />
                <div className='relative lg:px-11 px-7 z-10'>
                    <h1 className={cn('text-[#01457A] text-custom font-bold text-[2rem] mt-2', century.className)}>Терапия ХОБЛ: что в фокусе?</h1>
                    <div className='flex justify-center items-center lg:h-[4.2rem] h-fit lg:py-0 py-2 rounded-2xl lg:mt-[3.75rem] mt-12 px-2 bg-gradient-to-r from-[#FDD966] to-[#BCD77E] to-70%'>
                        <p className='lg:text-[1.35rem] text-[1.1rem] text-center font-bold'>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</p>
                    </div>
                    <h3 className='lg:text-[1.2rem] text-base font-bold text-center md:mt-8 mt-6'>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:</h3>
                    <div className='lg:gap-6 gap-4 mt-10 grid md:grid-cols-3 md:grid-rows-none grid-rows-3'>
                        {infoCardsContent.map((cardInfo, index) => {
                            return <InfoCard cardInfo={cardInfo} key={`card${index}`} />
                        })}
                    </div>
                    <div className='relative grid-cols-2 gap-4 mt-1 hidden md:grid'>
                        <div className='relative'>
                            <ConclusionLeft />
                        </div>
                        <div className='relative'>
                            <ConclusionRight />
                        </div>
                    </div>
                    <div className='flex relative items-center mt-1 justify-center w-full md:hidden'>
                        <ConclusionMobile />
                    </div>
                    <div className='md:gap-6 gap-4 md:mt-6 mt-8 grid md:grid-cols-2 grid-rows-2 md:grid-rows-none mb-20'>
                        {concludingCardsInfo.map((concludingCardInfo, index) => {
                            return <ConcludingInfoCard cardInfo={concludingCardInfo} key={`card${index}`} />
                        })}
                    </div>


                </div>
            </section>
        </div>
    )

}

export default MainCard