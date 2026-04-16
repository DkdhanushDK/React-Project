import { footerLinks } from "../data/products";

export default function Footer() {
  return (
    <footer className="footer" style={{ background: "#fffaf9" }}>
      <div className="footer-newsletter">
        <div className="footer-newsletter-text">
          <p>
            At Appnstruct, we make products inspired by real life, embracing the ethos of
            Skin First. Makeup Second.™ We believe beauty is about having fun,
            celebrating freedom, and being present. No matter where you are in your
            beauty journey, you look good.
          </p>
        </div>
        <div className="footer-newsletter-form">
          <div className="footer-input-group">
            <input type="email" placeholder="Email Address" className="footer-email-input" />
            <button className="footer-submit-btn">Submit</button>
          </div>
          <p className="footer-disclaimer">
            You can unsubscribe anytime. For more details, review our <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <h4>How can we help?</h4>
          <ul>
            {footerLinks["How can we help?"].map(link => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>About Appnstruct</h4>
          <ul>
            {footerLinks["About Appnstruct"].map(link => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Stores</h4>
          <ul>
            <li><a href="#">Find your store</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Social</h4>
          <ul>
            {footerLinks["Social"].map(link => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Appnstruct. All rights reserved.</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Accessibility</a>
        </div>
      </div>

      <style>{`
        .footer-newsletter {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
          margin-bottom: 80px;
        }
        .footer-newsletter-text p {
          font-size: 14px;
          line-height: 1.6;
          color: #1a1a1a;
        }
        .footer-input-group {
          display: flex;
          border: 1px solid #e8e0dc;
          background: #fff;
          margin-bottom: 12px;
          transition: border-color 0.2s;
        }
        .footer-input-group:focus-within {
          border-color: #1a1a1a;
        }
        .footer-email-input {
          flex: 1;
          padding: 16px;
          border: none;
          outline: none;
          font-size: 14px;
          font-family: inherit;
        }
        .footer-submit-btn {
          padding: 0 24px;
          border-left: 1px solid #e8e0dc;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .footer-submit-btn:hover {
          background: #fafafa;
        }
        .footer-disclaimer {
          font-size: 11px;
          color: #666;
        }
        .footer-disclaimer a {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .footer-newsletter {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </footer>
  );
}
