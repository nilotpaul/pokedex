import "../components/styles/header.css";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div className="head">
      <div className="inside-div">
        <div className="brand_info">
          <a style={{ color: "#991b1b" }} href="/">
            <h2>PokeDex</h2>
          </a>
          <a style={{ color: "#404040" }} href="/">
            <h2>App</h2>
          </a>
        </div>
        <div className="search">
          <a href="/search">
            <button>Advanced Search</button>
          </a>
          <a href="https://github.com/nilotpaul">
            <button className="github">
              <BsGithub id="github" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
