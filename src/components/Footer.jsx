import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-12 mt-10">
      <div className="max-w-6xl mx-auto text-center px-4">

        {/* Title */}
        <h1 className="text-4xl font-bold">KeenKeeper</h1>

        {/* Subtitle */}
        <p className="text-gray-300 mt-3 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mt-6">
          <h3 className="text-sm text-gray-300 mb-3">Social Links</h3>

          <div className="flex justify-center gap-4">
            <div className="bg-white text-black p-2 rounded-full cursor-pointer">
              <FaInstagram />
            </div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer">
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span className="cursor-pointer hover:underline">Terms of Service</span>
            <span className="cursor-pointer hover:underline">Cookies</span>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer