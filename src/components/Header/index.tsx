'use client'

import { useTranslation } from 'next-i18next'

import Image from 'next/image'
import logoGrabh from '../../assets/grabh_logo.jpeg'
import Link from 'next/link'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Menu } from 'lucide-react'
import { Navigation } from './Navigation'
import { LanguageSelector } from '../LanguageSelector'

export function Header() {
  const { t } = useTranslation('common')

  return (
    <Collapsible.Root>
      <div className="fixed z-20 w-full bg-white shadow">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-24 items-center justify-between">
            <div className="flex items-center">
              <Image src={logoGrabh} alt="Logo GRABH" width={80} />
              <h6 className="pl-4 font-proza text-xl font-bold">
                {t('header.title')}
              </h6>
              <Collapsible.Trigger
                asChild
                className="rounded-md px-2 py-2 text-sm font-semibold text-zinc-500 shadow-none outline-none hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 active:opacity-80 sm:hidden"
              >
                <button>
                  <Menu className="h-5 w-5" />
                </button>
              </Collapsible.Trigger>
            </div>
            <Collapsible.Content
              forceMount
              className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
            >
              <Navigation />
            </Collapsible.Content>
            <div className="hidden items-center space-x-4 rounded-md sm:flex">
              <Link
                href="#"
                className="rounded-md px-3 py-2 font-bold text-cyan-900 hover:bg-slate-100"
              >
                {t('header.about')}
              </Link>
              <Link
                href="#"
                className="rounded-md px-3 py-2 font-bold text-cyan-900 hover:bg-slate-100"
              >
                {t('header.operations')}
              </Link>
              <LanguageSelector />
              <Link
                href="#"
                className="duration-2 rounded-full bg-green-600 px-6 py-2 font-bold text-white transition-all hover:bg-green-500"
              >
                {t('header.donation')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Collapsible.Root>
  )
}
