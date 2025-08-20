'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/lib/firebase'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/dashboard')
      } else {
        router.replace('/login')
      }
    })

    return () => unsubscribe()
  }, [router])

  return <p className="h-full flex flex-col justify-center items-center">Carregando...</p>
}
