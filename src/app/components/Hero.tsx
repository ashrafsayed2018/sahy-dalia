"use client"
import Link from "next/link"
import { ContactInfo, siteDescription } from "../constants"
import { useParams } from "next/navigation"
function Hero() {

  const params = useParams()
  
  return (
    <div className={`text-center flex flex-col gap-8 h-auto ${params.id == undefined ? "mt-80" : ""}`}>
        <h1 className="text-blue-900 font-bold text-xl">
          {siteDescription}
</h1>
       
        <Link href={`tel:${ContactInfo.mobileNumber}`} className="block w-40 mx-auto bg-blue-600 text-white rounded-3xl p-3 mt-8 hover:bg-blue-800 transition-all font-bold tracking-wider">{ContactInfo.mobileNumber}</Link>
    </div>
  )
}

export default Hero