/* =====================================================================
   THE CHARTERHOLDER — Level III drill bank (50 scenarios)
   Hard, judgment-and-application questions: asset allocation, private
   wealth, portfolio construction, risk management, performance.
   ===================================================================== */
window.GAME_CONTENT.scenarios.push(

/* ---------------- ETHICS (5) ---------------- */
{id:"l3d-eth-01", act:3, level:"L3", topic:"Ethics", reading:"Asset Manager Code of Professional Conduct", difficulty:"hard", type:"exam",
 title:"The Manager's Duty",
 situation:"Under the CFA Institute Asset Manager Code, a manager's foremost obligation is to:",
 solution:"The Asset Manager Code requires managers to place client interests before their own and act with skill, competence, and diligence in the clients' best interest.",
 choices:[{text:"Act in the clients' best interest, ahead of the firm's", correct:true},{text:"Maximize the firm's assets under management"},{text:"Match a chosen benchmark exactly"},{text:"Prioritize the largest clients only"}]},

{id:"l3d-eth-02", act:3, level:"L3", topic:"Ethics", reading:"GIPS — Verification", difficulty:"hard", type:"exam",
 title:"What Verification Covers",
 situation:"GIPS verification, performed by an independent third party, is conducted on:",
 solution:"Verification is firm-wide (not composite-specific): it assesses whether the firm's processes and procedures for constructing composites and calculating performance comply with GIPS across the whole firm.",
 choices:[{text:"The entire firm, not a single composite", correct:true},{text:"Only the composite the firm selects"},{text:"Only accounts above a size threshold"},{text:"The client's custodian records"}]},

{id:"l3d-eth-03", act:3, level:"L3", topic:"Ethics", reading:"Standard III(A) — Proxy Voting", difficulty:"hard", type:"exam",
 title:"Voting the Proxies",
 situation:"A manager holding shares on behalf of clients should vote proxies:",
 solution:"Standard III(A) Loyalty, Prudence, and Care: proxies are a client asset and must be voted in the clients' best economic interest, with a cost-benefit awareness.",
 choices:[{text:"In the clients' best economic interest", correct:true},{text:"Always with management's recommendation"},{text:"To favor the manager's other business relationships"},{text:"Only when the client explicitly requests it each time"}]},

{id:"l3d-eth-04", act:3, level:"L3", topic:"Ethics", reading:"Standard VI(A) — Disclosure of Conflicts", difficulty:"moderate", type:"exam",
 title:"Cross-Departmental Conflict",
 situation:"An analyst's firm has an investment-banking relationship with a company the analyst covers. The analyst must:",
 solution:"Standard VI(A): all matters that could impair objectivity — including the firm's banking relationships — must be prominently and fully disclosed to clients and prospects.",
 choices:[{text:"Prominently disclose the banking relationship", correct:true},{text:"Suppress the relationship to avoid alarming clients"},{text:"Issue only Buy ratings on banking clients"},{text:"Stop covering the company entirely"}]},

{id:"l3d-eth-05", act:3, level:"L3", topic:"Ethics", reading:"Standard III(D) — Performance Presentation", difficulty:"moderate", type:"exam",
 title:"Composite Cherry-Picking",
 situation:"Presenting only the firm's best composite to a prospect, omitting comparable underperforming accounts, most directly violates:",
 solution:"Selectively presenting favorable results while omitting comparable accounts is a misleading performance presentation under Standard III(D) (and undermines fair dealing).",
 choices:[{text:"Standard III(D) — Performance Presentation", correct:true},{text:"Standard I(A) — Knowledge of the Law"},{text:"Standard IV(A) — Loyalty to Employer"},{text:"No violation if all shown accounts are real"}]},

/* ---------------- BEHAVIORAL FINANCE (5) ---------------- */
{id:"l3d-bf-01", act:3, level:"L3", topic:"Behavioral Finance", reading:"Behavioral Biases — Overconfidence", difficulty:"moderate", type:"exam",
 title:"Trading Too Much",
 situation:"An investor who overestimates the precision of his forecasts and trades excessively exhibits:",
 solution:"Overconfidence bias leads investors to overrate their information and skill, causing excessive trading, under-diversification, and higher costs.",
 choices:[{text:"Overconfidence bias", correct:true},{text:"Loss aversion"},{text:"Regret aversion"},{text:"Anchoring"}]},

{id:"l3d-bf-02", act:3, level:"L3", topic:"Behavioral Finance", reading:"Behavioral Biases — Anchoring", difficulty:"moderate", type:"exam",
 title:"Stuck on a Number",
 situation:"An analyst who adjusts forecasts too little from an initial estimate, staying tethered to it, exhibits:",
 solution:"Anchoring-and-adjustment bias: people anchor on an initial value (e.g., a prior price or forecast) and adjust insufficiently when new information arrives.",
 choices:[{text:"Anchoring and adjustment", correct:true},{text:"Availability bias"},{text:"Hindsight bias"},{text:"Mental accounting"}]},

{id:"l3d-bf-03", act:3, level:"L3", topic:"Behavioral Finance", reading:"Behavioral Biases — Herding", difficulty:"moderate", type:"exam",
 title:"Following the Crowd",
 situation:"Investors buying an asset mainly because others are buying it, fearing being left out, display:",
 solution:"Herding: individuals follow the crowd rather than their own analysis, which can inflate bubbles and deepen crashes.",
 choices:[{text:"Herding behavior", correct:true},{text:"Conservatism bias"},{text:"Self-control bias"},{text:"Framing bias"}]},

{id:"l3d-bf-04", act:3, level:"L3", topic:"Behavioral Finance", reading:"Behavioral Biases — Availability", difficulty:"moderate", type:"exam",
 title:"What Comes to Mind",
 situation:"An investor who overweights recent, vivid news (e.g., a market crash on TV) when estimating probabilities exhibits:",
 solution:"Availability bias: probabilities are judged by how easily examples come to mind, so recent or dramatic events are overweighted.",
 choices:[{text:"Availability bias", correct:true},{text:"Illusion of control"},{text:"Loss aversion"},{text:"Overconfidence"}]},

{id:"l3d-bf-05", act:3, level:"L3", topic:"Behavioral Finance", reading:"Behavioral Biases — Mental Accounting", difficulty:"moderate", type:"exam",
 title:"Money With Labels",
 situation:"Treating 'bonus' money as spendable while carefully saving 'salary' money reflects:",
 solution:"Mental accounting: money is treated differently depending on its source or label, violating the principle that money is fungible; it can distort portfolio decisions.",
 choices:[{text:"Mental accounting", correct:true},{text:"Anchoring"},{text:"Recency bias"},{text:"Hindsight bias"}]},

/* ---------------- ASSET ALLOCATION (6) ---------------- */
{id:"l3d-aa-01", act:3, level:"L3", topic:"Asset Allocation", reading:"Strategic Asset Allocation", difficulty:"moderate", type:"exam",
 title:"The Policy Portfolio",
 situation:"A client's strategic asset allocation (policy portfolio) is best described as:",
 solution:"The SAA is the long-term target mix of asset classes chosen to meet the client's objectives and constraints in the IPS; it is the anchor from which tactical shifts and rebalancing are measured.",
 choices:[{text:"The long-term target mix reflecting objectives and constraints", correct:true},{text:"A short-term bet on market direction"},{text:"The manager's highest-conviction single stock"},{text:"Whatever the market is doing this quarter"}]},

{id:"l3d-aa-02", act:3, level:"L3", topic:"Asset Allocation", reading:"Asset Allocation Return", difficulty:"moderate", type:"exam",
 title:"Policy Expected Return",
 situation:"A policy portfolio holds 70% equities (expected 8%) and 30% bonds (expected 3%). Its expected return is:",
 exhibit:{title:"Policy mix", rows:[["Equities","70% @ 8%"],["Bonds","30% @ 3%"]]},
 solution:"Expected return = 0.70×8% + 0.30×3% = 5.6% + 0.9% = 6.5%.",
 choices:[{text:"6.5%", correct:true},{text:"5.5%"},{text:"11.0%"},{text:"5.0%"}]},

{id:"l3d-aa-03", act:3, level:"L3", topic:"Asset Allocation", reading:"Liability-Relative Asset Allocation", difficulty:"hard", type:"exam",
 title:"Allocating to Liabilities",
 situation:"A defined-benefit pension using a liability-relative (ALM) approach sets its asset allocation primarily to:",
 solution:"Liability-relative allocation manages assets in relation to the liabilities — matching or hedging their interest-rate and inflation sensitivities to control funded-status risk.",
 choices:[{text:"Hedge the risk characteristics of its liabilities", correct:true},{text:"Maximize return regardless of the liabilities"},{text:"Hold 100% equities for growth"},{text:"Match a peer group's average allocation"}]},

{id:"l3d-aa-04", act:3, level:"L3", topic:"Asset Allocation", reading:"Rebalancing", difficulty:"moderate", type:"exam",
 title:"Percentage-Range Rebalancing",
 situation:"A percentage-of-portfolio (corridor) rebalancing policy triggers a trade when:",
 solution:"Percentage-range rebalancing rebalances when an asset class's weight drifts outside a set corridor around its target, rather than on a fixed calendar schedule.",
 choices:[{text:"An asset class drifts outside its target corridor", correct:true},{text:"A fixed date on the calendar arrives"},{text:"The manager has a market view"},{text:"Returns turn negative"}]},

{id:"l3d-aa-05", act:3, level:"L3", topic:"Asset Allocation", reading:"Risk Budgeting / Risk Parity", difficulty:"hard", type:"exam",
 title:"Equalizing Risk",
 situation:"A risk-parity allocation sets weights so that:",
 solution:"Risk parity allocates so each asset (or asset class) contributes equally to total portfolio risk — unlike capital-weighting, which lets high-volatility assets dominate risk.",
 choices:[{text:"Each asset contributes equally to portfolio risk", correct:true},{text:"Each asset gets an equal dollar weight"},{text:"The highest-return asset gets the most capital"},{text:"Bonds are excluded entirely"}]},

{id:"l3d-aa-06", act:3, level:"L3", topic:"Asset Allocation", reading:"Tactical Asset Allocation", difficulty:"moderate", type:"exam",
 title:"Tactical Shifts",
 situation:"Tactical asset allocation (TAA) differs from strategic asset allocation in that TAA:",
 solution:"TAA makes short-term, deliberate deviations from the policy weights to exploit perceived near-term opportunities; it is an active bet measured against the strategic policy.",
 choices:[{text:"Makes short-term deviations from policy to add value", correct:true},{text:"Sets the permanent long-term target"},{text:"Is identical to buy-and-hold"},{text:"Ignores capital market expectations"}]},

/* ---------------- PORTFOLIO CONSTRUCTION (5) ---------------- */
{id:"l3d-pc-01", act:3, level:"L3", topic:"Portfolio Construction", reading:"Passive Equity Investing", difficulty:"moderate", type:"exam",
 title:"Closet Indexing",
 situation:"A fund that charges active fees but closely tracks its benchmark (high R², low active share) is engaged in:",
 solution:"Closet indexing: a nominally active fund that hugs the benchmark, delivering near-index returns while charging active fees — poor value for investors.",
 choices:[{text:"Closet indexing", correct:true},{text:"Genuine high-conviction active management"},{text:"Pure passive replication at index fees"},{text:"Risk parity"}]},

{id:"l3d-pc-02", act:3, level:"L3", topic:"Portfolio Construction", reading:"Factor-Based Strategies", difficulty:"moderate", type:"exam",
 title:"Smart Beta",
 situation:"A 'smart beta' or factor-tilt strategy seeks to:",
 solution:"Factor/smart-beta strategies systematically tilt toward rewarded factors (value, size, momentum, quality, low volatility) using rules-based, transparent weighting rather than pure cap-weighting.",
 choices:[{text:"Systematically capture rewarded factor premia via rules", correct:true},{text:"Pick individual stocks on manager intuition"},{text:"Replicate the cap-weighted index exactly"},{text:"Eliminate all tracking error"}]},

{id:"l3d-pc-03", act:3, level:"L3", topic:"Portfolio Construction", reading:"Liability-Driven Investing — Immunization", difficulty:"hard", type:"exam",
 title:"Immunizing a Liability",
 situation:"To immunize a single future liability with a bond portfolio, a manager should match the portfolio's:",
 solution:"Classical immunization matches the portfolio's Macaulay duration to the liability's horizon (and sets PV of assets ≥ PV of liability), so price and reinvestment risks offset.",
 choices:[{text:"Macaulay duration to the liability horizon", correct:true},{text:"Coupon rate to the liability's size"},{text:"Credit rating to AAA only"},{text:"Yield to the equity risk premium"}]},

{id:"l3d-pc-04", act:3, level:"L3", topic:"Portfolio Construction", reading:"Completion Portfolios", difficulty:"hard", type:"exam",
 title:"Neutralizing a Tilt",
 situation:"A completion portfolio is used to:",
 solution:"A completion portfolio is added alongside existing holdings to neutralize unintended factor or sector exposures, aligning the total portfolio with the benchmark or intended risk profile.",
 choices:[{text:"Offset unintended exposures and align to the benchmark", correct:true},{text:"Concentrate the portfolio in one sector"},{text:"Add leverage to boost returns"},{text:"Replace the entire portfolio"}]},

{id:"l3d-pc-05", act:3, level:"L3", topic:"Portfolio Construction", reading:"Tax-Aware Investing", difficulty:"moderate", type:"exam",
 title:"Harvesting Losses",
 situation:"Tax-loss harvesting improves after-tax returns by:",
 solution:"Tax-loss harvesting realizes losses to offset realized gains (and, within limits, ordinary income), deferring taxes; care is needed to avoid wash-sale rules.",
 choices:[{text:"Realizing losses to offset taxable gains", correct:true},{text:"Never selling any losing positions"},{text:"Maximizing short-term realized gains"},{text:"Ignoring the cost basis of holdings"}]},

/* ---------------- PRIVATE WEALTH (6) ---------------- */
{id:"l3d-pw-01", act:3, level:"L3", topic:"Private Wealth", reading:"IPS — Return Objective", difficulty:"hard", type:"exam",
 title:"Setting the Return Need",
 situation:"A client has $2,000,000 and needs $50,000 per year in real spending; expected inflation is 2.5%. Using the additive approximation, the required nominal return is:",
 exhibit:{title:"Inputs", rows:[["Investable assets","$2,000,000"],["Real spending need","$50,000"],["Expected inflation","2.5%"]]},
 solution:"Real spending rate = 50,000/2,000,000 = 2.5%. Add inflation to preserve purchasing power: 2.5% + 2.5% ≈ 5.0% nominal.",
 choices:[{text:"≈ 5.0%", correct:true},{text:"≈ 2.5%"},{text:"≈ 7.5%"},{text:"≈ 4.0%"}]},

{id:"l3d-pw-02", act:3, level:"L3", topic:"Private Wealth", reading:"Human Capital and Asset Allocation", difficulty:"hard", type:"exam",
 title:"Human Capital",
 situation:"A young professional with stable, bond-like employment income should generally tilt her financial portfolio:",
 solution:"When human capital is large and bond-like, the total (human + financial) balance argues for tilting the smaller financial portfolio toward equities; this tilt declines with age as human capital is depleted.",
 choices:[{text:"Toward equities, since human capital is bond-like", correct:true},{text:"Entirely into bonds to match her salary"},{text:"Into cash until retirement"},{text:"Toward her own employer's stock only"}]},

{id:"l3d-pw-03", act:3, level:"L3", topic:"Private Wealth", reading:"After-Tax Returns", difficulty:"moderate", type:"exam",
 title:"After-Tax Return",
 situation:"An account earns a 6% pre-tax return and is taxed annually at 30%. Its after-tax return is:",
 solution:"After-tax return = pre-tax return × (1 − tax rate) = 6% × (1 − 0.30) = 4.2%.",
 choices:[{text:"4.2%", correct:true},{text:"6.0%"},{text:"1.8%"},{text:"4.0%"}]},

{id:"l3d-pw-04", act:3, level:"L3", topic:"Private Wealth", reading:"Estate Planning", difficulty:"moderate", type:"exam",
 title:"Gift Now or Bequeath Later",
 situation:"When an asset is expected to appreciate strongly and the gift-tax rate is below the estate-tax rate, lifetime gifting is generally:",
 solution:"Gifting an appreciating asset early moves future growth out of the taxable estate; when the gift-tax rate is lower than the estate-tax rate, lifetime gifting is usually more tax-efficient.",
 choices:[{text:"More tax-efficient than bequeathing at death", correct:true},{text:"Always less efficient than a bequest"},{text:"Irrelevant to the total tax bill"},{text:"Prohibited by the Code and Standards"}]},

{id:"l3d-pw-05", act:3, level:"L3", topic:"Private Wealth", reading:"Time Horizon", difficulty:"moderate", type:"exam",
 title:"The Retiree's Horizon",
 situation:"A newly retired 65-year-old with a 25-year life expectancy should be treated as having:",
 solution:"A 25-year spending horizon is still long: such a client generally needs meaningful equity exposure to combat inflation and longevity risk, not an all-cash/bond portfolio.",
 choices:[{text:"A long horizon still warranting equity exposure", correct:true},{text:"A short horizon requiring all cash"},{text:"No need to consider inflation"},{text:"Zero capacity for any risk"}]},

{id:"l3d-pw-06", act:3, level:"L3", topic:"Private Wealth", reading:"Retirement Planning — Monte Carlo", difficulty:"moderate", type:"exam",
 title:"Why Monte Carlo",
 situation:"Monte Carlo simulation is used in retirement planning primarily to:",
 solution:"Monte Carlo generates thousands of return paths to estimate the probability that a plan meets its goals (e.g., not running out of money), capturing sequence-of-returns risk a single average cannot.",
 choices:[{text:"Estimate the probability a plan succeeds across many paths", correct:true},{text:"Guarantee a fixed retirement income"},{text:"Assume returns are the same every year"},{text:"Eliminate market risk"}]},

/* ---------------- FIXED INCOME (5) ---------------- */
{id:"l3d-fi-01", act:3, level:"L3", topic:"Fixed Income", reading:"Liability-Driven Investing", difficulty:"hard", type:"exam",
 title:"Matching a Single Liability",
 situation:"To immunize a single liability due in 7 years, a bond portfolio's Macaulay duration should be set to:",
 solution:"For a single liability, immunization sets the portfolio's Macaulay duration equal to the investment horizon (7 years) so that price and reinvestment risk offset.",
 choices:[{text:"7 years", correct:true},{text:"14 years"},{text:"3.5 years"},{text:"The bond's coupon rate"}]},

{id:"l3d-fi-02", act:3, level:"L3", topic:"Fixed Income", reading:"Yield Curve Strategies", difficulty:"hard", type:"exam",
 title:"Barbell vs Bullet",
 situation:"Compared with a duration-matched bullet, a barbell portfolio generally has:",
 solution:"For the same duration, a barbell (short + long maturities) has greater convexity than a bullet, so it outperforms when yields make large moves and underperforms in a stable, upward-sloping carry environment.",
 choices:[{text:"Higher convexity", correct:true},{text:"Lower convexity"},{text:"Identical convexity"},{text:"No interest-rate risk"}]},

{id:"l3d-fi-03", act:3, level:"L3", topic:"Fixed Income", reading:"Riding the Yield Curve", difficulty:"hard", type:"exam",
 title:"Rolling Down",
 situation:"'Riding (rolling down) the yield curve' can enhance return when the curve is:",
 solution:"Rolling down works when the yield curve is upward-sloping and expected to stay stable: as a bond ages, it 'rolls' to lower yields (higher prices), adding to coupon return.",
 choices:[{text:"Upward-sloping and stable", correct:true},{text:"Inverted and steepening"},{text:"Flat and volatile"},{text:"Irrelevant to the strategy"}]},

{id:"l3d-fi-04", act:3, level:"L3", topic:"Fixed Income", reading:"Key Rate Duration", difficulty:"hard", type:"exam",
 title:"Key Rate Duration",
 situation:"Key rate durations are used to measure a bond portfolio's sensitivity to:",
 solution:"Key rate (partial) durations measure sensitivity to changes at specific points on the yield curve, capturing non-parallel shifts (steepening/flattening) that effective duration alone misses.",
 choices:[{text:"Changes at specific points on the yield curve", correct:true},{text:"Only parallel shifts in yields"},{text:"Credit spread changes only"},{text:"Equity market moves"}]},

{id:"l3d-fi-05", act:3, level:"L3", topic:"Fixed Income", reading:"Leverage in Fixed-Income Portfolios", difficulty:"hard", type:"exam",
 title:"Repo Leverage",
 situation:"A fixed-income manager using repurchase agreements (repo) to lever a portfolio increases return when:",
 solution:"Repo leverage boosts returns when the assets' return exceeds the repo financing cost; it magnifies losses when the spread is negative, and adds funding/rollover risk.",
 choices:[{text:"The asset return exceeds the repo financing cost", correct:true},{text:"The repo cost exceeds the asset return"},{text:"Rates are certain to rise"},{text:"It never changes risk"}]},

/* ---------------- EQUITY (4) ---------------- */
{id:"l3d-eq-01", act:3, level:"L3", topic:"Equity", reading:"Active Share", difficulty:"moderate", type:"exam",
 title:"Active Share",
 situation:"Active share measures:",
 solution:"Active share is the percentage of a portfolio's holdings that differ from the benchmark; high active share signals genuinely differentiated, high-conviction positioning.",
 choices:[{text:"How much a portfolio's holdings differ from its benchmark", correct:true},{text:"The portfolio's total return"},{text:"The manager's fee level"},{text:"The number of holdings only"}]},

{id:"l3d-eq-02", act:3, level:"L3", topic:"Equity", reading:"Long/Short and Market-Neutral", difficulty:"moderate", type:"exam",
 title:"Equitizing Cash",
 situation:"A manager wants market-neutral security selection but also wants market (beta) exposure on idle cash. She can add beta efficiently by:",
 solution:"Buying equity index futures ('equitizing cash') adds market beta on cash balances cheaply without disturbing the long/short selection alpha.",
 choices:[{text:"Buying equity index futures to equitize the cash", correct:true},{text:"Holding more cash"},{text:"Shorting the index"},{text:"Buying long-dated Treasuries"}]},

{id:"l3d-eq-03", act:3, level:"L3", topic:"Equity", reading:"Passive vs Active Costs", difficulty:"moderate", type:"exam",
 title:"The Arithmetic of Active",
 situation:"According to the 'arithmetic of active management', in aggregate and before costs, active investors as a group earn:",
 solution:"Because active and passive together hold the market, active investors in aggregate earn the market return before costs — and less after costs. This is why costs are decisive.",
 choices:[{text:"The market return, then less after costs", correct:true},{text:"More than the market on average"},{text:"The risk-free rate"},{text:"Zero"}]},

{id:"l3d-eq-04", act:3, level:"L3", topic:"Equity", reading:"Style and Sector Rotation", difficulty:"moderate", type:"exam",
 title:"Rotating to Cyclicals",
 situation:"A manager expecting the economy to move from recession into early recovery would most likely rotate toward:",
 solution:"Early recovery favors economically sensitive cyclicals (consumer discretionary, industrials, financials), which benefit most as growth reaccelerates; defensives tend to lag.",
 choices:[{text:"Cyclical sectors such as consumer discretionary and industrials", correct:true},{text:"Defensive utilities and staples only"},{text:"Cash and short-term bills"},{text:"Nothing — sectors are irrelevant to the cycle"}]},

/* ---------------- DERIVATIVES & RISK MANAGEMENT (5) ---------------- */
{id:"l3d-dv-01", act:3, level:"L3", topic:"Derivatives", reading:"Managing Equity Risk with Futures", difficulty:"hard", type:"exam",
 title:"Hedging the Beta Away",
 situation:"A $10,000,000 equity portfolio with beta 1.0 is to be fully hedged with index futures (contract value $250,000, beta 1.0). The manager should:",
 exhibit:{title:"Inputs", rows:[["Portfolio value","$10,000,000"],["Portfolio beta","1.0"],["Target beta","0.0"],["Futures value / beta","$250,000 / 1.0"]]},
 solution:"N = [(β_target − β_port)/β_futures] × (Portfolio value / Futures value) = [(0 − 1.0)/1.0] × (10,000,000/250,000) = −40. Sell (short) 40 contracts.",
 choices:[{text:"Short 40 contracts", correct:true},{text:"Buy 40 contracts"},{text:"Short 10 contracts"},{text:"Short 100 contracts"}]},

{id:"l3d-dv-02", act:3, level:"L3", topic:"Derivatives", reading:"Managing Interest-Rate Risk", difficulty:"hard", type:"exam",
 title:"Adjusting Duration",
 situation:"To reduce a bond portfolio's duration, a manager should:",
 solution:"Selling (shorting) interest-rate futures reduces portfolio duration; buying futures increases it. Duration is lowered to cut sensitivity to rising rates.",
 choices:[{text:"Sell interest-rate futures", correct:true},{text:"Buy interest-rate futures"},{text:"Buy more long-duration bonds"},{text:"Do nothing — futures can't change duration"}]},

{id:"l3d-dv-03", act:3, level:"L3", topic:"Derivatives", reading:"Option Strategies — Protective Put", difficulty:"moderate", type:"exam",
 title:"Insuring the Downside",
 situation:"An investor who owns a stock and buys a put on it has created a:",
 solution:"Long stock + long put = protective put: it caps downside at the strike (minus premium) while retaining upside, like buying insurance on the position.",
 choices:[{text:"Protective put (downside insurance)", correct:true},{text:"Covered call"},{text:"Bull call spread"},{text:"Short straddle"}]},

{id:"l3d-dv-04", act:3, level:"L3", topic:"Derivatives", reading:"Option Strategies — Covered Call", difficulty:"moderate", type:"exam",
 title:"Selling the Upside",
 situation:"An investor who owns a stock and writes a call against it has created a covered call, which:",
 solution:"Long stock + short call = covered call: it earns premium income and cushions small declines but caps upside at the strike; best when the outlook is neutral to mildly bullish.",
 choices:[{text:"Generates income but caps upside", correct:true},{text:"Provides unlimited upside and no risk"},{text:"Protects fully against large declines"},{text:"Is identical to a protective put"}]},

{id:"l3d-dv-05", act:3, level:"L3", topic:"Derivatives", reading:"Value at Risk (VaR)", difficulty:"hard", type:"exam",
 title:"Reading a VaR",
 situation:"A portfolio's 1-day 95% VaR is $1,000,000. The correct interpretation is:",
 solution:"A 1-day 95% VaR of $1M means there is a 5% probability of losing more than $1M in one day; VaR states a threshold and frequency, not the maximum possible loss.",
 choices:[{text:"There is a 5% chance of losing more than $1M in a day", correct:true},{text:"The maximum possible loss is exactly $1M"},{text:"The portfolio will lose $1M each day"},{text:"There is a 95% chance of losing $1M"}]},

/* ---------------- ALTERNATIVES (4) ---------------- */
{id:"l3d-ai-01", act:3, level:"L3", topic:"Alternatives", reading:"The Endowment Model", difficulty:"hard", type:"exam",
 title:"The Yale Model",
 situation:"The 'endowment model' associated with large university endowments is characterized by:",
 solution:"The endowment model exploits a long horizon and low liquidity needs to hold large allocations to illiquid alternatives (private equity, real assets, hedge funds), capturing an illiquidity premium.",
 choices:[{text:"Large allocations to illiquid alternatives for the long horizon", correct:true},{text:"Holding only domestic Treasury bills"},{text:"100% passive equity indexing"},{text:"Avoiding all illiquid assets"}]},

{id:"l3d-ai-02", act:3, level:"L3", topic:"Alternatives", reading:"Illiquidity Premium", difficulty:"moderate", type:"exam",
 title:"Paid to Be Patient",
 situation:"The illiquidity premium refers to the additional expected return investors demand for:",
 solution:"The illiquidity premium is the extra expected return required to hold assets that cannot be sold quickly at low cost — a key rationale for private-market allocations by long-horizon investors.",
 choices:[{text:"Holding assets that are hard to sell quickly", correct:true},{text:"Taking on more credit risk"},{text:"Paying higher management fees"},{text:"Investing only in liquid large-caps"}]},

{id:"l3d-ai-03", act:3, level:"L3", topic:"Alternatives", reading:"Real Assets and Inflation", difficulty:"moderate", type:"exam",
 title:"Inflation Hedge",
 situation:"Which real asset is most commonly used as an inflation hedge in an institutional portfolio?",
 solution:"Commodities (and other real assets like real estate and infrastructure) tend to rise with inflation, providing a hedge that nominal bonds do not.",
 choices:[{text:"Commodities", correct:true},{text:"Long-term nominal government bonds"},{text:"Cash deposits"},{text:"Growth equities exclusively"}]},

{id:"l3d-ai-04", act:3, level:"L3", topic:"Alternatives", reading:"Private Equity — Vintage Diversification", difficulty:"moderate", type:"exam",
 title:"Vintage Year Diversification",
 situation:"Committing to private equity funds across several 'vintage years' primarily helps to:",
 solution:"Spreading commitments across vintage years diversifies the entry-point (market-cycle) risk, since a fund's returns depend heavily on the economic environment when its capital is deployed.",
 choices:[{text:"Diversify market-cycle (entry-timing) risk", correct:true},{text:"Eliminate manager selection risk"},{text:"Guarantee positive returns"},{text:"Avoid all fees"}]},

/* ---------------- PERFORMANCE MEASUREMENT (5) ---------------- */
{id:"l3d-pf-01", act:3, level:"L3", topic:"Performance Measurement", reading:"Time-Weighted vs Money-Weighted", difficulty:"hard", type:"exam",
 title:"Judging the Manager",
 situation:"To evaluate a manager who does not control the timing of external cash flows, the preferred return measure is:",
 solution:"The time-weighted return removes the distorting effect of client-driven cash flows, so it is preferred for judging manager skill; the money-weighted (IRR) return reflects the investor's actual experience.",
 choices:[{text:"Time-weighted return", correct:true},{text:"Money-weighted return (IRR)"},{text:"Simple average of monthly balances"},{text:"Nominal return before fees only"}]},

{id:"l3d-pf-02", act:3, level:"L3", topic:"Performance Measurement", reading:"Risk-Adjusted Measures", difficulty:"moderate", type:"exam",
 title:"Total vs Active Risk",
 situation:"The Sharpe ratio and the information ratio differ mainly in that the Sharpe ratio uses:",
 solution:"The Sharpe ratio divides excess-over-risk-free return by total risk (standard deviation); the information ratio divides active return by active risk (tracking error).",
 choices:[{text:"Total risk, while the information ratio uses active risk", correct:true},{text:"Active risk, while the information ratio uses total risk"},{text:"Beta, while the information ratio uses alpha"},{text:"The same denominator as the information ratio"}]},

{id:"l3d-pf-03", act:3, level:"L3", topic:"Performance Measurement", reading:"Performance Attribution", difficulty:"hard", type:"exam",
 title:"Allocation vs Selection",
 situation:"In performance attribution, returns from over/underweighting sectors relative to the benchmark are the:",
 solution:"The allocation effect captures value added from sector/asset-class weighting decisions; the selection effect captures value from picking securities within those groups.",
 choices:[{text:"Allocation effect", correct:true},{text:"Selection effect"},{text:"Currency effect"},{text:"Interaction effect only"}]},

{id:"l3d-pf-04", act:3, level:"L3", topic:"Performance Measurement", reading:"Time-Weighted Return Calculation", difficulty:"hard", type:"exam",
 title:"Linking Sub-Periods",
 situation:"A portfolio returns +10% in the first half-year and −5% in the second. The time-weighted return for the year is:",
 solution:"TWR = [(1 + 0.10)(1 − 0.05)] − 1 = (1.10 × 0.95) − 1 = 1.045 − 1 = 4.5%.",
 choices:[{text:"4.5%", correct:true},{text:"5.0%"},{text:"2.5%"},{text:"4.75%"}]},

{id:"l3d-pf-05", act:3, level:"L3", topic:"Performance Measurement", reading:"Appraisal Ratio", difficulty:"hard", type:"exam",
 title:"The Appraisal Ratio",
 situation:"The appraisal ratio evaluates a manager by dividing:",
 solution:"The appraisal ratio = alpha ÷ nonsystematic (residual) risk. It measures abnormal return earned per unit of the diversifiable risk taken to earn it.",
 choices:[{text:"Alpha by nonsystematic (residual) risk", correct:true},{text:"Total return by beta"},{text:"Alpha by total risk"},{text:"Beta by tracking error"}]}

);
