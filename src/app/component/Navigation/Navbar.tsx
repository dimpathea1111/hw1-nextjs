export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-500">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">

        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>

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
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">

          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li><a className="text-gray-500 hover:text-gray-700" href="#">About</a></li>
              <li><a className="text-gray-500 hover:text-gray-700" href="#">Careers</a></li>
              <li><a className="text-gray-500 hover:text-gray-700" href="#">History</a></li>
              <li><a className="text-gray-500 hover:text-gray-700" href="#">Services</a></li>
              <li><a className="text-gray-500 hover:text-gray-700" href="#">Projects</a></li>
              <li><a className="text-gray-500 hover:text-gray-700" href="#">Blog</a></li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">

            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-700"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 sm:block"
                href="#"
              >
                Register
              </a>
            </div>

            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 md:hidden">
              <span className="sr-only">Toggle menu</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}