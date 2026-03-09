import { useState, useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  .aoe-root {
    font-family: 'DM Sans', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 48px clamp(16px, 5vw, 48px);
    background: #0a0f0d;
    border-radius: 24px;
    position: relative;
    overflow: hidden;
  }

  .aoe-root::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -80px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(52, 211, 153, 0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  .aoe-root::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -60px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(52, 211, 153, 0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  .aoe-header {
    text-align: center;
    z-index: 1;
  }

  .aoe-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #34d399 !important;
    margin-bottom: 8px;
  }

  .aoe-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 28px;
    font-weight: 800;
    color: #f0fdf4 !important;
    margin: 0 0 8px 0;
    line-height: 1.2;
    max-width: 480px;
  }

  .aoe-subtitle {
    font-size: 14px;
    color: #6b7280 !important;
    margin: 0;
    line-height: 1.6;
    max-width: 340px;
    font-style: italic;
  }

  .aoe-toggle-container {
    display: flex;
    background: #111816;
    border: 1px solid #1f2e28;
    border-radius: 100px;
    padding: 4px;
    gap: 4px;
    z-index: 1;
  }

  .aoe-toggle-btn {
    padding: 8px 20px;
    border-radius: 100px;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
  }

  .aoe-toggle-btn.inactive {
    background: transparent;
    color: #4b5563 !important;
  }

  .aoe-toggle-btn.active-before {
    background: #1f2e28;
    color: #d1fae5 !important;
  }

  .aoe-toggle-btn.active-after {
    background: #34d399;
    color: #022c22 !important;
    font-weight: 600;
  }

  .aoe-phones-wrapper {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    z-index: 1;
    flex-wrap: wrap;
    justify-content: center;
  }

  .aoe-phone-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .aoe-phone-tag {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 100px;
  }

  .aoe-phone-tag.before {
    background: #1c2320;
    color: #6b7280 !important;
    border: 1px solid #2d3f38;
  }

  .aoe-phone-tag.after {
    background: #064e3b;
    color: #34d399 !important;
    border: 1px solid #065f46;
  }

  .aoe-phone {
    width: min(280px, 88vw);
    background: #111816;
    border-radius: 36px;
    border: 1.5px solid #1f2e28;
    overflow: hidden;
    box-shadow: 0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(52,211,153,0.03);
    position: relative;
  }

  .aoe-phone.highlighted {
    border-color: rgba(52, 211, 153, 0.3);
    box-shadow: 0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(52,211,153,0.1), 0 0 40px rgba(52,211,153,0.05);
  }

  .phone-notch {
    height: 28px;
    background: #0a0f0d;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #1a2620;
  }

  .phone-notch-pill {
    width: 60px;
    height: 8px;
    background: #1f2e28;
    border-radius: 100px;
  }

  .phone-screen {
    padding: 0;
    min-height: 400px;
    background: #0d1614;
  }

  .phone-status-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px 4px;
  }

  .status-time {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: #9ca3af !important;
  }

  .status-icons {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .status-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #4b5563;
  }

  .status-dot.green {
    background: #34d399;
  }

  .phone-header {
    padding: 12px 16px 16px;
    border-bottom: 1px solid #1a2620;
  }

  .phone-greeting {
    font-size: 10px;
    color: #4b5563 !important;
    margin-bottom: 2px;
    font-weight: 400;
  }

  .phone-bank-name {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #d1fae5 !important;
  }

  .phone-content {
    padding: 14px 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .balance-card {
    background: #141f1b;
    border-radius: 16px;
    padding: 14px;
    border: 1px solid #1f2e28;
    position: relative;
    overflow: hidden;
  }

  .balance-card::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%);
  }

  .balance-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #4b5563 !important;
    margin-bottom: 6px;
  }

  .balance-amount {
    font-family: 'DM Sans', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: #f0fdf4 !important;
    line-height: 1;
    margin-bottom: 8px;
  }

  .balance-meta {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .balance-change {
    font-size: 10px;
    font-weight: 500;
    padding: 2px 6px;
    border-radius: 100px;
  }

  .balance-change.neutral {
    background: #1f2e28;
    color: #6b7280 !important;
  }

  .balance-frequency {
    font-size: 9px;
    color: #374151 !important;
  }

  .balance-frequency.active {
    color: #34d399 !important;
  }

  .quick-actions {
    display: flex;
    gap: 8px;
    justify-content: space-between;
  }

  .quick-action {
    flex: 1;
    background: #141f1b;
    border: 1px solid #1f2e28;
    border-radius: 12px;
    padding: 10px 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .quick-action-icon {
    font-size: 14px;
  }

  .quick-action-label {
    font-size: 9px;
    color: #4b5563 !important;
    text-align: center;
    font-weight: 500;
  }

  /* OFFER CARDS */

  .offer-card-generic {
    background: #141f1b;
    border-radius: 14px;
    border: 1px solid #1f2e28;
    padding: 14px;
    animation: fadeSlideIn 0.4s ease forwards;
  }

  .offer-card-contextual {
    background: linear-gradient(135deg, #064e3b 0%, #0f2820 100%);
    border-radius: 14px;
    border: 1px solid rgba(52, 211, 153, 0.25);
    padding: 14px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(52,211,153,0.08);
    animation: fadeSlideIn 0.4s ease forwards;
  }

  .offer-card-contextual::before {
    content: '';
    position: absolute;
    top: -30px;
    right: -30px;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%);
  }

  .offer-tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 100px;
    margin-bottom: 8px;
  }

  .offer-tag.generic {
    background: #1f2e28;
    color: #4b5563 !important;
  }

  .offer-tag.contextual {
    background: rgba(52, 211, 153, 0.15);
    color: #34d399 !important;
  }

  .offer-title-generic {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #6b7280 !important;
    margin: 0 0 4px 0;
    line-height: 1.3;
  }

  .offer-title-contextual {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #d1fae5 !important;
    margin: 0 0 6px 0;
    line-height: 1.3;
  }

  .offer-body-generic {
    font-size: 10px;
    color: #374151 !important;
    margin: 0 0 10px 0;
    line-height: 1.5;
  }

  .offer-body-contextual {
    font-size: 10px;
    color: #6ee7b7 !important;
    margin: 0 0 10px 0;
    line-height: 1.5;
  }

  .offer-amount {
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    font-weight: 800;
    color: #34d399 !important;
    margin-bottom: 10px;
  }

  .offer-cta-row {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .offer-cta-primary {
    flex: 1;
    padding: 9px 0;
    border-radius: 10px;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
  }

  .offer-cta-primary.generic {
    background: #1f2e28;
    color: #4b5563 !important;
  }

  .offer-cta-primary.contextual {
    background: #34d399;
    color: #022c22 !important;
  }

  .offer-cta-dismiss {
    padding: 9px 10px;
    border-radius: 10px;
    border: 1px solid #1f2e28;
    background: transparent;
    font-size: 10px;
    color: #4b5563 !important;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    white-space: nowrap;
  }

  .offer-steps {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 6px;
  }

  .step-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  .step-dot.active {
    background: #34d399;
    width: 14px;
    border-radius: 100px;
  }

  .step-dot.inactive-generic {
    background: #1f2e28;
  }

  .step-dot.inactive-contextual {
    background: rgba(52,211,153,0.2);
  }

  .steps-label {
    font-size: 9px;
    margin-left: 4px;
    font-weight: 500;
  }

  .steps-label.generic {
    color: #374151 !important;
  }

  .steps-label.contextual {
    color: #6ee7b7 !important;
  }

  .push-notification {
    margin: 0 14px 10px;
    border-radius: 12px;
    padding: 10px 12px;
    display: flex;
    gap: 8px;
    align-items: flex-start;
    animation: fadeSlideIn 0.5s ease 0.2s both;
  }

  .push-notification.generic {
    background: #141f1b;
    border: 1px solid #1f2e28;
  }

  .push-notification.contextual {
    background: rgba(52, 211, 153, 0.06);
    border: 1px solid rgba(52, 211, 153, 0.15);
  }

  .push-icon {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    flex-shrink: 0;
  }

  .push-icon.generic {
    background: #1f2e28;
  }

  .push-icon.contextual {
    background: rgba(52, 211, 153, 0.15);
  }

  .push-text {
    flex: 1;
  }

  .push-title {
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  .push-title.generic {
    color: #4b5563 !important;
  }

  .push-title.contextual {
    color: #d1fae5 !important;
  }

  .push-body {
    font-size: 9px;
    line-height: 1.4;
  }

  .push-body.generic {
    color: #374151 !important;
  }

  .push-body.contextual {
    color: #6ee7b7 !important;
  }

  .push-time {
    font-size: 9px;
    font-weight: 500;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .push-time.generic {
    color: #374151 !important;
  }

  .push-time.contextual {
    color: #34d399 !important;
  }

  /* SIGNAL INDICATOR */
  .signal-bar {
    margin: 0 14px 10px;
    background: rgba(52,211,153,0.05);
    border: 1px solid rgba(52,211,153,0.1);
    border-radius: 10px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    animation: fadeSlideIn 0.4s ease 0.1s both;
  }

  .signal-pulse {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #34d399;
    flex-shrink: 0;
    animation: pulse 1.5s ease infinite;
  }

  .signal-text {
    font-size: 9px;
    color: #34d399 !important;
    font-weight: 500;
    line-height: 1.3;
  }

  /* COMPARISON TABLE */
  .aoe-comparison {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: #1f2e28;
    border-radius: 16px;
    overflow: hidden;
    width: 100%;
    max-width: min(460px, 88vw);
    z-index: 1;
  }

  .comparison-header {
    padding: 10px 16px;
    text-align: center;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .comparison-header.before {
    background: #111816;
    color: #4b5563;
  }

  .comparison-header.after {
    background: #0d1f18;
    color: #34d399;
  }

  .comparison-row {
    display: contents;
  }

  .comparison-cell {
    padding: 10px 16px;
    font-size: 11px;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .comparison-cell.before {
    background: #0d1410;
    color: #4b5563;
  }

  .comparison-cell.after {
    background: #0a1a14;
    color: #6ee7b7;
  }

  .comparison-cell-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 2px;
    opacity: 0.6;
  }

  .comparison-cell.before .comparison-cell-label {
    color: #374151;
  }

  .comparison-cell.after .comparison-cell-label {
    color: #34d399;
  }

  /* ANIMATIONS */
  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.85); }
  }

  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
`;

const comparisonData = [
  {
    label: "Detección",
    before: "Modelo batch semanal. No detecta el 3er saldo consultado.",
    after: "LSTM detecta secuencia en tiempo real: señal de intención activa."
  },
  {
    label: "Momento",
    before: "Push a las 10am (hora del sistema, no del cliente).",
    after: "Push a las 8:15pm — cuando Juan está activo en la app."
  },
  {
    label: "Mensaje",
    before: "\"¡Tenemos productos para ti!\" — genérico para todos.",
    after: "Crédito pre-aprobado de S/8,000 mencionado por su nombre."
  },
  {
    label: "Contratación",
    before: "7+ pantallas con datos que el banco ya tiene.",
    after: "2 pasos. Datos pre-completados. Firma digital."
  }
];

export default function AOEPrototype() {
  const [mode, setMode] = useState("after");
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleToggle = (newMode) => {
    if (newMode === mode) return;
    setAnimating(true);
    setVisible(false);
    setTimeout(() => {
      setMode(newMode);
      setVisible(true);
      setAnimating(false);
    }, 300);
  };

  const isAfter = mode === "after";

  return (
    <>
      <style>{styles}</style>
      <div className="aoe-root">

        {/* Header */}
        <div className="aoe-header">
          <p className="aoe-label">Prototipo Interactivo</p>
          <h2 className="aoe-title">El mismo cliente. La misma app.<br/>Una experiencia radicalmente distinta.</h2>
          <p className="aoe-subtitle">Juan consulta su saldo por tercera vez en la semana. ¿Qué hace el banco?</p>
        </div>

        {/* Toggle */}
        <div className="aoe-toggle-container">
          <button
            className={`aoe-toggle-btn ${mode === "before" ? "active-before" : "inactive"}`}
            onClick={() => handleToggle("before")}
          >
            Sin AOE
          </button>
          <button
            className={`aoe-toggle-btn ${mode === "after" ? "active-after" : "inactive"}`}
            onClick={() => handleToggle("after")}
          >
            Con AOE ✦
          </button>
        </div>

        {/* Phones side by side on wider screens, single phone on narrow */}
        <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease", display: "flex", justifyContent: "center", zIndex: 1 }}>
          <div className="aoe-phone-column">
            <div className={`aoe-phone ${isAfter ? "highlighted" : ""}`}>
              {/* Notch */}
              <div className="phone-notch">
                <div className="phone-notch-pill" />
              </div>

              {/* Screen */}
              <div className="phone-screen">
                {/* Status bar */}
                <div className="phone-status-bar">
                  <span className="status-time">{isAfter ? "20:15" : "10:02"}</span>
                  <div className="status-icons">
                    <div className={`status-dot ${isAfter ? "green" : ""}`} />
                    <div className={`status-dot ${isAfter ? "green" : ""}`} />
                    <div className={`status-dot ${isAfter ? "green" : ""}`} />
                  </div>
                </div>

                {/* Bank header */}
                <div className="phone-header">
                  <p className="phone-greeting">{isAfter ? "Hola, Juan 👋" : "Bienvenido"}</p>
                  <p className="phone-bank-name">MiBanco</p>
                </div>

                {/* Signal bar — only in AOE mode */}
                {isAfter && (
                  <div style={{ padding: "10px 14px 0" }}>
                    <div className="signal-bar">
                      <div className="signal-pulse" />
                      <span className="signal-text">AOE detectó: 3 consultas de saldo en 5 días · Intención activa</span>
                    </div>
                  </div>
                )}

                {/* Push notification */}
                <div style={{ padding: "10px 14px 0" }}>
                  <div className={`push-notification ${isAfter ? "contextual" : "generic"}`} style={{ margin: 0 }}>
                    <div className={`push-icon ${isAfter ? "contextual" : "generic"}`}>
                      {isAfter ? "💡" : "🏦"}
                    </div>
                    <div className="push-text">
                      <p className={`push-title ${isAfter ? "contextual" : "generic"}`}>
                        {isAfter ? "Oferta para ti, Juan" : "MiBanco"}
                      </p>
                      <p className={`push-body ${isAfter ? "contextual" : "generic"}`}>
                        {isAfter
                          ? "Crédito pre-aprobado de S/8,000. Sin papeleos."
                          : "¡Tenemos productos financieros para ti!"}
                      </p>
                    </div>
                    <span className={`push-time ${isAfter ? "contextual" : "generic"}`}>
                      {isAfter ? "ahora" : "8h"}
                    </span>
                  </div>
                </div>

                {/* Phone content */}
                <div className="phone-content">
                  {/* Balance */}
                  <div className="balance-card">
                    <p className="balance-label">Saldo disponible</p>
                    <p className="balance-amount">S/ 2,840</p>
                    <div className="balance-meta">
                      <span className={`balance-change ${isAfter ? "" : "neutral"}`}
                        style={isAfter ? { background: "rgba(52,211,153,0.12)", color: "#34d399", fontSize: "10px", fontWeight: 500, padding: "2px 6px", borderRadius: "100px" } : {}}>
                        {isAfter ? "↗ 3 consultas esta semana" : "Sin cambios"}
                      </span>
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div className="quick-actions">
                    {["Transferir", "Pagar", "Recargar"].map((action) => (
                      <div className="quick-action" key={action}>
                        <span className="quick-action-icon">
                          {action === "Transferir" ? "↗" : action === "Pagar" ? "💳" : "📱"}
                        </span>
                        <span className="quick-action-label">{action}</span>
                      </div>
                    ))}
                  </div>

                  {/* Offer card */}
                  {isAfter ? (
                    <div className="offer-card-contextual">
                      <div className="offer-tag contextual">✦ Para ti, ahora</div>
                      <p className="offer-title-contextual">Juan, tienes un crédito esperándote</p>
                      <p className="offer-body-contextual">
                        Revisamos tu actividad reciente. Tienes pre-aprobado:
                      </p>
                      <p className="offer-amount">S/ 8,000</p>
                      <div className="offer-cta-row">
                        <button className="offer-cta-primary contextual">Ver mi oferta →</button>
                        <button className="offer-cta-dismiss">No ahora</button>
                      </div>
                      <div className="offer-steps">
                        <div className="step-dot active" />
                        <div className="step-dot inactive-contextual" />
                        <span className="steps-label contextual">2 pasos · datos pre-completados</span>
                      </div>
                    </div>
                  ) : (
                    <div className="offer-card-generic">
                      <div className="offer-tag generic">Productos disponibles</div>
                      <p className="offer-title-generic">¡Tenemos productos para ti!</p>
                      <p className="offer-body-generic">
                        Descubre nuestra amplia gama de productos financieros diseñados para tus necesidades.
                      </p>
                      <div className="offer-cta-row">
                        <button className="offer-cta-primary generic">Ver productos</button>
                      </div>
                      <div className="offer-steps">
                        {[...Array(7)].map((_, i) => (
                          <div key={i} className={`step-dot ${i === 0 ? "active" : "inactive-generic"}`} />
                        ))}
                        <span className="steps-label generic">7 pasos</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="aoe-comparison">
          <div className="comparison-header before" style={!isAfter ? { background: "#1a2820", color: "#d1fae5", borderBottom: "2px solid #34d399" } : {}}>
            Sin AOE {!isAfter && "◀"}
          </div>
          <div className="comparison-header after" style={isAfter ? { background: "#064e3b", color: "#34d399", borderBottom: "2px solid #34d399" } : { color: "#374151" }}>
            Con AOE {isAfter && "✦"}
          </div>
          {comparisonData.map((row, i) => (
            <div className="comparison-row" key={i}>
              <div className="comparison-cell before" style={!isAfter ? { background: "#111f18", color: "#d1fae5", transition: "all 0.3s ease" } : { transition: "all 0.3s ease" }}>
                <span className="comparison-cell-label" style={!isAfter ? { color: "#34d399" } : {}}>{row.label}</span>
                {row.before}
              </div>
              <div className="comparison-cell after" style={isAfter ? { background: "#0a1f16", color: "#6ee7b7", transition: "all 0.3s ease" } : { color: "#2d3f38", transition: "all 0.3s ease" }}>
                <span className="comparison-cell-label" style={isAfter ? { color: "#34d399" } : { color: "#1f2e28" }}>{row.label}</span>
                {row.after}
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
