import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bot,
  BookOpen,
  MessageCircle,
  Trophy,
  Zap,
  Star,
  Download,
  Smartphone,
  Bolt,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-rose-400 to-blue-500 flex items-center justify-center shadow-lg">
              <img src="/images/logo.png" alt="Logo" className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-blue-600 bg-clip-text text-transparent">
                Quicklish
              </span>
              <p className="text-xs text-gray-500 -mt-1">
                Your fast track to fluent English
              </p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="#app-flow"
              className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
            >
              App Flow
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
            >
              Reviews
            </Link>
            <Link
              href="#download"
              className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
            >
              Download
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-rose-400 to-blue-500 flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <img src="/images/logo.png" alt="Logo" className="h-28 w-28" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-500 to-blue-600 bg-clip-text text-transparent">
                Your Fast Track to
              </span>
              <br />
              <span className="text-gray-800">Fluent English</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Meet your AI-powered English companion. Learn faster with
              personalized lessons, real-time conversations, and adaptive
              learning paths designed just for you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-blue-600 hover:from-rose-600 hover:to-blue-700 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-10 py-4 text-lg rounded-full"
            >
              Watch Demo
            </Button>
          </div>

          {/* Google Play Badge */}
        </div>
      </section>

      {/* App Showcase Section */}
      <section id="app-flow" className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Experience Your Learning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Quicklish guides you through every step of mastering
              English with our intuitive, AI-powered approach.
            </p>
          </div>

          {/* App Flow Steps */}
          <div className="space-y-32">
            {/* Step 1: Meet Robert */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-rose-500 to-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 text-lg">
                      1
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      Meet Your AI Study Companion
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Get introduced to your friendly AI English assistant.
                    Designed to understand your learning style, provide
                    personalized guidance, and support you every step of the way
                    on your English journey.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-blue-600 rounded-full mr-4"></div>
                      <span className="text-lg">
                        24/7 AI conversation partner
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-blue-600 rounded-full mr-4"></div>
                      <span className="text-lg">
                        Personalized learning recommendations
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-blue-600 rounded-full mr-4"></div>
                      <span className="text-lg">
                        Instant feedback and corrections
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-blue-500 rounded-3xl blur opacity-20"></div>
                  <Image
                    src="/images/intro-screen.png"
                    alt="Meet Your AI Study Companion"
                    width={280}
                    height={560}
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Welcome Screen */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-rose-500 rounded-3xl blur opacity-20"></div>
                  <Image
                    src="/images/welcome-screen.png"
                    alt="Welcome to Quicklish"
                    width={280}
                    height={560}
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
              <div>
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 text-lg">
                      2
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      Begin Your Learning Adventure
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Start with a personalized welcome experience that adapts to
                    your learning goals. Set your pace, choose your focus areas,
                    and let Quicklish create the perfect learning path for you.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-rose-600 rounded-full mr-4"></div>
                      <span className="text-lg">
                        Personalized onboarding experience
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-rose-600 rounded-full mr-4"></div>
                      <span className="text-lg">
                        Goal setting and progress planning
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-rose-600 rounded-full mr-4"></div>
                      <span className="text-lg">
                        Adaptive learning path creation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Course Selection */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-rose-500 to-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 text-lg">
                      3
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      Choose Your Learning Path
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Select from expertly designed courses tailored to your
                    specific needs and goals. Whether for business, daily
                    communication, or helping your children learn, we have the
                    perfect program.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start text-gray-700">
                      <div className="w-6 h-6 bg-gradient-to-r from-rose-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <div>
                        <span className="text-lg font-semibold">
                          General English
                        </span>
                        <p className="text-gray-500">
                          Master everyday communication and conversation skills
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <div className="w-6 h-6 bg-gradient-to-r from-rose-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-xs font-bold">B</span>
                      </div>
                      <div>
                        <span className="text-lg font-semibold">
                          Business English
                        </span>
                        <p className="text-gray-500">
                          Professional vocabulary and workplace scenarios
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <div className="w-6 h-6 bg-gradient-to-r from-rose-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-xs font-bold">K</span>
                      </div>
                      <div>
                        <span className="text-lg font-semibold">
                          Kids Program
                        </span>
                        <p className="text-gray-500">
                          Fun, interactive learning designed for young learners
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-blue-500 rounded-3xl blur opacity-20"></div>
                  <Image
                    src="/images/course-selection.png"
                    alt="Choose Your Learning Path"
                    width={280}
                    height={560}
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Step 4: Chat Interface */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-rose-500 rounded-3xl blur opacity-20"></div>
                  <Image
                    src="/images/chat-interface.png"
                    alt="Interactive Learning Experience"
                    width={280}
                    height={560}
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
              <div>
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 text-lg">
                      4
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      Interactive Learning Experience
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Engage in natural conversations with your AI companion.
                    Practice speaking, ask questions, get instant feedback, and
                    learn in a supportive, judgment-free environment that adapts
                    to your pace.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <MessageCircle className="h-6 w-6 mr-4 text-blue-500" />
                      <span className="text-lg">
                        Real-time conversation practice
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Zap className="h-6 w-6 mr-4 text-rose-500" />
                      <span className="text-lg">
                        Instant grammar and vocabulary help
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Bot className="h-6 w-6 mr-4 text-blue-500" />
                      <span className="text-lg">
                        Adaptive learning based on your progress
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Progress Tracking */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-rose-500 to-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 text-lg">
                      5
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      Track Your Success
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Monitor your learning journey with detailed analytics and
                    achievements. Celebrate milestones, track vocabulary growth,
                    and see your English skills improve day by day.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <Trophy className="h-6 w-6 mr-4 text-rose-500" />
                      <span className="text-lg">
                        Earn points and unlock achievements
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <BookOpen className="h-6 w-6 mr-4 text-blue-500" />
                      <span className="text-lg">
                        Track vocabulary and grammar progress
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Star className="h-6 w-6 mr-4 text-rose-500" />
                      <span className="text-lg">
                        Celebrate learning milestones
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-blue-500 rounded-3xl blur opacity-20"></div>
                  <Image
                    src="/images/profile-screen.png"
                    alt="Track Your Success"
                    width={280}
                    height={560}
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Quicklish?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the most advanced AI-powered English learning platform
              designed for rapid progress and lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 text-center p-8 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-gradient-to-br from-rose-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Multiple Learning Paths
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Choose from specialized courses designed for your specific
                  goals - whether it's business, daily conversation, or kids'
                  learning.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 text-center p-8 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  24/7 AI Companion
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Get instant help from your AI study buddy, available around
                  the clock to answer questions and provide personalized
                  guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 text-center p-8 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-gradient-to-br from-rose-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Gamified Progress
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Stay motivated with achievements, points, and detailed
                  tracking of your vocabulary and grammar improvements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our Learners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied learners who have accelerated their
              English journey with Quicklish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 p-8 shadow-xl rounded-2xl">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  "Quicklish transformed my English learning experience! The AI
                  conversations feel so natural, and I've improved more in 3
                  months than in years of traditional classes."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">
                      Maria Rodriguez
                    </p>
                    <p className="text-gray-500">Business Professional</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 p-8 shadow-xl rounded-2xl">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  "The gamification keeps me motivated every day. I love earning
                  achievements and seeing my progress. The Business English
                  course boosted my career confidence!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-rose-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    J
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">
                      James Chen
                    </p>
                    <p className="text-gray-500">Marketing Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 p-8 shadow-xl rounded-2xl">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  "My daughter absolutely loves the Kids Program! The interface
                  is so engaging and the AI makes learning feel like playing.
                  Her confidence has soared!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    S
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">
                      Sarah Johnson
                    </p>
                    <p className="text-gray-500">Parent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <div className="flex items-center justify-center space-x-12 text-gray-600">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-blue-600 bg-clip-text text-transparent">
                  50K+
                </div>
                <p className="text-lg">Active Users</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-blue-600 bg-clip-text text-transparent">
                  4.8
                </div>
                <p className="text-lg">App Store Rating</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-blue-600 bg-clip-text text-transparent">
                  95%
                </div>
                <p className="text-lg">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Ready to Fast-Track Your English?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join thousands of learners who are already accelerating their
              English journey with Quicklish, your AI-powered learning
              companion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-blue-600 hover:from-rose-600 hover:to-blue-700 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>

            {/* Google Play Badge */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-rose-400 to-blue-500 flex items-center justify-center shadow-lg">
                <img src="/images/logo.png" alt="Logo" className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-blue-600 bg-clip-text text-transparent">
                  Quicklish
                </span>
                <p className="text-xs text-gray-500 -mt-1">
                  Your fast track to fluent English
                </p>
              </div>
            </div>

            <div className="flex space-x-8">
              <Link
                href="#"
                className="text-gray-600 hover:text-rose-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-rose-500 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-rose-500 transition-colors"
              >
                Support
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Quicklish. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
