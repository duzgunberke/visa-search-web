import { ArrowRight, Bell, Clock, ArrowUpDown } from "lucide-react"

export default function SearchResults() {
  return (
    <div className="flex-1 mx-4 my-3 bg-white rounded-3xl p-5 shadow-sm overflow-auto">
      <h2 className="text-2xl font-bold mb-4">Arama Sonuçları</h2>

      <div className="flex justify-end mb-2">
        <div className="bg-green-100 text-green-600 px-4 py-1 rounded-full flex items-center">
          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 6L9 17L4 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Müsait
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
        <div className="flex flex-col">
          <div className="text-gray-500 mb-1 flex items-center">
            <svg
              className="w-5 h-5 mr-1 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.5H2C2 17.3284 2.67157 18 3.5 18H20.5C21.3284 18 22 17.3284 22 16.5Z"
                fill="currentColor"
              />
              <path d="M18 9L12 3L6 9H18Z" fill="currentColor" />
              <path
                d="M12 3V14M12 14H7M12 14H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Kaynak
          </div>
          <div className="font-bold text-xl">Türkiye</div>
        </div>

        <ArrowRight className="text-gray-400" />

        <div className="flex flex-col">
          <div className="text-gray-500 mb-1 flex items-center">
            <svg
              className="w-5 h-5 mr-1 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.5H2C2 17.3284 2.67157 18 3.5 18H20.5C21.3284 18 22 17.3284 22 16.5Z"
                fill="currentColor"
              />
              <path d="M18 9L12 3L6 9H18Z" fill="currentColor" />
              <path
                d="M12 3V14M12 14H7M12 14H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Hedef
          </div>
          <div className="font-bold text-xl">Hollanda</div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="font-medium text-lg">Mevcut Randevular</span>
        </div>

        <div className="flex items-center">
          <ArrowUpDown className="text-gray-400 w-5 h-5 mr-2" />
          <span className="text-gray-500">Sırala</span>
          <div className="ml-3 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white font-medium">
            1
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-xl p-4 mb-4">
        <h3 className="font-bold text-lg mb-1">Netherlands Visa Application...</h3>
        <div className="text-gray-600 uppercase mb-3">AİLE ARKADAŞ ZİYARETİ VİZE BAŞVURU</div>

        <div className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full inline-block mb-4">
          Bekleme Listesi Açık
        </div>

        <div className="border-t border-gray-200 pt-4 grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center mb-2">
              <div className="w-6 h-4 mr-2 flex items-center justify-center">
                <span className="text-lg">🇹🇷</span>
              </div>
              <div>
                <div className="text-gray-500 text-sm">Kaynak</div>
                <div className="font-medium">Türkiye</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-6 h-4 flex flex-col mr-2">
                <div className="h-1/3 bg-blue-600 w-full"></div>
                <div className="h-1/3 bg-white w-full"></div>
                <div className="h-1/3 bg-red-600 w-full"></div>
              </div>
              <div>
                <div className="text-gray-500 text-sm">Hedef</div>
                <div className="font-medium">Hollanda</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <svg
                className="w-5 h-5 mr-2 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="14 2 14 8 20 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <div className="text-gray-500 text-sm">Kategori</div>
                <div className="font-medium">KISA DÖNEM VİZE</div>
              </div>
            </div>

            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-gray-500" />
              <div>
                <div className="text-gray-500 text-sm">Son Güncelleme</div>
                <div className="font-medium">6 Nis 2025 00:54</div>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium mt-4 flex items-center justify-center">
          Randevu Al
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>

      <div className="bg-blue-50 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center text-blue-500">
          <Bell className="w-5 h-5 mr-2" />
          <span className="font-medium">Bu Parametreler için Alarm Oluştur</span>
        </div>
        <ArrowRight className="text-blue-500 w-5 h-5" />
      </div>
    </div>
  )
}
