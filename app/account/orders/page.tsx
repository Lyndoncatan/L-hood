"use client"

import Link from "next/link"
import { Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock orders data - in a real app, this would come from your database
const mockOrders = [
  {
    id: "12345",
    date: "2024-03-15",
    total: 284.97,
    status: "delivered",
    items: [
      { id: "1", name: "Wireless Headphones", quantity: 1, price: 199.99 },
      { id: "3", name: "Leather Backpack", quantity: 1, price: 129.99 },
    ],
  },
  {
    id: "12346",
    date: "2024-03-01",
    total: 89.99,
    status: "shipped",
    items: [{ id: "8", name: "Fitness Tracker", quantity: 1, price: 89.99 }],
  },
  {
    id: "12347",
    date: "2024-02-15",
    total: 119.97,
    status: "processing",
    items: [
      { id: "5", name: "Organic Cotton T-Shirt", quantity: 3, price: 29.99 },
      { id: "4", name: "Stainless Steel Water Bottle", quantity: 1, price: 34.99 },
    ],
  },
]

export default function OrdersPage() {
  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-500"
      case "shipped":
        return "bg-blue-500"
      case "processing":
        return "bg-yellow-500"
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (mockOrders.length === 0) {
    return (
      <div className="container px-4 py-12 md:py-24 flex flex-col items-center justify-center min-h-[60vh]">
        <Package className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold mb-2">No orders yet</h1>
        <p className="text-muted-foreground mb-6">You haven't placed any orders yet.</p>
        <Link href="/products">
          <Button>Start Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:py-24">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      <div className="space-y-6">
        {mockOrders.map((order) => (
          <div key={order.id} className="rounded-lg border overflow-hidden">
            <div className="bg-muted p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold">Order #{order.id}</h2>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Placed on {formatDate(order.date)}</p>
              </div>
              <div className="flex gap-2">
                <Link href={`/account/orders/${order.id}`}>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
                <Button variant="outline" size="sm">
                  Track Order
                </Button>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t flex justify-between">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">${order.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

