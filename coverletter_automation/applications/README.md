# applications/

Generated cover letters live here — **one folder per application**:

```
applications/
└── <company>_<role>/
    ├── anschreiben.tex   # filled from ../anschreiben.tex template
    └── anschreiben.pdf   # compiled on request (MiKTeX, run pdflatex twice)
```

These are outputs. The reusable template stays in
[`../anschreiben.tex`](../anschreiben.tex); the facts stay in
[`../profile.yaml`](../profile.yaml). See [`../coverletter_automation.md`](../coverletter_automation.md).
