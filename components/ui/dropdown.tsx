// components/ui/dropdown.tsx
"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface DropdownProps {
  title: React.ReactNode
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
  defaultOpen?: boolean
}

export default function Dropdown({ title, children, icon, className, defaultOpen = false }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={cn("rounded-xl overflow-hidden shadow-sm", className)}>
      <div
        className="bg-white dark:bg-gray-800 p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {icon && <div className="mr-3">{icon}</div>}
          <div>{title}</div>
        </div>
        <ChevronDown
          className={`text-gray-400 w-5 h-5 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 px-4 pb-4 pt-2 border-t border-gray-100 dark:border-gray-700">
          {children}
        </div>
      )}
    </div>
  )
}
