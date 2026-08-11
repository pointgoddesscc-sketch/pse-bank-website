"use client";

const APP = "https://pse-wealth-platform.vercel.app";

const photos = {
  logo: "/images/logo-horizontal.jpg",
  icon: "/images/logo-app-icon.jpg",
  wordmark: "/images/logo-wordmark.jpg",
  hq: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  skyline: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",
  entrance: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  boardroom: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
  vault: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
  cards: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
  debit: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
  atm: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80",
  transfer: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=900&q=80",
  desk: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",
  biometric: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&w=900&q=80",
  shield: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=200&q=80",
  branch: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
  coins: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80",
  network: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  security: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&w=1000&q=80",
  promo: "/images/pse-bank-promo-preview.gif",
};

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#070b14", color: "#e2e8f0", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <style>{`
        * { box-sizing: border-box; }
        a { transition: all 0.2s ease; }
        .card:hover { transform: translateY(-4px); border-color: #0ea5e9; box-shadow: 0 20px 40px rgba(14,165,233,0.12); }
        .img-card:hover img { transform: scale(1.04); }
        .btn-primary:hover { filter: brightness(1.1); box-shadow: 0 8px 24px rgba(14,165,233,0.35); }
        .btn-ghost:hover { background: rgba(255,255,255,0.1); border-color: #475569; }
        .nav-link:hover { color: #38bdf8; }
        .mobile-cta { display: none; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .mobile-cta { display: inline-block !important; }
          .trust-strip { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .split { grid-template-columns: 1fr !important; }
          .gallery { grid-template-columns: 1fr 1fr !important; }
          .features { grid-template-columns: 1fr !important; }
          .vault-duo { grid-template-columns: 1fr !important; }
          .trust-strip { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
        }
        @media (max-width: 480px) {
          .gallery { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HEADER */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(7,11,20,0.88)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(30,41,59,0.8)",
      }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#fff", fontSize: 17 }}>P</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>PS&amp;E Bank</div>
              <div style={{ fontSize: 10, color: "#64748b", letterSpacing: "0.08em" }}>PRIVATE BANKING</div>
            </div>
          </div>
          <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <a href="#features" className="nav-link" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Features</a>
            <a href="#gallery" className="nav-link" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Gallery</a>
            <a href="#security" className="nav-link" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Security</a>
            <a href={APP} style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>Sign In</a>
            <a href={APP} className="btn-primary" style={{
              background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", color: "#fff",
              padding: "10px 20px", borderRadius: 10, fontWeight: 650, fontSize: 14, textDecoration: "none",
            }}>Open App</a>
          </nav>
          <a href={APP} className="btn-primary mobile-cta" style={{
            background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", color: "#fff",
            padding: "10px 18px", borderRadius: 10, fontWeight: 650, fontSize: 13, textDecoration: "none",
          }}>Open App</a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: 640, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img src={photos.hq} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.38 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(7,11,20,0.55) 0%, rgba(7,11,20,0.75) 40%, rgba(7,11,20,0.95) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "90px 24px 100px", width: "100%" }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.3)",
              borderRadius: 999, padding: "6px 14px", fontSize: 12.5, color: "#7dd3fc", fontWeight: 600, marginBottom: 28, letterSpacing: "0.02em",
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22d3ee", display: "inline-block" }} />
              Secure Banking Service · Multi-user · Encrypted
            </div>
            <h1 style={{
              fontSize: "clamp(36px, 5.8vw, 56px)", fontWeight: 800, lineHeight: 1.1,
              margin: "0 0 20px", letterSpacing: "-0.035em",
            }}>
              Private banking<br />
              <span style={{
                background: "linear-gradient(90deg,#38bdf8,#22d3ee,#67e8f9)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>built for real control</span>
            </h1>
            <p style={{ fontSize: 18, color: "#94a3b8", lineHeight: 1.65, maxWidth: 520, margin: "0 0 36px" }}>
              Open an account in minutes. Transfer funds, manage crypto, top up with Stripe, and get live support — all in one modern wealth platform.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={APP} className="btn-primary" style={{
                background: "linear-gradient(135deg,#0ea5e9,#0284c7)", color: "#fff",
                padding: "16px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none",
              }}>Create Free Account</a>
              <a href="#gallery" className="btn-ghost" style={{
                background: "rgba(255,255,255,0.06)", color: "#e2e8f0",
                padding: "16px 28px", borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: "none",
                border: "1px solid #334155",
              }}>Explore the Bank</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b", background: "#0a0f1a" }}>
        <div className="trust-strip" style={{ maxWidth: 1180, margin: "0 auto", padding: "28px 24px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, textAlign: "center" }}>
          {[
            ["Multi-user", "Anyone can open an account"],
            ["Real-time", "Instant internal transfers"],
            ["Crypto-ready", "BTC · ETH · SOL · more"],
            ["Secure", "OTP + encrypted sessions"],
          ].map(([t, d]) => (
            <div key={t}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", marginBottom: 4 }}>{t}</div>
              <div style={{ fontSize: 13, color: "#64748b" }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 24px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 12, color: "#38bdf8", fontWeight: 650, letterSpacing: "0.1em", marginBottom: 10 }}>PLATFORM</div>
          <h2 style={{ fontSize: 32, fontWeight: 750, margin: "0 0 12px", letterSpacing: "-0.02em" }}>Everything you need to bank</h2>
          <p style={{ color: "#94a3b8", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>A complete private banking experience with transfers, crypto, top-ups and live support.</p>
        </div>

        <div className="split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", marginBottom: 72 }}>
          <div>
            <div style={{ fontSize: 12, color: "#38bdf8", fontWeight: 600, marginBottom: 10 }}>TRANSFERS</div>
            <h3 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Send & receive instantly</h3>
            <p style={{ color: "#94a3b8", lineHeight: 1.7, marginBottom: 20 }}>
              Transfer between PS&E accounts in real time. Every user gets a unique account number. Full history and status tracking built in.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#cbd5e1", fontSize: 14, lineHeight: 2 }}>
              <li>✓ Unique account numbers</li>
              <li>✓ Real-time ledger updates</li>
              <li>✓ Transfer history & receipts</li>
            </ul>
          </div>
          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #1e293b", boxShadow: "0 24px 48px rgba(0,0,0,0.4)" }}>
            <img src={photos.transfer} alt="Transfer success" style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover" }} />
          </div>
        </div>

        <div className="split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", marginBottom: 72 }}>
          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #1e293b", boxShadow: "0 24px 48px rgba(0,0,0,0.4)" }}>
            <img src={photos.cards} alt="PS&E Cards" style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover" }} />
          </div>
          <div>
            <div style={{ fontSize: 12, color: "#38bdf8", fontWeight: 600, marginBottom: 10 }}>CARDS & PAYMENTS</div>
            <h3 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Premium cards, modern payments</h3>
            <p style={{ color: "#94a3b8", lineHeight: 1.7, marginBottom: 20 }}>
              Manage spending with elegant debit cards and a clean payment experience designed for everyday and global use.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#cbd5e1", fontSize: 14, lineHeight: 2 }}>
              <li>✓ Virtual & physical ready design</li>
              <li>✓ Stripe-powered top-ups</li>
              <li>✓ Clear transaction visibility</li>
            </ul>
          </div>
        </div>

        <div className="split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: 12, color: "#38bdf8", fontWeight: 600, marginBottom: 10 }}>WEALTH & CRYPTO</div>
            <h3 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px" }}>Crypto dashboard included</h3>
            <p style={{ color: "#94a3b8", lineHeight: 1.7, marginBottom: 20 }}>
              Buy and track BTC, ETH, SOL, XRP, ADA, DOGE and more using your USD balance — all inside the same modern dashboard.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#cbd5e1", fontSize: 14, lineHeight: 2 }}>
              <li>✓ Multi-coin portfolio view</li>
              <li>✓ Buy with USD ledger</li>
              <li>✓ Live support chat with Alex</li>
            </ul>
          </div>
          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #1e293b", boxShadow: "0 24px 48px rgba(0,0,0,0.4)" }}>
            <img src={photos.desk} alt="Trading desk" style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "20px 24px 80px" }}>
        <div className="features" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {[
            ["Multi-user accounts", "Anyone can register, verify with OTP, and receive a unique account number."],
            ["Send & receive", "Transfer between PS&E accounts in real time with full history."],
            ["Crypto dashboard", "BTC, ETH, SOL, XRP, ADA, DOGE and more — buy with USD balance."],
            ["Live support chat", "Talk to Alex, customer care — balances, transfers, top-ups."],
            ["Stripe top-ups", "Fund your ledger via Stripe Checkout with multiple amounts."],
            ["Compliance ready", "Public documentation, privacy standards and secure operations."],
          ].map(([t, d]) => (
            <div key={t} className="card" style={{
              background: "linear-gradient(180deg,#0f172a,#0c1220)", border: "1px solid #1e293b",
              borderRadius: 16, padding: "24px 20px", transition: "all 0.25s ease",
            }}>
              <h3 style={{ margin: "0 0 10px", fontSize: 16, fontWeight: 650 }}>{t}</h3>
              <p style={{ margin: 0, fontSize: 13.5, color: "#94a3b8", lineHeight: 1.55 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ background: "#0a0f1a", borderTop: "1px solid #1e293b", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ fontSize: 12, color: "#38bdf8", fontWeight: 650, letterSpacing: "0.1em", marginBottom: 10 }}>INSIDE PS&E BANK</div>
            <h2 style={{ fontSize: 32, fontWeight: 750, margin: "0 0 12px", letterSpacing: "-0.02em" }}>Professional spaces & security</h2>
            <p style={{ color: "#94a3b8", maxWidth: 460, margin: "0 auto" }}>Headquarters, vault, branches, and the tools that power modern private banking.</p>
          </div>

          <div className="gallery" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
            {[
              [photos.entrance, "Main Entrance", "Welcoming private banking lobby"],
              [photos.boardroom, "Boardroom", "Strategic leadership spaces"],
              [photos.vault, "Secure Vault", "Institutional-grade protection"],
              [photos.atm, "ATM Network", "Convenient access points"],
              [photos.biometric, "Biometric Access", "Identity-first security"],
              [photos.branch, "Branch at Night", "Always-on presence"],
              [photos.network, "Global Network", "Connected worldwide"],
              [photos.coins, "Wealth Assets", "Diverse portfolio tools"],
            ].map(([src, title, desc]) => (
              <div key={title as string} className="img-card" style={{
                borderRadius: 16, overflow: "hidden", border: "1px solid #1e293b",
                background: "#0f172a", transition: "all 0.25s ease",
              }}>
                <div style={{ overflow: "hidden", height: 160 }}>
                  <img src={src as string} alt={title as string} style={{
                    width: "100%", height: "100%", objectFit: "cover", display: "block",
                    transition: "transform 0.4s ease",
                  }} />
                </div>
                <div style={{ padding: "14px 14px 16px" }}>
                  <h3 style={{ margin: "0 0 3px", fontSize: 14.5, fontWeight: 650 }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: 12.5, color: "#64748b" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 24px" }}>
        <div className="split" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 48, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <img src={photos.security} alt="Security" style={{
              width: "100%", borderRadius: 20, border: "1px solid #1e293b",
              boxShadow: "0 28px 56px rgba(0,0,0,0.45)", display: "block",
            }} />
            <div style={{
              position: "absolute", bottom: 20, left: 20, right: 20,
              background: "rgba(7,11,20,0.85)", backdropFilter: "blur(12px)",
              borderRadius: 12, padding: "14px 16px", border: "1px solid #1e293b",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#fff", fontSize: 16 }}>P</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 650 }}>Shield-grade protection</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>Encrypted · OTP · Isolated sessions</div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: "#38bdf8", fontWeight: 600, marginBottom: 10 }}>SECURE BANKING SERVICE</div>
            <h2 style={{ fontSize: 28, fontWeight: 750, margin: "0 0 14px", letterSpacing: "-0.02em" }}>Protection at every layer</h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.7, marginBottom: 24 }}>
              Encrypted sessions, OTP verification, biometric-ready flows, and clear compliance documentation. Your data and balances stay isolated per user.
            </p>
            {[
              "TLS encryption in transit",
              "Session-based authentication",
              "Multi-user isolation",
              "Public compliance repository",
              "Biometric-ready identity flows",
            ].map((x) => (
              <div key={x} style={{ display: "flex", gap: 12, alignItems: "center", color: "#cbd5e1", fontSize: 14.5, marginBottom: 12 }}>
                <span style={{
                  width: 22, height: 22, borderRadius: 6, background: "rgba(34,211,238,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#22d3ee", fontSize: 12, flexShrink: 0,
                }}>✓</span>
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VAULT + BIOMETRIC */}
      <section style={{ background: "#0a0f1a", borderTop: "1px solid #1e293b", padding: "64px 24px" }}>
        <div className="vault-duo" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid #1e293b", position: "relative", minHeight: 280 }}>
            <img src={photos.vault} alt="Vault" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,11,20,0.9), transparent 60%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 24 }}>
              <h3 style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 700 }}>Institutional Vault</h3>
              <p style={{ margin: 0, fontSize: 14, color: "#94a3b8" }}>Bank-grade storage and access controls.</p>
            </div>
          </div>
          <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid #1e293b", position: "relative", minHeight: 280 }}>
            <img src={photos.biometric} alt="Biometric" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,11,20,0.9), transparent 60%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 24 }}>
              <h3 style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 700 }}>Biometric Ready</h3>
              <p style={{ margin: 0, fontSize: 14, color: "#94a3b8" }}>Identity verification designed for modern security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", overflow: "hidden", padding: "100px 24px", textAlign: "center" }}>
        <img src={photos.skyline} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.28 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7,11,20,0.7), #070b14)" }} />
        <div style={{ position: "relative", maxWidth: 580, margin: "0 auto" }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, margin: "0 auto 22px", background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#fff", fontSize: 24, boxShadow: "0 8px 24px rgba(14,165,233,0.3)" }}>P</div>
          <h2 style={{ fontSize: 32, fontWeight: 750, margin: "0 0 14px", letterSpacing: "-0.02em" }}>Ready to bank with control?</h2>
          <p style={{ color: "#94a3b8", marginBottom: 30, lineHeight: 1.65, fontSize: 16 }}>
            Create your account, verify in minutes, and start managing wealth on PS&amp;E Bank.
          </p>
          <a href={APP} className="btn-primary" style={{
            background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", color: "#fff",
            padding: "16px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none",
            display: "inline-block",
          }}>Open Banking App</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1e293b", padding: "40px 24px 32px", background: "#05080f" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#fff", fontSize: 13 }}>P</div>
            <span style={{ fontWeight: 700, fontSize: 15 }}>PS&amp;E Bank</span>
          </div>
          <div style={{ fontSize: 13.5, color: "#64748b" }}>
            <a href={APP} style={{ color: "#94a3b8", textDecoration: "none", margin: "0 12px" }}>Banking App</a>
            <span style={{ color: "#334155" }}>·</span>
            <a href="#features" style={{ color: "#94a3b8", textDecoration: "none", margin: "0 12px" }}>Features</a>
            <span style={{ color: "#334155" }}>·</span>
            <a href="#security" style={{ color: "#94a3b8", textDecoration: "none", margin: "0 12px" }}>Security</a>
            <span style={{ color: "#334155" }}>·</span>
            <span style={{ margin: "0 12px" }}>support@psebank.com</span>
          </div>
          <div style={{ fontSize: 12, color: "#475569", textAlign: "center", maxWidth: 520, lineHeight: 1.5 }}>
            © 2026 PS&amp;E Bank · Secure Banking Service · Not a government-insured depository institution
          </div>
        </div>
      </footer>
    </div>
  );
}
