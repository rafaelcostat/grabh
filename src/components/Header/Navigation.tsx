import { Flag, Home, Users } from 'lucide-react'
import { NavItem } from './NavItem'
import Link from 'next/link'
import { LanguageSelector } from '../LanguageSelector'

export function Navigation() {
  return (
    <div className="fixed left-0  right-0 top-24  border-b border-t border-zinc-200 bg-white sm:hidden">
      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Quem Somos" icon={Users} />
        <NavItem title="Operações" icon={Flag} />

        <div className="flex items-center justify-around px-3 pb-6 pt-2">
          <Link
            href="#"
            className="duration-2 rounded-full bg-green-600 px-6 py-2 font-bold text-white transition-all hover:bg-green-500"
          >
            Faça uma doação
          </Link>
          <div className="">
            <LanguageSelector />
          </div>
        </div>
      </nav>
    </div>
  )
}
