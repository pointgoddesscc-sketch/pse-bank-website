import {
  ArrowRight,
  Shield,
  Landmark,
  CreditCard,
  Wallet,
  Building2,
  Globe2,
  Lock,
  Users,
  Zap,
  LineChart,
  Headphones,
  CheckCircle2,
  Smartphone,
  FileCheck,
  Fingerprint,
} from "lucide-react";

const APP = "https://pse-wealth-platform.vercel.app";
const COMPLIANCE = "https://github.com/pointgoddesscc-sketch/pse-bank-license-compliance";

const nav = [
  { href: "#products", label: "Products" },
  { href: "#platform", label: "Platform" },
  { href: "#wealth", label: "Wealth" },
  { href: "#security", label: "Security" },
  { href: "#support", label: "Support" },
];

const products = [
  {
    icon: Landmark,
    title: "Private accounts",
    text: "Multi-user accounts with unique numbers, OTP verification, and isolated ledgers.",
  },
  {
    icon: Zap,
    title: "Instant transfers",
    text: "Real-time internal transfers with receipts, history, and live balance updates.",
  },
  {
    icon: CreditCard,
    title: "Cards & payments",
    text: "Virtual and physical debit cards with clear transaction visibility.",
  },
  {
    icon: Wallet,
    title: "Stripe top-ups",
    text: "Fund balances securely with Stripe-powered top-ups in supported regions.",
  },
  {
    icon: LineChart,
    title: "Wealth & crypto",
    text: "Portfolio view for BTC, ETH, SOL, XRP, ADA, DOGE and more — buy with USD balance.",
  },
  {
    icon: Building2,
    title: "Business controls",
    text: "Team access patterns, operational visibility, and structured account management.",
  },
];

const platform = [
  "Unique account numbers for every member",
  "Real-time ledger and transfer history",
  "Encrypted sessions with TLS in transit",
  "OTP verification on sensitive actions",
  "Multi-user isolation by design",
  "Live support chat for balances and transfers",
];

