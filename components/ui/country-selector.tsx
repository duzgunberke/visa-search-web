// components/ui/country-selector.tsx
"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface Country {
  id: number
  name: string
  flag: string
  code: string
}

interface CountrySelectorProps {
  label: string
  countries: Country[]
  selectedCountry: Country
  onSelect: (country: Country) => void
}

export default function CountrySelector({ label, countries, selectedCountry, onSelect }: CountrySelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="mb-5 relative">
      <label className="block text-gray-500 dark:text-gray-400 mb-2">{label}</label>
      <div
        className="border border-gray-300 dark:border-gray-600 rounded-xl p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="flex items-center">
          <div className="w-6 h-4 mr-3 rounded-sm flex items-center justify-center">
            <span className="text-lg">{selectedCountry.flag}</span>
          </div>
          <span className="font-medium text-lg dark:text-white">{selectedCountry.name}</span>
        </div>
        <ChevronDown className="text-gray-400 w-5 h-5" />
      </div>

      {showDropdown && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg max-h-60 overflow-auto">
          {countries.map((country) => (
            <div
              key={country.id}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center"
              onClick={() => {
                onSelect(country)
                setShowDropdown(false)
              }}
            >
              <div className="w-6 h-4 mr-3 rounded-sm flex items-center justify-center">
                <span className="text-lg">{country.flag}</span>
              </div>
              <span className="dark:text-white">{country.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
