"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"
import { Textarea } from "@/components/ui/textarea"

export default function CheckoutPage() {
  const { cart, subtotal, clearCart } = useCart()
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    paymentMethod: "credit-card",
  })

  if (cart.length === 0) {
    router.push("/cart")
    return null
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would process the payment and create an order here
    alert("Order placed successfully!")
    clearCart()
    router.push("/order-confirmation")
  }

  return (
    <div className="container px-4 py-12 md:py-24">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Shipping Address</h2>
              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Textarea id="address" name="address" value={formData.address} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" name="state" value={formData.state} onChange={handleChange} required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip/Postal Code</Label>
                  <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" name="country" value={formData.country} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Payment Method</h2>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, paymentMethod: value }))}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <Label htmlFor="credit-card">Credit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                  <Label htmlFor="bank-transfer">Bank Transfer</Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full">
              Place Order
            </Button>
          </form>
        </div>
        <div>
          <div className="rounded-lg border p-6 sticky top-20">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.product.id} className="flex justify-between">
                  <span>
                    {item.product.name} × {item.quantity}
                  </span>
                  <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${(subtotal * 0.1).toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${(subtotal + subtotal * 0.1).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

