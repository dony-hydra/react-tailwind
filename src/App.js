import "./App.css";

import Header from "./components/layout/Header";
import SignUp from "./components/Form/SignUp";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <section className="container mx-auto px-6">
          <div className="w-full lg:flex items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-md lg:text-2xl text-gray-600">
                Market Intelligence Solutions to
              </h2>
              <h1 className="text-5xl lg:text-6xl font-bold text-teal-600 mb-2 lg:md-6">
                Win your market
              </h1>
              <p className="text-md lg:text-lg font-light text-gray-800 mb-8">
                Powerful analytics tools for your business. See the exact
                keywords for which your competitors rank in organic search and
                the amount of traffic driven by each of them.
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-24">
              <SignUp />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
