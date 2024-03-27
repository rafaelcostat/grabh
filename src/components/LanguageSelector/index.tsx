import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useState } from 'react'

const languageNames = {
  en: 'English',
  pt: 'Português',
}

interface FlagIconProps {
  countryCode: string
}

function FlagIcon({ countryCode = '' }: FlagIconProps) {
  if (countryCode === 'en') {
    countryCode = 'us'
  } else if (countryCode === 'pt') {
    countryCode = 'br'
  }

  return (
    <span
      className={`mr-2 inline-block h-5 w-5 rounded-full bg-white bg-cover bg-center bg-no-repeat fi-${countryCode}`}
    />
  )
}

export function LanguageSelector() {
  const { i18n } = useTranslation()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    router.push(router.pathname, router.asPath, { locale: language })
    setIsOpen(!isOpen)
  }

  return (
    <>
      <form className="mx-auto max-w-sm">
        <div className="relative flex">
          <button
            id="states-button"
            data-dropdown-toggle="dropdown-states"
            className="z-10 inline-flex w-32 flex-shrink-0 items-center rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FlagIcon countryCode={i18n.language} />
            {languageNames[i18n.language as keyof typeof languageNames]}
          </button>
          {isOpen && (
            <div
              id="dropdown-states"
              className="absolute left-0 top-9 mt-2 w-36 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => changeLanguage('en')}
              >
                <div className="inline-flex items-center">
                  <FlagIcon countryCode="en" />
                  English
                </div>
              </button>

              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => changeLanguage('pt')}
              >
                <div className="inline-flex items-center">
                  <FlagIcon countryCode="br" />
                  Português
                </div>
              </button>
            </div>
          )}
        </div>
      </form>
    </>
  )
}
