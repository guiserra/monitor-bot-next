'use client'
import Link from 'next/link'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathName = usePathname()
  const showNavBar = !['/', '/login', '/register'].includes(pathName)

  if (!showNavBar) {
    return null
  }

  return (
    <div className="border-b border-gray-200 bg-white shadow-sm p-4 h-16 flex items-center justify-between">
      <div className="flex justify-start gap-6">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/register-robot">Cadastrar Robô</Link>
        <Link href="/register-agent">Cadastrar Agente</Link>
      </div>
      <div className="flex gap-6">
        <Link href="/edit-user">Admin</Link>
        <p onClick={() => signOut(auth)}>Sair</p>
      </div>
    </div>
  )
}

export default NavBar
