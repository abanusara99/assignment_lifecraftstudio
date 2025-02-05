import React from 'react';
import { Menu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#2E323F] text-white">
      {/* Navigation */}
      <nav className="bg-[#2E323F] p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">CRL</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-[#A59678]">HOME</a>
            <a href="#" className="hover:text-[#A59678]">ABOUT</a>
            <a href="#" className="hover:text-[#A59678]">CONTACT</a>
            <a href="#" className="hover:text-[#A59678]">SIGN IN</a>
            <a href="#" className="bg-[#A59678] px-4 py-1 rounded hover:bg-opacity-90">SIGN UP</a>
          </div>
          <Menu className="md:hidden w-6 h-6" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 md:mb-0">
                Responsive layouts <span className="text-[#A59678]">don't have to be a struggle</span>
              </h1>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-[#A59678] px-6 py-3 rounded text-white hover:bg-opacity-90">
                I WANT TO LEARN
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#F2F2F2] text-[#2E323F] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-[#A59678] text-xl font-bold mb-4">Mobile-first</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="text-center">
              <h3 className="text-[#A59678] text-xl font-bold mb-4">Efficient</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="text-center">
              <h3 className="text-[#A59678] text-xl font-bold mb-4">Done right</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">It doesn't have to be so hard</h2>
            <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <img 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000"
              alt="Design sketches"
              className="w-full rounded-lg shadow-lg"
            />
            <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="space-y-8">
            <div className="bg-[#3B4050] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Break it down</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="bg-[#3B4050] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Work your way up</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3B4050] py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Just scratching the surface</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
            <h4 className="text-[#A59678] font-bold mb-4">Getting around</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#A59678]">Home</a></li>
              <li><a href="#" className="hover:text-[#A59678]">About</a></li>
              <li><a href="#" className="hover:text-[#A59678]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#A59678] font-bold mb-4">Other things</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#A59678]">Lorem ipsum</a></li>
              <li><a href="#" className="hover:text-[#A59678]">dolor</a></li>
              <li><a href="#" className="hover:text-[#A59678]">sit amet</a></li>
              <li><a href="#" className="hover:text-[#A59678]">consectetur</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#A59678] font-bold mb-4">And more</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#A59678]">Lorem ipsum</a></li>
              <li><a href="#" className="hover:text-[#A59678]">dolor</a></li>
              <li><a href="#" className="hover:text-[#A59678]">sit amet</a></li>
              <li><a href="#" className="hover:text-[#A59678]">consectetur</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;