import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'متخصصين# بجميع انواع الأعمال الصحية# وصيانتها #وتسليك مجارى# وتركيب مضخة# مياه والصرف #وتركيب سخانات مركزى وعادى# تصليح تانكي# وتغسيل توانكي #وتركيب فلاتر مياه مركزى وعادى',
  description: 'متخصصين# بجميع انواع الأعمال الصحية# وصيانتها #وتسليك مجارى# وتركيب مضخة# مياه والصرف #وتركيب سخانات مركزى وعادى# تصليح تانكي# وتغسيل توانكي #وتركيب فلاتر مياه مركزى وعادى',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir='ltr' className='scroll-smooth overflow-x-hidden'>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
