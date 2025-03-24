"use client"

import { useState } from "react"
import { ShoppingCart, Plus, Minus } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"
import { useCart } from "@/lib/cart-context"

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Button variant="outline" size="icon" onClick={decreaseQuantity}>
          <Minus className="h-4 w-4" />
        </Button>
        <span className="mx-4 w-8 text-center">{quantity}</span>
        <Button variant="outline" size="icon" onClick={increaseQuantity}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button className="w-full" onClick={handleAddToCart}>
        <ShoppingCart className="h-4 w-4 mr-2" />
        Add to Cart
      </Button>
    </div>
  )
}

