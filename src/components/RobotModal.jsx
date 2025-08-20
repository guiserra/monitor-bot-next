"use client";

import { X } from "lucide-react"

const RobotModal = ({ botStatus, onClose }) => {
    if (!botStatus) return null

    return (
        <div onClick={onClose} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >
                    <X size={20} />
                </button>

                <h1 className="text-xl font-bold">{botStatus.botName}</h1>
                <p>Status: {botStatus.status}</p>
                <p>Versão: {botStatus.botVersion}</p>
                <p>Execução: {botStatus.executionTime}</p>
                <p>Última atualização: {new Date(botStatus.timestamp).toLocaleString()}</p>
                {botStatus.error && (
                    <div className="mt-4">
                        <h2 className="font-semibold">Erro:</h2>
                        <ul className="list-inside text-sm">
                            <li>Code: <b className="text-red-500">{botStatus.error.code}</b></li>
                            <li>Message: {botStatus.error.message}</li>
                        </ul>
                    </div>
                )}
                <div className="mt-4 bg-gray-50 p-2 rounded max-h-40 overflow-y-auto">
                    <h2 className="font-semibold">Logs:</h2>
                    <ul className="list-disc list-inside text-sm">
                        {botStatus.logs.map((log, index) => (
                            <li key={index}>{log}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RobotModal
