'use client'

import { useEffect, useState } from 'react'
import RobotModal from '@/components/RobotModal'
import Robot from '@/components/Robot'
import { BotStatus } from '@/types/bot'

export default function Dashboard() {
  const [botStatus, setBotStatus] = useState<BotStatus[]>([])
  const [showModal, setShowModal] = useState(false)
  const [selectedBot, setSelectedBot] = useState<BotStatus | null>(null)

  useEffect(() => {
    fetch('/api/bots')
      .then((res) => res.json())
      .then((data: BotStatus | BotStatus[]) => setBotStatus(Array.isArray(data) ? data : [data]))
  }, [])

  const handleRobotClick = (bot: BotStatus) => {
    setSelectedBot(bot)
    setShowModal(true)
  }

  return (
    <div className="p-6 flex gap-4 border border-gray-200 rounded-lg bg-white shadow-md flex-col">
      <h1 className="text-2xl font-bold">Dashboard Clientes - Todos</h1>
      <div className="border-gray-200 border" />
      <div className="flex flex-row gap-4 flex-wrap">
        {botStatus.map((bot, index) => (
          <Robot key={index} botStatus={bot} onClick={() => handleRobotClick(bot)} />
        ))}
      </div>
      {showModal && selectedBot && (
        <RobotModal botStatus={selectedBot} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}
