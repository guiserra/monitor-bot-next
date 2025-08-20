import type { Metadata } from "next"
import "./globals.css"
import NavBar from "@/components/NavBar"

export const metadata: Metadata = {
  title: "Monitor Bot",
  description: "Dashboard de status dos robôs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <NavBar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
