// components/ui/category-selector.tsx
"use client"

import { useState } from "react"
import { ChevronDown, FileText } from "lucide-react"

interface Category {
  id: number
  name: string
}

interface CategorySelectorProps {
  label: string
  categories: Category[]
  selectedCategory: Category | null
  onSelect: (category: Category | null) => void
}

export default function CategorySelector({ label, categories, selectedCategory, onSelect }: CategorySelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="mb-5 relative">
      <label className="block text-gray-500 dark:text-gray-400 mb-2">{label}</label>
      <div
        className="border border-gray-300 dark:border-gray-600 rounded-xl p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="flex items-center">
          <div className="text-blue-500 dark:text-blue-400 mr-3">
            <FileText />
          </div>
          <span className={selectedCategory ? "font-medium dark:text-white" : "text-gray-400 dark:text-gray-500"}>
            {selectedCategory ? selectedCategory.name : `${label} seçin`}
          </span>
        </div>
        <ChevronDown className="text-gray-400 w-5 h-5" />
      </div>

      {showDropdown && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg max-h-60 overflow-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                onSelect(category)
                setShowDropdown(false)
              }}
            >
              <span className="dark:text-white">{category.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