const security = [
  { icon: Lock, title: "Encrypted sessions", text: "Session-based auth with TLS protection." },
  { icon: Fingerprint, title: "Biometric-ready", text: "Flows prepared for device biometrics." },
  { icon: Shield, title: "OTP controls", text: "Verification gates on high-risk operations." },
  { icon: FileCheck, title: "Compliance docs", text: "Public license and policy repository." },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#070b14", color: "#e2e8f0" }}>
      {/* Top bar */}
      <div
        style={{
          borderBottom: "1px solid #1e293b",
          background: "#0a101c",
          fontSize: 13,
          color: "#94a3b8",
          padding: "8px 20px",
          textAlign: "center",
        }}
      >
        Private banking & wealth platform · Point Goddess CC / PSE Management ·{" "}
        <a href={COMPLIANCE} style={{ color: "#93c5fd" }}>
          Compliance repository
        </a>
      </div>

      {/* Nav */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          backdropFilter: "blur(12px)",
          background: "rgba(7,11,20,0.9)",
          borderBottom: "1px solid #1e293b",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "linear-gradient(135deg,#1d4ed8,#0ea5e9)",
                display: "grid",
                placeItems: "center",
                fontWeight: 700,
              }}
            >
              P
            </div>
            <div>
              <div style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>PS&E Bank</div>
              <div style={{ fontSize: 12, color: "#94a3b8" }}>Private Banking & Wealth</div>
            </div>
          </div>
          <nav style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 14 }}>
            {nav.map((n) => (
              <a key={n.href} href={n.href} style={{ color: "#cbd5e1", textDecoration: "none" }}>
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={APP}
            style={{
              background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Open App <ArrowRight size={16} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "64px 20px 40px" }}>
        <div style={{ maxWidth: 720 }}>
          <p style={{ color: "#38bdf8", fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
            INSTITUTIONAL CONTROL · DIGITAL SPEED
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: "0 0 18px",
            }}
          >
            Private banking built for real control
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 18, lineHeight: 1.6, marginBottom: 28 }}>
            Multi-user accounts, instant transfers, cards, Stripe top-ups, wealth & crypto tools,
            and live support — designed as a professional private banking and wealth platform.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={APP}
              style={{
                background: "#2563eb",
                color: "#fff",
                padding: "14px 20px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Open banking app <ArrowRight size={18} />
            </a>
            <a
              href="#products"
              style={{
                border: "1px solid #334155",
                color: "#e2e8f0",
                padding: "14px 20px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Explore products
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: 12,
            marginTop: 48,
          }}
        >
          {[
            ["Multi-user", "Isolated accounts"],
            ["Real-time", "Ledger updates"],
            ["Crypto-ready", "Major assets"],
            ["Support", "Live chat assist"],
          ].map(([k, v]) => (
            <div
              key={k}
              style={{
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: 14,
                padding: "16px 18px",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: 18 }}>{k}</div>
              <div style={{ color: "#94a3b8", fontSize: 13, marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ fontSize: 28, marginBottom: 8 }}>Products</h2>
        <p style={{ color: "#94a3b8", marginBottom: 24, maxWidth: 560 }}>
          More depth than a simple landing page — accounts, payments, wealth tools, and operational
          controls in one platform experience.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 14,
          }}
        >
          {products.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: 16,
                padding: 20,
              }}
            >
              <p.icon size={22} color="#38bdf8" />
              <h3 style={{ margin: "12px 0 8px", fontSize: 17 }}>{p.title}</h3>
              <p style={{ margin: 0, color: "#94a3b8", fontSize: 14, lineHeight: 1.55 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform */}
      <section id="platform" style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 24,
            alignItems: "center",
          }}
        >
          <div>
            <h2 style={{ fontSize: 28, marginBottom: 12 }}>Platform capabilities</h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.6, marginBottom: 18 }}>
              Built for members who need clarity: balances, transfers, cards, top-ups, and portfolio
              views with professional operational hygiene.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {platform.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                    marginBottom: 10,
                    color: "#cbd5e1",
                    fontSize: 14,
                  }}
                >
                  <CheckCircle2 size={18} color="#22c55e" style={{ marginTop: 2, flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              background: "linear-gradient(160deg,#0f172a,#111827)",
              border: "1px solid #1e293b",
              borderRadius: 20,
              padding: 24,
            }}
          >
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <Users size={20} color="#38bdf8" />
              <Smartphone size={20} color="#38bdf8" />
              <Globe2 size={20} color="#38bdf8" />
            </div>
            <h3 style={{ marginTop: 0 }}>Member journey</h3>
            <ol style={{ color: "#94a3b8", paddingLeft: 18, lineHeight: 1.7, fontSize: 14 }}>
              <li>Register and verify with OTP</li>
              <li>Receive a unique account number</li>
              <li>Fund via Stripe top-up where available</li>
              <li>Transfer, card activity, and wealth tools</li>
              <li>Chat with live support when needed</li>
            </ol>
            <a
              href={APP}
              style={{
                display: "inline-flex",
                marginTop: 8,
                color: "#93c5fd",
                fontWeight: 600,
                textDecoration: "none",
                gap: 6,
                alignItems: "center",
              }}
            >
              Launch platform <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Wealth */}
      <section id="wealth" style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ fontSize: 28, marginBottom: 8 }}>Wealth & digital assets</h2>
        <p style={{ color: "#94a3b8", marginBottom: 20, maxWidth: 640 }}>
          Track major crypto assets alongside platform balances. Buy with USD balance and monitor
          portfolio positions in one place.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {["BTC", "ETH", "SOL", "XRP", "ADA", "DOGE", "USD balance", "Portfolio view"].map((t) => (
            <span
              key={t}
              style={{
                border: "1px solid #334155",
                background: "#0f172a",
                borderRadius: 999,
                padding: "8px 14px",
                fontSize: 13,
                color: "#cbd5e1",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Security */}
      <section id="security" style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ fontSize: 28, marginBottom: 8 }}>Security & trust</h2>
        <p style={{ color: "#94a3b8", marginBottom: 24, maxWidth: 640 }}>
          Shield-grade protection layers with transparent documentation for operators and members.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 14,
          }}
        >
          {security.map((s) => (
            <div
              key={s.title}
              style={{
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: 16,
                padding: 18,
              }}
            >
              <s.icon size={20} color="#38bdf8" />
              <h3 style={{ fontSize: 16, margin: "10px 0 6px" }}>{s.title}</h3>
              <p style={{ margin: 0, color: "#94a3b8", fontSize: 14 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support */}
      <section id="support" style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 20px" }}>
        <div
          style={{
            background: "linear-gradient(135deg,#0f172a,#0b1220)",
            border: "1px solid #1e293b",
            borderRadius: 20,
            padding: "28px 24px",
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", maxWidth: 640 }}>
            <Headphones size={24} color="#38bdf8" />
            <div>
              <h2 style={{ margin: "0 0 8px", fontSize: 22 }}>Live support</h2>
              <p style={{ margin: 0, color: "#94a3b8", lineHeight: 1.55 }}>
                Chat for balances, transfers, and top-ups. Operational clarity for members who need
                answers without friction.
              </p>
            </div>
          </div>
          <a
            href={APP}
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "12px 18px",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Open support in app
          </a>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "20px 20px 56px" }}>
        <div
          style={{
            textAlign: "center",
            background: "linear-gradient(180deg,#111827,#0f172a)",
            border: "1px solid #1e293b",
            borderRadius: 24,
            padding: "40px 24px",
          }}
        >
          <h2 style={{ marginTop: 0, fontSize: 28 }}>Ready to bank with control?</h2>
          <p style={{ color: "#94a3b8", maxWidth: 520, margin: "0 auto 22px" }}>
            Create an account, verify with OTP, and access transfers, cards, top-ups, and wealth tools
            in the PS&E platform.
          </p>
          <a
            href={APP}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
              color: "#fff",
              padding: "14px 22px",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Open PS&E App <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #1e293b",
          padding: "28px 20px 40px",
          color: "#94a3b8",
          fontSize: 13,
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ fontWeight: 700, color: "#e2e8f0", marginBottom: 8 }}>PS&E Bank</div>
          <p style={{ maxWidth: 720, lineHeight: 1.55 }}>
            Marketing site for the PS&E private banking and wealth platform operated in connection
            with Point Goddess CC / PSE Management. Platform access, eligibility, and features are
            subject to account verification, terms, and applicable policies. Review the{" "}
            <a href={COMPLIANCE} style={{ color: "#93c5fd" }}>
              compliance repository
            </a>{" "}
            for official documentation.
          </p>
          <div style={{ marginTop: 16, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={APP} style={{ color: "#93c5fd" }}>
              Open App
            </a>
            <a href={COMPLIANCE} style={{ color: "#93c5fd" }}>
              License & compliance
            </a>
            <a href="https://github.com/pointgoddesscc-sketch/pse-bank-website" style={{ color: "#93c5fd" }}>
              GitHub
            </a>
            <span>pointgoddesscc@gmail.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
