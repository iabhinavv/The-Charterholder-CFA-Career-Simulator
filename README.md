# The Charterholder — CFA Career Simulator

A scenario-based role-playing learning game. You play a finance professional across a full
career — **Junior Analyst (CFA Level I)** → **Portfolio Manager (Level II)** → **Chief
Investment Officer (Level III)** — with difficulty rising like the real exams. Each turn is a
scenario: numerical questions give you fixed data and options (you do the math, then choose),
and judgment calls carry consequences that follow you. Every choice ends with a worked
solution mapped to the CFA curriculum. Many scenarios are drawn from real financial history
(Volcker, Barings, Enron, LTCM, WorldCom, the dot-com bubble, 2008, COVID, Archegos, Madoff).

## How to run

**Option A — just open it.** Double-click `index.html` (opens in your browser).
Everything runs locally; no internet, no account.

**Option B — local server** (guarantees saved progress in every browser):

```bash
python3 serve.py
```

Then open http://127.0.0.1:8123 . (Progress is stored in your browser's local storage. When
opened directly via `file://`, some browsers restrict local storage — if "Continue Career"
doesn't stick, use the server option above.)

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | The whole game — engine, finance-terminal UI, charts. Vanilla JS, no dependencies. |
| `content.js` | The 24 story/anchor scenarios (+ 2 crises) and their Charterpedia cards. |
| `content-l1.js` | 100 Level I drill questions (~10 per subject). |
| `content-l2.js` | 50 Level II drill questions (5 per subject). |
| `content-l3.js` | 50 Level III drill questions. |
| `serve.py`  | Optional tiny static server for local play. |

All four content files push into the same shared scenario bank. Drills interleave into the
campaign **by subject** and are browsable subject-wise in Free Play.

## Modes

- **New Campaign** — the career arc L1 → L2 → L3; stats persist; each act ends with a
  results screen (grade, topic mastery, "You vs Textbook-Optimal", and "You vs History").
- **Free Play** — drill any level/topic; no career stakes.
- **Charterpedia** — concept cards you unlock by playing, each mapped to a CFA reading.

## Adding or editing scenarios

All content is data in `content.js` under `GAME_CONTENT.scenarios`. Each scenario is one
object; copy an existing one and edit. Key fields:

- `act` (1/2/3), `level` ("L1"/"L2"/"L3"), `topic`, `reading`, `difficulty`
  ("easy"/"moderate"/"hard"), optional `anchor` (a real historical episode).
- `type`: `"exam"` (one correct MCQ) or `"decision"` (trade-off; the highest-`points` choice
  is treated as the model answer).
- `exhibit`: optional `{title, rows:[[label,value],…]}` of pre-made numbers to calculate from.
- `choices[]`: each has `text`, `correct` (for exam), `points`, `deltas`
  (`{pnl,trust,risk,ethics,knowledge}`), `consequence`, and `solution` (the worked answer).
- optional `history` ("How it actually played out") and `conceptCard` (feeds Charterpedia).

Difficulty → max points: easy 100, moderate 150, hard 200. To add a triggered crisis, set
`trigger:"risk"` or `trigger:"ethics"` (fires when Risk > 90 or Ethics < 20).

The player calculates; the engine never does math — it only checks the chosen option against
the authored answer key and shows your pre-written solution. Keep every number and answer
correct in the content.

## Status

Full engine + both modes + **226 scenarios**: 24 story/anchor scenarios and 2 crises, plus
**200 curriculum drills** — 100 at Level I (~10 per subject), 50 at Level II (5 per subject),
and 50 at Level III (Asset Allocation, Private Wealth, Portfolio Construction, Performance,
Behavioral, and the rest). Drills interleave into the campaign by subject and power Free
Play's subject-wise drilling.

The campaign is deliberately long now (Act I alone runs ~116 scenarios); progress auto-saves,
so you can play it across sessions, and Free Play is the quick path for drilling a single
subject.
