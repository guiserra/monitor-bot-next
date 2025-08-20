import Link from "next/link"

const NavBar = () => {

    return (
        <div className="border-b border-gray-200 bg-white shadow-sm p-4 h-16 flex items-center justify-between">
            <div className="flex justify-start gap-6">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/register-robot">Cadastrar Robô</Link>
                <Link href="/register-agent">Cadastrar Agente</Link>
            </div>
            <div className="flex">
                <Link href="/edit-user">Admin</Link>
            </div>
        </div>
    )
}

export default NavBar
