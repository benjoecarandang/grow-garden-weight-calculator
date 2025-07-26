import { Heart, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glass-effect mt-12 mx-4 mb-4 rounded-2xl card-shadow">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Garden Tools
                </h3>
                <p className="text-sm text-gray-700">Grow & Calculate</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Your ultimate companion for mastering Grow a Garden. Calculate weights, discover designs, and cultivate the perfect farm.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-sm text-gray-700 hover:text-green-600 transition-colors">
                Weight Calculator
              </a>
              <a href="/design-ideas" className="block text-sm text-gray-700 hover:text-green-600 transition-colors">
                Design Gallery
              </a>
              <a href="#" className="block text-sm text-gray-700 hover:text-green-600 transition-colors">
                Growth Guide
              </a>
              <a href="#" className="block text-sm text-gray-700 hover:text-green-600 transition-colors">
                Tips & Tricks
              </a>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Connect</h4>
            <div className="flex space-x-3">
              <a href="https://x.com/bnjcrndng" className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white hover:shadow-lg transition-all duration-200">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="mailto:benjoe.carandang@gmail.com" className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:shadow-lg transition-all duration-200">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-gray-600">
              Made with <Heart className="inline w-3 h-3 text-red-500" /> for the Grow a Garden community
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-700">
            © 2025 Garden Tools. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
