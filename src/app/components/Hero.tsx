"use client"
import Link from "next/link"
import { ContactInfo } from "../constants"
import { useParams } from "next/navigation"
function Hero() {

  const params = useParams()
  
  return (
    <div className={`text-center flex flex-col gap-8 h-auto ${params.id == undefined ? "mt-80" : ""}`}>
        <h1 className="text-blue-900 font-bold text-xl">متخصصين# بجميع انواع الأعمال الصحية# وصيانتها #وتسليك مجارى# وتركيب مضخة# مياه والصرف #وتركيب سخانات مركزى وعادى# تصليح تانكي# وتغسيل توانكي #وتركيب فلاتر مياه مركزى وعادى#
لتواصل علي رقم  66723079</h1>
       
        <Link href={`tel:${ContactInfo.mobileNumber}`} className="block w-40 mx-auto bg-blue-600 text-white rounded-3xl p-3 mt-8 hover:bg-blue-800 transition-all font-bold tracking-wider">{ContactInfo.mobileNumber}</Link>
    </div>
  )
}

export default Hero