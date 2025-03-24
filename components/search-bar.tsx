"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { useOnClickOutside } from "@/hooks/use-click-outside"

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const searchRef = useRef(null)
  const router = useRouter()

  // Handle click outside to close search results
  useOnClickOutside(searchRef, () => {
    setIsFocused(false)
  })

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      return
    }

    const filteredResults = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    setSearchResults(filteredResults.slice(0, 5)) // Limit to 5 results for dropdown
  }, [searchQuery])

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim() !== "") {
      setIsSearchOpen(false)
      setIsFocused(false)
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div ref={searchRef} className="relative">
      {isSearchOpen ? (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "250px", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <form onSubmit={handleSearchSubmit}>
            <Input
              className="w-full bg-lhood-gray text-white border-lhood-gray focus:border-lhood-red pr-10"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              autoFocus
            />
          </form>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 text-gray-300 hover:text-white"
            onClick={() => {
              setSearchQuery("")
              setIsSearchOpen(false)
            }}
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Search Results Dropdown */}
          <AnimatePresence>
            {isFocused && searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-lhood-gray rounded-md shadow-lg overflow-hidden z-50"
              >
                <div className="max-h-[400px] overflow-y-auto">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      onClick={() => {
                        setIsSearchOpen(false)
                        setSearchQuery("")
                      }}
                      className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-lhood-black transition-colors"
                    >
                      <div className="relative h-12 w-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
                        <Image
                          src={product.image || "/placeholder.svg?height=100&width=100"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900 dark:text-white">{product.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">${product.price.toFixed(2)}</p>
                      </div>
                    </Link>
                  ))}

                  <div className="p-2 border-t border-gray-200 dark:border-lhood-gray">
                    <Button
                      variant="ghost"
                      className="w-full justify-center text-lhood-red hover:bg-lhood-red/10"
                      onClick={handleSearchSubmit}
                    >
                      See all results
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-300 hover:text-white"
          onClick={() => setIsSearchOpen(true)}
        >
          <Search className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}

