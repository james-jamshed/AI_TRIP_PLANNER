// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Travel Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Explore the World</h2>
          <p className="text-gray-300">
            Discover the most beautiful places in India and around the world. Travel not just to explore new lands, but to find yourself. 
          </p>
        </div>

        {/* Contact / Copyright */}
        <div className="md:text-right">
          <p className="text-gray-400 mb-2">✈️ Plan your next adventure with us</p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI TRIP PLANNER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
