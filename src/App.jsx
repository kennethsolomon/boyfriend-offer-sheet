import React, { useMemo, useState } from "react";
import "./App.css";

/** Cute pastel stepper • React + Tailwind (no extra libs) */
export default function App() {
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const today = useMemo(() => new Date().toLocaleDateString(), []);

  const data = {
    ownerHandle: "Kenneth Solomon",
    tagline: "Date-to-marry mindset. Low drama. High respect.",
    intro:
      "Hi! This is a quick, honest preview of what it's like to date me. If this vibe matches you, great—let's build something steady.",
    sections: [
      {
        title: "What I Offer",
        items: [
          "Consistency: I show up even on boring Tuesdays.",
          "Loyalty: I don't entertain side stories.",
          "Emotional safety: You can tell me the hard stuff.",
          "Growth partner: Fitness, career, and faith in progress.",
          "Quality time: Weekly dates + daily check-ins that feel natural.",
          "Fun: Memes, walks, spontaneous plans, and laughter.",
        ],
      },
      {
        title: "Non-Negotiables (Yours truly)",
        items: [
          "Honesty before feelings snowball (no silent cheating).",
          "Mutual effort—texts and plans aren't one-sided.",
          "Respectful conflict (no insults/stonewalling).",
          "Exclusive when we agree to be.",
          "Additive lifestyles—we both keep our own goals & friends.",
          "We support each other’s goals and friendships — but keep clear respect for the relationship (no overly close opposite-sex ‘best friend’ dynamics).",
        ],
      },
      {
        title: "Boundaries I Keep",
        items: [
          "I'll keep my routines (health, work, content).",
          "I won't chase if effort isn't mutual.",
          "I need calm, not chaos. I'll step back from drama.",
        ],
      },
      {
        title: "Boundaries We Keep (If We Date)",
        items: [
          "No phones during dates (so we can focus on each other).",
          "If we disagree, we pause, breathe, then talk.",
          "Weekly quality time (even simple coffee + walk).",
        ],
      },
      {
        title: "Playful Terms (Fine Print)",
        items: [
          "Random adventures are encouraged (from food trips to road trips).",
          "Inside jokes are mandatory; laughter is part of the deal.",
          "Surprise treats or gestures are always welcome but never required. 🎁",
        ],
      },
    ],
  };

  const baseSteps = [
    { title: "Welcome", color: "from-pink-200 to-pink-100", node: (
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold">Boyfriend Offer Sheet 💌</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{data.tagline}</p>
        <p>{data.intro}</p>
      </div>
    )},
    { title: data.sections[0].title, color: "from-emerald-200 to-emerald-100", node: (
      <List items={data.sections[0].items} icon="✨" />
    )},
    { title: data.sections[1].title, color: "from-amber-200 to-amber-100", node: (
      <List items={data.sections[1].items} icon="✅" />
    )},
    { title: data.sections[2].title, color: "from-sky-200 to-sky-100", node: (
      <List items={data.sections[2].items} icon="🛡️" />
    )},
    { title: data.sections[3].title, color: "from-violet-200 to-violet-100", node: (
      <List items={data.sections[3].items} icon="🤝" />
    )},
    { title: data.sections[4].title, color: "from-rose-200 to-rose-100", node: (
      <List items={data.sections[4].items} icon="•" />
    )},
    { title: "Friendly Agreement", color: "from-teal-200 to-teal-100", node: (
      <div className="space-y-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          If you vibe with this, you can "sign" below. It's not legal—just
          a clear signal that we'll be kind, honest, and consistent.
        </p>

        <label className="block text-sm font-medium">Your first name</label>
        <input
          value={name}
          onChange={(e) => { setName(e.target.value); setAccepted(false); }}
          placeholder="e.g., Princess"
          className="w-full rounded-xl border border-neutral-300/50 dark:border-neutral-700/50 bg-white/90 dark:bg-neutral-900/70 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 dark:focus:border-purple-500 transition-all duration-200 backdrop-blur-sm shadow-sm hover:shadow-md placeholder:text-neutral-400"
        />

        <label className="flex items-start gap-3 select-none">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => { setChecked(v => !v); setAccepted(false); }}
            className="mt-1 h-4 w-4 rounded border-neutral-400 text-neutral-900 focus:ring-neutral-800"
          />
          <span className="text-sm leading-6">
            I read the Offer, Non‑Negotiables, and Boundaries and I'm cool with
            grown‑up honesty and mutual effort.
          </span>
        </label>

        <button
          onClick={() => {
            setAccepted(true);
            // Move to the next step which will be the signed confirmation
            setTimeout(() => {
              setStep((s) => s + 1);
            }, 100);
          }}
          disabled={!checked || name.trim().length < 2}
          className={`w-full sm:w-auto rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 ${(!checked || name.trim().length < 2)
              ? "bg-neutral-200/70 text-neutral-400 dark:bg-neutral-800/70 dark:text-neutral-600 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl hover:scale-105 dark:from-purple-500 dark:to-pink-500 dark:hover:from-purple-600 dark:hover:to-pink-600"}`}
        >
          💕 I Understand & Accept
        </button>
      </div>
    )},
  ];

  // Only add the signed step if accepted is true
  const signedStep = {
    title: "Agreement Signed! ✨",
    color: "from-emerald-200 to-green-100",
    node: (
      <div className="space-y-4 text-center">
        <div className="rounded-xl border border-emerald-200/60 dark:border-emerald-800/60 bg-gradient-to-br from-emerald-50/80 to-green-50/80 dark:from-emerald-950/50 dark:to-green-950/50 p-6 backdrop-blur-sm shadow-md animate-slideUp">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-emerald-600 dark:text-emerald-400 text-2xl">✨</span>
            <span className="text-lg font-bold text-emerald-800 dark:text-emerald-200">We're Official!</span>
            <span className="text-emerald-600 dark:text-emerald-400 text-2xl">💚</span>
          </div>

          <div className="space-y-3 mb-4">
            <p className="text-emerald-700 dark:text-emerald-300">
              <span className="font-semibold">Signed by:</span> <span className="font-bold text-emerald-800 dark:text-emerald-200">{name}</span>
            </p>
            <p className="text-emerald-700 dark:text-emerald-300">
              <span className="font-semibold">Date:</span> {today}
            </p>
            <p className="text-emerald-800 dark:text-emerald-200 font-bold text-lg">
              Status: ✅ We agree to try this the healthy way.
            </p>
          </div>

          <div className="border-t border-emerald-300/50 dark:border-emerald-700/50 pt-4">
            <p className="text-xs text-emerald-600 dark:text-emerald-400 italic leading-relaxed">
              This isn't a legal document—it's a vibe check and a promise to ourselves.<br/>
              Thanks for reading with your heart. Here's to something real. 💚
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white/50 dark:bg-neutral-800/50 rounded-lg backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50">
          <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
            💡 <strong>Pro tip:</strong> Screenshot this page for your records!
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            Now let's see where this goes... 😊
          </p>
        </div>
      </div>
    )
  };

  // Dynamically create steps array based on acceptance state
  const steps = accepted ? [...baseSteps, signedStep] : baseSteps;

  const atEnd = step === steps.length - 1;
  const atStart = step === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-purple-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 flex flex-col">
      {/* Top bar */}
      <header className="px-4 py-4 flex items-center justify-between max-w-lg mx-auto w-full animate-slideUp">
        <span className="text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-400 font-medium">
          {data.ownerHandle}
        </span>
        <span className="text-[11px] rounded-full bg-white/70 dark:bg-neutral-800/70 backdrop-blur-sm px-3 py-1.5 text-neutral-600 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50 shadow-sm">
          💌 Honest • Thoughtful • Real
        </span>
      </header>

      {/* Main content area - centered and flexible */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg">
          <StepDots count={steps.length} active={step} />
          <div
            className={`mt-6 rounded-3xl shadow-xl border border-white/80 dark:border-white/10
                        bg-gradient-to-br ${steps[step].color} p-1.5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]`}
          >
            <div className="rounded-2xl bg-white/80 dark:bg-neutral-900/70 backdrop-blur-sm p-6 border border-white/50 dark:border-neutral-700/30 min-h-[400px] flex flex-col justify-between">
              <div>
                <h1 className="text-xl font-bold mb-3 text-neutral-800 dark:text-neutral-100">{steps[step].title}</h1>
                <div className="animate-fadeIn">{steps[step].node}</div>
              </div>
            </div>
          </div>

          {/* Nav buttons - Consistent positioning below card */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={atStart}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 ${atStart
                  ? "bg-neutral-200/50 text-neutral-400 dark:bg-neutral-800/50 dark:text-neutral-600 cursor-not-allowed"
                  : "bg-white/80 text-neutral-900 dark:bg-neutral-800/80 dark:text-white border border-neutral-200/50 dark:border-neutral-600/50 hover:bg-white hover:shadow-md dark:hover:bg-neutral-700 hover:scale-105 backdrop-blur-sm"}`}
            >
              ← Back
            </button>

            {!atEnd ? (
              <button
                onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                className="rounded-xl px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-neutral-900 to-neutral-700 text-white hover:from-neutral-800 hover:to-neutral-600 dark:from-white dark:to-neutral-100 dark:text-neutral-900 dark:hover:from-neutral-100 dark:hover:to-neutral-200 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Next →
              </button>
            ) : accepted ? (
              <div className="text-xs text-neutral-500 dark:text-neutral-400 bg-white/50 dark:bg-neutral-800/50 px-3 py-2 rounded-lg backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50">
                🎉 You're all done! Thanks for reading.
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-[11px] text-neutral-500 dark:text-neutral-400 py-4">
        <div className="border-t border-neutral-200/50 dark:border-neutral-700/50 pt-4 mx-4">
          © {new Date().getFullYear()} Kenneth Solomon • Built with honesty & code 💻
        </div>
      </footer>
    </div>
  );
}

/* ---------- Small UI bits ---------- */

function List({ items, icon }) {
  return (
    <ul className="grid gap-2">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-2 text-sm leading-6">
          <span className="select-none">{icon}</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function StepDots({ count, active }) {
  return (
    <div className="flex justify-center gap-2 mb-2">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`h-2.5 rounded-full transition-all duration-300 ${i === active
            ? "bg-gradient-to-r from-purple-500 to-pink-500 w-8 shadow-sm"
            : i < active
              ? "bg-emerald-400 dark:bg-emerald-500 w-2.5"
              : "bg-neutral-300 dark:bg-neutral-700 w-2.5"}`}
        />
      ))}
    </div>
  );
}


