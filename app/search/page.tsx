"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState(query)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setSearchQuery(query)
  }, [query])

  useEffect(() => {
    setIsLoading(true)

    // Simulate loading delay
    const timer = setTimeout(() => {
      if (searchQuery.trim() === "") {
        setSearchResults([])
      } else {
        const filteredResults = products.filter(
          (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        setSearchResults(filteredResults)
      }
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchQuery])

  const handleSearch = (e) => {
    e.preventDefault()
    // Update URL with search query
    const url = new URL(window.location.href)
    url.searchParams.set("q", searchQuery)
    window.history.pushState({}, "", url)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Search Results</h1>

        <form onSubmit={handleSearch} className="w-full max-w-xl flex gap-2 mt-4">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="bg-lhood-red hover:bg-lhood-darkred text-white">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>

        {searchQuery && (
          <p className="text-muted-foreground">
            {isLoading
              ? "Searching..."
              : `Found ${searchResults.length} result${searchResults.length !== 1 ? "s" : ""} for "${searchQuery}"`}
          </p>
        )}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lhood-red"></div>
        </div>
      ) : searchResults.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {searchResults.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lhood-red/10 mb-4">
            <Search className="h-8 w-8 text-lhood-red" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No results found</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            We couldn't find any products matching your search. Try using different keywords or browse our categories.
          </p>
          <Button className="bg-lhood-red hover:bg-lhood-darkred text-white" href="/products" asChild>
            <a href="/products">Browse All Products</a>
          </Button>
        </div>
      )}
    </div>
  )
}

