import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Blog Title", path: "ai/blog-titles" },
        { name: "Write Articles", path: "ai/write-article" },
        { name: "Generate Images", path: "ai/generate-images" },
        { name: "Remove Images", path: "remove-object"},
        { name: "Remove Object", path: "ai/remove-object"}
      ]
    },
    {
      title: "Need Help?",
      links: [
        { name: "Delivery Information", path: "delivery" },
        { name: "Return & Refund Policy", path: "return-policy" },
        { name: "Payment Methods", path: "payment-methods" },
        { name: "Track your Order", path: "track-order" },
        { name: "Contact Us", path: "contact" }
      ]
    },
    {
      title: "Follow Us",
      links: [
        { name: "Instagram", path: "instagram" },
        { name: "Twitter", path: "twitter" },
        { name: "Facebook", path: "facebook" },
        { name: "YouTube", path: "youtube" }
      ]
    }
  ]

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        {/* Left Section */}
        <div>
          <img className="w-34 md:w-32" src={assets.logo} alt="dummyLogoColored" />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={`/${link.path}`}
                      className="hover:underline transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © <a href="https://prebuiltui.com">PrebuiltUI</a> All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
