import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// FILE: /src/App.jsx

import React from "react";
import logo from "./assets/finchless.svg";

const Card = ({ title, description, features, useCases, users }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{description}</p>
    <ul>
      {features.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
    <p className="use-cases"><strong>Use Cases:</strong> {useCases}</p>
    <p><strong>Users:</strong> {users}</p>
  </div>
);

export default function App() {
  return (
    <main>
      <header>
        <img src={logo} alt="Finchless Logo" />
        <div>
          <h1>Finchless Research</h1>
          <p style={{ color: "var(--muted)", marginTop: 4 }}>Precision Intelligence Engineering</p>
        </div>
      </header>

      <section>
        <h2>Overview</h2>
        <p>Finchless Research specialises in advanced threat intelligence projects and bespoke consultations. Core domains include:</p>
        <ul>
          <li>Adversarial simulation & red-team cognition analysis</li>
          <li>Automated OSINT pipelines enhanced with NLP and LLMs</li>
          <li>Darknet exploration via stealth-optimised crawlers with forensic retention</li>
        </ul>
        <p>We are structured for velocity, modularity, and mission-specific adaptation.</p>
      </section>

      <section>
        <h2>Mission</h2>
        <p>Traditional threat intelligence pipelines are rigid, fragmented, and unresponsive to real-time intelligence demands. Finchless Research solves this by engineering modular, AI-augmented systems that bridge the operational void between surface collection and adversarial simulation with unmatched precision.</p>
      </section>

      <section>
        <h2>Case Studies</h2>
        <div className="grid">
          <Card
            title="GHOSTCLR"
            description="Real-time OSINT ingestion and enrichment system using NLP and LLM augmentation."
            features={[
              "Toggle LLMs at runtime",
              "Swap NLP models dynamically",
              "Async ingestion with live logs"
            ]}
            useCases="Threat triage, entity extraction, live escalation"
            users="OSINT analysts, cyber fusion units, disinfo monitors"
          />

          <Card
            title="VEILFRAME"
            description="Stealth dark web crawler using entropy-based genetic mutation and forensic tracing."
            features={[
              "Stateful seed logic",
              "Pluggable transport validation (.onion v3)",
              "Anomaly-snapshot logging"
            ]}
            useCases="Darknet mapping, leak validation, enclave discovery"
            users="Forensics teams, deep OSINT units, covert operators"
          />

          <Card
            title="STRIKEMIND"
            description="Adversarial emulation framework with deception infra and AI-based kill-chain prediction."
            features={[
              "Live red-team simulation",
              "Defender cognitive gap detection",
              "Exploit synthesis + feedback loops"
            ]}
            useCases="Nation-state threat simulation, critical infra testing"
            users="Red teams, cyber ops units, threat engineering squads"
          />
        </div>
      </section>

      <section>
        <h2>Integrated Strategic Model</h2>
        <p>The tri-core escalation loop engineered by Finchless Research:</p>
        <table>
          <thead>
            <tr><th>Stage</th><th>Capability</th></tr>
          </thead>
          <tbody>
            <tr><td>1. GHOSTCLR</td><td>Passive OSINT ingestion + enrichment</td></tr>
            <tr><td>2. VEILFRAME</td><td>Darknet discovery via stealth mutation</td></tr>
            <tr><td>3. STRIKEMIND</td><td>Live adversarial simulation & telemetry prediction</td></tr>
          </tbody>
        </table>
        <p>Enabling seamless flow from collection → analysis → red-team deployment.</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>We welcome operational briefings, collaboration requests, and inquiries.</p>
        <p>📧 <a href="mailto:hello@finchlessresearch.org">hello@finchlessresearch.org</a></p>
      </section>

      <footer>
        <p>© 2024 Finchless Research. All rights reserved.</p>
      </footer>
    </main>
  );
}
