"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import SearchBar from "@/components/search-bar"

export default function SiteHeader() {
  const pathname = usePathname()
  const { cart } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const routes = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-lhood-black shadow-md" : "bg-lhood-black/95 backdrop-blur"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="font-bold text-2xl text-white flex items-center">
            <span className="text-lhood-red">L</span>Hood
          </Link>
          <nav className="hidden md:flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-lhood-red nav-link ${
                  pathname === route.href ? "text-white active-nav-link" : "text-gray-300"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar />
          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-gray-300 hover:text-white transition-transform hover:scale-110"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-lhood-red text-white text-xs flex items-center justify-center animate-pulse-scale">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/account">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white transition-transform hover:scale-110"
            >
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-lhood-black border-t border-lhood-gray animate-slide-up">
          <nav className="flex flex-col p-4 space-y-3">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-lhood-red ${
                  pathname === route.href ? "text-white" : "text-gray-300"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

