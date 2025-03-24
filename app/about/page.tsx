"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Code, ShoppingBag, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import TypeAnimation from "@/components/type-animation"

export default function AboutPage() {
  const heroRef = useRef(null)
  const missionRef = useRef(null)
  const featuresRef = useRef(null)
  const teamRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const missionInView = useInView(missionRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })
  const teamInView = useInView(teamRef, { once: true })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="w-full py-16 md:py-24 lg:py-32 bg-lhood-black text-white"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About <span className="text-lhood-red">LHood</span>
                </h1>
                <div className="h-24 md:h-16">
                  <TypeAnimation
                    text="Connecting fashion enthusiasts with premium streetwear through an innovative e-commerce platform."
                    className="max-w-[600px] text-gray-300 md:text-xl"
                  />
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="About LHood"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-lhood-black/70 to-transparent"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Developer Bio */}
      <motion.section
        ref={missionRef}
        className="w-full py-12 md:py-24"
        initial="hidden"
        animate={missionInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Lyndon+Domini+Catan"
                alt="Lyndon Domini Catan"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block bg-lhood-red px-4 py-1 rounded-full text-white text-sm font-medium">
                The Developer
              </div>
              <h2 className="text-3xl font-bold">
                <TypeAnimation text="Lyndon Domini Catan" className="" delay={0.5} />
              </h2>
              <div className="h-32 md:h-24">
                <TypeAnimation
                  text="I'm a passionate web developer based in Marikina City, Philippines. With LHood, I'm creating an interactive platform that helps users buy and sell products with ease."
                  className="text-lg text-muted-foreground"
                  delay={1}
                />
              </div>
              <div className="h-32 md:h-24">
                <TypeAnimation
                  text="My vision for LHood is to bridge the gap between sellers and buyers through an intuitive, engaging, and secure e-commerce experience. I'm constantly exploring new technologies and design approaches to enhance the user experience."
                  className="text-muted-foreground"
                  delay={2}
                />
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://www.facebook.com/dondon.catan.359/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full hover:bg-lhood-red hover:text-white">
                    Facebook
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/d0n2n/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full hover:bg-lhood-red hover:text-white">
                    Instagram
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        ref={featuresRef}
        className="w-full py-12 md:py-24 bg-lhood-lightgray"
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose LHood?</h2>
            <div className="h-16">
              <TypeAnimation
                text="Our platform is designed with both buyers and sellers in mind, offering a seamless experience for everyone."
                className="text-muted-foreground max-w-2xl mx-auto"
                delay={0.5}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              variants={fadeIn}
            >
              <div className="w-12 h-12 bg-lhood-red/10 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-6 w-6 text-lhood-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Shopping</h3>
              <p className="text-muted-foreground">
                Intuitive interface that makes finding and purchasing products a breeze.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              variants={fadeIn}
            >
              <div className="w-12 h-12 bg-lhood-red/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-lhood-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Design</h3>
              <p className="text-muted-foreground">
                Engaging animations and responsive elements that enhance user experience.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              variants={fadeIn}
            >
              <div className="w-12 h-12 bg-lhood-red/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-lhood-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
              <p className="text-muted-foreground">Building connections between fashion enthusiasts and creators.</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              variants={fadeIn}
            >
              <div className="w-12 h-12 bg-lhood-red/10 rounded-full flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-lhood-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
              <p className="text-muted-foreground">Built with the latest web technologies for optimal performance.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <motion.section
        ref={teamRef}
        className="w-full py-16 md:py-24 bg-lhood-black text-white"
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="h-24 md:h-16 mb-8">
              <TypeAnimation
                text="To create a vibrant marketplace where fashion meets technology, enabling seamless connections between buyers and sellers through an interactive and engaging platform."
                className="text-xl text-gray-300"
                delay={0.5}
              />
            </div>
            <Link href="/products">
              <Button size="lg" className="bg-lhood-red hover:bg-lhood-darkred text-white btn-hover-effect">
                Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

