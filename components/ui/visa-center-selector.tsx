// components/ui/visa-center-selector.tsx
"use client"

import { useState } from "react"
import { ChevronDown, X } from "lucide-react"

interface VisaCenter {
  id: number
  name: string
}

interface VisaCenterSelectorProps {
  label: string
  centers: VisaCenter[]
  selectedCenter: VisaCenter | null
  onSelect: (center: VisaCenter | null) => void
}

export default function VisaCenterSelector({ label, centers, selectedCenter, onSelect }: VisaCenterSelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="mb-5 relative">
      <label className="block text-gray-500 dark:text-gray-400 mb-2">{label}</label>
      <div
        className="border border-gray-300 dark:border-gray-600 rounded-xl p-4 flex justify-between items-center cursor-pointer relative"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="flex items-center">
          <div className="text-blue-500 dark:text-blue-400 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <div>
            {selectedCenter ? (
              <>
                <span className="font-medium dark:text-white">{selectedCenter.name.split(" - ")[0]}</span>
                <div className="font-medium dark:text-white">{selectedCenter.name.split(" - ")[1]}</div>
              </>
            ) : (
              <span className="text-gray-400 dark:text-gray-500">Vize merkezi seçin</span>
            )}
          </div>
        </div>
        <ChevronDown className="text-gray-400 w-5 h-5" />
        {selectedCenter && (
          <div
            className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-gray-400 dark:bg-gray-600 rounded-full p-1.5 z-20"
            onClick={(e) => {
              e.stopPropagation()
              onSelect(null)
            }}
          >
            <X className="text-white w-4 h-4" />
          </div>
        )}
      </div>

      {showDropdown && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg max-h-60 overflow-auto">
          {centers.map((center) => (
            <div
              key={center.id}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                onSelect(center)
                setShowDropdown(false)
              }}
            >
              <span className="dark:text-white">{center.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
