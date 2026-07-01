# Cover-Letter Automation — Spec & Runbook

> Paste a **job description (JD)** → get a finished cover letter, **in the JD's
> language**, whose appendix transparently maps the posting's requirements to my
> real experience. The letter itself demonstrates how I work with AI.
>
> **Mechanism:** a documented **Claude Code workflow** (no scripts, no API keys).
> This file *is* the instruction set Claude follows. The facts live in
> [`profile.yaml`](profile.yaml); the layout lives in [`anschreiben.tex`](anschreiben.tex).

---

## How to run it

In Claude Code, in this repo, say something like:

```
Generate a cover letter for this job description:
<paste JD text, or a file path, or a URL>
```

Claude then executes the **Workflow** below and compiles the PDF directly.

---

## Files

| File | Role |
|------|------|
| [`coverletter_automation.md`](coverletter_automation.md) | This spec / runbook (the process). |
| [`profile.yaml`](profile.yaml) | **Single source of truth** — bilingual values, expertise, experience, skills, and the JD-keyword → evidence map. Edit this when my experience changes. |
| [`anschreiben.tex`](anschreiben.tex) | Fill-in LaTeX template. Fields are marked `% <<FILL: ...>>`. Ships as a worked DE (Loxone) example. |
| [`applications/`](applications/) | Output: one folder per application, `applications/<company>_<role>/coverletter_<firma>_<stelle>.tex` (+ `.pdf`), where `<stelle>` is a short rough role summary. The template stays clean. |
| [`template/`](template/) | Existing full CV (`template.tex`), photo, publications. |
| [`plan.md`](plan.md) | The agreed plan for this automation (reference copy). |

---

## Workflow (what Claude does for each JD)

### 1. Input
Accept JD as pasted text, a file path, or a URL (fetch if URL).

### 2. Detect language
Detect the JD's language and set the **output language** to `DE` or `EN`.
Everything — letter, transparency note, table, values — is emitted in that
language, pulling the matching `de:`/`en:` strings from `profile.yaml`.
If the language is genuinely ambiguous, **ask** (default `EN`).

### 3. Parse the JD
Extract and note:
- **company** and **role title** (→ subject line, output folder name),
- **recipient / address** if present (else a neutral `Personalabteilung` block),
- **required** skills & responsibilities ("must have"),
- **nice-to-haves**,
- **tone / culture cues** (start-up vs. corporate, "du" vs. "Sie", etc.).

### 4. Match requirements → evidence
For each requirement, scan `profile.yaml → matching_keywords` (substring, case-
insensitive) and the `tags` on experience/skills. For each hit, build a row:

`Requirement | Evidence (role · standard · years) | Strength`

Strength comes from the keyword entry: **strong / partial / adjacent**.
- **Be honest.** If a required item has no support, either omit it or list it
  with an `adjacent`/transfer note — never invent experience.
- Pick the 6–10 most relevant rows; don't dump everything.

### 5. Compose the letter (built on **moderncv**, 10pt)
The letter uses the `moderncv` class (`\moderncvcolor{blue}`, `lmodern`, 10pt) for fonts +
fontawesome6. **Do not use moderncv's `\makelettertitle`/`\makeletterclosing`** — its letter
header stacks the contact details vertically and wastes space. Instead **typeset a compact,
single-line header manually**: `{\Huge name}` + subtitle + a rule + **one contact line**
(`\faLocationDot address | \faPhone phone | \faEnvelope email | \faGlobe homepage |
\faLinkedin handle`, separated by a colored `|`). Then typeset recipient/date (minipages),
subject, transparency note, salutation, body, closing and enclosures manually. **Do not `\usepackage{fontawesome5}`** — moderncv
already loads **fontawesome6**; use fontawesome6 macro names (e.g. `\faRobot`, `\faGears`,
`\faDiagramProject`, `\faHandsHolding`, `\faShare`, `\faCircleHalfStroke`, `\faLocationDot`),
not the v5 names. Keep `\name{First}{Last}` set (moderncv requires it) even though the header
is manual. Then fill:
- **babel** language + strength-badge labels in the right language,
- **recipient/date** as two `minipage`s (recipient left, `Worms, \today` right), then a bold
  **subject** line (`Bewerbung als <role>` / `Application: <role>`),
- **transparency note** — a `tcolorbox` **before the salutation** stating the letter was
  written *in Teilen* by a self-built AI automation, that it detects language and matches
  requirements, and points to the page-2 table. Then print the salutation
  (`Sehr geehrte Damen und Herren,` / `Dear …,`) as plain text below the note,
