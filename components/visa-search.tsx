"use client"
import { useState } from "react"
import { Search, Info, ChevronDown, Bell, MessageSquare, FolderClosed, Settings, Plus, X } from "lucide-react"
import AppointmentsTab from "./tabs/appointments-tab"
import AlarmsTab from "./tabs/alarms-tab"
import AIAssistantTab from "./tabs/ai-assistant-tab"
import ResourcesTab from "./tabs/resources-tab"
import SettingsTab from "./tabs/settings-tab"
import SearchResults from "./search-results"

// Mock data
const countries = [
  { id: 1, name: "Türkiye", flag: "🇹🇷", code: "TR" },
  { id: 2, name: "Almanya", flag: "🇩🇪", code: "DE" },
  { id: 3, name: "Fransa", flag: "🇫🇷", code: "FR" },
  { id: 4, name: "İtalya", flag: "🇮🇹", code: "IT" },
  { id: 5, name: "İspanya", flag: "🇪🇸", code: "ES" },
]

const targetCountries = [
  { id: 1, name: "Hollanda", flag: "🇳🇱", code: "NL" },
  { id: 2, name: "Amerika Birleşik Devletleri", flag: "🇺🇸", code: "US" },
  { id: 3, name: "Birleşik Krallık", flag: "🇬🇧", code: "GB" },
  { id: 4, name: "Kanada", flag: "🇨🇦", code: "CA" },
  { id: 5, name: "Avustralya", flag: "🇦🇺", code: "AU" },
]

const visaCenters = [
  { id: 1, name: "Netherlands Visa Application Centre - Istanbul Altunizade" },
  { id: 2, name: "Netherlands Visa Application Centre - Ankara" },
  { id: 3, name: "Netherlands Visa Application Centre - Izmir" },
  { id: 4, name: "Netherlands Visa Application Centre - Antalya" },
]

const visaCategories = [
  { id: 1, name: "Turist Vizesi" },
  { id: 2, name: "İş Vizesi" },
  { id: 3, name: "Öğrenci Vizesi" },
  { id: 4, name: "Aile Birleşimi Vizesi" },
  { id: 5, name: "Transit Vizesi" },
]

