import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

interface UserFieldProps {
  label: string
  type: string
  currentValue: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function UserField({
  label,
  type,
  currentValue,
  placeholder,
  onChange,
}: UserFieldProps) {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === 'password'
  const inputType = isPassword && showPassword ? 'text' : type
  return (
    <div className="flex flex-col items-baseline mb-4">
      <label className="mb-2 whitespace-nowrap text-sm font-medium text-gray-700">{label}</label>
      <div className="relative w-full">
        <input
          type={inputType}
          className="block w-full p-2 pr-10 border border-gray-300 rounded-md 
             focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          value={currentValue}
          onChange={onChange}
          placeholder={placeholder}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  )
}
