export interface BotStatus {
    botName: string;
    status: "success" | "warning" | "error";
    botVersion: string;
    executionTime: string;
    timestamp: string;
    output: string;
    error: {
        code: string;
        message: string;
    } | null;
    warnings: string[] | null;
    logs: string[];
}
