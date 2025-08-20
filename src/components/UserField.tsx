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
  return (
    <div className="flex flex-col items-baseline mb-4">
      <label className="mb-2 whitespace-nowrap text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        className="block ml-2.5 w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
        value={currentValue}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
