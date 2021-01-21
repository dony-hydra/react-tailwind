function SignUp() {
  return (
    <form action="#" className="bg-gray-100 shadow-sm rounded-md p-8">
      <div className="mb-6">
        <label className="mb-3 block text-gray-700">Full name:</label>
        <input
          type="text"
          id="name"
          className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
        />
      </div>
      <div className="mb-6">
        <label className="mb-3 block text-gray-700">Email address:</label>
        <input
          type="email"
          id="email"
          className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
        />
      </div>
      <div className="mb-8">
        <label className="mb-3 block text-gray-700">Company size:</label>
        <select
          id="company_size"
          className="bg-while rounded-md border border-gray-200 p-3 focus:outline-none w-full"
        >
          <option value="">Select an option</option>
          <option value="1">1-10</option>
          <option value="2">10-50</option>
          <option value="3">50-100</option>
          <option value="1">100+</option>
        </select>
      </div>
      <button
        type="submit"
        className="py-3 px-12 bg-green-500 hover:bg-green-600 mr-5 rounded-md text-white text-lg focus:outline-none w-full"
      >
        Request
      </button>
    </form>
  );
}

export default SignUp;
