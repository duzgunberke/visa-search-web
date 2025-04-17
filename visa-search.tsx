"use client"
import { Search, Info, ChevronDown, Bell, MessageSquare, FolderClosed, Settings, Plus, X } from "lucide-react"

export default function VisaSearch() {
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
      <div className="flex-1 mx-4 my-3 bg-white rounded-3xl p-5 shadow-sm">
        <h2 className="text-2xl font-bold mb-1">Vize Arama</h2>
        <p className="text-gray-500 mb-4">Neredesiniz ve nereye vize başvurusu yapmanız gerekiyor?</p>

        {/* Your Country */}
        <div className="mb-5">
          <label className="block text-gray-500 mb-2">Ülkeniz</label>
          <div className="border border-gray-300 rounded-xl p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-6 h-4 bg-red-500 mr-3 rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 text-white flex items-center justify-center">
                  <span className="text-white text-xs">🇹🇷</span>
                </div>
              </div>
              <span className="font-medium text-lg">Türkiye</span>
            </div>
            <ChevronDown className="text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Target Country */}
        <div className="mb-5">
          <label className="block text-gray-500 mb-2">Hedef Ülke</label>
          <div className="border border-gray-300 rounded-xl p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-6 h-4 flex flex-col mr-3 rounded-sm">
                <div className="h-1/3 bg-blue-600 w-full"></div>
                <div className="h-1/3 bg-white w-full"></div>
                <div className="h-1/3 bg-red-600 w-full"></div>
              </div>
              <span className="font-medium text-lg">Hollanda</span>
            </div>
            <ChevronDown className="text-gray-400 w-5 h-5" />
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-5">Türkiye'dan mevcut olan ülkeleri gösteriyor</p>

        {/* Visa Center */}
        <div className="mb-5">
          <label className="block text-gray-500 mb-2">Vize Merkezi</label>
          <div className="border border-gray-300 rounded-xl p-4 flex justify-between items-center relative">
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
                <span className="font-medium">Netherlands Visa Application</span>
                <div className="font-medium">Centre - Istanbul Altunizade</div>
              </div>
            </div>
            <ChevronDown className="text-gray-400 w-5 h-5" />
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-gray-400 rounded-full p-1.5">
              <X className="text-white w-4 h-4" />
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-1">(isteğe bağlı)</p>

        {/* Visa Details */}
        <div className="mb-3 mt-5">
          <h3 className="text-xl font-bold mb-1">Vize Detayları</h3>
          <p className="text-gray-500 mb-4">Vize gereksinimlerinizi belirtin</p>
        </div>

        {/* Visa Category */}
        <div className="mb-5">
          <label className="block text-gray-500 mb-2">Vize Kategorisi</label>
          <div className="border border-gray-300 rounded-xl p-4 flex justify-between items-center">
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
              <span className="text-gray-400">Vize kategorisi seçin</span>
            </div>
            <ChevronDown className="text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 bg-white">
        <div className="flex flex-col items-center text-blue-500">
          <Search className="w-6 h-6" />
          <span className="text-xs mt-1">Ara</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Bell className="w-6 h-6" />
          <span className="text-xs mt-1">Alarmlar</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <MessageSquare className="w-6 h-6" />
          <span className="text-xs mt-1">AI Asistan</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <FolderClosed className="w-6 h-6" />
          <span className="text-xs mt-1">Kaynaklar</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1">Ayarlar</span>
        </div>
      </div>

      {/* iPhone Home Indicator */}
      <div className="h-1 w-1/3 bg-black mx-auto rounded-full mb-1 mt-2"></div>
    </div>
  )
}
