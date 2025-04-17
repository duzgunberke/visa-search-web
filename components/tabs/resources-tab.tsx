"use client"
import { useState } from "react"
import { FolderClosed, FileText, ChevronDown, HelpCircle, Plus, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "@/context/translation-provider"

export default function ResourcesTab() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState("documents") // documents, faq

  // Document dropdowns state
  const [expandedDocuments, setExpandedDocuments] = useState<number[]>([])

  // FAQ dropdowns state
  const [expandedAppointmentQuestions, setExpandedAppointmentQuestions] = useState<number[]>([])
  const [expandedProcessQuestions, setExpandedProcessQuestions] = useState<number[]>([])
  const [expandedDocumentQuestions, setExpandedDocumentQuestions] = useState<number[]>([])

  // Toggle document dropdown
  const toggleDocument = (id: number) => {
    if (expandedDocuments.includes(id)) {
      setExpandedDocuments(expandedDocuments.filter((docId) => docId !== id))
    } else {
      setExpandedDocuments([...expandedDocuments, id])
    }
  }

  // Toggle FAQ question dropdowns
  const toggleAppointmentQuestion = (id: number) => {
    if (expandedAppointmentQuestions.includes(id)) {
      setExpandedAppointmentQuestions(expandedAppointmentQuestions.filter((qId) => qId !== id))
    } else {
      setExpandedAppointmentQuestions([...expandedAppointmentQuestions, id])
    }
  }

  const toggleProcessQuestion = (id: number) => {
    if (expandedProcessQuestions.includes(id)) {
      setExpandedProcessQuestions(expandedProcessQuestions.filter((qId) => qId !== id))
    } else {
      setExpandedProcessQuestions([...expandedProcessQuestions, id])
    }
  }

  const toggleDocumentQuestion = (id: number) => {
    if (expandedDocumentQuestions.includes(id)) {
      setExpandedDocumentQuestions(expandedDocumentQuestions.filter((qId) => qId !== id))
    } else {
      setExpandedDocumentQuestions([...expandedDocumentQuestions, id])
    }
  }

  // Document data
  const documents = [
    {
      id: 1,
      title: "Schengen Turist Vizesi Belgeleri",
      count: 11,
      items: [
        { id: 1, name: "Pasaport", required: true },
        { id: 2, name: "Vize Başvuru Formu", required: true },
        { id: 3, name: "Biyometrik Fotoğraf", required: true },
        { id: 4, name: "Seyahat Sağlık Sigortası", required: true },
        { id: 5, name: "Uçuş Rezervasyonu", required: true },
        { id: 6, name: "Konaklama Rezervasyonu", required: true },
        { id: 7, name: "Banka Hesap Özeti", required: true },
        { id: 8, name: "Çalışma Belgesi", required: false },
        { id: 9, name: "Maaş Bordrosu", required: false },
        { id: 10, name: "Seyahat Planı", required: false },
        { id: 11, name: "Evlilik Cüzdanı (varsa)", required: false },
      ],
    },
    {
      id: 2,
      title: "Schengen İş Vizesi Belgeleri",
      count: 12,
      items: [
        { id: 1, name: "Pasaport", required: true },
        { id: 2, name: "Vize Başvuru Formu", required: true },
        { id: 3, name: "Biyometrik Fotoğraf", required: true },
        { id: 4, name: "Seyahat Sağlık Sigortası", required: true },
        { id: 5, name: "Uçuş Rezervasyonu", required: true },
        { id: 6, name: "Konaklama Rezervasyonu", required: true },
        { id: 7, name: "Banka Hesap Özeti", required: true },
        { id: 8, name: "Çalışma Belgesi", required: true },
        { id: 9, name: "Davet Mektubu", required: true },
        { id: 10, name: "Şirket Kaydı", required: true },
        { id: 11, name: "Vergi Levhası", required: false },
        { id: 12, name: "İş Programı", required: false },
      ],
    },
    {
      id: 3,
      title: "Schengen Öğrenci Vizesi Belgeleri (Kısa Süreli, C Tipi)",
      count: 10,
      items: [
        { id: 1, name: "Pasaport", required: true },
        { id: 2, name: "Vize Başvuru Formu", required: true },
        { id: 3, name: "Biyometrik Fotoğraf", required: true },
        { id: 4, name: "Seyahat Sağlık Sigortası", required: true },
        { id: 5, name: "Uçuş Rezervasyonu", required: true },
        { id: 6, name: "Konaklama Rezervasyonu", required: true },
        { id: 7, name: "Banka Hesap Özeti", required: true },
        { id: 8, name: "Öğrenci Belgesi", required: true },
        { id: 9, name: "Kabul Mektubu", required: true },
        { id: 10, name: "Ebeveyn İzin Belgesi (18 yaş altı)", required: false },
      ],
    },
    {
      id: 4,
      title: "Schengen Aile Ziyareti Vizesi Belgeleri",
      count: 11,
      items: [
        { id: 1, name: "Pasaport", required: true },
        { id: 2, name: "Vize Başvuru Formu", required: true },
        { id: 3, name: "Biyometrik Fotoğraf", required: true },
        { id: 4, name: "Seyahat Sağlık Sigortası", required: true },
        { id: 5, name: "Uçuş Rezervasyonu", required: true },
        { id: 6, name: "Konaklama Belgesi", required: true },
        { id: 7, name: "Banka Hesap Özeti", required: true },
        { id: 8, name: "Çalışma Belgesi", required: false },
        { id: 9, name: "Davet Mektubu", required: true },
        { id: 10, name: "Akrabalık Belgesi", required: true },
        { id: 11, name: "Ev Sahibinin Oturum İzni", required: true },
      ],
    },
  ]

  // FAQ data
  const appointmentQuestions = [
    {
      id: 1,
      question: "Schengen vize randevumu ne kadar erken almalıyım?",
      answer:
        "Schengen vize randevunuzu planlanan seyahatinizden en az 15 gün, ideali ise 1-3 ay öncesinde almanız önerilir. Yüksek sezon dönemlerinde (yaz ayları, tatil dönemleri) randevular hızla dolabilir, bu nedenle mümkün olduğunca erken başvurmanız tavsiye edilir. Ancak, randevunuzu seyahat tarihinden 6 aydan daha erken bir tarihe almanız mümkün değildir.",
    },
    {
      id: 2,
      question: "Hangi Schengen ülkesinin büyükelçiliğine başvurmalıyım?",
      answer:
        "Schengen vizesi başvurunuzu, ziyaret edeceğiniz ana ülkenin (en uzun süre kalacağınız ülke) büyükelçiliğine yapmalısınız. Eğer birden fazla ülkede eşit süre kalacaksanız, ilk giriş yapacağınız ülkenin büyükelçiliğine başvurmanız gerekir. Birden fazla Schengen ülkesini ziyaret edecekseniz, seyahat planınızı ve kalış sürelerinizi belgelendirmeniz önemlidir.",
    },
  ]

  const processQuestions = [
    {
      id: 1,
      question: "Schengen vizesi işleme süresi ne kadar sürer?",
      answer:
        "Schengen vizesi başvuruları genellikle 15 takvim günü içinde sonuçlanır. Ancak, yoğun dönemlerde veya ek belge talep edilmesi durumunda bu süre 30 güne kadar uzayabilir. Bazı özel durumlarda (ek güvenlik kontrolleri gerektiren başvurular) 60 güne kadar sürebilir. Bu nedenle, seyahatinizden yeterince önce başvurmanız önemlidir. Acil durumlar için bazı konsolosluklar hızlandırılmış vize hizmeti sunabilir, ancak bu genellikle ek ücrete tabidir.",
    },
    {
      id: 2,
      question: "Schengen konsolosluklarına orijinal belgeleri sunmam gerekiyor mu?",
      answer:
        "Evet, Schengen vizesi başvurularında genellikle orijinal belgeler talep edilir. Pasaport, davet mektubu, banka hesap özeti gibi belgelerin orijinallerini sunmanız gerekir. Bazı belgeler için (örneğin tapu, evlilik cüzdanı) noter onaylı kopyalar kabul edilebilir. Konsolosluklar genellikle başvuru sırasında orijinal belgeleri görüp fotokopilerini alırlar. Her konsolosluğun kendi gereksinimleri olabileceğinden, başvuru öncesi ilgili konsolosluğun güncel belge listesini kontrol etmeniz önerilir.",
    },
  ]

  const documentQuestions = [
    {
      id: 1,
      question: "Schengen vizesi için hangi belgeler gereklidir?",
      answer:
        "Schengen vizesi için temel gerekli belgeler şunlardır: Geçerli pasaport (seyahat dönüş tarihinden sonra en az 3 ay geçerli ve son 10 yıl içinde düzenlenmiş), doldurulmuş ve imzalanmış vize başvuru formu, biyometrik fotoğraf, seyahat sağlık sigortası (minimum 30.000 Euro teminatlı), uçuş ve konaklama rezervasyonları, maddi durum belgeleri (banka hesap özeti, maaş bordrosu), seyahat amacını belirten belgeler (iş için davet mektubu, turizm için seyahat planı, aile ziyareti için davet mektubu ve akrabalık belgesi). Vize türüne göre ek belgeler istenebilir.",
    },
    {
      id: 2,
      question: "Banka hesap özeti ne kadar süreyi kapsamalıdır?",
      answer:
        "Schengen vizesi başvurularında genellikle son 3 aylık banka hesap özeti istenir. Hesap özetinin güncel olması (son 15 gün içinde alınmış) ve banka tarafından kaşelenmiş/imzalanmış olması önemlidir. Hesabınızda seyahat masraflarınızı karşılayacak yeterli miktarda para olduğunu göstermelisiniz. Kişi başı günlük yaklaşık 50-100 Euro (ülkeye göre değişir) yeterli kabul edilir. Kredi kartı ekstresi de destekleyici belge olarak sunulabilir, ancak tek başına yeterli değildir.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div className="flex flex-col h-full" variants={containerVariants} initial="hidden" animate="visible">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-full p-3 mr-3">
            <FolderClosed className="text-white w-5 h-5" />
          </div>
          <div className="text-2xl font-semibold text-gray-700 dark:text-gray-200 flex items-center">
            {t("resources")}
            <Plus className="text-blue-500 ml-1 w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <motion.div className="flex px-5 mb-4" variants={itemVariants}>
        <motion.div
          className={`flex items-center mr-8 pb-2 ${activeTab === "documents" ? "border-b-2 border-blue-500" : ""} cursor-pointer`}
          onClick={() => setActiveTab("documents")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileText
            className={`w-5 h-5 mr-2 ${activeTab === "documents" ? "text-blue-500" : "text-gray-500 dark:text-gray-400"}`}
          />
          <span
            className={`${activeTab === "documents" ? "text-blue-500 font-medium" : "text-gray-500 dark:text-gray-400"}`}
          >
            {t("documents")}
          </span>
        </motion.div>
        <motion.div
          className={`flex items-center ml-auto pb-2 ${activeTab === "faq" ? "border-b-2 border-blue-500" : ""} cursor-pointer`}
          onClick={() => setActiveTab("faq")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HelpCircle
            className={`w-5 h-5 mr-2 ${activeTab === "faq" ? "text-blue-500" : "text-gray-500 dark:text-gray-400"}`}
          />
          <span className={`${activeTab === "faq" ? "text-blue-500 font-medium" : "text-gray-500 dark:text-gray-400"}`}>
            {t("faq")}
          </span>
        </motion.div>
      </motion.div>

      {/* Documents Tab Content */}
      {activeTab === "documents" && (
        <motion.div
          className="flex-1 overflow-auto px-5 pb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex items-center mb-3" variants={itemVariants}>
            <FileText className="text-blue-500 w-5 h-5 mr-2" />
            <span className="text-xl font-bold dark:text-white">{t("documentChecklists")}</span>
            <div className="ml-auto w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
              4
            </div>
          </motion.div>

          <motion.p className="text-gray-500 dark:text-gray-400 mb-6" variants={itemVariants}>
            {t("selectVisaType")}
          </motion.p>

          {documents.map((doc) => (
            <motion.div
              key={doc.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-4"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="p-4 flex items-center justify-between cursor-pointer"
                onClick={() => toggleDocument(doc.id)}
              >
                <div className="flex items-center">
                  <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mr-3">
                    <FileText className="text-gray-500 dark:text-gray-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-lg dark:text-white">{doc.title}</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {doc.count} {t("document")}
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedDocuments.includes(doc.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-gray-400 dark:text-gray-500 w-6 h-6" />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {expandedDocuments.includes(doc.id) && (
                  <motion.div
                    className="px-4 pb-4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
                      {doc.items.map((item, index) => (
                        <motion.div
                          key={item.id}
                          className="flex items-center py-2 border-b border-gray-100 dark:border-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${item.required ? "bg-green-100 dark:bg-green-900/30 text-green-500 dark:text-green-400" : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500"}`}
                          >
                            {item.required ? <Check className="w-4 h-4" /> : null}
                          </div>
                          <span className={`${item.required ? "font-medium dark:text-white" : "dark:text-gray-400"}`}>
                            {item.name}
                          </span>
                          {item.required && (
                            <span className="ml-auto text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded">
                              {t("required")}
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          <motion.p className="text-gray-400 dark:text-gray-500 text-center text-sm px-4" variants={itemVariants}>
            Tüm belge gereksinimleri resmi büyükelçilik rehberlerine dayanmaktadır ancak değişebilir. Her zaman en
            güncel bilgiler için büyükelçilik web sitesini kontrol edin.
          </motion.p>
        </motion.div>
      )}

      {/* FAQ Tab Content */}
      {activeTab === "faq" && (
        <motion.div
          className="flex-1 overflow-auto px-5 pb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex items-center mb-3" variants={itemVariants}>
            <HelpCircle className="text-blue-500 w-5 h-5 mr-2" />
            <span className="text-xl font-bold dark:text-white">{t("frequentlyAskedQuestions")}</span>
            <div className="ml-auto w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
              12
            </div>
          </motion.div>

          <motion.p className="text-gray-500 dark:text-gray-400 mb-6" variants={itemVariants}>
            {t("faqDescription")}
          </motion.p>

          {/* Appointments Section */}
          <motion.div className="mb-6" variants={itemVariants}>
            <motion.div
              className="bg-blue-500 rounded-xl p-4 flex items-center justify-between mb-2"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-white font-medium text-lg">{t("aboutAppointments")}</span>
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-blue-500 font-medium">
                2
              </div>
            </motion.div>

            {appointmentQuestions.map((q) => (
              <motion.div
                key={q.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-2"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => toggleAppointmentQuestion(q.id)}
                >
                  <div className="flex items-center">
                    <div className="bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      S
                    </div>
                    <span className="font-medium dark:text-white">{q.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedAppointmentQuestions.includes(q.id) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gray-400 dark:text-gray-500 w-6 h-6" />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {expandedAppointmentQuestions.includes(q.id) && (
                    <motion.div
                      className="px-4 pb-4"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-gray-100 dark:border-gray-700 pt-3 pl-11">
                        <p className="text-gray-600 dark:text-gray-300">{q.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Application Process Section */}
          <motion.div className="mb-6" variants={itemVariants}>
            <motion.div
              className="bg-blue-500 rounded-xl p-4 flex items-center justify-between mb-2"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-white font-medium text-lg">{t("visaApplicationProcess")}</span>
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-blue-500 font-medium">
                2
              </div>
            </motion.div>

            {processQuestions.map((q) => (
              <motion.div
                key={q.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-2"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => toggleProcessQuestion(q.id)}
                >
                  <div className="flex items-center">
                    <div className="bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      S
                    </div>
                    <span className="font-medium dark:text-white">{q.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedProcessQuestions.includes(q.id) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gray-400 dark:text-gray-500 w-6 h-6" />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {expandedProcessQuestions.includes(q.id) && (
                    <motion.div
                      className="px-4 pb-4"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-gray-100 dark:border-gray-700 pt-3 pl-11">
                        <p className="text-gray-600 dark:text-gray-300">{q.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Required Documents Section */}
          <motion.div className="mb-6" variants={itemVariants}>
            <motion.div
              className="bg-blue-500 rounded-xl p-4 flex items-center justify-between mb-2"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-white font-medium text-lg">{t("requiredDocuments")}</span>
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-blue-500 font-medium">
                2
              </div>
            </motion.div>

            {documentQuestions.map((q) => (
              <motion.div
                key={q.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-2"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => toggleDocumentQuestion(q.id)}
                >
                  <div className="flex items-center">
                    <div className="bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      S
                    </div>
                    <span className="font-medium dark:text-white">{q.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedDocumentQuestions.includes(q.id) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gray-400 dark:text-gray-500 w-6 h-6" />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {expandedDocumentQuestions.includes(q.id) && (
                    <motion.div
                      className="px-4 pb-4"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-gray-100 dark:border-gray-700 pt-3 pl-11">
                        <p className="text-gray-600 dark:text-gray-300">{q.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}
