import { useTranslation } from 'next-i18next'
import bgHero from '../../assets/hero.jpeg'

export function Hero() {
  const { t } = useTranslation('common')

  return (
    <section className="container m-auto px-4">
      <div
        className="flex h-[350px] w-full items-end justify-center rounded-3xl bg-cover bg-top p-4 sm:h-[550px] sm:items-start"
        style={{ backgroundImage: `url(${bgHero.src})` }}
      >
        <h1 className="mb-4  mt-12 text-center font-proza text-3xl font-bold text-white sm:text-4xl">
          {t('hero.title')}
        </h1>
      </div>
    </section>
  )
}
