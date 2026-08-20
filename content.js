/* =====================================================================
   THE CHARTERHOLDER  —  Curated scenario bank
   ---------------------------------------------------------------------
   Hand-authored CFA content. Player calculates; engine only checks the
   chosen option against the answer key and reveals the worked solution.
   Every numerical value and answer here is pre-computed and fixed.

   Difficulty -> max points:  easy 100, moderate 150, hard 200.
   Stat deltas: pnl in $K; trust / risk / ethics on a 0-100 scale;
   knowledge is XP. Any omitted delta defaults to 0.
   ===================================================================== */
window.GAME_CONTENT = {
  meta: {
    title: "THE CHARTERHOLDER",
    tagline: "A career in the markets, one decision at a time.",
    version: "1.0"
  },

  /* ---- Career acts (the campaign spine) ------------------------------ */
  acts: {
    1: {
      level: "L1",
      role: "Junior Analyst",
      firm: "Meridian Capital — Research Floor",
      difficulty: "easy",
      intro:
        "You pass the Level I exam and take a seat on the research floor of Meridian Capital. " +
        "The work is foundational: time value, ratios, the code of ethics. Get the fundamentals " +
        "right and the desk starts to trust you. Get them wrong and someone senior quietly fixes it.",
      challenge: "Master the tools. Earn the desk's trust without cutting a single corner.",
      legacy: "Every charterholder starts here — the analyst who does the arithmetic before the pitch."
    },
    2: {
      level: "L2",
      role: "Portfolio Manager",
      firm: "Meridian Capital — Long/Short Equity",
      difficulty: "moderate",
      intro:
        "Level II behind you, you now run a book. Valuation is no longer a homework problem — it is " +
        "the difference between a good year and a redemption notice. The market of the late 1990s and " +
        "early 2000s is your proving ground: dot-com mania, Enron, the machinery of leverage.",
      challenge: "Value what others hype. Read the footnotes nobody reads. Size risk before it sizes you.",
      legacy: "The manager who priced the bubble instead of buying it."
    },
    3: {
      level: "L3",
      role: "Chief Investment Officer",
      firm: "Meridian Wealth & Institutional",
      difficulty: "hard",
      intro:
        "Level III complete, you sit in the CIO's chair. Now it is allocation, policy, and people. " +
        "Clients panic; you cannot. The crises of 2008, 2020 and 2022 will test whether your investment " +
        "policy statement is a document or a discipline.",
      challenge: "Hold the line on policy when every headline screams to abandon it.",
      legacy: "The steward who was still standing — and still invested — when the dust cleared."
    }
  },

  /* ---- Scenarios ---------------------------------------------------- */
  scenarios: [

  /* ================= ACT I — LEVEL 1 (easy) ======================== */
  {
    id: "l1-tvm-fv",
    act: 1, level: "L1", topic: "Quantitative Methods",
    reading: "1.02 The Time Value of Money in Finance",
    difficulty: "easy", type: "exam", anchor: null,
    wire: "Client onboarding — retirement projection due by noon.",
    title: "The Compounding Memo",
    narrative:
      "A private client hands the desk $10,000 to seed a long-horizon account. Your PM wants a one-line " +
      "projection in the onboarding memo before the client meeting.",
    situation:
      "Invested today at 8.0% per year, compounded annually, what is the account worth in 5 years?",
    exhibit: { title: "Inputs", rows: [
      ["Present value (PV)", "$10,000"],
      ["Annual return (r)", "8.0%"],
      ["Compounding", "Annual"],
      ["Horizon (n)", "5 years"]
    ]},
    choices: [
      { text: "$14,693", correct: true, points: 100,
        deltas: { knowledge: 12, trust: 4, pnl: 5 },
        consequence: "The memo goes out clean. The PM initials it without a single edit.",
        solution: "FV = PV(1 + r)^n = 10,000 × (1.08)^5 = 10,000 × 1.46933 = $14,693.28. " +
          "Compounding grows the base each period — the extra $4,693 above the $4,000 of simple " +
          "interest is interest earning interest." },
      { text: "$14,000", correct: false, points: 20,
        deltas: { knowledge: 5, trust: -3 },
        consequence: "The PM circles it in red: 'That's simple interest. We compound here.'",
        solution: "$14,000 assumes simple interest (10,000 + 5 × 800). Compounding gives " +
          "10,000 × 1.08^5 = $14,693.28." },
      { text: "$13,605", correct: false, points: 20,
        deltas: { knowledge: 5, trust: -3 },
        consequence: "The client would be quietly shortchanged. Caught in review.",
        solution: "$13,605 is the PV of $10,000 discounted 5 years (10,000 / 1.08^5). You inverted " +
          "the operation. Growing forward: 10,000 × 1.08^5 = $14,693.28." },
      { text: "$15,000", correct: false, points: 20,
        deltas: { knowledge: 4, trust: -3 },
        consequence: "A round guess. The PM is not amused by round guesses.",
        solution: "The exact figure is 10,000 × 1.08^5 = $14,693.28, not a rounded $15,000." }
    ],
    history: null,
    conceptCard: { term: "Future Value & Compounding",
      explanation: "FV = PV(1+r)^n. Interest earns interest, so value grows geometrically, not linearly. " +
        "Reversing the exponent discounts a future sum back to today (present value).",
      reading: "CFA L1 · Quant 1.02" }
  },

  {
    id: "l1-ear",
    act: 1, level: "L1", topic: "Quantitative Methods",
    reading: "1.01 Rates and Returns",
    difficulty: "easy", type: "exam", anchor: null,
    wire: "Two lenders quoting the same headline rate — which is cheaper?",
    title: "Same Rate, Different Cost",
    narrative:
      "A corporate client is comparing two loans. Both quote a 6.0% annual percentage rate, but one " +
      "compounds quarterly. The client asks the true annual cost of the quarterly one.",
    situation: "What is the effective annual rate (EAR) of 6.0% APR compounded quarterly?",
    exhibit: { title: "Inputs", rows: [
      ["Stated APR", "6.0%"],
      ["Compounding periods (m)", "4 (quarterly)"],
      ["Periodic rate", "6.0% / 4 = 1.5%"]
    ]},
    choices: [
      { text: "6.14%", correct: true, points: 100,
        deltas: { knowledge: 12, trust: 4 },
        consequence: "The client sees the hidden gap and picks the genuinely cheaper facility.",
        solution: "EAR = (1 + APR/m)^m − 1 = (1 + 0.06/4)^4 − 1 = (1.015)^4 − 1 = 1.06136 − 1 = 6.14%. " +
          "More frequent compounding raises the true annual cost above the stated APR." },
      { text: "6.00%", correct: false, points: 20,
        deltas: { knowledge: 5 },
        consequence: "You quoted the APR back to them. They could have got that off the term sheet.",
        solution: "6.00% is the stated APR, not the effective rate. Quarterly compounding lifts it to " +
          "(1.015)^4 − 1 = 6.14%." },
      { text: "6.09%", correct: false, points: 25,
        deltas: { knowledge: 6 },
        consequence: "Close — but that is the wrong compounding frequency.",
        solution: "6.09% is (1.03)^2 − 1, i.e. semiannual compounding. Quarterly is (1.015)^4 − 1 = 6.14%." },
      { text: "6.18%", correct: false, points: 20,
        deltas: { knowledge: 5 },
        consequence: "You over-compounded.",
        solution: "6.18% is continuous compounding (e^0.06 − 1). Quarterly gives (1.015)^4 − 1 = 6.14%." }
    ],
    history: null,
    conceptCard: { term: "Effective Annual Rate (EAR)",
      explanation: "EAR = (1 + APR/m)^m − 1. The more frequently a rate compounds, the more the effective " +
        "rate exceeds the stated rate; continuous compounding (e^r − 1) is the upper bound.",
      reading: "CFA L1 · Quant 1.01" }
  },

  {
    id: "l1-expected-return",
    act: 1, level: "L1", topic: "Quantitative Methods",
    reading: "1.04 Probability Trees and Conditional Expectations",
    difficulty: "easy", type: "exam", anchor: null,
    wire: "Scenario analysis requested on a single-name position.",
    title: "Weighing the Outcomes",
    narrative:
      "An analyst hands you a two-state view on a stock and asks for its expected return before the " +
      "morning meeting.",
    situation: "Given the scenarios below, what is the expected return?",
    exhibit: { title: "Scenario view", rows: [
      ["Bull case", "60% probability · +15%"],
      ["Bear case", "40% probability · −5%"]
    ]},
    choices: [
      { text: "7.0%", correct: true, points: 100,
        deltas: { knowledge: 12, trust: 3 },
        consequence: "Your number frames the debate. The PM starts sizing the position around it.",
        solution: "E[R] = Σ pᵢRᵢ = 0.60 × 15% + 0.40 × (−5%) = 9% − 2% = 7.0%." },
      { text: "5.0%", correct: false, points: 20,
        deltas: { knowledge: 5 },
        consequence: "That is a simple average of the two returns — it ignores the probabilities.",
        solution: "The unweighted mean (15% − 5%)/2 = 5% is wrong. Weight by probability: " +
          "0.6×15 + 0.4×(−5) = 7%." },
      { text: "10.0%", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "You counted only the good outcome.",
        solution: "You must weight both states: 0.6×15 + 0.4×(−5) = 7.0%." },
      { text: "6.0%", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "A miscalculation somewhere in the weighting.",
        solution: "0.60 × 15 = 9.0 and 0.40 × (−5) = −2.0, summing to 7.0%, not 6.0%." }
    ],
    history: null,
    conceptCard: { term: "Expected Value",
      explanation: "The expected value is the probability-weighted average of outcomes, E[X] = Σ pᵢxᵢ. " +
        "It is not the simple average unless outcomes are equally likely.",
      reading: "CFA L1 · Quant 1.04" }
  },

  {
    id: "l1-sharpe",
    act: 1, level: "L1", topic: "Portfolio Management",
    reading: "3.01 Portfolio Risk and Return, Part I",
    difficulty: "easy", type: "exam", anchor: null,
    wire: "Two funds, same return — the committee wants the risk-adjusted view.",
    title: "Return Per Unit of Risk",
    narrative:
      "The investment committee is comparing an external manager against a benchmark and wants a " +
      "risk-adjusted number, not just the headline return.",
    situation: "Compute the Sharpe ratio of the portfolio below.",
    exhibit: { title: "Portfolio", rows: [
      ["Portfolio return", "12%"],
      ["Risk-free rate", "2%"],
      ["Standard deviation", "20%"]
    ]},
    choices: [
      { text: "0.50", correct: true, points: 100,
        deltas: { knowledge: 12, trust: 4 },
        consequence: "The committee now compares managers on the same footing. You look sharp.",
        solution: "Sharpe = (Rₚ − R_f) / σₚ = (12% − 2%) / 20% = 10 / 20 = 0.50. It measures excess " +
          "return earned per unit of total risk." },
      { text: "0.60", correct: false, points: 20,
        deltas: { knowledge: 5 },
        consequence: "You forgot to subtract the risk-free rate.",
        solution: "Use excess return, not total return: (12 − 2)/20 = 0.50, not 12/20 = 0.60." },
      { text: "0.10", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "That is just the excess return, not divided by risk.",
        solution: "0.10 is the excess return (12% − 2%). Divide by σ = 20% to get 0.50." },
      { text: "0.70", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "Arithmetic slip.",
        solution: "(12 − 2)/20 = 0.50." }
    ],
    history: null,
    conceptCard: { term: "Sharpe Ratio",
      explanation: "Sharpe = (Rₚ − R_f)/σₚ — excess return per unit of total risk (standard deviation). " +
        "Higher is better; it lets you rank portfolios with different risk levels.",
      reading: "CFA L1 · PM 3.01" }
  },

  {
    id: "l1-capm",
    act: 1, level: "L1", topic: "Portfolio Management",
    reading: "3.02 Portfolio Risk and Return, Part II",
    difficulty: "easy", type: "exam", anchor: null,
    wire: "Hurdle-rate question from the equity desk.",
    title: "What Return Should We Demand?",
    narrative:
      "Before adding a cyclical stock to the book, the PM asks what return the position must clear to " +
      "compensate for its systematic risk.",
    situation: "Using the CAPM, what is the required return on the stock?",
    exhibit: { title: "Inputs", rows: [
      ["Risk-free rate", "3%"],
      ["Expected market return", "10%"],
      ["Stock beta (β)", "1.2"]
    ]},
    choices: [
      { text: "11.4%", correct: true, points: 100,
        deltas: { knowledge: 12, trust: 4 },
        consequence: "The desk sets 11.4% as the hurdle. The pitch has to beat it or it doesn't trade.",
        solution: "CAPM: E[R] = R_f + β(E[Rₘ] − R_f) = 3% + 1.2 × (10% − 3%) = 3% + 1.2 × 7% = " +
          "3% + 8.4% = 11.4%." },
      { text: "12.0%", correct: false, points: 20,
        deltas: { knowledge: 5 },
        consequence: "You applied beta to the whole market return, not the premium.",
        solution: "Beta multiplies the equity risk premium (Rₘ − R_f), not Rₘ: 3 + 1.2×(10−3) = 11.4%, " +
          "not 3 + 1.2×10." },
      { text: "10.4%", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "The premium wasn't scaled by beta correctly.",
        solution: "Premium = 10 − 3 = 7; × β 1.2 = 8.4; + R_f 3 = 11.4%." },
      { text: "8.4%", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "You left out the risk-free base.",
        solution: "8.4% is just β × premium. Add R_f: 3% + 8.4% = 11.4%." }
    ],
    history: null,
    conceptCard: { term: "CAPM / Required Return",
      explanation: "E[R] = R_f + β(E[Rₘ] − R_f). Beta scales the equity risk premium; only systematic " +
        "(non-diversifiable) risk is priced.",
      reading: "CFA L1 · PM 3.02" }
  },

  {
    id: "l1-quick-ratio",
    act: 1, level: "L1", topic: "Financial Reporting",
    reading: "5.11 Financial Analysis Techniques",
    difficulty: "easy", type: "exam", anchor: null,
    wire: "Covenant check on a corporate borrower.",
    title: "Can They Pay the Bills?",
    narrative:
      "Credit wants a fast liquidity read on a borrower whose inventory looks slow-moving. They ask " +
      "for the quick ratio, not the current ratio, on purpose.",
    situation: "Compute the quick (acid-test) ratio from the balance sheet below.",
    exhibit: { title: "Balance sheet (extract)", rows: [
      ["Current assets", "$500,000"],
      ["— of which inventory", "$200,000"],
      ["Current liabilities", "$250,000"]
    ]},
    choices: [
      { text: "1.2", correct: true, points: 100,
        deltas: { knowledge: 12, trust: 4 },
        consequence: "Credit sees the borrower is thinner on liquid assets than the current ratio implied.",
        solution: "Quick ratio = (Current assets − Inventory) / Current liabilities = " +
          "(500,000 − 200,000) / 250,000 = 300,000 / 250,000 = 1.2. It strips out inventory, the least " +
          "liquid current asset." },
      { text: "2.0", correct: false, points: 25,
        deltas: { knowledge: 6 },
        consequence: "That is the current ratio — exactly the number credit didn't want.",
        solution: "2.0 = 500,000/250,000 is the current ratio. The quick ratio excludes inventory: " +
          "300,000/250,000 = 1.2." },
      { text: "1.5", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "Miscalculation.",
        solution: "(500 − 200)/250 = 1.2, not 1.5." },
      { text: "0.8", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "You inverted the ratio.",
        solution: "Liabilities go in the denominator: 300/250 = 1.2, not 250/300 = 0.83." }
    ],
    history: null,
    conceptCard: { term: "Quick (Acid-Test) Ratio",
      explanation: "(Cash + marketable securities + receivables) / current liabilities, often approximated " +
        "as (current assets − inventory)/current liabilities. Stricter than the current ratio because it " +
        "excludes inventory.",
      reading: "CFA L1 · FRA 5.11" }
  },

  {
    id: "l1-fifo-lifo",
    act: 1, level: "L1", topic: "Financial Reporting",
    reading: "5.06 Analysis of Inventories",
    difficulty: "moderate", type: "exam", anchor: null,
    wire: "Comparability problem: two peers, two inventory methods.",
    title: "Reading Through the Method",
    narrative:
      "You are comparing two US manufacturers in an inflationary environment. One uses FIFO, the other " +
      "LIFO. Before adjusting the statements you need to know which way the distortions run.",
    situation:
      "In a period of rising prices and stable inventory quantities, using LIFO instead of FIFO " +
      "generally results in which combination?",
    exhibit: null,
    choices: [
      { text: "Higher COGS, lower net income, lower ending inventory, lower taxes",
        correct: true, points: 150,
        deltas: { knowledge: 16, trust: 4 },
        consequence: "You normalize both firms correctly and the comparison finally makes sense.",
        solution: "Rising prices → LIFO expenses the newest, most expensive units first, so COGS is higher, " +
          "net income and taxable income are lower (hence lower cash taxes), and ending inventory is left " +
          "at older, cheaper costs (lower). LIFO's one advantage is the tax deferral from lower taxable income." },
      { text: "Lower COGS, higher net income, higher ending inventory", correct: false, points: 30,
        deltas: { knowledge: 6 },
        consequence: "That describes FIFO in rising prices, not LIFO.",
        solution: "You reversed the two. FIFO expenses older, cheaper units → lower COGS, higher income, " +
          "higher inventory. LIFO is the mirror image." },
      { text: "No difference — inventory method never affects the income statement", correct: false, points: 20,
        deltas: { knowledge: 3, trust: -3 },
        consequence: "A senior analyst overhears and winces.",
        solution: "Method choice materially affects COGS, income, taxes and inventory whenever prices change." },
      { text: "Higher net income and higher taxes under LIFO", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "Backwards on both counts.",
        solution: "LIFO lowers reported income and taxes in rising prices; that lower tax bill is precisely " +
          "why firms elect it." }
    ],
    history: null,
    conceptCard: { term: "FIFO vs LIFO (rising prices)",
      explanation: "Rising prices: LIFO → higher COGS, lower income, lower inventory, lower taxes; FIFO is " +
        "the reverse. FIFO ending inventory better reflects current cost; LIFO COGS better reflects current cost.",
      reading: "CFA L1 · FRA 5.06" }
  },

  {
    id: "l1-fx-appreciation",
    act: 1, level: "L1", topic: "Economics",
    reading: "2.08 Exchange Rate Calculations",
    difficulty: "moderate", type: "exam", anchor: null,
    wire: "FX desk: quantify the euro's move for the currency-overlay note.",
    title: "Who Moved, and By How Much?",
    narrative:
      "A European exporter client wants to know how much the euro strengthened against the dollar over " +
      "the year — and warns you that 'the euro up X%' and 'the dollar down X%' are not the same number.",
    situation:
      "The spot rate goes from 1.10 USD per EUR to 1.155 USD per EUR over one year. By how much did the " +
      "EUR appreciate against the USD?",
    exhibit: { title: "Quotes (USD per EUR)", rows: [
      ["Start of year", "1.1000"],
      ["End of year", "1.1550"]
    ]},
    choices: [
      { text: "5.0%", correct: true, points: 150,
        deltas: { knowledge: 16, trust: 5 },
        consequence: "The client trusts a desk that gets the direction and base right.",
        solution: "With the price currency (USD) in the numerator, the base currency (EUR) appreciation is " +
          "(1.1550 − 1.1000)/1.1000 = 0.0550/1.1000 = 5.0%. Note the USD depreciated by a different figure: " +
          "1.1000/1.1550 − 1 = −4.76%. Appreciation of one currency ≠ depreciation of the other." },
      { text: "4.76%", correct: false, points: 40,
        deltas: { knowledge: 8 },
        consequence: "You computed the dollar's move, not the euro's — the exact trap the client flagged.",
        solution: "−4.76% is the USD depreciation (invert the quotes to USD terms). The EUR appreciation is " +
          "0.055/1.10 = 5.0%." },
      { text: "−5.0%", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "Right magnitude, wrong sign — the euro rose.",
        solution: "The euro bought more dollars, so it appreciated: +5.0%." },
      { text: "10.0%", correct: false, points: 20,
        deltas: { knowledge: 3 },
        consequence: "Off by a factor of two.",
        solution: "0.055/1.10 = 0.05 = 5.0%, not 10%." }
    ],
    history: null,
    conceptCard: { term: "Currency Appreciation & the Base",
      explanation: "In a P/B quote, % change in the base currency = (new − old)/old. The counter-currency's " +
        "% change is not the negative of it — invert the rate to measure the other side.",
      reading: "CFA L1 · Economics 2.08" }
  },

  {
    id: "l1-volcker",
    act: 1, level: "L1", topic: "Economics",
    reading: "2.04 Monetary Policy",
    difficulty: "moderate", type: "decision", anchor: "Volcker & 1970s Stagflation",
    wire: "1979 — inflation 13% and climbing. The new Fed Chair asks the floor for a view.",
    title: "The Volcker Question",
    narrative:
      "It is 1979. Inflation is running near 13%, expectations are unanchored, and a decade of stop-go " +
      "policy has drained the central bank's credibility. Your firm's economist circulates a note: the " +
      "new Fed Chair, Paul Volcker, is weighing how hard to move. The desk wants your read for the client letter.",
    situation:
      "From a monetary-policy standpoint, what is the most defensible course to break entrenched inflation " +
      "— and what should the desk warn clients to expect?",
    exhibit: { title: "The setup (1979)", rows: [
      ["CPI inflation", "≈ 13%"],
      ["Inflation expectations", "Unanchored, rising"],
      ["Policy credibility", "Low after years of stop-go"],
      ["Political appetite for pain", "Very low"]
    ]},
    choices: [
      { text: "Raise rates sharply and hold — accept a recession to reset inflation expectations",
        correct: true, points: 150,
        deltas: { knowledge: 16, trust: 6, risk: 5 },
        consequence: "Your letter calls the regime shift early. When the fed funds rate is pushed toward 20%, " +
          "clients who were positioned for it thank the desk.",
        solution: "Entrenched inflation is ultimately a monetary phenomenon; only a credible, sustained " +
          "tightening re-anchors expectations. Volcker pushed the fed funds rate to ~20% by 1981, triggering " +
          "the 1980–82 recessions — but inflation fell from ~13% to ~3%, restoring Fed credibility for a generation." },
      { text: "Cut rates to protect employment; inflation will fade on its own", correct: false, points: 20,
        deltas: { knowledge: 5, trust: -6, risk: 10 },
        consequence: "Easing into 13% inflation would pour fuel on the fire. The call ages terribly.",
        solution: "Loosening with unanchored expectations entrenches inflation further — the stop-go error " +
          "of the 1970s. The regime only broke once policy stayed tight through the pain." },
      { text: "Impose wage and price controls and leave rates alone", correct: false, points: 40,
        deltas: { knowledge: 8, risk: 6 },
        consequence: "Controls suppress the symptom, not the cause; shortages appear and inflation returns on removal.",
        solution: "The US tried controls under Nixon (1971); they distorted markets and inflation resurged " +
          "once lifted. Monetary tightening, not administrative caps, addressed the root cause." },
      { text: "Do nothing and preserve optionality until the data is clearer", correct: false, points: 25,
        deltas: { knowledge: 5, trust: -3, risk: 6 },
        consequence: "Delay lets expectations spiral. The eventual tightening has to be even more brutal.",
        solution: "Waiting raised the ultimate cost. Credibility is cheapest to rebuild before expectations " +
          "fully unmoor — decisive action was the lower-regret path." }
    ],
    history: "Volcker raised the fed funds rate to a peak near 20% in June 1981. Two recessions followed and " +
      "unemployment topped 10%, but inflation collapsed from ~13% (1979) to ~3% (1983). The episode is the " +
      "textbook case that central-bank credibility is worth a great deal.",
    conceptCard: { term: "Monetary Policy & Credibility",
      explanation: "To break entrenched inflation a central bank must tighten credibly and persistently to " +
        "re-anchor expectations, even at the cost of a recession. Credibility lowers the future cost of " +
        "disinflation.",
      reading: "CFA L1 · Economics 2.04" }
  },

  {
    id: "l1-ethics-independence",
    act: 1, level: "L1", topic: "Ethics",
    reading: "Standard I(B) Independence and Objectivity",
    difficulty: "easy", type: "decision", anchor: null,
    wire: "An issuer you cover offers the analysts a weekend at their resort.",
    title: "The All-Expenses-Paid Site Visit",
    narrative:
      "A company you publish research on invites the analyst team to tour a new facility — and offers to " +
      "cover flights, a luxury resort, and a golf outing. Your draft note on the company is due next week.",
    situation: "Under the CFA Code and Standards, what is the correct way to handle the invitation?",
    exhibit: null,
    choices: [
      { text: "Attend only if the firm pays your own travel and lodging; disclose the visit",
        correct: true, points: 100,
        deltas: { knowledge: 12, ethics: 8, trust: 4 },
        consequence: "You see the facility, keep your objectivity intact, and the note carries a clean disclosure.",
        solution: "Standard I(B) Independence and Objectivity: accept modest, non-lavish items but pay your own " +
          "way for anything that could impair objectivity. Best practice is to fund your own travel/lodging and " +
          "disclose the visit, so no reasonable person could question your independence." },
      { text: "Accept the full package — a site visit improves the quality of your research", correct: false, points: 20,
        deltas: { knowledge: 4, ethics: -12, risk: 6 },
        consequence: "The gift creates exactly the appearance of bias the Standard exists to prevent.",
        solution: "Lavish, issuer-paid travel and entertainment can compromise — or appear to compromise — " +
          "independence. Better research does not excuse an objectivity conflict." },
      { text: "Decline the visit entirely and refuse all contact with the issuer", correct: false, points: 50,
        deltas: { knowledge: 6, ethics: 2 },
        consequence: "Overcorrecting — you lose useful primary information you were entitled to gather.",
        solution: "The Standard does not bar contact or site visits; it bars conflicts. Attending on your firm's " +
          "dime with disclosure is both permissible and better analysis." },
      { text: "Accept the package but issue a Buy rating to stay on good terms", correct: false, points: 0,
        deltas: { knowledge: 2, ethics: -20, trust: -8, risk: 10 },
        consequence: "This is precisely the corruption the Code forbids. If discovered, your career is over.",
        solution: "Trading a favorable rating for hospitality violates independence, objectivity and the duty to " +
          "clients. It is the archetype of what Standard I(B) prohibits." }
    ],
    history: null,
    conceptCard: { term: "Independence & Objectivity — Standard I(B)",
      explanation: "Members must not offer, solicit, or accept gifts/benefits that could compromise their " +
        "independence. Modest items are acceptable; pay your own way for anything material and disclose.",
      reading: "CFA L1 · Ethics I(B)" }
  },

  {
    id: "l1-ethics-mnpi",
    act: 1, level: "L1", topic: "Ethics",
    reading: "Standard II(A) Material Nonpublic Information",
    difficulty: "moderate", type: "decision", anchor: null,
    wire: "A friend at a target company just told you about an unannounced merger.",
    title: "The Tip at Dinner",
    narrative:
      "Over dinner, a college friend who works at a mid-cap firm mentions — proudly, indiscreetly — that " +
      "their company will be acquired at a large premium next week. Nothing is public yet. You cover the sector.",
    situation: "What must you do under the Code and Standards?",
    exhibit: null,
    choices: [
      { text: "Do not trade or cause others to trade; document it and notify compliance",
        correct: true, points: 150,
        deltas: { knowledge: 16, ethics: 10, trust: 5 },
        consequence: "Compliance restricts the name. You are clean, and the desk is protected.",
        solution: "Standard II(A): information that is both material and nonpublic may not be acted upon or " +
          "communicated (except to compliance). You must refrain from trading in the security, refrain from " +
          "tipping others, and inform your supervisor/compliance so the firm can restrict the security." },
      { text: "Buy a modest position — it was unsolicited, so you did nothing to obtain it", correct: false, points: 0,
        deltas: { knowledge: 3, ethics: -22, risk: 14, trust: -8 },
        consequence: "How you received the tip is irrelevant. This is textbook insider trading.",
        solution: "The mosaic theory does not apply — this is a single piece of material nonpublic information. " +
          "Trading on it violates II(A) regardless of whether you sought it out." },
      { text: "Share it only with your closest clients as a courtesy", correct: false, points: 0,
        deltas: { knowledge: 2, ethics: -20, risk: 12, trust: -6 },
        consequence: "Tipping clients is just as prohibited as trading yourself.",
        solution: "Communicating MNPI ('tipping') violates II(A). Selective disclosure to favored clients also " +
          "breaches fair-dealing duties." },
      { text: "Combine it with your own public research and then trade — that is the mosaic theory", correct: false, points: 30,
        deltas: { knowledge: 6, ethics: -10, risk: 8 },
        consequence: "You are misapplying the mosaic theory to launder a single illegal tip.",
        solution: "The mosaic theory permits combining public and NON-material nonpublic pieces into a conclusion. " +
          "A specific, material nonpublic fact (an unannounced deal) cannot be 'mosaic'd' into a legal trade." }
    ],
    history: null,
    conceptCard: { term: "Material Nonpublic Information — Standard II(A)",
      explanation: "Do not act on or communicate material nonpublic information. The mosaic theory allows " +
        "combining public and non-material nonpublic information, but never a single material nonpublic fact.",
      reading: "CFA L1 · Ethics II(A)" }
  },

  {
    id: "l1-enron",
    act: 1, level: "L1", topic: "Financial Reporting",
    reading: "5.10 Financial Reporting Quality",
    difficulty: "moderate", type: "decision", anchor: "Enron (2001)",
    wire: "A high-flyer's filings don't add up: soaring profits, no cash.",
    title: "The Company That Was Too Good",
    narrative:
      "It is 2001. A market-darling energy-trading company reports smooth, ever-rising earnings, yet its " +
      "cash flow from operations lags far behind net income, disclosures reference dozens of off-balance-sheet " +
      "'special purpose entities,' and it books profits today on the estimated value of 20-year contracts. " +
      "Your PM is tempted by the momentum.",
    situation: "As the analyst, what is the right call on reporting quality?",
    exhibit: { title: "Red flags in the filings", rows: [
      ["Net income", "Rising smoothly, year after year"],
      ["CFO vs net income", "CFO far below reported earnings"],
      ["Off-balance-sheet vehicles", "Numerous related-party SPEs"],
      ["Revenue recognition", "Mark-to-model on long-dated contracts"]
    ]},
    choices: [
      { text: "Flag low earnings quality and pass — cash flow and related-party SPEs don't support the profits",
        correct: true, points: 150,
        deltas: { knowledge: 18, trust: 8, ethics: 6, pnl: 10 },
        consequence: "The PM grumbles but stands down. Months later the stock goes to zero and the desk is untouched.",
        solution: "High earnings that are not backed by operating cash flow, combined with aggressive mark-to-model " +
          "revenue and related-party off-balance-sheet entities, are classic low-quality-earnings signals. The " +
          "accrual gap (NI ≫ CFO) is the tell. Passing preserved capital." },
      { text: "Buy the momentum — the market and the auditors have blessed it", correct: false, points: 10,
        deltas: { knowledge: 4, pnl: -40, risk: 14, trust: -8 },
        consequence: "The auditors were compromised. When the SPEs unwind, the position is wiped out.",
        solution: "Enron collapsed in late 2001; its auditor, Arthur Andersen, was destroyed. Deferring to price " +
          "momentum or an audit opinion is no substitute for analyzing earnings quality yourself." },
      { text: "Trust net income but hedge with a small short", correct: false, points: 50,
        deltas: { knowledge: 8, pnl: -10, risk: 8 },
        consequence: "Half-measures. You neither avoid the loss nor size the short to matter.",
        solution: "The analysis already tells you earnings quality is poor. A token hedge is an excuse to ignore " +
          "your own conclusion." },
      { text: "Ask the company's IR team to explain, and take their answer at face value", correct: false, points: 30,
        deltas: { knowledge: 6, risk: 6 },
        consequence: "IR reassures you with the same story that fooled the market.",
        solution: "Management with an incentive to obscure is not a neutral source. Verify against cash flows and " +
          "disclosures rather than relying on the narrative." }
    ],
    history: "Enron declared bankruptcy in December 2001 after its off-balance-sheet SPEs and mark-to-market " +
      "revenue recognition unraveled. Auditor Arthur Andersen collapsed, and the scandal drove the Sarbanes-Oxley " +
      "Act of 2002. The accrual gap between earnings and cash was visible in the filings all along.",
    conceptCard: { term: "Earnings Quality & the Accrual Gap",
      explanation: "Sustainable earnings are backed by operating cash flow. Persistent NI ≫ CFO, aggressive " +
        "revenue recognition, and related-party off-balance-sheet entities are warning signs of low earnings quality.",
      reading: "CFA L1 · FRA 5.10" }
  },

  {
    id: "l1-ddm-gordon",
    act: 1, level: "L1", topic: "Equity",
    reading: "6.08 Equity Valuation: Concepts and Basic Tools",
    difficulty: "moderate", type: "exam", anchor: null,
    wire: "Dividend-payer screen — need a quick intrinsic value.",
    title: "A Value for the Dividend Machine",
    narrative:
      "A stable, dividend-paying utility screens cheap. The PM wants a back-of-envelope intrinsic value " +
      "using the constant-growth model before deciding whether to dig deeper.",
    situation: "Using the Gordon growth model, what is the stock's intrinsic value?",
    exhibit: { title: "Inputs", rows: [
      ["Dividend just paid (D₀)", "$2.00"],
      ["Constant growth (g)", "4%"],
      ["Required return (r)", "9%"]
    ]},
    choices: [
      { text: "$41.60", correct: true, points: 150,
        deltas: { knowledge: 16, trust: 5 },
        consequence: "Against a $38 market price, the screen looks worth a deeper dive.",
        solution: "Gordon growth: V₀ = D₁/(r − g), where D₁ = D₀(1+g) = 2.00 × 1.04 = 2.08. " +
          "V₀ = 2.08 / (0.09 − 0.04) = 2.08 / 0.05 = $41.60. Remember to grow D₀ one period to D₁." },
      { text: "$40.00", correct: false, points: 40,
        deltas: { knowledge: 8 },
        consequence: "You used D₀ instead of D₁ — a common slip.",
        solution: "The numerator is next year's dividend: D₁ = 2.00×1.04 = 2.08, giving 2.08/0.05 = $41.60, " +
          "not 2.00/0.05 = $40.00." },
      { text: "$52.00", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "The denominator is wrong.",
        solution: "Denominator is (r − g) = 0.05, not r = 0.04 error. Correct: 2.08/0.05 = $41.60." },
      { text: "$46.22", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "Over-grew the dividend.",
        solution: "Only grow one period: D₁ = 2.08. V₀ = 2.08/0.05 = $41.60." }
    ],
    history: null,
    conceptCard: { term: "Gordon Growth Model",
      explanation: "V₀ = D₁/(r − g), valid when g < r and g is constant forever. Use next period's dividend " +
        "D₁ = D₀(1+g). Value is highly sensitive to the (r − g) spread.",
      reading: "CFA L1 · Equity 6.08" }
  },

  {
    id: "l1-duration",
    act: 1, level: "L1", topic: "Fixed Income",
    reading: "7.11 Yield-Based Bond Duration Measures",
    difficulty: "moderate", type: "exam", anchor: null,
    wire: "Rates gapping — desk needs the P&L hit on the bond book, fast.",
    title: "How Much Will We Lose if Yields Rise?",
    narrative:
      "The bond desk is long a position and the market is repricing hikes. The PM wants the approximate " +
      "price impact of a rate move before the position is trimmed.",
    situation:
      "A bond has a modified duration of 7.0. If its yield rises by 50 basis points, what is the " +
      "approximate percentage change in price?",
    exhibit: { title: "Inputs", rows: [
      ["Modified duration", "7.0"],
      ["Yield change (Δy)", "+50 bps = +0.50%"]
    ]},
    choices: [
      { text: "−3.5%", correct: true, points: 150,
        deltas: { knowledge: 16, trust: 5, pnl: 5 },
        consequence: "The desk trims before the move fully lands and saves a chunk of the drawdown.",
        solution: "%ΔPrice ≈ −ModDur × Δy = −7.0 × 0.0050 = −0.035 = −3.5%. Prices move inversely to " +
          "yields; duration is the first-order (linear) estimate of that sensitivity." },
      { text: "+3.5%", correct: false, points: 30,
        deltas: { knowledge: 6 },
        consequence: "Right size, wrong sign — rising yields cut prices.",
        solution: "Bond prices fall when yields rise. The change is −3.5%, not +3.5%." },
      { text: "−7.0%", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "You applied duration to a 100 bp move, not 50.",
        solution: "−7.0 × 0.0050 = −3.5%. A full 1% move would give −7.0%." },
      { text: "−0.35%", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "Decimal error.",
        solution: "−7.0 × 0.005 = −0.035 = −3.5%, not −0.35%." }
    ],
    history: null,
    conceptCard: { term: "Modified Duration",
      explanation: "%ΔPrice ≈ −ModDur × Δy. A first-order, linear approximation of price sensitivity to yield; " +
        "convexity corrects it for larger moves. Longer duration = more rate risk.",
      reading: "CFA L1 · Fixed Income 7.11" }
  },

  {
    id: "l1-barings-controls",
    act: 1, level: "L1", topic: "Ethics",
    reading: "Standard IV / Internal Controls",
    difficulty: "moderate", type: "decision", anchor: "Barings Bank & Nick Leeson (1995)",
    wire: "Singapore desk: one trader books the trades AND settles them.",
    title: "One Person, Both Keys",
    narrative:
      "It is early 1995. On a fast-growing derivatives desk in Singapore, a single star trader both executes " +
      "trades and controls the back-office settlement and reconciliation. He reports spectacular profits and " +
      "asks head office for ever-larger funding transfers to meet 'margin calls' on client trades. As the " +
      "junior risk analyst, you are asked to sign off.",
    situation: "What is the correct action?",
    exhibit: { title: "What you observe", rows: [
      ["Front / back office", "Same individual controls both"],
      ["Reported P&L", "Large and unusually smooth"],
      ["Funding requests", "Growing rapidly, weakly documented"],
      ["Oversight", "Minimal; the trader is a revenue star"]
    ]},
    choices: [
      { text: "Refuse to sign; escalate the lack of segregation of duties and freeze new funding pending an independent audit",
        correct: true, points: 150,
        deltas: { knowledge: 18, ethics: 10, trust: 6, risk: -10 },
        consequence: "Uncomfortable, but you force an independent reconciliation. The hidden losses surface " +
          "while they are still survivable.",
        solution: "Segregation of duties is a foundational internal control: whoever trades must not also settle " +
          "and reconcile. Smooth profits plus escalating, poorly documented funding requests are classic fraud " +
          "signals. Escalating and demanding independent verification is both an ethical and a risk-management duty." },
      { text: "Sign off — the desk is the firm's biggest profit center and the trader is trusted", correct: false, points: 0,
        deltas: { knowledge: 4, ethics: -14, risk: 16, pnl: -60, trust: -8 },
        consequence: "The 'profits' are a fiction hidden in an error account. The funding you approved feeds the losses.",
        solution: "Trust is not a control. Nick Leeson used error account 88888 to hide losses while controlling " +
          "his own settlement. Unquestioned funding of a self-supervising trader is exactly how Barings failed." },
      { text: "Ask the trader to explain, accept the explanation, and sign", correct: false, points: 20,
        deltas: { knowledge: 5, ethics: -6, risk: 10 },
        consequence: "The person you are supposed to check reassures you, and you check nothing.",
        solution: "Verification must be independent of the person being verified. Self-certification defeats the " +
          "purpose of the control." },
      { text: "Sign now but write a memo recommending better controls next quarter", correct: false, points: 40,
        deltas: { knowledge: 8, ethics: -2, risk: 8 },
        consequence: "A memo doesn't stop the funding you just approved from disappearing.",
        solution: "When a control failure is active and material, it must be addressed now — not deferred. " +
          "Approving today while flagging it for 'later' still lets the loss compound." }
    ],
    history: "In February 1995, Barings Bank — Britain's oldest merchant bank — collapsed after Nick Leeson hid " +
      "roughly £827 million of losses in a secret account while controlling both trading and settlement in " +
      "Singapore. It was bought for £1. The failure is the canonical lesson in segregation of duties.",
    conceptCard: { term: "Segregation of Duties",
      explanation: "The person who executes transactions must be separate from those who settle, reconcile and " +
        "record them. Concentrated control plus weak oversight enables fraud — the root cause of the Barings collapse.",
      reading: "CFA L1 · Ethics / Internal Controls" }
  },

  {
    id: "l1-market-efficiency",
    act: 1, level: "L1", topic: "Equity",
    reading: "6.03 Market Efficiency",
    difficulty: "easy", type: "exam", anchor: null,
    wire: "Strategy debate: can our research actually beat the market?",
    title: "Which Form of Efficiency?",
    narrative:
      "A strategist argues that fundamental analysis of public filings can consistently earn excess returns. " +
      "A colleague says that only inside information could. The PM asks you to place each claim on the " +
      "efficient-market spectrum.",
    situation:
      "If a market is SEMI-STRONG-form efficient, which statement is correct?",
    exhibit: null,
    choices: [
      { text: "Prices already reflect all public information, so fundamental analysis of public data cannot earn consistent excess returns",
        correct: true, points: 100,
        deltas: { knowledge: 14, trust: 4 },
        consequence: "The desk right-sizes its expectations for the research budget.",
        solution: "Semi-strong efficiency means prices reflect all publicly available information. Under it, neither " +
          "technical nor fundamental analysis of public data yields consistent abnormal returns; only material " +
          "nonpublic information (which is illegal to trade on) could — that is the strong-form claim." },
      { text: "Only technical analysis is useless; fundamental analysis still works", correct: false, points: 30,
        deltas: { knowledge: 6 },
        consequence: "That describes weak-form efficiency, not semi-strong.",
        solution: "Weak-form: past prices are in the price (technicals fail). Semi-strong adds all public info " +
          "(fundamentals on public data also fail)." },
      { text: "Even inside information is already reflected in prices", correct: false, points: 30,
        deltas: { knowledge: 6 },
        consequence: "That is the strong form, a higher bar than semi-strong.",
        solution: "Strong-form efficiency implies even private information is priced. Semi-strong covers only " +
          "public information." },
      { text: "Prices reflect nothing until earnings are announced", correct: false, points: 10,
        deltas: { knowledge: 3 },
        consequence: "That contradicts the very idea of market efficiency.",
        solution: "Efficient markets impound information quickly and continuously, not only at earnings dates." }
    ],
    history: null,
    conceptCard: { term: "Forms of Market Efficiency",
      explanation: "Weak = past prices priced in (technicals fail). Semi-strong = all public info priced in " +
        "(fundamentals on public data fail). Strong = even private info priced in.",
      reading: "CFA L1 · Equity 6.03" }
  },

  /* ================= ACT II — LEVEL 2 (moderate) =================== */
  {
    id: "l2-two-stage-ddm",
    act: 2, level: "L2", topic: "Equity",
    reading: "Equity Valuation — Multistage Dividend Discount",
    difficulty: "moderate", type: "exam", anchor: "Dot-com Bubble (2000)",
    wire: "1999 — a 'new economy' stock trades at $60. What is it actually worth?",
    title: "Pricing the Hype",
    narrative:
      "It is 1999. A fast-growing name trades at $60 and every sell-side note extrapolates 20% growth forever. " +
      "You run a disciplined two-stage dividend discount model to anchor the debate in cash, not narrative.",
    situation:
      "Value the stock with a two-stage DDM using the assumptions below.",
    exhibit: { title: "Assumptions", rows: [
      ["Dividend just paid (D₀)", "$1.00"],
      ["High growth (years 1–2)", "20%"],
      ["Terminal growth (year 3 on)", "5%"],
      ["Required return (r)", "10%"],
      ["Market price", "$60.00"]
    ]},
    choices: [
      { text: "≈ $27.27 — the stock is priced for a fantasy",
        correct: true, points: 150,
        deltas: { knowledge: 18, trust: 6, pnl: 15 },
        consequence: "Your $27 fair value against a $60 price makes the short case. When the bubble bursts, the book profits.",
        solution: "D₁ = 1.20, D₂ = 1.44, D₃ = 1.44×1.05 = 1.512. Terminal value at end of yr 2 = " +
          "D₃/(r−g) = 1.512/(0.10−0.05) = 30.24. Value = 1.20/1.10 + (1.44 + 30.24)/1.10² = " +
          "1.091 + 31.68/1.21 = 1.091 + 26.182 = $27.27. Well below the $60 price." },
      { text: "≈ $60.00 — the model confirms the market price", correct: false, points: 20,
        deltas: { knowledge: 5, pnl: -30, risk: 10 },
        consequence: "To reach $60 you would have to assume 20% growth nearly forever — the bubble's own logic.",
        solution: "$60 requires implausible perpetual high growth. The disciplined two-stage value is ~$27.27; the " +
          "gap is the mania premium." },
      { text: "≈ $30.24 — use the terminal value alone", correct: false, points: 40,
        deltas: { knowledge: 8 },
        consequence: "You forgot to discount the terminal value and the interim dividends to today.",
        solution: "$30.24 is the undiscounted terminal value at the end of year 2. Discount it (and add PV of D₁, D₂) " +
          "to get $27.27." },
      { text: "≈ $24.00 — ignore the high-growth dividends", correct: false, points: 40,
        deltas: { knowledge: 8 },
        consequence: "Close, but you dropped the first-stage cash flows.",
        solution: "You must add the PVs of D₁ and D₂ to the discounted terminal value. Total = $27.27." }
    ],
    history: "The Nasdaq peaked in March 2000 and then fell roughly 78% into 2002. Countless 'new economy' names " +
      "traded far above any defensible discounted-cash-flow value; disciplined valuation was deeply unfashionable — " +
      "and then vindicated.",
    conceptCard: { term: "Multistage DDM",
      explanation: "Discount explicit high-growth dividends, then add the present value of a terminal (Gordon) " +
        "value computed at the end of the high-growth period. The terminal value must itself be discounted to today.",
      reading: "CFA L2 · Equity Valuation" }
  },

  {
    id: "l2-worldcom",
    act: 2, level: "L2", topic: "Financial Reporting",
    reading: "Financial Reporting Quality — Capitalizing vs Expensing",
    difficulty: "moderate", type: "decision", anchor: "WorldCom (2002)",
    wire: "A telco is capitalizing 'line costs' that used to be operating expenses.",
    title: "The Expense That Became an Asset",
    narrative:
      "It is 2002. A large telecom reports resilient margins while peers struggle. Digging in, you find it has " +
      "reclassified billions of recurring network 'line costs' — ordinary operating expenses — as capital " +
      "expenditures, spreading them across future years via depreciation.",
    situation:
      "You must (a) know the immediate effect of capitalizing an operating cost, and (b) decide what to do.",
    exhibit: { title: "The maneuver", rows: [
      ["Item reclassified", "Recurring line (operating) costs"],
      ["New treatment", "Capitalized as PP&E, then depreciated"],
      ["Effect claimed by mgmt", "Stronger margins than peers"]
    ]},
    choices: [
      { text: "Recognize it inflates current profit, assets and operating cash flow — downgrade for low earnings quality and avoid",
        correct: true, points: 150,
        deltas: { knowledge: 18, trust: 8, ethics: 6, pnl: 20 },
        consequence: "You call it before the restatement. The stock collapses; your book is on the right side.",
        solution: "Capitalizing an operating cost understates current expenses, so it OVERSTATES current net income, " +
          "assets, and equity. It also shifts the outflow from operating to investing activities, OVERSTATING " +
          "operating cash flow. Future income is then understated via depreciation. The maneuver is a hallmark of " +
          "aggressive, low-quality earnings." },
      { text: "Accept the higher margins — capitalization is a legitimate accounting choice", correct: false, points: 20,
        deltas: { knowledge: 5, pnl: -40, risk: 12 },
        consequence: "It was not legitimate — these were recurring operating costs. The restatement wipes years of 'profit.'",
        solution: "Recurring operating costs must be expensed as incurred. Capitalizing them is not a permissible " +
          "policy choice; it is misstatement." },
      { text: "Only worry about the balance sheet; cash flow is unaffected", correct: false, points: 40,
        deltas: { knowledge: 8 },
        consequence: "You missed the cash-flow distortion, which is the most seductive part of the trick.",
        solution: "Capitalizing moves the cash outflow from CFO to CFI, artificially boosting operating cash flow — " +
          "often the metric analysts trust most." },
      { text: "Trust it because the auditor signed the statements", correct: false, points: 20,
        deltas: { knowledge: 4, risk: 8 },
        consequence: "The audit did not catch it either. Your own analysis was supposed to.",
        solution: "An unqualified audit opinion is not a guarantee of earnings quality; independent analysis of the " +
          "accounting choices is the analyst's job." }
    ],
    history: "WorldCom improperly capitalized about $3.8 billion (ultimately ~$11 billion) of line costs, one of the " +
      "largest accounting frauds in US history. It filed for bankruptcy in 2002. The distortion inflated both " +
      "earnings and operating cash flow — precisely the metrics investors leaned on.",
    conceptCard: { term: "Capitalizing vs Expensing",
      explanation: "Capitalizing a cost raises current income, assets and operating cash flow (the outflow moves to " +
        "investing) and lowers future income via depreciation. Expensing does the reverse. Misclassifying recurring " +
        "operating costs as capex is a classic earnings-quality red flag.",
      reading: "CFA L2 · FRA / Reporting Quality" }
  },

  {
    id: "l2-forward-price",
    act: 2, level: "L2", topic: "Derivatives",
    reading: "Pricing and Valuation of Forward Contracts",
    difficulty: "moderate", type: "exam", anchor: "LTCM (1998)",
    wire: "Arbitrage desk: what is the no-arbitrage forward on this stock?",
    title: "The Price That Must Hold",
    narrative:
      "A convergence desk — the kind LTCM ran — insists a forward is 'riskless' if priced correctly. Before " +
      "putting on a leveraged basis trade, you compute the no-arbitrage forward price.",
    situation:
      "A non-dividend-paying stock trades at $100. The annual risk-free rate is 5% (annual compounding). " +
      "What is the no-arbitrage one-year forward price?",
    exhibit: { title: "Inputs", rows: [
      ["Spot price (S₀)", "$100"],
      ["Risk-free rate (r)", "5% annual"],
      ["Dividends / carry", "None"],
      ["Maturity", "1 year"]
    ]},
    choices: [
      { text: "$105.00", correct: true, points: 150,
        deltas: { knowledge: 16, trust: 5 },
        consequence: "The forward is fairly priced; any deviation would be the arbitrage — if the basis holds.",
        solution: "For a non-dividend asset, F₀ = S₀(1 + r)^T = 100 × 1.05 = $105.00. The forward simply reflects " +
          "the cost of carrying the spot to delivery (here, financing at the risk-free rate)." },
      { text: "$100.00", correct: false, points: 20,
        deltas: { knowledge: 5 },
        consequence: "You ignored the cost of carry.",
        solution: "You must add financing cost: F₀ = 100 × 1.05 = $105, not the spot of $100." },
      { text: "$95.00", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "Wrong direction — with no yield, the forward is above spot.",
        solution: "Positive carry with no dividends pushes the forward above spot: $105, not $95." },
      { text: "$105.13", correct: false, points: 40,
        deltas: { knowledge: 8 },
        consequence: "That is continuous compounding; the question specifies annual.",
        solution: "$105.13 = 100 × e^0.05. With annual compounding, F₀ = 100 × 1.05 = $105.00." }
    ],
    history: "Long-Term Capital Management, staffed by Nobel laureates Merton and Scholes, ran highly leveraged " +
      "'convergence' trades that were individually near-arbitrages. When Russia defaulted in 1998, spreads " +
      "diverged instead of converging; ~25–30x leverage turned small moves into a near-systemic collapse, and the " +
      "Fed organized a rescue. Correct pricing does not make a leveraged trade riskless.",
    conceptCard: { term: "No-Arbitrage Forward Price & Leverage",
      explanation: "F₀ = S₀(1+r)^T for a non-income asset (cost of carry). A 'correctly priced' arbitrage can still " +
        "be ruinous if funded with extreme leverage and the convergence takes longer than your financing survives — " +
        "the LTCM lesson.",
      reading: "CFA L2 · Derivatives" }
  },

  {
    id: "l2-credit-spread",
    act: 2, level: "L2", topic: "Fixed Income",
    reading: "Credit Risk & Spreads / Securitization",
    difficulty: "hard", type: "exam", anchor: "Subprime & CDOs (2007–08)",
    wire: "A 'AAA' CDO tranche yields way more than other AAA paper. Why?",
    title: "The Spread That Was Too Wide",
    narrative:
      "It is 2006. A structured-credit salesman pitches a 'AAA-rated' CDO tranche backed by subprime mortgages, " +
      "yielding well above comparably rated corporate bonds. You start with the arithmetic, then ask the harder question.",
    situation:
      "A bond yields 6.5% while the comparable-maturity Treasury yields 4.0%. What is the credit (yield) spread?",
    exhibit: { title: "Inputs", rows: [
      ["Corporate/CDO yield", "6.5%"],
      ["Comparable Treasury yield", "4.0%"],
      ["Stated rating", "AAA"]
    ]},
    choices: [
      { text: "250 bps — and a 'AAA' bond paying that spread is a warning, not a bargain",
        correct: true, points: 200,
        deltas: { knowledge: 20, trust: 8, pnl: 25, risk: -8 },
        consequence: "You conclude the rating is unreliable and pass. In 2008 those tranches are downgraded to junk.",
        solution: "Spread = 6.5% − 4.0% = 2.5% = 250 bps. The deeper point: a genuinely AAA instrument should not " +
          "need to pay a 250 bp premium. The wide spread signals the market doubts the rating — subprime CDO " +
          "ratings relied on low-default-correlation assumptions that failed catastrophically in 2008." },
      { text: "162 bps", correct: false, points: 40,
        deltas: { knowledge: 8 },
        consequence: "Arithmetic error.",
        solution: "6.5 − 4.0 = 2.5% = 250 bps, not 162 bps." },
      { text: "65 bps", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "You slipped a decimal.",
        solution: "The spread is 2.50%, i.e. 250 bps." },
      { text: "250 bps — and the extra yield is free money for a AAA bond", correct: false, points: 60,
        deltas: { knowledge: 10, pnl: -50, risk: 16 },
        consequence: "The math is right but the judgment is fatal. You buy the 'bargain' and it detonates.",
        solution: "The spread calc (250 bps) is correct, but treating an outsized AAA spread as free money ignores " +
          "that the market is pricing in risk the rating misses. There is no free lunch in credit." }
    ],
    history: "Subprime CDO ratings assumed mortgage defaults were largely uncorrelated. When national house prices " +
      "fell together in 2007–08, defaults correlated, and 'AAA' tranches were downgraded to junk — central to the " +
      "Global Financial Crisis and the collapse of Lehman Brothers and Bear Stearns.",
    conceptCard: { term: "Credit Spread & Ratings Reliance",
      explanation: "Credit spread = risky yield − risk-free yield of matched maturity. An unusually wide spread for " +
        "a given rating signals the market disputes that rating. Correlation assumptions inside structured products " +
        "can make ratings dangerously misleading.",
      reading: "CFA L2 · Fixed Income / Structured Credit" }
  },

  /* ================= ACT III — LEVEL 3 (hard) ===================== */
  {
    id: "l3-rebalance-2008",
    act: 3, level: "L3", topic: "Portfolio Management",
    reading: "Asset Allocation — Rebalancing Discipline",
    difficulty: "hard", type: "decision", anchor: "Global Financial Crisis (2008)",
    wire: "Oct 2008 — equities have cratered; the 60/40 has drifted to 45/55.",
    title: "Rebalance Into the Fire",
    narrative:
      "It is October 2008. Equity markets are in free fall. A client's strategic 60/40 policy portfolio has " +
      "drifted to roughly 45% equities / 55% bonds as stocks collapsed. The client's circumstances, time horizon " +
      "and IPS are unchanged. They are calling, frightened, asking you to 'do something.'",
    situation: "As CIO, what is the disciplined action consistent with the investment policy statement?",
    exhibit: { title: "The portfolio", rows: [
      ["Strategic policy target", "60% equity / 40% bonds"],
      ["Current drifted weights", "≈ 45% equity / 55% bonds"],
      ["Client IPS / horizon", "Unchanged; long-term"],
      ["Client emotion", "Fear; wants action"]
    ]},
    choices: [
      { text: "Rebalance back toward the 60/40 target — sell bonds, buy equities into the decline",
        correct: true, points: 200,
        deltas: { knowledge: 20, trust: 10, pnl: 40, risk: 4 },
        consequence: "Painful in the moment, but you buy equities cheap. The 2009–2010 recovery rewards the discipline.",
        solution: "If the IPS and the client's circumstances are unchanged, drift from the strategic target should be " +
          "corrected by rebalancing. This is inherently contrarian — selling what rose (bonds) and buying what fell " +
          "(equities) — and it enforces 'buy low, sell high.' Abandoning policy at the bottom locks in losses and " +
          "misses the rebound." },
      { text: "Sell the remaining equities and move to cash to stop the bleeding", correct: false, points: 20,
        deltas: { knowledge: 5, pnl: -60, trust: -10, risk: -4 },
        consequence: "You crystallize the loss at the low and are absent for the sharp recovery months later.",
        solution: "Panic-selling at the bottom converts a paper loss into a permanent one and abandons the policy " +
          "that reflects the client's long-term objectives. Classic behavioral error, formalized." },
      { text: "Do nothing and let the weights drift further", correct: false, points: 70,
        deltas: { knowledge: 10, risk: 6 },
        consequence: "Inaction leaves the portfolio off-policy and under-exposed to the eventual recovery.",
        solution: "Letting drift persist is an implicit market-timing bet against your own policy. Rebalancing " +
          "restores the intended risk posture." },
      { text: "Overhaul the whole IPS in the middle of the crisis to a defensive posture", correct: false, points: 40,
        deltas: { knowledge: 8, trust: -6, risk: 2 },
        consequence: "Rewriting policy under duress bakes today's fear into tomorrow's strategy.",
        solution: "The IPS should change only when the client's objectives or constraints genuinely change — not in " +
          "reaction to market stress. Changing it mid-panic institutionalizes the behavioral mistake." }
    ],
    history: "The S&P 500 fell ~57% peak-to-trough into March 2009, then more than doubled over the following " +
      "years. Investors who held their strategic allocation and rebalanced captured the recovery; those who fled to " +
      "cash at the lows generally did not.",
    conceptCard: { term: "Rebalancing Discipline",
      explanation: "When the IPS is unchanged, restore the strategic asset allocation as prices move it off target. " +
        "Rebalancing is contrarian and counter-cyclical by construction, and it prevents drift from becoming an " +
        "unintended market-timing bet.",
      reading: "CFA L3 · Asset Allocation" }
  },

  {
    id: "l3-ips-return",
    act: 3, level: "L3", topic: "Portfolio Management",
    reading: "Private Wealth — IPS Return Objective",
    difficulty: "hard", type: "exam", anchor: null,
    wire: "New private-wealth mandate — set the required return in the IPS.",
    title: "The Number the Whole Plan Hangs On",
    narrative:
      "You are drafting the investment policy statement for a newly retired client. Everything downstream — the " +
      "asset allocation, the risk budget — depends on the required return you set now.",
    situation:
      "The client has $2,000,000 of investable assets and needs $80,000 per year (in today's dollars) for " +
      "spending. Expected inflation is 2%. Ignoring taxes and using the simple additive approximation, what " +
      "nominal required return should the IPS specify?",
    exhibit: { title: "Client facts", rows: [
      ["Investable assets", "$2,000,000"],
      ["Annual spending need (real)", "$80,000"],
      ["Expected inflation", "2%"]
    ]},
    choices: [
      { text: "≈ 6%", correct: true, points: 200,
        deltas: { knowledge: 20, trust: 8 },
        consequence: "The return objective is realistic, so the allocation you build on it is sound.",
        solution: "Real spending rate = 80,000 / 2,000,000 = 4.0%. Add expected inflation to preserve purchasing " +
          "power: 4% + 2% ≈ 6% nominal (additive approximation). The precise multiplicative figure is " +
          "(1.04)(1.02) − 1 = 6.08%, but the additive 6% is the standard L3 approximation." },
      { text: "≈ 4%", correct: false, points: 40,
        deltas: { knowledge: 8 },
        consequence: "You omitted inflation — the portfolio would slowly lose purchasing power.",
        solution: "4% is only the real spending rate. You must add expected inflation (2%) to maintain real wealth: " +
          "≈ 6% nominal." },
      { text: "≈ 2%", correct: false, points: 20,
        deltas: { knowledge: 4 },
        consequence: "That covers inflation but not a dollar of spending.",
        solution: "The spending need alone is 4% of assets; adding 2% inflation gives ≈ 6%." },
      { text: "≈ 8%", correct: false, points: 40,
        deltas: { knowledge: 8, risk: 6 },
        consequence: "Too high — you would take more risk than the client needs.",
        solution: "The required return is spending rate (4%) + inflation (2%) ≈ 6%, not 8%. Overstating it forces " +
          "unnecessary risk." }
    ],
    history: null,
    conceptCard: { term: "IPS Return Objective (real + inflation)",
      explanation: "Required nominal return ≈ real spending rate + expected inflation (additive approximation; " +
        "multiplicatively (1+real)(1+infl) − 1). It anchors the entire allocation, so precision and realism matter.",
      reading: "CFA L3 · Private Wealth" }
  },

  {
    id: "l3-behavioral",
    act: 3, level: "L3", topic: "Portfolio Management",
    reading: "Behavioral Finance — Biases",
    difficulty: "hard", type: "decision", anchor: "Disposition Effect",
    wire: "Client refuses to sell a loser 'until it gets back to what I paid.'",
    title: "Break-Even-itis",
    narrative:
      "A wealthy client holds a concentrated position that has fallen 40%. The thesis has broken and better " +
      "opportunities exist, but the client insists: 'I'm not selling until it gets back to what I paid for it.' " +
      "Meanwhile they happily sold their winners early to 'lock in gains.'",
    situation: "What is the correct diagnosis and the right way to advise the client?",
    exhibit: { title: "Client behavior", rows: [
      ["Losing position", "Held despite broken thesis"],
      ["Stated rule", "'Sell only at my purchase price'"],
      ["Winners", "Sold early to lock in gains"]
    ]},
    choices: [
      { text: "Name it as loss aversion / the disposition effect and anchoring; reframe around the position's forward prospects, not the purchase price",
        correct: true, points: 200,
        deltas: { knowledge: 20, trust: 10, ethics: 4 },
        consequence: "You shift the conversation to what the money should do next. The client agrees to reallocate.",
        solution: "Selling winners too early and riding losers is the disposition effect, driven by loss aversion " +
          "and anchoring to the purchase price (a sunk cost). The purchase price is irrelevant to future value. " +
          "Coach the client to evaluate whether they would buy the position today at its current price; if not, " +
          "the capital belongs elsewhere." },
      { text: "Agree to wait for break-even — respecting the client's wishes always comes first", correct: false, points: 40,
        deltas: { knowledge: 8, trust: -4, risk: 6 },
        consequence: "You enable the bias and leave capital trapped in a broken thesis.",
        solution: "Adviser duty includes counseling clients away from clear behavioral errors, not simply ratifying " +
          "them. The purchase price has no bearing on the asset's future return." },
      { text: "Diagnose overconfidence and tell them to trade more actively", correct: false, points: 30,
        deltas: { knowledge: 6, risk: 8 },
        consequence: "Wrong bias, wrong prescription — more trading usually hurts.",
        solution: "The pattern (hold losers, sell winners, anchor to cost) is loss aversion/disposition, not " +
          "overconfidence. More trading is not the remedy." },
      { text: "Just sell everything without explanation to fix the allocation", correct: false, points: 60,
        deltas: { knowledge: 8, trust: -6 },
        consequence: "You may fix the portfolio but you damage the relationship and teach the client nothing.",
        solution: "Good behavioral coaching addresses the bias with the client so the lesson sticks; unilateral " +
          "action without communication erodes trust even when the trade is right." }
    ],
    history: "The disposition effect — the tendency to sell winners too early and hold losers too long — is one of " +
      "the most robust findings in behavioral finance, evident from retail investors in the 1980s–90s through the " +
      "meme-stock episodes of 2021, where many held collapsing positions anchored to their entry price.",
    conceptCard: { term: "Disposition Effect / Loss Aversion",
      explanation: "Investors feel losses more than equivalent gains, so they realize gains too early and defer " +
        "losses, often anchoring to purchase price (a sunk cost). Remedy: evaluate positions on forward prospects, " +
        "ignoring what was paid.",
      reading: "CFA L3 · Behavioral Finance" }
  },

  {
    id: "l3-covid",
    act: 3, level: "L3", topic: "Portfolio Management",
    reading: "Portfolio Management — Policy Under Stress",
    difficulty: "hard", type: "decision", anchor: "COVID-19 Crash (2020)",
    wire: "March 2020 — fastest bear market in history; a big client wants out, now.",
    title: "Twenty Percent in a Month",
    narrative:
      "It is late March 2020. In a matter of weeks the market has fallen roughly a third as the pandemic hits. " +
      "Your largest institutional client instructs you to liquidate their entire equity allocation to cash " +
      "'until things are clear.' Their long-term objectives and liquidity needs have not actually changed.",
    situation: "As CIO, what is the appropriate response?",
    exhibit: { title: "The moment", rows: [
      ["Drawdown", "≈ −34% in about a month"],
      ["Client instruction", "Liquidate all equities to cash"],
      ["Actual liquidity need", "Unchanged; long horizon"],
      ["Visibility", "Extremely low; panic broad"]
    ]},
    choices: [
      { text: "Counsel against liquidating; hold the strategic allocation, meet real liquidity needs, and rebalance per policy",
        correct: true, points: 200,
        deltas: { knowledge: 20, trust: 10, pnl: 45 },
        consequence: "You keep them invested (and rebalancing) through the low. The market fully recovers within months.",
        solution: "With unchanged objectives and liquidity needs, the correct action is to adhere to the IPS: keep " +
          "the strategic allocation, ensure near-term cash needs are covered from bonds/cash, and rebalance into " +
          "the decline. Selling everything to cash at a panic low crystallizes losses and forces an impossible " +
          "re-entry decision. Behavioral coaching is central to the CIO's job here." },
      { text: "Follow the instruction and liquidate everything to cash immediately", correct: false, points: 30,
        deltas: { knowledge: 6, pnl: -70, trust: -8 },
        consequence: "You sell at nearly the exact bottom. The V-shaped recovery leaves the client far behind.",
        solution: "The market bottomed on 23 March 2020 and recovered its losses within months. Liquidating at the " +
          "low, absent a genuine change in circumstances, is the archetypal panic-selling error the IPS exists to " +
          "prevent." },
      { text: "Liquidate half now, decide the rest later", correct: false, points: 70,
        deltas: { knowledge: 10, pnl: -30, trust: -3 },
        consequence: "A compromise that still sells low and still leaves the re-entry problem unsolved.",
        solution: "Splitting the panic trade in two does not make it disciplined. If circumstances are unchanged, " +
          "the policy allocation should be maintained and rebalanced, not partially abandoned." },
      { text: "Ensure only their genuine short-term cash needs are raised from bonds, and hold the rest", correct: false, points: 150,
        deltas: { knowledge: 14, trust: 5, pnl: 10 },
        consequence: "Reasonable and prudent — though it stops short of the full discipline of rebalancing into weakness.",
        solution: "Meeting real liquidity needs from the least-risky sleeve is exactly right; the fully optimal " +
          "answer also rebalances toward target (buying equities), capturing more of the rebound while still " +
          "coaching the client off the panic." }
    ],
    history: "The COVID crash was the fastest 30%+ decline in US market history, bottoming on 23 March 2020. " +
      "Massive monetary and fiscal support drove a V-shaped recovery, with major indices regaining record highs " +
      "within months — punishing those who sold at the lows.",
    conceptCard: { term: "Adhering to Policy Under Stress",
      explanation: "Change the IPS only when the client's objectives or constraints change — not in response to " +
        "market panic. Meet genuine liquidity needs from low-risk assets, maintain the strategic allocation, " +
        "rebalance, and coach clients through behavioral pressure.",
      reading: "CFA L3 · Portfolio Management" }
  },

  /* ================= CRISIS SCENARIOS (triggered) ================= */
  {
    id: "crisis-risk",
    act: 0, level: "—", topic: "Portfolio Management",
    reading: "Risk Management — Limits & Escalation",
    difficulty: "hard", type: "decision", anchor: "Archegos / Barings — Risk Blowup",
    trigger: "risk",
    wire: "RISK CRISIS — your book has breached every exposure limit at once.",
    title: "The Margin Call",
    narrative:
      "It has caught up with you. Concentrated, leveraged positions have all moved the wrong way together and " +
      "the prime broker is on the line demanding variation margin by end of day. Every risk limit is red. " +
      "This is the Archegos moment — the one Bill Hwang faced in March 2021, and the one that ended Barings.",
    situation: "With the book breaching limits and a margin call live, what do you do?",
    exhibit: { title: "The book", rows: [
      ["Leverage", "Far above policy limits"],
      ["Concentration", "Extreme, correlated positions"],
      ["Margin call", "Due today"],
      ["Risk limits", "All breached"]
    ]},
    choices: [
      { text: "Disclose immediately to management and the prime broker, cut risk in an orderly way, and post margin",
        correct: true, points: 200,
        deltas: { knowledge: 18, ethics: 12, trust: 6, risk: -45 },
        consequence: "Brutal losses, but you survive. Transparency and orderly de-risking stop it becoming terminal.",
        solution: "Once limits are breached and a margin call is live, the only defensible path is transparency and " +
          "orderly risk reduction. Concealing or doubling down is how Archegos vaporized ~$20bn in days and how " +
          "Barings failed. Risk limits exist precisely for this moment; honor them even when it hurts." },
      { text: "Double down to trade your way back before anyone notices", correct: false, points: 0,
        deltas: { knowledge: 4, ethics: -20, risk: 30, pnl: -120, trust: -15 },
        consequence: "This is the Leeson spiral. The losses compound and the firm is now at risk of failure.",
        solution: "Adding risk to hide losses is the exact mechanism of the Barings collapse. It converts a survivable " +
          "loss into an existential one." },
      { text: "Hide the breach and hope the positions recover overnight", correct: false, points: 0,
        deltas: { knowledge: 3, ethics: -25, risk: 20, pnl: -80, trust: -15 },
        consequence: "Concealment removes the firm's chance to manage the exposure. It ends careers and firms.",
        solution: "Non-disclosure of a material risk breach is both a control failure and an ethics violation. It " +
          "denies the firm any ability to respond." }
    ],
    history: "In March 2021 Archegos Capital, using total-return swaps to hide ~5x leverage, defaulted on margin " +
      "calls and lost roughly $20 billion in days, inflicting billions in losses on its prime brokers. Concentrated, " +
      "hidden leverage — the same pattern as Barings in 1995 — is a recurring path to ruin.",
    conceptCard: { term: "Risk Limits & Escalation",
      explanation: "Risk limits are binding controls, not suggestions. On a breach, escalate and de-risk in an " +
        "orderly way; never conceal or add exposure to recover losses. Hidden leverage is the common thread from " +
        "Barings to LTCM to Archegos.",
      reading: "CFA · Risk Management" }
  },

  {
    id: "crisis-ethics",
    act: 0, level: "—", topic: "Ethics",
    reading: "Standards I–VII — Integrity Under Pressure",
    difficulty: "hard", type: "decision", anchor: "Madoff / Front-Running",
    trigger: "ethics",
    wire: "ETHICS CRISIS — a scheme is on the table that would make the year in one trade.",
    title: "The Shortcut",
    narrative:
      "Your integrity has been fraying with every corner cut, and now the biggest temptation arrives. A way to " +
      "guarantee returns and paper over a bad stretch is on the table — misrepresent performance to investors, " +
      "front-run a large client order, and let the inflows cover the gap. It would fix everything, this quarter.",
    situation: "This is the line. What do you do?",
    exhibit: { title: "The offer", rows: [
      ["Method", "Misrepresent returns; front-run client flow"],
      ["Upside", "Fixes the year immediately"],
      ["Risk", "Fraud; total, permanent if discovered"]
    ]},
    choices: [
      { text: "Refuse, and report the proposal to compliance",
        correct: true, points: 200,
        deltas: { knowledge: 16, ethics: 40, trust: 8 },
        consequence: "You take the hard, honest road. Your reputation — the only asset that compounds forever — survives.",
        solution: "Misrepresenting performance and front-running clients violate the most basic duties to clients " +
          "and the integrity of capital markets (Standards I, III, and more). No short-term gain justifies fraud. " +
          "The correct action is to refuse and report. Reputation, once lost, does not come back." },
      { text: "Do it once, just to survive the quarter", correct: false, points: 0,
        deltas: { knowledge: 2, ethics: -30, risk: 20, trust: -20, pnl: -100 },
        consequence: "There is no 'just once.' This is how Madoff began. It ends in collapse and, often, prison.",
        solution: "Bernie Madoff's Ponzi scheme ran for years on exactly this logic — cover the gap now, confess " +
          "never. It ended in a ~$65bn fraud and a 150-year sentence. Fraud does not stay small." },
      { text: "Don't participate, but stay silent to protect yourself", correct: false, points: 40,
        deltas: { knowledge: 6, ethics: -6, trust: -4 },
        consequence: "Silence lets the scheme proceed against clients you are duty-bound to protect.",
        solution: "Declining is necessary but not sufficient. Knowledge of a fraud against clients carries a duty " +
          "to escalate; passivity is complicity." }
    ],
    history: "Bernie Madoff's Ponzi scheme, exposed in December 2008, cost investors roughly $65 billion of reported " +
      "value and stands as the largest in history. It grew from a gap that 'just needed covering' into decades of " +
      "fabricated returns — a warning about the first compromise.",
    conceptCard: { term: "Integrity of Capital Markets",
      explanation: "Misrepresentation and front-running strike at the core duties to clients and market integrity. " +
        "Ethical failures compound like fraud does — the first small compromise makes the next one easier. Reputation " +
        "is the asset that never recovers.",
      reading: "CFA · Ethics I–VII" }
  }

  ]
};