- **capitalization after the salutation comma:** in German the first word of the body after
  the salutation comma is **lowercase** unless it is a noun or proper name
  (e.g. `Sehr geehrte Damen und Herren,` → `gute Software …`, not `Gute Software …`).
  (English keeps the normal capital after `Dear …,`.)
- **values-first opening**: lead with 2–3 core values from `profile.yaml → values` tied to
  *this* role, not a generic "I read your posting",
- **2–3 body paragraphs** connecting values + matched experience, with an explicit pointer
  to the appendix table,
- **Tone: human, not templated.** Write warm, natural prose in the first person — how a
  thoughtful engineer actually talks, not marketing filler. **Avoid em dashes ("—")** in the
  body (use commas, colons or new sentences); the values-list separator is a colon.
- **Weave in one genuine, concrete line about valuing a human, respectful way of working**
  (teamwork, communication, trust — especially when things get hard), tied to the role rather
  than stated as an abstract slogan. Grounded in the `empathy` value in `profile.yaml`.
- **closing** typeset manually (`Mit freundlichen Grüßen,` + name), then an enclosures line
  (`Anlagen: …`), then a rule + **values list** (icon + title + one-line desc).
- **Homepage** appears in the single-line contact header (`\faGlobe`), from
  `profile.yaml → meta.homepage_label / homepage_url`.

### 6. Values & appendix
- **Page 1:** below the closing, a short rule + **values list** (icon + title +
  one-line description) so the engineering values are visible on the letter itself.
- **Page 2 appendix:** the **matching table** (color-coded by strength) after `\clearpage`.
- **Page 2, below the table — Human-in-the-Loop graphic:** after the table, a
  `\bigskip`, an internal `\hypertarget{hitl}{}`, a heading in the **table-heading
  style** (`{\Large\bfseries\color{accent}Konzept: Human-in-the-Loop}` + a small
  grey subtitle), then the image centered at `width=\linewidth`. The image file is
  `agents_in_sldc_final.png` at the repo root of the automation folder; because the
  letter lives two levels deep in `applications/<firma>_<rolle>/`, the include path
  is **`../../agents_in_sldc_final.png`** (the template itself uses the bare
  filename). Requires `\usepackage{graphicx}`. Keep the EN/DE heading in the output
  language (`Concept: Human-in-the-Loop` / `Konzept: Human-in-the-Loop`).
- The body links to it: end the AI/agentic-workflows sentence with
  `(stets mit menschlichem Review-Anteil, Konzept \hyperlink{hitl}{\textbf{Human-in-the-Loop}} $\rightarrow$ Seite~2)`
  (EN equivalent), so the note both states the human oversight and jumps to the graphic.
- (Decided: TikZ mindmap dropped — list only. Do **not** re-verify optical fit /
  page count; the user reviews layout themselves.)

### 7. Output & compile — **always compile directly**
- Write the filled `.tex` to `applications/<company>_<role>/`.
- **Filename:** name the letter `coverletter_<firma>_<stelle>.tex` (and the resulting
  `.pdf` matches), where `<stelle>` is a **short, rough summary** of the role — not the
  full posting title. Lowercase, words joined by hyphens, no spaces/umlauts/special
  chars (e.g. `coverletter_alten_software-architect.tex`,
  `coverletter_loxone_software-engineer.tex`).
- **Always compile right away** (no asking) with MiKTeX:
  ```
  C:/Users/andreas.butry/AppData/Local/Programs/MiKTeX/miktex/bin/x64/pdflatex.exe \
      -interaction=nonstopmode coverletter_<firma>_<stelle>.tex
  ```
  Compile **only to verify** it builds — report exit code, page count and any
  LaTeX errors in text. **Do not** convert to images or show previews; the user
  opens the PDF themselves.

---

## Conventions & guardrails
- **Language** mirrors the JD; ask only if undetectable.
- **Honesty:** every table claim must trace to `profile.yaml`. Gaps are shown, not faked.
- **One folder per application** under `applications/`; never overwrite the template.
- **Source of truth:** update `profile.yaml` (not individual letters) when experience changes.
- **Transparency note stays** — it is the point of the exercise.

## Compile dependencies (all in MiKTeX)
`moderncv` (provides **fontawesome6** — don't load fontawesome yourself), `lmodern`,
`xcolor`, `tcolorbox`, `graphicx`, `tabularx`, `booktabs`, `array`, `geometry`, `babel`.

## Extending the matcher
Add a line under `profile.yaml → matching_keywords`:
```yaml
"kubernetes": { area: "DevOps", evidence_de: "...", evidence_en: "...", strength: partial }
```
No template change needed — new keywords automatically become table rows when a JD mentions them.
