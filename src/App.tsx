import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Landing } from "@/pages/Landing"
import { Privacy } from "@/pages/Privacy"

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
