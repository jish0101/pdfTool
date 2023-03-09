import React from "react";
import constructionImg from "../assets/c.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center gap-12 p-5">
      <div>
        <h3 className="font-bold text-3xl mb-3">It will be added soon!</h3>
        <p>
          use our tools without login here &#8594;{" "}
          <Link to={"/pdf-tools"}>Tools</Link>
        </p>
      </div>
      <img src={constructionImg} alt="construction-image" />
    </div>
  );
};

export default Login;
