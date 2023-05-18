import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";

const Header = () => {
  const user = {displayName: 'Hasan'}
  return (
    <div className=" bg-lime-700">
      <div className="navbar flex gap-10 justify-around">
        <div className="flex">
          <Link to="/" className="w-20 rounded-full">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="flex gap-2 text-white">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>

          <div className="text-stone-950"></div>
          <div className="text-stone-950">
            <Link
              to="/destination"
              className="btn btn-ghost normal-case text-xl"
            >
              Destination
            </Link>
          </div>
          <div className="text-stone-950">
            <Link to="/blogs" className="btn btn-ghost normal-case text-xl">
              Blogs
            </Link>
          </div>
          <div className="text-stone-950">
            <Link to="/contacts" className="btn btn-ghost normal-case text-xl">
              Contacts
            </Link>
          </div>

          <div className="w-10 rounded-full">
            {
          user?.uld ?
          /* <img src={''} /> */
          
          <button className="btn">Logout</button>
          :
          <button className="btn bg-yellow-300 text-black text-lg">Login</button>
          
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
