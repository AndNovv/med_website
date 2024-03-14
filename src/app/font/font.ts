import { Noto_Sans } from "next/font/google"
import localFont from 'next/font/local'

export const century = localFont({ src: '../../../public/fonts/centurygothic_bold.ttf' })

export const noto = Noto_Sans({
    subsets: ["latin", 'cyrillic'],
    weight: ['300', '400', '500', '700'],
    variable: "--font-noto",
})