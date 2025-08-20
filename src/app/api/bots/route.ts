import { NextResponse } from "next/server";

export async function GET() {
    const status = [{
        botName: "Santander Bot",
        status: "success",
        botVersion: "1.0.0",
        executionTime: "5s",
        timestamp: Date.now(),
        logs: ["Bot iniciado", "Execução concluída com sucesso"]
    },
    {
        botName: "Claro Bot",
        status: "warning",
        botVersion: "1.0.0",
        executionTime: "50s",
        timestamp: Date.now(),
        logs: ["Bot iniciado", "Execução concluída com sucesso"]
    },
    {
        botName: "Itaú Bot",
        status: "error",
        botVersion: "1.0.0",
        executionTime: "5s",
        timestamp: Date.now(),
        error: {
            code: "500",
            message: "Erro interno do servidor",
        },
        logs: ["Bot iniciado", "Execução com falha", "Erro ao tentar encontrar o elemento"]
    },
    ]

    return NextResponse.json(status);
}
