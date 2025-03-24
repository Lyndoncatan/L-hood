"use client"

import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"

export default function ProductsPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">All Products</h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">Browse our collection of premium products.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

