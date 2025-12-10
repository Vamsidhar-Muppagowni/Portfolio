import React from "react";

const contactLinks = [
  {
    label: "Email",
    value: "vamsimuppagowni@gmail.com",
    href: "mailto:vamsimuppagowni@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 9110339191",
    href: "tel:+919110339191",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vamsidhar-muppagowni",
    href: "https://www.linkedin.com/in/vamsidhar-muppagowni-723797382",
  },
  {
    label: "GitHub",
    value: "github.com/vamsimuppagowni",
    href: "https://github.com/vamsimuppagowni",
  },
];

const ContactDetails = () => (
  <section className="py-20 bg-white dark:bg-gray-900 min-h-screen">
    <div className="container mx-auto px-6 max-w-xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100 text-center">Contact Details</h2>
      <ul className="space-y-6">
        {contactLinks.map((item) => (
          <li key={item.label} className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
            <span className="text-gray-700 dark:text-gray-300 font-medium">{item.label}:</span>
            <a
              href={item.href}
              className="text-blue-600 dark:text-blue-400 hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);


export default ContactDetails;
