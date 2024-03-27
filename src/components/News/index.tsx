import Image, { StaticImageData } from 'next/image'

interface NewsProps {
  title: string
  imageUrl: StaticImageData
  description: string
}
export function News({ title, imageUrl, description }: NewsProps) {
  return (
    <div className="mb-8 px-4 text-center">
      <Image
        src={imageUrl}
        width="300"
        alt=""
        className="mb-4 w-full rounded-2xl"
      />
      <h5 className="mb-2 font-sora text-xl font-bold">{title}</h5>
      <p className="px-4	leading-5">{description}</p>
    </div>
  )
}
