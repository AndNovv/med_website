import React from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils'
import FirstMythDetails from './FirstMythDetails'
import SecondMythDetails from './SecondMythDetails'

const PopoverCard = ({ cardIcon, title, contentText, cardIndex }: { cardIcon: React.JSX.Element, title: JSX.Element, contentText: string, cardIndex: number }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className='hover:scale-[1.02] transition-all relative flex w-full px-7 mx-auto rounded-3xl shadow-custom h-40 py-8 border border-[#01457A] gap-5 cursor-pointer'>
                    <div className='h-16 w-16 rounded-b-full rounded-tr-full bg-gradient-to-r from-[#FDD966] to-[#BCD77E] flex justify-center items-center'>
                        {cardIcon}
                    </div>
                    <div className='relative'>
                        <svg height="100%" viewBox="0 0 297 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M254.139 115H0V0.5H254.139L295 50.3145L254.139 115Z" fill="url(#gradientMain)" />
                            <path d="M0 114.5H254.139L295 50.5L254.139 1" stroke="url(#StrokeGradient)" strokeWidth="3" />
                            <defs>
                                <linearGradient id="gradientMain" x1="295" y1="50.2293" x2="2.95041e-07" y2="50.2293" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#D8EFFF" />
                                    <stop offset="1" stopColor="white" />
                                </linearGradient>
                                <linearGradient id="StrokeGradient" x1="295" y1="1.00001" x2="-10.2769" y2="66.874" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#01457A" />
                                    <stop offset="0.432292" stopColor="#43A7C7" />
                                    <stop offset="0.744792" stopColor="#BCD77E" />
                                    <stop offset="1" stopColor="#BCD77E" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <h2 className='absolute z-10 top-1 text-[1.2rem] pr-10 leading-snug'>{title}</h2>
                    </div>
                    <div className='relative flex-1 overflow-hidden leading-5'>
                        <p className='text-xl'>{contentText}</p>
                        <div className='absolute top-0 w-full h-full bg-gradient-to-b from-[#fff0] to-[#ffffff] from-40%'></div>
                    </div>
                    <div className={cn(cardIndex === 1 ? 'bg-[#01457A]' : 'bg-[#BCD77E]', 'absolute flex justify-center items-center w-10 h-10 rounded-full -top-5 -right-5')}>
                        <svg className='scale-90' width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7208 9.9402C20.3807 9.94436 20.0444 10.0015 19.7285 10.1086C19.6376 9.60709 19.3276 9.15296 18.8601 8.83652C18.3926 8.51997 17.8018 8.36432 17.2051 8.40038C16.6085 8.43645 16.0498 8.66159 15.64 9.0311C15.442 8.69098 15.1371 8.404 14.7587 8.20188C14.3803 7.99987 13.9435 7.89058 13.4964 7.8862C12.9791 7.87568 12.4738 8.01861 12.0674 8.29033V1.79153C11.9662 1.12555 11.4878 0.543489 10.7858 0.232972C10.0841 -0.0776572 9.24753 -0.0776572 8.54575 0.232972C7.84384 0.543489 7.36535 1.12555 7.2642 1.79153V14.0147L5.3986 11.8259C4.91766 11.2879 4.20556 10.9328 3.41732 10.8382C2.62924 10.7436 1.82898 10.9171 1.19092 11.3209C0.436183 11.7942 -0.00625137 12.545 6.67639e-05 13.3412C0.00174656 13.8821 0.19531 14.4101 0.555831 14.8565L6.90704 22.1297C7.61193 22.9276 8.26134 23.7595 8.852 24.6215C9.92383 26.1368 10.3605 26.7092 12.7818 26.7092H18.3391C20.443 26.7092 20.8001 25.3623 21.0385 24.3521C21.2766 23.3419 21.2766 23.3083 21.6339 23.0052C23.0629 21.7256 23.1025 19.5706 23.1025 18.5604V11.9606C23.1025 11.4248 22.8516 10.911 22.405 10.532C21.9583 10.1531 21.3526 9.9402 20.7208 9.9402Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </PopoverTrigger>
            <PopoverContent className='w-[800px]'>
                {cardIndex === 1 && <FirstMythDetails />}
                {cardIndex === 2 && <SecondMythDetails />}
            </PopoverContent>
        </Popover>
    )
}

export default PopoverCard