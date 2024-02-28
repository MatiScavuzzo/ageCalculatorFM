'use client'

import { useState } from "react"
import { Arrow } from "./Arrow"
import { DateGrid } from "./Date-grid"
import { Result } from "./Result"

export const Container = () => {
  const [years, setYears] = useState<string>('--')
  const [months, setMonths] = useState<string>('--')
  const [days, setDays] = useState<string>('--')
  return (
    <div className='flex flex-col items-center gap-2 justify-around text-black bg-white w-full h-96 rounded-t-lg rounded-bl-lg rounded-br-3xl'>
      <DateGrid/>
      <Arrow />
      <Result years={years} months={months} days={days} />
    </div>
  )
}