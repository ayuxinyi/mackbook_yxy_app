import { footerLinks } from "../../constants";

export const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          更多选购方式：前往附近的 Apple Store
          零售店，或联系授权经销商。您也可以致电 000800 040 1966。
        </p>
        <img src="/logo.svg" alt="Apple logo" />
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
