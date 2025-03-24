"use client"

import Link from "next/link"
import Image from "next/image"
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { Separator } from "@/components/ui/separator"
import { useState, useEffect } from "react"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal, clearCart } = useCart()
  const [animateItems, setAnimateItems] = useState(false)

  useEffect(() => {
    setAnimateItems(true)
  }, [])

  if (cart.length === 0) {
    return (
      <div className="container px-4 py-12 md:py-24 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-lhood-lightgray p-12 rounded-lg text-center max-w-md w-full animate-fade-in">
          <ShoppingBag className="h-16 w-16 text-lhood-red mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Link href="/products">
            <Button className="bg-lhood-red hover:bg-lhood-darkred text-white btn-hover-effect">
              Continue Shopping <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:py-24">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <ShoppingBag className="mr-3 h-8 w-8 text-lhood-red" /> Your Cart
      </h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-lg border shadow-sm overflow-hidden">
            <div className="p-6 space-y-6">
              {cart.map((item, index) => (
                <div
                  key={item.product.id}
                  className={`flex flex-col sm:flex-row gap-4 pb-6 ${
                    index < cart.length - 1 ? "border-b" : ""
                  } ${animateItems ? "animate-slide-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-md overflow-hidden flex-shrink-0 bg-lhood-lightgray">
                    <Image
                      src={item.product.image || "/placeholder.svg?height=100&width=100"}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{item.product.name}</h3>
                      <p className="text-sm text-muted-foreground">Category: {item.product.category}</p>
                      <p className="text-lhood-red font-semibold mt-1">${item.product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border rounded-md overflow-hidden">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none border-r hover:bg-lhood-lightgray hover:text-lhood-red"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="mx-3 w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none border-l hover:bg-lhood-lightgray hover:text-lhood-red"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-lhood-red hover:bg-transparent"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-lhood-lightgray p-4 flex justify-between items-center">
              <Link href="/products">
                <Button variant="ghost" className="text-lhood-black hover:text-lhood-red">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
                </Button>
              </Link>
              <Button variant="ghost" className="text-lhood-black hover:text-lhood-red" onClick={clearCart}>
                <Trash2 className="mr-2 h-4 w-4" /> Clear Cart
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-lg border p-6 shadow-sm sticky top-20">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal ({cart.reduce((total, item) => total + item.quantity, 0)} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-lhood-red">${subtotal.toFixed(2)}</span>
              </div>
              <Link href="/checkout">
                <Button className="w-full bg-lhood-red hover:bg-lhood-darkred text-white btn-hover-effect">
                  Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <div className="pt-4 text-center text-sm text-muted-foreground">
                <p>We accept:</p>
                <div className="flex justify-center space-x-2 mt-2">
                  {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((payment) => (
                    <div key={payment} className="px-2 py-1 bg-lhood-lightgray rounded text-xs">
                      {payment}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

