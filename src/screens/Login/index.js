import LoginImage from '../../assets/images/login-image.png';
import LoginIcon from '../../assets/images/login-icon.png';

export default function Login() {
	return (
		<div className="font-sans text-center h-screen">
			<div className="p-5 bg-login-pattern absolute w-full h-full bg-auto bg-no-repeat -top-4"></div>

			<div className="z-10 p-5 absolute">
				<section className="container px-4 py-4 mb-5">
					<div className="flex items-center justify-center space-x-4 font-semibold text-gray-800">
						<span>Silent</span>
						<img src={LoginIcon} alt="Login Icon" />
						<span>Moon</span>
					</div>
				</section>
				<img src={LoginImage} alt="login" className="p-8 mb-24" />

				<section className="mb-10">
					<h1 className="text-2xl font-bold text-gray-800 mb-6">What are what we do</h1>
					<p className="text-sm font-light text-gray-400 px-2">
						Thousand of people are usign silent moon
						for smalls meditation
					</p>
				</section>

				<section>
					<button className="rounded-full py-3 px-6 border border-gray-300 bg-purple-400 text-white my-4 font-bold w-full">SIGN UP</button>
					<p className="text-gray-400 font-bold">ALREADY HAVE AN ACCOUNT? <a href="/" className="text-purple-400">LOG IN</a></p>
				</section>
			</div>
		</div>
	)
}