'use client'

import { ChangeEvent, useState } from "react"
import { Arrow } from "./Arrow"
import { DateGrid, DayError } from "./Date-grid"
import { Result } from "./Result"

export const Container = () => {
  const [years, setYears] = useState<string>('--')
  const [months, setMonths] = useState<string>('--')
  const [days, setDays] = useState<string>('--')
  const [dayError, setDayError] = useState<string>('')
  const [monthError, setMonthError] = useState<string>('')
  const [yearError, setYearError] = useState<string>('')

  const handleDay = (e: ChangeEvent<HTMLInputElement>) => {
    const day = e.target.value;
    console.log(day, DayError.empty)
    if (day < e.target.min || day > e.target.max) {
      setDayError(DayError.invalid)
    } else if (day.length === 0) {
      setDayError(DayError.empty)
    } else {
      console.log(typeof day)
    }
  }
  const handleMonth = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  const handleYear = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div className='flex flex-col items-center gap-2 justify-around text-black bg-white w-full h-96 rounded-t-lg rounded-bl-lg rounded-br-3xl'>
      <DateGrid onDay={handleDay} dayError={dayError} onMonth={handleMonth} monthError={monthError} onYear={handleYear} yearError={yearError} />
      <Arrow />
      <Result years={years} months={months} days={days} />
    </div>
  )
}