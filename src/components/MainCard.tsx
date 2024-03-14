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
                <div className='relative px-11 z-10 mt-3'>
                    <h1 className={cn('text-3xl text-[2rem] text-[#01457A] font-bold', century.className)}>ХОБЛ: мифы и реальность</h1>
                    <div className='flex flex-col gap-7 mt-16'>
                        <PopoverCard cardIcon={<Human />} title={<p>ХОБЛ болеют <span className='font-bold'>преимущественно мужчины?</span></p>} contentText={'В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...'} cardIndex={1} />
                        <PopoverCard cardIcon={<Development />} title={<p><span className='font-bold'>Опасно</span> не наличие заболевания, а обострения?</p>} contentText={'Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...'} cardIndex={2} />
                    </div>
                </div>
            </section>

            <section className='mt-[6.5rem] relative'>
                <TitleDecoration />
                <div className='relative px-11 z-10'>
                    <h1 className={cn('text-[#01457A] text-custom font-bold text-[2rem] mt-2', century.className)}>Терапия ХОБЛ: что в фокусе?</h1>
                    <div className='flex justify-center items-center text-2xl h-[4.2rem] rounded-2xl mt-[3.75rem] p-auto bg-gradient-to-r from-[#FDD966] to-[#BCD77E] to-70%'>
                        <p className='text-[1.35rem] text-center font-bold'>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</p>
                    </div>
                    <h3 className='text-[1.2rem] font-bold text-center mt-8'>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:</h3>
                    <div className='gap-6 mt-10 grid grid-cols-3'>
                        {infoCardsContent.map((cardInfo, index) => {
                            return <InfoCard cardInfo={cardInfo} key={`card${index}`} />
                        })}
                    </div>
                    <div className='relative grid grid-cols-2 gap-4 mt-1'>
                        <div className='relative'>
                            <ConclusionLeft />
                        </div>
                        <div className='relative'>
                            <ConclusionRight />
                        </div>
                    </div>
                    <div className='gap-6 mt-6 grid grid-cols-2 mb-20'>
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