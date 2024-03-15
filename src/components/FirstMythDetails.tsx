import React from 'react'
import Graph from '@/app/icons/Graph'

const data = {
    paragraph1: <p>В десятилетнем исследовании <span className='font-bold'>«Генетическая эпидемиология ХОБЛ» (COPDGene)</span> среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено <span className='font-bold'>преобладание женщин (66%),</span> а в возрасте 60-64 лет количество женщин и мужчин.</p>,
    paragraph2: <p>Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более <span className='font-bold'>высокий процент площади стенок,</span> но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.</p>
}

const FirstMythDetails = () => {
    return (
        <div className='bg-white rounded-2xl shadow-custom md:p-8 sm:p-6 p-4 border border-[#01457A] text-[#01457A]'>
            <p className='mb-1 md:text-base text-sm'>{data.paragraph1}</p>
            <p className='md:mb-10 mb-4 md:text-base text-sm'>{data.paragraph2}</p>
            <Graph />
        </div>
    )
}

export default FirstMythDetails