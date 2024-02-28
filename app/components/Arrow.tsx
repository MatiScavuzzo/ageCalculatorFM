import Image from "next/image"

export const Arrow = () => {
  return (
    <section className='relative w-full p-4 h-5'>
      <hr />
      <div className="absolute -top-7 left-0 flex items-center justify-center w-full p-4">
        <div className='w-14 h-14 p-4 rounded-full bg-purple'>
          <Image className="stroke-white" src='/icon-arrow.svg' alt="icon arrow" width={50} height={50} />
        </div>
      </div>
    </section>
  )
}