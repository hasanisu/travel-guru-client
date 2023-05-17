import React from "react";
import { Link } from "react-router-dom";
import logo from '../../logo.png';
import image from '../../resources/Rectangle 1.png'
import News from "./News/News";

const Header = () => {
  return (
    <div className="navbar flex gap-10 justify-around bg-opacity-75">
    
<div className="flex">
  
  <Link className="w-10 rounded-full">
    <img src={logo} alt="" />
  </Link >
</div>

<div className="flex gap-2 text-white">
    <div className="form-control">
    <input type="text" placeholder="Search" className="input input-bordered" />
</div>

<div className="text-white">
    <Link to="/"  className="btn btn-ghost normal-case text-xl">News</Link >
</div>
<div className="text-white">
    <Link to="/destination"  className="btn btn-ghost normal-case text-xl">Destination</Link >
</div>
<div className="text-white">
    <Link to="/blogs"  className="btn btn-ghost normal-case text-xl">Blogs</Link >
</div>
<div className="text-white">
    <Link to="/contacts" className="btn btn-ghost normal-case text-xl">Contacts</Link >
</div>

  <div className="w-10 rounded-full">
    {/* <img src={''} /> */}
  </div>

</div>
</div>
  );
};

export default Header;

