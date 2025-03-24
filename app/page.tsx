"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-lhood-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <span className="text-lhood-red">Style</span> Meets <span className="text-lhood-red">Attitude</span>
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Discover premium streetwear that defines your identity. Join the LHood movement today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button size="lg" className="bg-lhood-red hover:bg-lhood-darkred text-white btn-hover-effect">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-lhood-red border-lhood-red hover:bg-lhood-red hover:text-white transition-colors"
                  >
                    Our Story
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="Hero Image"
                fill
                className="object-cover rounded-lg transition-transform hover:scale-105 duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-lhood-black/70 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-12 bg-lhood-lightgray">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Shop By Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Hoodies", "T-Shirts", "Accessories", "Footwear"].map((category, index) => (
              <Link href={`/products?category=${category.toLowerCase()}`} key={index}>
                <div className="relative h-40 rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=${category}`}
                    alt={category}
                    fill
                    className="object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lhood-black/80 to-transparent flex items-end">
                    <h3 className="text-white font-bold p-4 group-hover:text-lhood-red transition-colors">
                      {category}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="inline-block bg-lhood-red px-4 py-1 rounded-full text-white text-sm font-medium mb-2">
              <TrendingUp className="h-4 w-4 inline mr-1" /> Trending Now
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Products</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Check out our most popular items handpicked for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="border-lhood-black text-lhood-black hover:bg-lhood-black hover:text-white transition-colors duration-300"
              >
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 bg-lhood-black text-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-lhood-gray p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex text-lhood-red mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mb-4 text-gray-300">
                  "The quality of LHood products is outstanding. I've been wearing their hoodies for years and they
                  never disappoint."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-lhood-red flex items-center justify-center text-white font-bold mr-3">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <div>
                    <p className="font-medium">Customer {i}</p>
                    <p className="text-xs text-gray-400">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 bg-lhood-red text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join The LHood Family</h2>
              <p className="max-w-[600px] text-white/80 md:text-xl">
                Subscribe to our newsletter for exclusive offers, early access to drops, and updates.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit" className="bg-white text-lhood-red hover:bg-white/90 btn-hover-effect">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

