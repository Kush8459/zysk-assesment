const footerData = [
  {
    title: "Product",
    links: [
      { name: "Overview" },
      { name: "Features" },
      { name: "Solutions", badge: "New" },
      { name: "Tutorials" },
      { name: "Pricing" },
      { name: "Releases" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About us" },
      { name: "Careers" },
      { name: "Press" },
      { name: "News" },
      { name: "Media kit" },
      { name: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog" },
      { name: "Newsletter" },
      { name: "Events" },
      { name: "Help centre" },
      { name: "Tutorials" },
      { name: "Support" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { name: "Startups" },
      { name: "Enterprise" },
      { name: "Government" },
      { name: "SaaS centre" },
      { name: "Marketplaces" },
      { name: "Ecommerce" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Twitter" },
      { name: "LinkedIn" },
      { name: "Facebook" },
      { name: "GitHub" },
      { name: "AngelList" },
      { name: "Dribbble" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms" },
      { name: "Privacy" },
      { name: "Cookies" },
      { name: "Licenses" },
      { name: "Settings" },
      { name: "Contact" },
    ],
  },
];

function Footer() {
  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 px-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {footerData.map((section) => (
            <div key={section.title}>
              <h5 className="text-[#667085] font-bold mb-3">{section.title}</h5>
              <div className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <button
                    key={link.name}
                    className="text-left text-[#475467] font-semibold"
                  >
                    {link.name}
                    {link.badge && (
                      <span className="bg-green-200 text-green-800 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded">
                        {link.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex justify-between items-center flex-col md:flex-row gap-4">
            <img src="src/assets/logo.png" alt="Logo" className="h-12 w-44" />
            <p className="text-gray-600">
              © 2077 Untitled UI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
