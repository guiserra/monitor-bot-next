import React from 'react'
import { BotStatus } from '@/types/bot'

type RobotProps = {
  botStatus?: BotStatus | null
  onClick: (botStatus: BotStatus) => void
}

const statusColors: Record<BotStatus['status'], string> = {
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
}

const Robot: React.FC<RobotProps> = ({ botStatus, onClick }) => {
  if (!botStatus) {
    return <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
  }

  const color = statusColors[botStatus.status] || 'bg-gray-400'

  return (
    <div
      className="flex flex-col items-center text-center hover:scale-110 transition-transform"
      onClick={() => onClick(botStatus)}
    >
      <div className={`w-12 h-12 rounded-2xl ${color} shadow-md`} />
      <span className="font-semibold">{botStatus.botName}</span>
    </div>
  )
}

export default Robot
