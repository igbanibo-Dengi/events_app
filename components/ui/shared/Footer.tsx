import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <footer className=" bg-primary/20 py-12 px-4 md:px-6">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={400}
              height={400}
              className="mb-2"
            />
          </Link>
          <p className="text-center md:text-left text-sm">
            Ticketly is a leading platform for event ticket sales, providing seamless and secure transactions for all
            types of events.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2 text-primary">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#">
              <Facebook strokeWidth={1.5} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#">
              <Twitter strokeWidth={1.5} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#">
              <Instagram strokeWidth={1.5} />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2 text-primary">Contact Us</h3>
          <p className="text-sm">
            Email: support@ticketly.com
            <br />
            Phone: (123) 456-7890
            <br />
            Address: 123 Ticketly St, Event City, 12345
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2 text-primary">Quick Links</h3>
          <Link className="text-sm hover:underline" href="#">
            FAQ
          </Link>
          <Link className="text-sm hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm hover:underline" href="#">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
        <p>© 2024 Ticketly. All rights reserved.</p>
        <p className="mt-2">
          This website is for demonstration purposes only and is not affiliated with any real ticket selling service.
        </p>
      </div>
    </footer>
  )
}

export default Footer;


// function FacebookIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//     </svg>
//   )
// }


// function InstagramIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//       <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//     </svg>
//   )
// }


// function TicketIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
//       <path d="M13 5v2" />
//       <path d="M13 17v2" />
//       <path d="M13 11v2" />
//     </svg>
//   )
// }


// function TwitterIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//     </svg>
//   )
// }
