import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-lhood-black text-white">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="font-bold text-2xl flex items-center mb-4">
              <span className="text-lhood-red">L</span>Hood
            </Link>
            <p className="text-gray-400 mb-4">
              Premium streetwear for those who dare to stand out. Quality, style, and attitude in every stitch.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/dondon.catan.359/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-lhood-red transition-colors transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/d0n2n/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-lhood-red transition-colors transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-lhood-red transition-colors transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-lhood-red transition-colors transform hover:scale-110">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-lhood-red transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=hoodies"
                  className="text-gray-400 hover:text-lhood-red transition-colors"
                >
                  Hoodies
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=t-shirts"
                  className="text-gray-400 hover:text-lhood-red transition-colors"
                >
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=accessories"
                  className="text-gray-400 hover:text-lhood-red transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=footwear"
                  className="text-gray-400 hover:text-lhood-red transition-colors"
                >
                  Footwear
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-lhood-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-lhood-red transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-lhood-red transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-lhood-red transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-400 hover:text-lhood-red transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-lhood-red mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Marikina City, Metro Manila
                  <br />
                  Philippines
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-lhood-red mr-2" />
                <span className="text-gray-400">+63 945 280 7867</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-lhood-red mr-2" />
                <span className="text-gray-400">catanlyndon200316@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-lhood-gray mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 LHood. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-lhood-red transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-lhood-red transition-colors">
              Privacy Policy
            </Link>
            <Link href="/shipping" className="hover:text-lhood-red transition-colors">
              Shipping Info
            </Link>
            <Link href="/faq" className="hover:text-lhood-red transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

