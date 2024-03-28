import Link from 'next/link'
import { Instagram, Mail } from 'lucide-react'
import { useTranslation } from 'next-i18next'

export function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer>
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="font-proza text-sm text-gray-600">
            GRUPO DE RESGATE ANIMAL DE BELO HORIZONTE - GRABH <br></br>CNPJ:
            48.793.976/0001-95<br></br> Endereço: Rua Remi Pereira Lopes, 75 -
            Ribeiro de Abreu <br></br>Belo Horizonte/MG
          </p>
          <ul className="flex flex-wrap items-center">
            <li className="ml-2">
              <Link
                href={'mailto:teste@gmail.com'}
                className="text-gray-700"
                target="_blank"
              >
                <Mail size={24} />
              </Link>
            </li>
            <li className="ml-2">
              <Link
                href={'https://www.instagram.com/resgateanimal.grabh/'}
                className="text-gray-700"
                target="_blank"
              >
                <Instagram size={24} />
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:mb-8 lg:mt-4" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            GRABH -{' '}
          </a>
          {t('footer.rights')}
        </span>
      </div>
    </footer>
  )
}
