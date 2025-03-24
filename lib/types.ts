export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  featured?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface User {
  id: string
  name: string
  email: string
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  createdAt: string
  shippingAddress: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  paymentMethod: string
}

