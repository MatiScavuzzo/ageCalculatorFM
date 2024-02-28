export const DateGrid = () => {
  return (
    <section className='grid grid-cols-3 gap-2 p-4'>
      <div className='flex flex-col gap-1'>
        <p className="text-smokey-grey text-xs font-bold">DAY</p>
        <input className="border border-light-grey p-3 rounded-md text-xl font-extrabold " type='text' name='day' id='day' />
      </div>
      <div className='flex flex-col gap-1'>
        <p className="text-smokey-grey text-xs font-bold">MONTH</p>
        <input className="border border-light-grey p-3 rounded-md text-xl font-extrabold " type='text' name='month' id='month' />
      </div>
      <div className='flex flex-col gap-1'>
        <p className="text-smokey-grey text-xs font-bold">YEAR</p>
        <input className="border border-light-grey p-3 rounded-md text-xl font-extrabold " type='text' name='year' id='year' />
      </div>
    </section>
  )
}