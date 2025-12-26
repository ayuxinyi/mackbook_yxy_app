import { navLinks } from "../../constants";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="苹果图标" />
        <ul>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href="#">{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="一个放大镜图片" />
          </button>
          <button>
            <img src="/cart.svg" alt="一个手提袋图片" />
          </button>
        </div>
      </nav>
    </header>
  );
};
