export const Result = ({ 
  years, months, days 
}: { 
  years: string, months: string, days: string 
}) => {
  return (
    <section className='flex flex-col justify-start w-full p-4'>
      <article className="flex gap-2 items-center">
        <span className="text-purple font-extrabold italic text-5xl">{years}</span>
        <p className="text-black font-extrabold italic text-5xl">years</p>
      </article>
      <article className="flex gap-2 items-center">
        <span className="text-purple font-extrabold italic text-5xl">{months}</span>
        <p className="text-black font-extrabold italic text-5xl">months</p>
      </article>
      <article className="flex gap-2 items-center">
        <span className="text-purple font-extrabold italic text-5xl">{days}</span>
        <p className="text-black font-extrabold italic text-5xl">days</p>
      </article>
    </section>
  )
}