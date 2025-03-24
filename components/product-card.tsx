"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Heart } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"
import { useCart } from "@/lib/cart-context"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-lg border bg-background product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-2 right-2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 rounded-full ${isFavorite ? "bg-lhood-red text-white" : "bg-white/80 text-lhood-black hover:bg-lhood-red hover:text-white"}`}
          onClick={(e) => {
            e.preventDefault()
            setIsFavorite(!isFavorite)
          }}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
        </Button>
      </div>

      <Link href={`/products/${product.id}`} className="relative block h-[220px] overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg?height=300&width=300"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              className="bg-lhood-red hover:bg-lhood-darkred text-white"
              onClick={(e) => {
                e.preventDefault()
                addToCart(product)
              }}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        )}
        {product.featured && <Badge className="absolute top-2 left-2 bg-lhood-red text-white">Featured</Badge>}
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold tracking-tight hover:text-lhood-red transition-colors">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold text-lhood-red">${product.price.toFixed(2)}</span>
          <Button
            size="sm"
            className="bg-lhood-black hover:bg-lhood-red text-white transition-colors"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}

