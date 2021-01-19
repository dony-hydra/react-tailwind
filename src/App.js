import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="flex items-center justify-between p-6 container mx-auto">
          <title>logo</title>
          <div className="text-lg text-gray-600 hidden lg:flex">
            <span className="block mt-4 lg:line text-teal-600 lg:mt-0 mr-10">
              Home
            </span>
            <span className="block mt-4 lg:line text-teal-700 hover:text-gray-700 lg:mt-0 mr-10">
              Services
            </span>
            <span className="block mt-4 lg:line text-teal-700 hover:text-gray-700 lg:mt-0 mr-10">
              Portfolio
            </span>
          </div>

          <div className="flex items-center">
            <div className="mr-5 lg:mr-0">
              <button className="py-2 px-6 rounded-md text-gray-600 hover:text-gray-700 text-lg">
                Sign in
              </button>
              <button className="py-2 px-6 rounded-md bg-purple-600 hover:bg-teal-600 round-md text-white text-lg">
                Sign up
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