export default function VisaSearch() {
  const [activeTab, setActiveTab] = useState("appointments")
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [selectedTargetCountry, setSelectedTargetCountry] = useState(targetCountries[0])
  const [selectedVisaCenter, setSelectedVisaCenter] = useState(visaCenters[0])
  const [selectedVisaCategory, setSelectedVisaCategory] = useState(null)
  const [showSearchResults, setShowSearchResults] = useState(false)

  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [showTargetCountryDropdown, setShowTargetCountryDropdown] = useState(false)
  const [showVisaCenterDropdown, setShowVisaCenterDropdown] = useState(false)
  const [showVisaCategoryDropdown, setShowVisaCategoryDropdown] = useState(false)

  const handleSearch = () => {
    setShowSearchResults(true)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "appointments":
        return showSearchResults ? (
          <SearchResults />
        ) : (
          <>
            {/* Today's Appointments */}
            <div className="mx-4 my-3">
              <div className="bg-white rounded-full shadow-md p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="font-medium">Bugünün Açık Randevuları: 23</span>
                </div>
                <ChevronDown className="text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Visa Search Form */}
            <div className="flex-1 mx-4 my-3 bg-white rounded-3xl p-5 shadow-sm overflow-auto">
              <h2 className="text-2xl font-bold mb-1">Vize Arama</h2>
              <p className="text-gray-500 mb-4">Neredesiniz ve nereye vize başvurusu yapmanız gerekiyor?</p>

              {/* Your Country */}
              <div className="mb-5 relative">
                <label className="block text-gray-500 mb-2">Ülkeniz</label>
                <div
                  className="border border-gray-300 rounded-xl p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  <div className="flex items-center">
                    <div className="w-6 h-4 mr-3 rounded-sm flex items-center justify-center">
                      <span className="text-lg">{selectedCountry.flag}</span>
                    </div>
                    <span className="font-medium text-lg">{selectedCountry.name}</span>
                  </div>
                  <ChevronDown className="text-gray-400 w-5 h-5" />
                </div>

                {showCountryDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
                    {countries.map((country) => (
                      <div
                        key={country.id}
                        className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
                        onClick={() => {
                          setSelectedCountry(country)
                          setShowCountryDropdown(false)
                        }}
                      >
                        <div className="w-6 h-4 mr-3 rounded-sm flex items-center justify-center">
                          <span className="text-lg">{country.flag}</span>
                        </div>
                        <span>{country.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Target Country */}
              <div className="mb-5 relative">
                <label className="block text-gray-500 mb-2">Hedef Ülke</label>
                <div
                  className="border border-gray-300 rounded-xl p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => setShowTargetCountryDropdown(!showTargetCountryDropdown)}
                >
                  <div className="flex items-center">
                    <div className="w-6 h-4 mr-3 rounded-sm flex items-center justify-center">
                      <span className="text-lg">{selectedTargetCountry.flag}</span>
                    </div>
                    <span className="font-medium text-lg">{selectedTargetCountry.name}</span>
                  </div>
                  <ChevronDown className="text-gray-400 w-5 h-5" />
                </div>

                {showTargetCountryDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
                    {targetCountries.map((country) => (
                      <div
                        key={country.id}
                        className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
                        onClick={() => {
                          setSelectedTargetCountry(country)
                          setShowTargetCountryDropdown(false)
                        }}
                      >
                        <div className="w-6 h-4 mr-3 rounded-sm flex items-center justify-center">
                          <span className="text-lg">{country.flag}</span>
                        </div>
                        <span>{country.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-gray-400 text-sm mb-5">Türkiye'dan mevcut olan ülkeleri gösteriyor</p>

              {/* Visa Center */}
              <div className="mb-5 relative">
                <label className="block text-gray-500 mb-2">Vize Merkezi</label>
                <div
                  className="border border-gray-300 rounded-xl p-4 flex justify-between items-center cursor-pointer relative"
                  onClick={() => setShowVisaCenterDropdown(!showVisaCenterDropdown)}
                >
                  <div className="flex items-center">
                    <div className="text-blue-500 mr-3">
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
                      <span className="font-medium">{selectedVisaCenter.name.split(" - ")[0]}</span>
                      <div className="font-medium">{selectedVisaCenter.name.split(" - ")[1]}</div>
                    </div>
                  </div>
                  <ChevronDown className="text-gray-400 w-5 h-5" />
                  <div
                    className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-gray-400 rounded-full p-1.5 z-20"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedVisaCenter(null)
                    }}
                  >
                    <X className="text-white w-4 h-4" />
                  </div>
                </div>

                {showVisaCenterDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
                    {visaCenters.map((center) => (
                      <div
                        key={center.id}
                        className="p-3 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedVisaCenter(center)
                          setShowVisaCenterDropdown(false)
                        }}
                      >
                        {center.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-gray-400 text-sm mb-1">(isteğe bağlı)</p>

              {/* Visa Details */}
              <div className="mb-3 mt-5">
                <h3 className="text-xl font-bold mb-1">Vize Detayları</h3>
                <p className="text-gray-500 mb-4">Vize gereksinimlerinizi belirtin</p>
              </div>

              {/* Visa Category */}
              <div className="mb-5 relative">
                <label className="block text-gray-500 mb-2">Vize Kategorisi</label>
                <div
                  className="border border-gray-300 rounded-xl p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => setShowVisaCategoryDropdown(!showVisaCategoryDropdown)}
                >
                  <div className="flex items-center">
                    <div className="text-blue-500 mr-3">
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
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <span className={selectedVisaCategory ? "font-medium" : "text-gray-400"}>
                      {selectedVisaCategory ? selectedVisaCategory.name : "Vize kategorisi seçin"}
                    </span>
                  </div>
                  <ChevronDown className="text-gray-400 w-5 h-5" />
                </div>

                {showVisaCategoryDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
                    {visaCategories.map((category) => (
                      <div
                        key={category.id}
                        className="p-3 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedVisaCategory(category)
                          setShowVisaCategoryDropdown(false)
                        }}
                      >
                        {category.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium mt-4" onClick={handleSearch}>
                Randevu Ara
              </button>
            </div>
          </>
        )
      case "alarms":
        return <AlarmsTab />
      case "assistant":
        return <AIAssistantTab />
      case "resources":
        return <ResourcesTab />
      case "settings":
        return <SettingsTab />
      default:
        return <AppointmentsTab />
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans text-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-full p-3 mr-3">
            <Search className="text-white w-5 h-5" />
          </div>
          <div className="text-2xl font-semibold text-gray-700 flex items-center">
            Randevu Ara
            <Plus className="text-blue-500 ml-1 w-6 h-6" />
          </div>
        </div>
        <div className="bg-blue-500 rounded-full p-1.5">
          <Info className="text-white w-5 h-5" />
        </div>
      </div>

      {activeTab === "appointments" && renderTabContent()}
      {activeTab !== "appointments" && <div className="flex-1 overflow-auto">{renderTabContent()}</div>}

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 bg-white">
        <div
          className={`flex flex-col items-center ${activeTab === "appointments" ? "text-blue-500" : "text-gray-400"} cursor-pointer`}
          onClick={() => {
            setActiveTab("appointments")
            setShowSearchResults(false)
          }}
        >
          <Search className="w-6 h-6" />
          <span className="text-xs mt-1">Ara</span>
        </div>
        <div
          className={`flex flex-col items-center ${activeTab === "alarms" ? "text-blue-500" : "text-gray-400"} cursor-pointer`}
          onClick={() => setActiveTab("alarms")}
        >
          <Bell className="w-6 h-6" />
          <span className="text-xs mt-1">Alarmlar</span>
        </div>
        <div
          className={`flex flex-col items-center ${activeTab === "assistant" ? "text-blue-500" : "text-gray-400"} cursor-pointer`}
          onClick={() => setActiveTab("assistant")}
        >
          <MessageSquare className="w-6 h-6" />
          <span className="text-xs mt-1">AI Asistan</span>
        </div>
        <div
          className={`flex flex-col items-center ${activeTab === "resources" ? "text-blue-500" : "text-gray-400"} cursor-pointer`}
          onClick={() => setActiveTab("resources")}
        >
          <FolderClosed className="w-6 h-6" />
          <span className="text-xs mt-1">Kaynaklar</span>
        </div>
        <div
          className={`flex flex-col items-center ${activeTab === "settings" ? "text-blue-500" : "text-gray-400"} cursor-pointer`}
          onClick={() => setActiveTab("settings")}
        >
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1">Ayarlar</span>
        </div>
      </div>

      {/* iPhone Home Indicator */}
      <div className="h-1 w-1/3 bg-black mx-auto rounded-full mb-1 mt-2"></div>
    </div>
  )
}
