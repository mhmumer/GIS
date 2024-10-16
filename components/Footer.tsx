// components/Footer.tsx
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Importing social media icons
import { HiPhone } from "react-icons/hi";
import Logo from "@/public/footer.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <Image
            src={Logo}
            alt="Company Logo"
            className="h-[7rem] w-[11rem] mb-4 -ml-3"
          />
          <p className="max-w-[15rem]">
            Importer, Exporter, Engineering Contractor &amp; Fabrication Experts
          </p>
          <p>NTN: 1578568-8</p>
          <div className="flex space-x-4 mt-4">
            {/* Social media links with icons */}
            <a href="#" className="text-gray-900 hover:text-blue-600">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-700">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Other Addresses */}
        <div>
          <h4 className="text-black font-semibold mb-4">Other Addresses</h4>
          <p className="mb-4">
            <strong>Workshop Address:</strong>
            <br />
            Plot # 2 On Link Road, B/W Malir Session Court &amp; Korangi
            Industrial Area, Karachi
          </p>
          <p className="mb-4">
            <strong>Bank Contact:</strong>
            <br />
            Habib Metropolitan Bank Limited, Landhi Ind. Zone Br.
          </p>
          <p className="mb-4">
            <strong>Legal Advisor:</strong>
            <br />
            M/S Abdul Khaliq &amp; Co, Saddar Karachi
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-black font-semibold mb-4">Get In Touch</h4>
          <p>
            <p className="text-small font-thin pb-2">Email:</p>{" "}
            GIS-PAK@HOTMAIL.COM
          </p>
          <p>
            <p className="text-small font-thin pb-2 pt-3">
              Corporate Office Address:
            </p>{" "}
            PLOT # LS-19 FIRST FLOOR MAIN COMMERCIAL STREET RAFI BANGLOWS MALIR
            CITY -15 MALIR KARACHI.
          </p>
          <p>
            <p className="text-small font-thin pb-2 pt-3">Phone Numbers</p>{" "}
            092-335 264 33 23 <br /> 092- 345 216 0 251
          </p>
        </div>
        {/* Phone Number Section */}
        <div className=" py-4 text-left pt-20">
          <p className="text-xl font-bold mb-3 text-orange-500">
            <HiPhone className="inline-block mr-2" size={24} /> +92 (42)
            37226537
          </p>
          <p className="text-base ">
            Call Us, We are Mon. to Sat. (9:00 to 18:00)
          </p>
          <p>Available</p>
        </div>
      </div>

      <div className="border-t border-gray-300 mt- mb-4 pt-3 text-center">
        <p>Copyright © 2021 Global Industrial Services. All Rights Reserved.</p>
        <nav className="flex justify-center space-x-4 mt-3">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About Us
          </a>
          <a href="#supplies" className="hover:underline">
            Services
          </a>
          <a href="#reviews" className="hover:underline">
            Reviews
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
