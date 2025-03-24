import Image from "next/image"
import { notFound } from "next/navigation"
import { products } from "@/lib/products"
import AddToCartButton from "@/components/add-to-cart-button"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg?height=600&width=600"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold mt-4">${product.price.toFixed(2)}</p>
          <div className="mt-4 space-y-2">
            <p className="text-muted-foreground">{product.description}</p>
            <p className="text-sm">Category: {product.category}</p>
          </div>
          <div className="mt-8 space-y-4">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}

