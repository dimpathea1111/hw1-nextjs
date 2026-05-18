

export default function Footer() {
  return (
    <footer className="bg-white border-b border-gray-500">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">

          {/* Logo */}
          <div className="text-teal-600">
            <svg
              className="h-8"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">

            {/* Newsletter */}
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Get the latest news!
                </h2>

                <p className="mt-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">

                <label htmlFor="UserEmail" className="sr-only">
                  Email
                </label>

                <div className="border border-gray-100 p-2 focus-within:ring-2 sm:flex sm:items-center sm:gap-4">

                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@example.com"
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />

                  <button
                    className="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase hover:bg-teal-600 sm:mt-0 sm:w-auto"
                  >
                    Sign Up
                  </button>

                </div>
              </form>
            </div>

            {/* Services */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">
                Services
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 hover:opacity-75">
                    1on1 Coaching
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 hover:opacity-75">
                    Company Review
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 hover:opacity-75">
                    HR Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">
                Company
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 hover:opacity-75">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 hover:opacity-75">
                    Meet the Team
                  </a>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">
                Helpful Links
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 hover:opacity-75">
                    Contact
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 hover:opacity-75">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">
                Legal
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 hover:opacity-75">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 hover:opacity-75">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Downloads */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">
                Downloads
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 hover:opacity-75">
                    Marketing Calendar
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 hover:opacity-75">
                    SEO Infographics
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">

              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:opacity-75"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:opacity-75"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:opacity-75"
                >
                  Twitter
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">

            <p className="text-xs text-gray-500">
              © 2026 Company Name. All rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap gap-4 text-xs sm:mt-0">

              <li>
                <a href="#" className="text-gray-500 hover:opacity-75">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 hover:opacity-75">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 hover:opacity-75">
                  Cookies
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}