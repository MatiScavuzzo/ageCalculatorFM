import { ChangeEvent } from "react"

export enum DayError {
  'empty' = 'The field is required',
  'invalid' = 'Must be a valid day',
}

export const DateGrid = ({ 
  onDay,
  onMonth,
  onYear,
  dayError,
  monthError,
  yearError, 
}: { 
  onDay: (e: ChangeEvent<HTMLInputElement>) => void,
  onMonth: (e: ChangeEvent<HTMLInputElement>) => void,
  onYear: (e: ChangeEvent<HTMLInputElement>) => void,
  dayError: string,
  monthError: string,
  yearError: string,
}) => {
  const getYear = new Date().getFullYear()
  return (
    <section className='grid grid-cols-3 gap-2 p-4'>
      <div className='flex flex-col gap-1'>
        <p className="text-smokey-grey text-xs font-bold">DAY</p>
        <span className={`${dayError != '' ? dayError === DayError.empty ? 'after:content-["The field is required"] after:text-xs after:text-light-red after:italic' : `after:content-["${DayError.invalid}"] after:text-xs after:text-light-red after:italic` : ''}`}><input onChange={onDay} min={1} max={31} className={`${dayError ? 'border-light-red' : 'border-light-grey'} w-full border p-3 rounded-md text-xl font-extrabold remove-arrow`} type='number' name='day' id='day' /></span>
      </div>
      <div className='flex flex-col gap-1'>
        <p className="text-smokey-grey text-xs font-bold">MONTH</p>
        <input onChange={onMonth} min={1} max={12}  className="border border-light-grey p-3 rounded-md text-xl font-extrabold remove-arrow" type='number' name='month' id='month' />
      </div>
      <div className='flex flex-col gap-1'>
        <p className="text-smokey-grey text-xs font-bold">YEAR</p>
        <input onChange={onYear} min={1900} max={getYear} className="border border-light-grey p-3 rounded-md text-xl font-extrabold remove-arrow" type='number' name='year' id='year' />
      </div>
    </section>
  )
}