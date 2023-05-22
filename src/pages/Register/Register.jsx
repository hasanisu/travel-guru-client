import React from 'react';
import {Link} from 'react-router-dom';


const Register = () => {
    return (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 mx-auto lg:my-20 md:my-32 bg-gray-900 text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Register</h1>
		<p className="text-sm text-gray-400">Create your account</p>
	</div>
	<form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
            <div>
				<div className="flex justify-between mb-2">
					<label for="Name" className="text-sm">Name</label>
				</div>
				<input type="text" name="name" id="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>

            <div>
				<div className="flex justify-between mb-2">
					<label for="photoURL" className="text-sm">Photo URl</label>
				</div>
				<input type="" name="photoURL" id="PhotoURL" placeholder="Enter your PhotoURL" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>

            <div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Email</label>
				</div>
				<input type="email" name="email" id="password" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>

			<div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Password</label>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
		</div>
		<div className="space-y-2">
            <div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-300 hover:bg-zinc-700 text-gray-900 text-lg">Submit</button>
			</div>
			<p className="px-6 text-sm text-center text-gray-400">Have an account?
				<Link to='/login' rel="noopener noreferrer" href="#" className="hover:underline text-violet-400">Sign in</Link>.
			</p>
		</div>
	</form>
</div>
    );
};

export default Register;