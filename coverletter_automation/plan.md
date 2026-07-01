# Plan: Job-Description → Cover-Letter Automation

## Context

Andreas wants to automate his job applications: paste a **job description (JD)**, and
get back a finished, compiled cover letter — automatically **in the JD's language**
(DE or EN). The letter is itself meant to *demonstrate* his AI-driven engineering:

- a **prominent transparency note** near the top saying he built this automation himself,
- a **requirement ↔ experience matching table** (JD requirements mapped to his real
  background), referenced early and placed on an **appendix page (page 2)**,
- a **values-first opening** instead of a generic "I read your posting",
- his **core values shown two ways — a TikZ mindmap and a clean icon/text list — so he
  can compare** the output and later keep his favourite.

Source of truth already exists: bilingual content in `index.html`
(About, 5 Expertise pillars, 7 Core Values, Experience, 6 skill groups), the CV in
`template/template.tex`, and the modern letter shell in `anschreiben.tex`. MiKTeX
`pdflatex` is configured in `.vscode/settings.json`, so compilation works in VSCode.

Mechanism (decided): a **documented Claude Code workflow** — no external script/API keys.
`coverletter_automation.md` is the spec I follow whenever Andreas pastes a JD.

## Deliverables

1. **`coverletter_automation.md`** — the master spec / runbook (doubles as the
   instruction set Claude follows).
2. **`profile.yaml`** — single source of truth for matching: bilingual (DE/EN) profile
   data extracted from `index.html` + `template.tex` (values, expertise, experience
   bullets, skills with keywords + evidence).
3. **`anschreiben.tex`** — restructured fill-in template: header → transparency note →
   values-first opening → body → table reference → **page 2 appendix** with the matching
   table + values mindmap + values icon list.
4. **`applications/`** — output convention: each run writes
   `applications/<company>_<role>/anschreiben.tex` (+ compiled `.pdf`).

## Automation workflow (in coverletter_automation.md)

1. **Input** — paste JD text / file path / link.
2. **Language detection** — output language = JD language (DE/EN); default EN if ambiguous.
3. **Parse JD** — company, role title, recipient/address, required skills, nice-to-haves, tone.
4. **Match** — each requirement → `profile.yaml` evidence; strength strong/partial/adjacent;
   unmatched listed honestly.
5. **Compose** — fill `anschreiben.tex`: transparency note, recipient, subject,
   values-first opening, body pointing to the table, close + enclosures.
6. **Appendix (page 2)** — matching table + values mindmap + values icon list (both visuals).
7. **Compile (always ask first)** — only on confirmation run MiKTeX `pdflatex` twice into
   `applications/<company>_<role>/`. "Ask before verifying" is part of the spec.

## Cover-letter structure

- **Header** — modern design (Lato, accent `#2C6E91`, FontAwesome contact line).
- **Transparency note (prominent)** — boxed line stating the automation is self-built,
  detects language, matches requirements, points to the page-2 table.
- **Opening** — values-first, tied to the role.
- **Body** — values → role + matched experience; explicit pointer to the appendix table.
- **Close** — `Mit freundlichen Grüßen` / `Kind regards`, enclosures.
- **Appendix (page 2)** — color-coded matching table; TikZ values mindmap; values icon list
  (both visuals so Andreas can compare and later keep one).

## Verification — only on explicit request

Compilation is **never automatic**; ask each time before running `pdflatex`.
1. Dry run DE (e.g. Loxone JD) → DE letter + table, correct role/company, both value visuals.
2. Dry run EN → output flips to English end-to-end.
3. Compile (on request) → run `pdflatex` twice; check header, note, opening, table colors,
   mindmap, no overflow.
4. Sanity → every table claim traces to `profile.yaml` (no invented experience).

## Conventions
- Output language mirrors the JD; ask only if undetectable.
- Matching is honest: gaps shown, not faked.
- One PDF per application under `applications/`.
