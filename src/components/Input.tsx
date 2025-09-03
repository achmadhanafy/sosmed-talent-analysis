import React from 'react'

interface Props{
    value: string,
    label: string,
    placeholder: string,
    onChange: (text:string) => void
}

function Input({value,label,placeholder, onChange}: Props) {
  return (
     <div>
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          className="mt-1 text-black block w-full h-10 p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>
  )
}

export default Input