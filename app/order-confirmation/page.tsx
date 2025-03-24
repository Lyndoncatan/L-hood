"use client"

import Link from "next/link"
import { CheckCircle, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OrderConfirmationPage() {
  return (
    <div className="container px-4 py-12 md:py-24 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-md w-full text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for your purchase. We've received your order and will process it right away. You'll receive an email
          confirmation shortly.
        </p>
        <div className="space-y-4">
          <p className="font-medium">Order #12345</p>
          <p className="text-sm text-muted-foreground">Estimated delivery: 3-5 business days</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/account/orders">
              <Button variant="outline">View Order</Button>
            </Link>
            <Link href="/products">
              <Button>
                <ShoppingBag className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

