'use client'

import { useState, useRef } from 'react'
import UserField from '@/components/UserField'

export default function EditUser() {
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin')
  const [email, setEmail] = useState('admin@admin.com')
  const [photo, setPhoto] = useState<string | null>(null) // URL da foto
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handlePhotoClick = () => {
    fileInputRef.current?.click()
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setPhoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      username,
      password,
      email,
      photo,
    })
    // conectar no firebase/firestore/api para salvar as mudanças
  }

  return (
    <div className="p-6 flex gap-4 border border-gray-200 rounded-lg bg-white shadow-md flex-col">
      <h1 className="text-2xl font-bold">Editar Usuário</h1>
      <div className="border-gray-200 border" />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-center justify-center w-64">
            <div
              className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-80"
              onClick={handlePhotoClick}
            >
              {photo ? (
                <img src={photo} alt="Foto do usuário" className="w-full h-full object-cover" />
              ) : (
                <span className="text-white">Imagem</span>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handlePhotoChange}
            />
            <span className="mt-2 text-sm text-gray-600">Clique na foto para alterar</span>
          </div>
          <div className="flex flex-row items-baseline w-full">
            <div className="flex flex-col w-full mr-4">
              <UserField
                label="Nome de usuário"
                type="text"
                currentValue={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <UserField
                label="Senha"
                type="password"
                currentValue={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <UserField
                label="E-mail"
                type="email"
                currentValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end w-full">
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
}
