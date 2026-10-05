* {
  box-sizing: border-box;
}

:root {
  --bg: #0b1020;
  --bg-alt: #111a2b;
  --panel: rgba(16, 24, 39, 0.88);
  --panel-strong: rgba(11, 18, 30, 0.98);
  --panel-soft: rgba(21, 34, 54, 0.9);
  --line: rgba(148, 163, 184, 0.22);
  --text: #ebf1ff;
  --muted: #a0aec0;
  --accent: #7c3aed;
  --accent-2: #0ea5e9;
  --accent-3: #f59e0b;
  --danger: #ef4444;
  --success: #22c55e;
  --shadow: 0 18px 45px rgba(15, 23, 42, 0.5);
}

html, body {
  margin: 0;
  min-height: 100%;
  background: radial-gradient(circle at top, #11213d 0%, var(--bg) 50%);
  color: var(--text);
  font-family: "Segoe UI", sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}

button,
input {
  font: inherit;
}

.app-shell {
  width: min(1400px, 100%);
  display: grid;
  grid-template-columns: 330px minmax(0, 1fr);
  gap: 24px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.sidebar {
  padding: 24px 18px;
}

.brand-block {
  margin-bottom: 16px;
}

.eyebrow {
  margin: 0 0 8px;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.5rem);
}

h2 {
  margin: 0 0 12px;
  font-size: 1rem;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.button-stack {
  display: grid;
  gap: 10px;
  margin-bottom: 18px;
}

.button-stack.compact {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.button-stack.highlight-row {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

button {
  border: 1px solid var(--line);
  background: rgba(15, 23, 42, 0.7);
  color: var(--text);
  border-radius: 12px;
  padding: 11px 12px;
  cursor: pointer;
  transition: transform 0.15s ease, border-color 0.2s ease, background 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
  border-color: rgba(124, 58, 237, 0.8);
}

button.primary {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.9), rgba(14, 165, 233, 0.9));
  border: none;
}

.icon-button {
  width: 42px;
  height: 42px;
  padding: 0;
  border-radius: 10px;
}

.panel-group {
  margin-top: 22px;
  background: rgba(14, 20, 33, 0.8);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px;
}

.empty-state {
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.5;
}

#inspector {
  display: grid;
  gap: 12px;
}

.control-row {
  display: grid;
  gap: 6px;
}

.control-row label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 0.88rem;
}

.control-row input[type="range"] {
  width: 100%;
  accent-color: var(--accent);
}

.control-row input[type="color"] {
  width: 100%;
  height: 38px;
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 10px;
}

.control-row input[type="text"] {
  width: 100%;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 10px 12px;
  color: var(--text);
}

.workspace {
  padding: 16px;
}

.topbar {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.timeline-controls {
  display: flex;
  gap: 8px;
  align-items: center;
}

.timeline-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: min(100%, 440px);
}

.timeline-wrap label,
.fps-wrap label {
  color: var(--muted);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

#timeline {
  flex: 1;
  accent-color: var(--accent-2);
}

#frame-readout {
  min-width: 90px;
  text-align: right;
  color: var(--text);
  font-weight: 600;
}

.fps-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}

#fps {
  width: 72px;
  background: rgba(15, 23, 42, 0.75);
  color: var(--text);
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid var(--line);
}

.stage-wrap {
  background: rgba(8, 12, 21, 0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
}

canvas {
  display: block;
  width: 100%;
  height: auto;
  background:
    linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02)),
    radial-gradient(circle at center, rgba(14, 165, 233, 0.25), rgba(15, 23, 42, 0.2) 50%, rgba(15, 23, 42, 0.9));
}

.toast {
  position: fixed;
  right: 24px;
  bottom: 24px;
  background: rgba(17, 24, 39, 0.95);
  border: 1px solid var(--line);
  color: var(--text);
  padding: 10px 14px;
  border-radius: 12px;
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.toast.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 950px) {
  body {
    padding: 16px;
  }

  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    order: 2;
  }
}
