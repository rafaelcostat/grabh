import Image from 'next/image'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps } from 'next'
import nextI18NextConfig from '../../next-i18next.config.js'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero/index'
import { Footer } from '../components/Footer/index'
import { News } from '../components/News'

import imgAbout from '../assets/resgate.jpg'
import bgDonate from '../assets/bgDonate.jpg'
import img1 from '../assets/foto6.png'
import img2 from '../assets/foto5.jpeg'
import img3 from '../assets/foto4.jpg'
import Link from 'next/link.js'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <div className="flex min-h-screen flex-col bg-white ">
      <Header />
      <div className="mt-32">
        <Hero />
        <div className="container mx-auto my-8  w-1/2 p-4 sm:my-12">
          <hr></hr>
        </div>

        <div className="container relative mx-auto px-4 sm:mb-16">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full md:block lg:w-6/12">
              <Image
                src={imgAbout}
                width="600"
                alt=""
                className="w-full rounded-3xl"
              />
            </div>
            <div className="mx-auto w-full py-4 sm:p-0 lg:w-5/12">
              <h6 className="mb-2 font-sora font-medium uppercase text-cyan-900">
                {t('about.label')}
              </h6>
              <h3 className="mb-2 font-proza text-3xl font-bold">
                {t('about.title')}
              </h3>
              <p className="mb-6">{t('about.description')}</p>

              <div className="-mx-4 flex flex-wrap items-center">
                <div className="w-1/2 px-4 py-6">
                  <h2 className="mb-2 font-sora text-3xl font-bold text-cyan-900">
                    +10141
                  </h2>
                  <p>{t('about.block1')}</p>
                </div>
                {/* <div className="w-1/2 px-4 py-6">
                  <h2 className="mb-2 font-sora text-3xl font-bold text-cyan-900">
                    +5413
                  </h2>
                  <p>{t('about.block2')}</p>
                </div> */}
                <div className="w-1/2 px-4 py-6">
                  <h2 className="mb-2 font-sora text-3xl font-bold text-cyan-900">
                    +45
                  </h2>
                  <p>{t('about.block3')}</p>
                </div>
                {/* <div className="w-1/2 px-4 py-6">
                  <h2 className="mb-2 font-sora text-3xl font-bold text-cyan-900">
                    +30
                  </h2>
                  <p>{t('about.block4')}</p>
                </div> */}
              </div>
            </div>
            <div className="mb-12 w-full md:hidden lg:w-6/12">
              <Image
                src={imgAbout}
                width="600"
                alt=""
                className="w-full rounded-3xl"
              />
            </div>
          </div>
        </div>

        <section className="container mx-auto mb-10">
          <div>
            <h3 className="mb-8 mt-3 text-center font-proza text-3xl font-bold capitalize sm:text-4xl">
              {t('operations.title')}
            </h3>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-3">
            <News
              title={t('operations.op1.title')}
              date={t('operations.op1.date')}
              imageUrl={img1}
              description={t('operations.op1.description')}
            />
            <News
              title={t('operations.op2.title')}
              date={t('operations.op2.date')}
              imageUrl={img2}
              description={t('operations.op2.description')}
            />
            <News
              title={t('operations.op3.title')}
              date={t('operations.op3.date')}
              imageUrl={img3}
              description={t('operations.op3.description')}
            />
          </div>
        </section>

        <section
          className="relative mb-4 bg-blue-200 bg-cover bg-center bg-no-repeat py-24"
          style={{ backgroundImage: `url(${bgDonate.src})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h3 className="mb-10 text-3xl font-bold text-white">
              {t('donation.title')}
            </h3>
            <Link
              href="https://donate.grabh.com.br"
              target="_blank"
              className="duration-2 rounded-full bg-green-600 px-6 py-4 text-xl font-bold text-white transition-all hover:bg-green-500"
            >
              {t('donation.button')}
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale ?? 'pt',
      ['common'],
      nextI18NextConfig,
    )),
  },
})
