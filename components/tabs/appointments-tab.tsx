"use client"
import { useState } from "react"
import { countries, targetCountries, visaCenters, visaCategories } from "@/lib/mock-data"
import AppointmentCounter from "@/components/ui/appointment-counter"
import CountrySelector from "@/components/ui/country-selector"
import VisaCenterSelector from "@/components/ui/visa-center-selector"
import CategorySelector from "@/components/ui/category-selector"
import { useTranslation } from "@/context/translation-provider"

interface AppointmentsTabProps {
  onSearch: () => void
}

export default function AppointmentsTab({ onSearch }: AppointmentsTabProps) {
  const { t } = useTranslation()
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [selectedTargetCountry, setSelectedTargetCountry] = useState(targetCountries[0])
  const [selectedVisaCenter, setSelectedVisaCenter] = useState(visaCenters[0])
  const [selectedVisaCategory, setSelectedVisaCategory] = useState(null)

  return (
    <>
      {/* Today's Appointments */}
      <AppointmentCounter count={23} />

      {/* Visa Search Form */}
      <div className="flex-1 mx-4 my-3 bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-sm overflow-auto">
        <h2 className="text-2xl font-bold mb-1 dark:text-white">{t("visaSearch")}</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">{t("whereAndWhereToApply")}</p>

        {/* Your Country */}
        <CountrySelector
          label={t("yourCountry")}
          countries={countries}
          selectedCountry={selectedCountry}
          onSelect={setSelectedCountry}
        />

        {/* Target Country */}
        <CountrySelector
          label={t("targetCountry")}
          countries={targetCountries}
          selectedCountry={selectedTargetCountry}
          onSelect={setSelectedTargetCountry}
        />

        <p className="text-gray-400 dark:text-gray-500 text-sm mb-5">{t("showsAvailableCountries")}</p>

        {/* Visa Center */}
        <VisaCenterSelector
          label={t("visaCenter")}
          centers={visaCenters}
          selectedCenter={selectedVisaCenter}
          onSelect={setSelectedVisaCenter}
        />

        <p className="text-gray-400 dark:text-gray-500 text-sm mb-1">{t("optional")}</p>

        {/* Visa Details */}
        <div className="mb-3 mt-5">
          <h3 className="text-xl font-bold mb-1 dark:text-white">{t("visaDetails")}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{t("specifyVisaRequirements")}</p>
        </div>

        {/* Visa Category */}
        <CategorySelector
          label={t("visaCategory")}
          categories={visaCategories}
          selectedCategory={selectedVisaCategory}
          onSelect={setSelectedVisaCategory}
        />

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-3 rounded-xl font-medium mt-4"
          onClick={onSearch}
        >
          {t("searchAppointment")}
        </button>
      </div>
    </>
  )
}
