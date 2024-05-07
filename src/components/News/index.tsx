import Image, { StaticImageData } from 'next/image'

interface NewsProps {
  title: string
  date: string
  imageUrl: StaticImageData
  description: string
}
export function News({ title, date, imageUrl, description }: NewsProps) {
  return (
    <div className="mb-8 px-4 text-center">
      <Image
        src={imageUrl}
        width="300"
        alt=""
        className="mb-4 w-full rounded-2xl"
      />
      <h5 className="mb-1 font-sora text-xl font-bold">{title}</h5>
      <h6 className="mb-3 font-sora text-sm font-medium text-slate-500">
        {date}
      </h6>
      <p className="px-4	leading-5">{description}</p>
    </div>
  )
}
