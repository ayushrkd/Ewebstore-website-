"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Code, Mic, Zap, Linkedin } from "lucide-react"
import Link from "next/link"
import BallTrail from "./balltrail"
import WaitlistForm from "./waitlist-form"
import CustomCursor from "./custom-cursor"
import MotionBackground from "./motion-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Motion background */}
      <MotionBackground />

      {/* Dotted background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 opacity-50" />
        <BallTrail />
      </div>

      <CustomCursor />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Ewebstore AI
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link href="#features" className="hover:text-blue-400 transition-colors">
                Features
              </Link>
              <Link href="#about" className="hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="#contact" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Transform Your Ideas into Websites with AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Ewebstore AI: Where Voice Commands Build Your Digital Presence
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" variant="outline">
            <Link
                    href="https://www.linkedin.com/company/ewebstore/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Learn More Us
                    <Linkedin className="ml-2 h-4 w-4" />
                  </Link>
              
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our AI-Powered Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Mic className="w-12 h-12 text-blue-400" />}
              title="Voice-to-Website"
              description="Transform your spoken ideas into fully functional websites with our advanced AI technology."
            />
            <FeatureCard
              icon={<Brain className="w-12 h-12 text-purple-400" />}
              title="AI-Driven Design"
              description="Let our AI create stunning, responsive designs tailored to your brand and vision."
            />
            <FeatureCard
              icon={<Code className="w-12 h-12 text-green-400" />}
              title="Intelligent Coding"
              description="Our AI generates clean, optimized code for seamless functionality and performance."
            />
            <FeatureCard
              icon={<Zap className="w-12 h-12 text-yellow-400" />}
              title="Rapid Deployment"
              description="Launch your website in minutes with our streamlined AI-powered deployment process."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Revolutionizing Web Development with AI
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-300 mb-6"
              >
                At Ewebstore AI, we're passionate about making web development accessible to everyone. Our cutting-edge
                AI technology allows you to create professional websites using just your voice, bridging the gap between
                imagination and reality.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button asChild>
                  <Link
                    href="https://www.linkedin.com/company/ewebstore/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Learn More About Us
                    <Linkedin className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <div className="relative w-full h-64 md:h-96 bg-blue-500 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 opacity-75" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="w-24 h-24 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Build Your AI-Powered Website?</h2>
          <p className="text-xl text-gray-300 mb-8">Join the future of web development with Ewebstore AI</p>
          <Button size="lg">Get Started Now</Button>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Waitlist</h2>
            <p className="text-xl text-gray-300 mb-8">
              Be the first to experience the future of AI-powered web development. Sign up for early access and
              exclusive updates.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">© 2025 Ewebstore AI. All rights reserved.</div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-700"
    >
      <div className="mb-4 transform transition-transform duration-300 hover:scale-110">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

