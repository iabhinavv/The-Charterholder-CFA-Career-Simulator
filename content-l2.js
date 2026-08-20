/* =====================================================================
   THE CHARTERHOLDER — Level II drill bank (50 scenarios, 5 per subject)
   Moderate/hard multi-step questions: valuation, arbitrage-free pricing,
   regression, intercorporate accounting, factor models. Player calculates.
   ===================================================================== */
window.GAME_CONTENT.scenarios.push(

/* ---------------- ETHICS (5) ---------------- */
{id:"l2d-eth-01", act:2, level:"L2", topic:"Ethics", reading:"Standard I(B) Independence — Issuer-Paid Research", difficulty:"moderate", type:"exam",
 title:"Paid to Cover",
 situation:"An analyst accepts a flat fee from an issuer to write research. To comply with the Code and Standards, the analyst must:",
 solution:"Standard I(B): issuer-paid research is permitted only with full disclosure of the arrangement and independent, objective analysis (a flat fee, never tied to conclusions).",
 choices:[{text:"Disclose the arrangement and keep the analysis independent", correct:true},{text:"Accept payment contingent on a favorable rating"},{text:"Hide the fee to preserve the appearance of objectivity"},{text:"Only cover the issuer if it guarantees future business"}]},

{id:"l2d-eth-02", act:2, level:"L2", topic:"Ethics", reading:"GIPS — Composite Construction", difficulty:"moderate", type:"exam",
 title:"Building a Composite",
 situation:"Under GIPS, a firm's composites must include:",
 solution:"GIPS requires that all actual, fee-paying, discretionary portfolios be included in at least one composite, defined by strategy — no cherry-picking winners.",
 choices:[{text:"All actual fee-paying discretionary portfolios", correct:true},{text:"Only the firm's best-performing accounts"},{text:"Model portfolios only"},{text:"Non-discretionary accounts only"}]},

{id:"l2d-eth-03", act:2, level:"L2", topic:"Ethics", reading:"Standard III(A) Loyalty, Prudence, and Care", difficulty:"moderate", type:"exam",
 title:"Whose Brokerage?",
 situation:"When a manager directs client trades to a broker in exchange for research (soft dollars), the brokerage generated must be used to benefit:",
 solution:"Standard III(A): client brokerage is an asset of the client and must be used to benefit the client, not the manager.",
 choices:[{text:"The client", correct:true},{text:"The manager personally"},{text:"The employer's other business lines"},{text:"The broker"}]},

{id:"l2d-eth-04", act:2, level:"L2", topic:"Ethics", reading:"Standard III(D) Performance Presentation", difficulty:"moderate", type:"exam",
 title:"Backtest as Track Record",
 situation:"A firm presents a hypothetical backtested strategy as if it were an actual client track record. This violates:",
 solution:"Presenting model or backtested results as actual performance is a misrepresentation of performance under Standard III(D) (and I(C)).",
 choices:[{text:"Standard III(D) — Performance Presentation", correct:true},{text:"Standard IV(B) — Additional Compensation"},{text:"Standard VI(B) — Priority of Transactions"},{text:"No violation if labeled in a footnote"}]},

{id:"l2d-eth-05", act:2, level:"L2", topic:"Ethics", reading:"Standard VI(C) Referral Fees", difficulty:"moderate", type:"exam",
 title:"The Referral",
 situation:"An adviser receives a fee for referring clients to a third-party manager. Under the Code, the adviser must:",
 solution:"Standard VI(C): referral fees (paid or received) must be disclosed to clients and prospects so they can assess the arrangement's effect on costs and any partiality.",
 choices:[{text:"Disclose the referral arrangement to clients and prospects", correct:true},{text:"Keep it confidential as a business matter"},{text:"Disclose only if asked"},{text:"Refuse all referral relationships"}]},

/* ---------------- QUANTITATIVE METHODS (5) ---------------- */
{id:"l2d-qm-01", act:2, level:"L2", topic:"Quantitative Methods", reading:"Multiple Regression", difficulty:"moderate", type:"exam",
 title:"Interpreting a Slope",
 situation:"In a multiple regression, a slope coefficient of 1.5 on variable X₁ means that, holding other variables constant, a one-unit rise in X₁ is associated with:",
 solution:"Each partial slope measures the change in the dependent variable per one-unit change in that independent variable, holding all other independent variables constant.",
 choices:[{text:"A 1.5-unit change in the dependent variable", correct:true},{text:"A 1.5% change regardless of other variables"},{text:"No change if other variables move"},{text:"A change only in the intercept"}]},

{id:"l2d-qm-02", act:2, level:"L2", topic:"Quantitative Methods", reading:"Hypothesis Tests on Coefficients", difficulty:"moderate", type:"exam",
 title:"Is the Coefficient Significant?",
 situation:"A regression coefficient is 0.50 with a standard error of 0.20. Against a critical t-value of about 2.0, the coefficient is:",
 solution:"t = coefficient / standard error = 0.50 / 0.20 = 2.5. Since 2.5 > 2.0, reject H₀: the coefficient is statistically significant.",
 choices:[{text:"Statistically significant (t = 2.5)", correct:true},{text:"Not significant (t = 0.4)"},{text:"Not significant (t = 1.0)"},{text:"Impossible to tell without R²"}]},

{id:"l2d-qm-03", act:2, level:"L2", topic:"Quantitative Methods", reading:"Regression Diagnostics", difficulty:"hard", type:"exam",
 title:"The Multicollinearity Tell",
 situation:"A classic symptom of multicollinearity in a multiple regression is:",
 solution:"Multicollinearity inflates coefficient standard errors, so you often see a significant overall F-statistic and high R² but individually insignificant t-statistics.",
 choices:[{text:"High R² and significant F, but insignificant t-statistics", correct:true},{text:"Low R² with all t-statistics significant"},{text:"A Durbin–Watson statistic of exactly 2"},{text:"A negative R²"}]},

{id:"l2d-qm-04", act:2, level:"L2", topic:"Quantitative Methods", reading:"Time-Series Analysis", difficulty:"moderate", type:"exam",
 title:"No Serial Correlation",
 situation:"A Durbin–Watson statistic close to 2.0 indicates:",
 solution:"A Durbin–Watson near 2 indicates no first-order serial correlation in the residuals; values near 0 indicate positive, and near 4 negative, autocorrelation.",
 choices:[{text:"No first-order serial correlation", correct:true},{text:"Strong positive autocorrelation"},{text:"Strong negative autocorrelation"},{text:"Perfect multicollinearity"}]},

{id:"l2d-qm-05", act:2, level:"L2", topic:"Quantitative Methods", reading:"AR(1) Models", difficulty:"hard", type:"exam",
 title:"Mean Reversion Level",
 situation:"For an AR(1) model xₜ = 0.2 + 0.6 xₜ₋₁, the mean-reverting level is:",
 solution:"Mean-reverting level = b₀ / (1 − b₁) = 0.2 / (1 − 0.6) = 0.2 / 0.4 = 0.5.",
 choices:[{text:"0.5", correct:true},{text:"0.33"},{text:"0.8"},{text:"0.2"}]},

/* ---------------- ECONOMICS (5) ---------------- */
{id:"l2d-ec-01", act:2, level:"L2", topic:"Economics", reading:"Currency Exchange Rates — Forward Premium", difficulty:"moderate", type:"exam",
 title:"Forward Premium",
 situation:"The spot rate is 1.20 (price/base) and the 1-year forward is 1.24. The base currency is trading at a forward:",
 solution:"Forward premium (base) = (F − S)/S = (1.24 − 1.20)/1.20 = 0.04/1.20 = 3.33%. Since F > S, the base currency is at a forward premium.",
 choices:[{text:"Premium of 3.33%", correct:true},{text:"Premium of 4.00%"},{text:"Discount of 3.23%"},{text:"Premium of 3.23%"}]},

{id:"l2d-ec-02", act:2, level:"L2", topic:"Economics", reading:"Covered Interest Rate Parity", difficulty:"hard", type:"exam",
 title:"The No-Arbitrage Forward",
 situation:"Spot USD/GBP = 1.30, the US rate is 4% and the UK rate is 2% (annual). The 1-year no-arbitrage forward USD/GBP is:",
 exhibit:{title:"Inputs", rows:[["Spot (USD per GBP)","1.30"],["US interest rate","4%"],["UK interest rate","2%"]]},
 solution:"F = S × (1 + r_price)/(1 + r_base) = 1.30 × (1.04/1.02) = 1.30 × 1.01961 = 1.3255. The higher-rate currency (USD) is at a forward discount.",
 choices:[{text:"1.3255", correct:true},{text:"1.2755"},{text:"1.3000"},{text:"1.3520"}]},

{id:"l2d-ec-03", act:2, level:"L2", topic:"Economics", reading:"The Fisher Effect", difficulty:"moderate", type:"exam",
 title:"Exact Real Rate",
 situation:"If the nominal rate is 8% and inflation is 3%, the exact real interest rate is:",
 solution:"Exact Fisher: (1 + real) = (1 + nominal)/(1 + inflation) → real = 1.08/1.03 − 1 = 4.85%. (The additive approximation gives 5%.)",
 choices:[{text:"4.85%", correct:true},{text:"5.00%"},{text:"5.24%"},{text:"11.00%"}]},

{id:"l2d-ec-04", act:2, level:"L2", topic:"Economics", reading:"Economic Growth — Growth Accounting", difficulty:"hard", type:"exam",
 title:"Solow Growth Accounting",
 situation:"With TFP growth 1%, capital share α = 0.3, capital growth 4% and labor growth 2%, output growth is:",
 exhibit:{title:"Inputs", rows:[["TFP growth","1%"],["Capital share (α)","0.3"],["Capital growth","4%"],["Labor growth","2%"]]},
 solution:"ΔY ≈ ΔTFP + αΔK + (1−α)ΔL = 1% + 0.3×4% + 0.7×2% = 1% + 1.2% + 1.4% = 3.6%.",
 choices:[{text:"3.6%", correct:true},{text:"7.0%"},{text:"2.6%"},{text:"4.6%"}]},

{id:"l2d-ec-05", act:2, level:"L2", topic:"Economics", reading:"Purchasing Power Parity", difficulty:"moderate", type:"exam",
 title:"Relative PPP",
 situation:"Under relative purchasing power parity, the currency of a country with persistently higher inflation should:",
 solution:"Relative PPP: the higher-inflation currency depreciates over time by approximately the inflation differential, keeping real exchange rates constant.",
 choices:[{text:"Depreciate over time", correct:true},{text:"Appreciate over time"},{text:"Remain fixed permanently"},{text:"Become the reserve currency"}]},

/* ---------------- FINANCIAL REPORTING (5) ---------------- */
{id:"l2d-fr-01", act:2, level:"L2", topic:"Financial Reporting", reading:"Intercorporate Investments — Equity Method", difficulty:"hard", type:"exam",
 title:"Significant Influence",
 situation:"A company owns 30% of an associate (significant influence) that earns $100 net income. Under the equity method, the investor recognizes:",
 solution:"Equity method: the investor recognizes its proportional share of the associate's net income — 30% × $100 = $30 — as investment income, and increases the carrying value of the investment.",
 choices:[{text:"$30 of investment income", correct:true},{text:"Only dividends received"},{text:"$100 (full consolidation)"},{text:"Nothing until the stake is sold"}]},

{id:"l2d-fr-02", act:2, level:"L2", topic:"Financial Reporting", reading:"Employee Compensation — Pensions", difficulty:"hard", type:"exam",
 title:"Where Remeasurements Go",
 situation:"Under IFRS, actuarial gains and losses (remeasurements) on a defined-benefit pension are reported in:",
 solution:"Under IFRS, remeasurements of the net pension liability/asset are recognized in Other Comprehensive Income (OCI) and are not subsequently reclassified to profit or loss.",
 choices:[{text:"Other Comprehensive Income (OCI)", correct:true},{text:"Net income, fully"},{text:"Retained earnings directly, bypassing OCI"},{text:"The cash flow statement only"}]},

{id:"l2d-fr-03", act:2, level:"L2", topic:"Financial Reporting", reading:"Leases", difficulty:"moderate", type:"exam",
 title:"Front-Loaded Expense",
 situation:"For a lessee, a finance lease compared with an operating lease (US GAAP) generally produces, in the early years:",
 solution:"A finance lease front-loads total expense: interest on the lease liability is higher early on and adds to straight-line amortization, so early-year expense exceeds that of an operating lease's single straight-line cost.",
 choices:[{text:"Higher total expense early in the lease", correct:true},{text:"Lower total expense early in the lease"},{text:"Identical expense every year"},{text:"No expense until lease end"}]},

{id:"l2d-fr-04", act:2, level:"L2", topic:"Financial Reporting", reading:"Income Taxes", difficulty:"hard", type:"exam",
 title:"Deferred Tax Liability",
 situation:"A deferred tax liability typically arises when:",
 solution:"A DTL arises when accounting (book) income exceeds taxable income now — e.g., tax depreciation exceeds book depreciation — deferring tax to future periods.",
 choices:[{text:"Tax depreciation exceeds book depreciation", correct:true},{text:"Book depreciation exceeds tax depreciation"},{text:"The firm has a net operating loss carryforward"},{text:"Revenue is deferred for tax but recognized in books"}]},

{id:"l2d-fr-05", act:2, level:"L2", topic:"Financial Reporting", reading:"Multinational Operations — Translation", difficulty:"hard", type:"exam",
 title:"Translation vs Remeasurement",
 situation:"When a subsidiary's functional currency is its own local currency, the current-rate (translation) method records the resulting gain or loss in:",
 solution:"Under the current-rate method, the translation adjustment (cumulative translation adjustment, CTA) is reported in OCI/equity, not in net income.",
 choices:[{text:"OCI / equity (cumulative translation adjustment)", correct:true},{text:"Net income immediately"},{text:"Cost of goods sold"},{text:"The investing section of cash flows"}]},

/* ---------------- CORPORATE ISSUERS (5) ---------------- */
{id:"l2d-ci-01", act:2, level:"L2", topic:"Corporate Issuers", reading:"Cost of Capital — Unlevering Beta", difficulty:"hard", type:"exam",
 title:"Strip Out the Leverage",
 situation:"A comparable firm has an equity beta of 1.5, a D/E of 0.5 and a 25% tax rate. Its asset (unlevered) beta is:",
 exhibit:{title:"Inputs", rows:[["Equity beta","1.5"],["D/E","0.5"],["Tax rate","25%"]]},
 solution:"β_asset = β_equity / [1 + (1 − t)(D/E)] = 1.5 / [1 + 0.75×0.5] = 1.5 / 1.375 = 1.09.",
 choices:[{text:"1.09", correct:true},{text:"1.50"},{text:"1.31"},{text:"0.82"}]},

{id:"l2d-ci-02", act:2, level:"L2", topic:"Corporate Issuers", reading:"Cost of Capital — Relevering Beta", difficulty:"hard", type:"exam",
 title:"Add the Target Leverage",
 situation:"An asset beta of 1.0 is relevered to a target D/E of 1.0 with a 20% tax rate. The equity beta is:",
 solution:"β_equity = β_asset × [1 + (1 − t)(D/E)] = 1.0 × [1 + 0.8×1.0] = 1.8.",
 choices:[{text:"1.8", correct:true},{text:"1.0"},{text:"2.0"},{text:"1.6"}]},

{id:"l2d-ci-03", act:2, level:"L2", topic:"Corporate Issuers", reading:"Dividend Policy (MM)", difficulty:"moderate", type:"exam",
 title:"Dividends in a Perfect World",
 situation:"Under Modigliani–Miller with perfect markets (no taxes or frictions), a firm's dividend policy is:",
 solution:"MM dividend irrelevance: in perfect markets, dividend policy does not affect firm value — investors can create 'homemade dividends' by selling shares.",
 choices:[{text:"Irrelevant to firm value", correct:true},{text:"The main driver of firm value"},{text:"Always best set at 100% payout"},{text:"Always best set at 0% payout"}]},

{id:"l2d-ci-04", act:2, level:"L2", topic:"Corporate Issuers", reading:"Free Cash Flow Definitions", difficulty:"moderate", type:"exam",
 title:"FCFE from FCFF",
 situation:"The correct relationship between free cash flow to equity and free cash flow to the firm is:",
 solution:"FCFE = FCFF − Interest×(1 − tax) + Net borrowing. FCFF is available to all capital providers; FCFE adjusts for after-tax interest and net debt changes.",
 choices:[{text:"FCFE = FCFF − Interest×(1 − t) + Net borrowing", correct:true},{text:"FCFE = FCFF + Interest×(1 − t) − Net borrowing"},{text:"FCFE = FCFF + Dividends"},{text:"FCFE = FCFF always"}]},

{id:"l2d-ci-05", act:2, level:"L2", topic:"Corporate Issuers", reading:"ESG Considerations", difficulty:"moderate", type:"exam",
 title:"Negative Screening",
 situation:"In ESG investing, 'negative screening' refers to:",
 solution:"Negative (exclusionary) screening excludes companies or sectors that fail chosen ESG criteria (e.g., tobacco, weapons) from the investment universe.",
 choices:[{text:"Excluding companies or sectors that fail ESG criteria", correct:true},{text:"Overweighting the best ESG performers only"},{text:"Engaging with management to change behavior"},{text:"Ignoring ESG factors entirely"}]},

/* ---------------- EQUITY (5) ---------------- */
{id:"l2d-eq-01", act:2, level:"L2", topic:"Equity", reading:"Free Cash Flow Valuation (FCFE)", difficulty:"moderate", type:"exam",
 title:"Single-Stage FCFE",
 situation:"FCFE next year is $4.00, growing 4% forever; the required return on equity is 10%. Value per share is:",
 solution:"V = FCFE₁ / (r − g) = 4.00 / (0.10 − 0.04) = 4.00 / 0.06 = $66.67.",
 choices:[{text:"$66.67", correct:true},{text:"$40.00"},{text:"$66.00"},{text:"$57.00"}]},

{id:"l2d-eq-02", act:2, level:"L2", topic:"Equity", reading:"Free Cash Flow Valuation (FCFF)", difficulty:"hard", type:"exam",
 title:"Build the FCFF",
 situation:"Net income $100, depreciation $20, interest expense $10, tax rate 30%, capex $30, working-capital investment $5. FCFF is:",
 exhibit:{title:"Inputs", rows:[["Net income","$100"],["Depreciation","$20"],["Interest expense","$10"],["Tax rate","30%"],["Capex (FCInv)","$30"],["WCInv","$5"]]},
 solution:"FCFF = NI + NCC + Int×(1−t) − FCInv − WCInv = 100 + 20 + 10×0.7 − 30 − 5 = 100 + 20 + 7 − 35 = $92.",
 choices:[{text:"$92", correct:true},{text:"$85"},{text:"$102"},{text:"$97"}]},

{id:"l2d-eq-03", act:2, level:"L2", topic:"Equity", reading:"Residual Income Valuation", difficulty:"hard", type:"exam",
 title:"Residual Income",
 situation:"A firm earns $50 net income on beginning book value of $400; the required return on equity is 10%. Residual income is:",
 solution:"Residual income = NI − (r × beginning book value) = 50 − (0.10 × 400) = 50 − 40 = $10.",
 choices:[{text:"$10", correct:true},{text:"$50"},{text:"$40"},{text:"−$30"}]},

{id:"l2d-eq-04", act:2, level:"L2", topic:"Equity", reading:"Market-Based Valuation (Justified P/B)", difficulty:"hard", type:"exam",
 title:"Justified Price-to-Book",
 situation:"With ROE 15%, growth 5% and required return 10%, the justified price-to-book ratio is:",
 solution:"Justified P/B = (ROE − g)/(r − g) = (0.15 − 0.05)/(0.10 − 0.05) = 0.10/0.05 = 2.0.",
 choices:[{text:"2.0", correct:true},{text:"1.5"},{text:"3.0"},{text:"0.5"}]},

{id:"l2d-eq-05", act:2, level:"L2", topic:"Equity", reading:"Growth and Sustainable Growth Rate", difficulty:"moderate", type:"exam",
 title:"Sustainable Growth",
 situation:"A firm retains 60% of earnings and earns an ROE of 15%. Its sustainable growth rate is:",
 solution:"g = retention ratio × ROE = 0.60 × 0.15 = 0.09 = 9.0%.",
 choices:[{text:"9.0%", correct:true},{text:"15.0%"},{text:"6.0%"},{text:"0.6%"}]},

/* ---------------- FIXED INCOME (5) ---------------- */
{id:"l2d-fi-01", act:2, level:"L2", topic:"Fixed Income", reading:"The Term Structure — Forward Rates", difficulty:"hard", type:"exam",
 title:"Implied Forward Rate",
 situation:"The 1-year spot rate is 4% and the 2-year spot rate is 5%. The 1-year rate, one year forward (1y1y), is approximately:",
 solution:"(1 + 1y1y) = (1 + z₂)² / (1 + z₁) = (1.05²)/(1.04) = 1.1025/1.04 = 1.06010 → 1y1y ≈ 6.01%.",
 choices:[{text:"6.01%", correct:true},{text:"6.00%"},{text:"5.00%"},{text:"4.50%"}]},

{id:"l2d-fi-02", act:2, level:"L2", topic:"Fixed Income", reading:"Arbitrage-Free Valuation", difficulty:"hard", type:"exam",
 title:"Price Off the Spot Curve",
 situation:"A 2-year annual-pay bond has a 5% coupon and $100 face. Spot rates are 4% (1yr) and 5% (2yr). Its arbitrage-free price is:",
 exhibit:{title:"Cash flows / spots", rows:[["Year 1 CF","$5 @ 4%"],["Year 2 CF","$105 @ 5%"]]},
 solution:"Price = 5/1.04 + 105/(1.05)² = 4.808 + 105/1.1025 = 4.808 + 95.238 = $100.05.",
 choices:[{text:"$100.05", correct:true},{text:"$100.00"},{text:"$99.09"},{text:"$102.00"}]},

{id:"l2d-fi-03", act:2, level:"L2", topic:"Fixed Income", reading:"Valuation of Bonds with Embedded Options (OAS)", difficulty:"hard", type:"exam",
 title:"OAS vs Z-Spread",
 situation:"For a callable bond, the option-adjusted spread (OAS) compared with its Z-spread is:",
 solution:"For a callable bond, OAS = Z-spread − option cost. Because the embedded call has positive value to the issuer, the OAS is lower than the Z-spread.",
 choices:[{text:"Lower than the Z-spread", correct:true},{text:"Higher than the Z-spread"},{text:"Equal to the Z-spread"},{text:"Always negative"}]},

{id:"l2d-fi-04", act:2, level:"L2", topic:"Fixed Income", reading:"Effective Duration", difficulty:"hard", type:"exam",
 title:"Effective Duration",
 situation:"A bond is priced at 100. If yields fall 50 bps it rises to 101; if yields rise 50 bps it falls to 99. Its effective duration is:",
 exhibit:{title:"Inputs", rows:[["V₋ (yield down)","101"],["V₊ (yield up)","99"],["V₀","100"],["Δy","0.005"]]},
 solution:"Effective duration = (V₋ − V₊)/(2 × V₀ × Δy) = (101 − 99)/(2 × 100 × 0.005) = 2/1 = 2.0.",
 choices:[{text:"2.0", correct:true},{text:"4.0"},{text:"1.0"},{text:"20.0"}]},

{id:"l2d-fi-05", act:2, level:"L2", topic:"Fixed Income", reading:"Credit Analysis — Expected Loss", difficulty:"moderate", type:"exam",
 title:"Expected Credit Loss",
 situation:"A $1,000,000 exposure has a probability of default of 2% and loss given default of 40%. Expected loss is:",
 solution:"Expected loss = PD × LGD × exposure = 0.02 × 0.40 × 1,000,000 = $8,000.",
 choices:[{text:"$8,000", correct:true},{text:"$20,000"},{text:"$400,000"},{text:"$4,000"}]},

/* ---------------- DERIVATIVES (5) ---------------- */
{id:"l2d-dv-01", act:2, level:"L2", topic:"Derivatives", reading:"Binomial Option Valuation", difficulty:"hard", type:"exam",
 title:"One-Period Binomial Call",
 situation:"S = $100, up factor 1.2, down factor 0.8, strike $100, risk-free 5%. The one-period binomial call value is:",
 exhibit:{title:"Inputs", rows:[["S₀","$100"],["u / d","1.2 / 0.8"],["Strike","$100"],["Risk-free","5%"]]},
 solution:"Risk-neutral p = (1 + r − d)/(u − d) = (1.05 − 0.8)/0.4 = 0.625. Cᵤ = 20, C_d = 0. Call = (0.625×20 + 0.375×0)/1.05 = 12.5/1.05 = $11.90.",
 choices:[{text:"$11.90", correct:true},{text:"$12.50"},{text:"$20.00"},{text:"$7.14"}]},

{id:"l2d-dv-02", act:2, level:"L2", topic:"Derivatives", reading:"Risk-Neutral Probability", difficulty:"moderate", type:"exam",
 title:"Risk-Neutral Probability",
 situation:"With up factor 1.3, down factor 0.9 and a risk-free rate of 2%, the risk-neutral probability of an up move is:",
 solution:"p = (1 + r − d)/(u − d) = (1.02 − 0.9)/(1.3 − 0.9) = 0.12/0.40 = 0.30.",
 choices:[{text:"0.30", correct:true},{text:"0.70"},{text:"0.50"},{text:"0.12"}]},

{id:"l2d-dv-03", act:2, level:"L2", topic:"Derivatives", reading:"Black–Scholes–Merton Inputs", difficulty:"moderate", type:"exam",
 title:"Volatility and Option Value",
 situation:"Holding all else constant, an increase in the underlying's volatility will:",
 solution:"Higher volatility increases the value of both calls and puts, because greater dispersion raises the probability of large favorable payoffs while losses are capped at the premium.",
 choices:[{text:"Increase both call and put values", correct:true},{text:"Increase calls but decrease puts"},{text:"Decrease both call and put values"},{text:"Leave option values unchanged"}]},

{id:"l2d-dv-04", act:2, level:"L2", topic:"Derivatives", reading:"Interest Rate Swaps", difficulty:"moderate", type:"exam",
 title:"Pay-Fixed Swap",
 situation:"An investor in a pay-fixed, receive-floating interest rate swap benefits when:",
 solution:"A pay-fixed party pays a locked rate and receives floating; rising rates increase the floating receipts, so the swap gains value as rates rise.",
 choices:[{text:"Floating interest rates rise", correct:true},{text:"Floating interest rates fall"},{text:"Equity prices rise"},{text:"Credit spreads narrow"}]},

{id:"l2d-dv-05", act:2, level:"L2", topic:"Derivatives", reading:"Forward Contract Value", difficulty:"moderate", type:"exam",
 title:"Zero at Inception",
 situation:"A newly initiated forward contract has zero value to both parties because:",
 solution:"The forward price is set so that the present values of the two sides' obligations are equal at inception, so neither party pays anything up front — value is zero and only becomes non-zero as the spot price moves.",
 choices:[{text:"The forward price equates the value of both sides at inception", correct:true},{text:"Forwards never change in value"},{text:"A premium is paid to the seller upfront"},{text:"They are marked to market daily"}]},

/* ---------------- ALTERNATIVES (5) ---------------- */
{id:"l2d-ai-01", act:2, level:"L2", topic:"Alternatives", reading:"Real Estate Valuation — Income Approach", difficulty:"moderate", type:"exam",
 title:"Net Operating Income",
 situation:"Potential gross income is $200,000, vacancy/collection loss is $10,000, and operating expenses are $60,000. Net operating income is:",
 exhibit:{title:"Inputs", rows:[["Potential gross income","$200,000"],["Vacancy & collection loss","$10,000"],["Operating expenses","$60,000"]]},
 solution:"NOI = Potential gross income − vacancy/collection loss − operating expenses = 200,000 − 10,000 − 60,000 = $130,000. (NOI excludes financing and taxes.)",
 choices:[{text:"$130,000", correct:true},{text:"$140,000"},{text:"$130,000 less debt service"},{text:"$200,000"}]},

{id:"l2d-ai-02", act:2, level:"L2", topic:"Alternatives", reading:"Private Equity — Carried Interest", difficulty:"moderate", type:"exam",
 title:"Carried Interest",
 situation:"In a typical private equity fund, the general partner's 'carried interest' is:",
 solution:"Carried interest is the GP's share of profits (commonly ~20%), usually earned only above a hurdle rate and subject to a high-water mark / clawback.",
 choices:[{text:"A share of profits (often ~20%) above a hurdle", correct:true},{text:"A fixed salary paid by LPs"},{text:"A fee charged on committed capital only"},{text:"A guaranteed return to the GP"}]},

{id:"l2d-ai-03", act:2, level:"L2", topic:"Alternatives", reading:"Hedge Fund Strategies", difficulty:"moderate", type:"exam",
 title:"Market Neutral",
 situation:"An equity market-neutral hedge fund strategy targets a portfolio beta of approximately:",
 solution:"Equity market-neutral funds balance long and short exposures to drive net market beta near zero, seeking returns from security selection rather than market direction.",
 choices:[{text:"Zero", correct:true},{text:"One"},{text:"Greater than one"},{text:"Negative one always"}]},

{id:"l2d-ai-04", act:2, level:"L2", topic:"Alternatives", reading:"Commodities — Return Sources", difficulty:"moderate", type:"exam",
 title:"Commodity Total Return",
 situation:"The total return on a fully collateralized long commodity futures position is composed of:",
 solution:"Commodity futures total return = spot price return + roll return (from the shape of the curve) + collateral (risk-free) yield on the posted margin.",
 choices:[{text:"Spot return + roll return + collateral yield", correct:true},{text:"Dividend yield + capital gains"},{text:"Coupon income only"},{text:"Roll return only"}]},

{id:"l2d-ai-05", act:2, level:"L2", topic:"Alternatives", reading:"Private Capital — Venture Stages", difficulty:"moderate", type:"exam",
 title:"Highest-Risk Stage",
 situation:"Among venture capital financing stages, which typically carries the highest risk and return potential?",
 solution:"Early-stage (seed/startup) financing carries the highest risk and potential return; later (expansion/mezzanine) stages are progressively less risky as the business proves out.",
 choices:[{text:"Seed / early stage", correct:true},{text:"Mezzanine / bridge financing"},{text:"Buyout of a mature company"},{text:"Post-IPO secondary"}]},

/* ---------------- PORTFOLIO MANAGEMENT (5) ---------------- */
{id:"l2d-pm-01", act:2, level:"L2", topic:"Portfolio Management", reading:"Arbitrage Pricing / Multifactor Models", difficulty:"hard", type:"exam",
 title:"Multifactor Expected Return",
 situation:"Risk-free 3%; factor-1 beta 1.0 with 4% premium; factor-2 beta 0.5 with 2% premium. Expected return is:",
 exhibit:{title:"Inputs", rows:[["Risk-free","3%"],["β₁ / premium₁","1.0 / 4%"],["β₂ / premium₂","0.5 / 2%"]]},
 solution:"E[R] = R_f + β₁λ₁ + β₂λ₂ = 3% + 1.0×4% + 0.5×2% = 3% + 4% + 1% = 8%.",
 choices:[{text:"8%", correct:true},{text:"7%"},{text:"9%"},{text:"6%"}]},

{id:"l2d-pm-02", act:2, level:"L2", topic:"Portfolio Management", reading:"Active Portfolio Management", difficulty:"easy", type:"exam",
 title:"Active Return",
 situation:"A portfolio returns 12% while its benchmark returns 10%. The active return is:",
 solution:"Active return = portfolio return − benchmark return = 12% − 10% = 2%.",
 choices:[{text:"2%", correct:true},{text:"22%"},{text:"1.2%"},{text:"−2%"}]},

{id:"l2d-pm-03", act:2, level:"L2", topic:"Portfolio Management", reading:"Active Portfolio Management — Information Ratio", difficulty:"moderate", type:"exam",
 title:"Information Ratio",
 situation:"A manager's active return is 2% with a tracking error (active risk) of 4%. The information ratio is:",
 solution:"Information ratio = active return / active risk = 2% / 4% = 0.50.",
 choices:[{text:"0.50", correct:true},{text:"2.00"},{text:"0.08"},{text:"8.00"}]},

{id:"l2d-pm-04", act:2, level:"L2", topic:"Portfolio Management", reading:"Risk-Adjusted Performance — Treynor", difficulty:"moderate", type:"exam",
 title:"Treynor Ratio",
 situation:"A portfolio returns 11% with a beta of 1.6; the risk-free rate is 3%. Its Treynor ratio is:",
 solution:"Treynor ratio = (Rₚ − R_f)/β = (11% − 3%)/1.6 = 8/1.6 = 5.0 (percent per unit of beta).",
 choices:[{text:"5.0", correct:true},{text:"0.5"},{text:"8.0"},{text:"6.875"}]},

{id:"l2d-pm-05", act:2, level:"L2", topic:"Portfolio Management", reading:"The Fundamental Law of Active Management", difficulty:"hard", type:"exam",
 title:"IR, Skill and Breadth",
 situation:"By the fundamental law of active management, the information ratio is approximately:",
 solution:"IR ≈ IC × √BR: the information coefficient (skill) times the square root of breadth (number of independent bets). More skill, or more independent bets, raises the IR.",
 choices:[{text:"Information coefficient × √breadth", correct:true},{text:"Information coefficient ÷ breadth"},{text:"Breadth × tracking error"},{text:"Alpha × beta"}]}

);
