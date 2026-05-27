# Agent Process Smoke

Sandbox repo for testing automated agent PR/review/chat flows.

Keep smoke changes small enough for fast review.

## Validation Run Policy

- Prefer README-only or documentation-only changes unless a test explicitly
  needs code.
- Each validation PR must state which automation path it is exercising:
  branch creation, PR creation, webhook reviewer spawn, GitHub review posting,
  or cmux callback delivery.
- Keep commits reversible and avoid unrelated cleanup.
- Run `npm test` before opening or updating a PR.
- Run `npm run check:pr-callback` to print the evidence checklist for reviewer
  spawn, formal review, and callback verification.
- Do not merge a validation PR until an independent `pr_reviewer` review has
  completed and the expected callback channel has been observed.

Last manual token check: 2026-05-19.

Validation run 1: README-only process smoke.
Validation run 2: README-only process smoke.
Validation run 3: README-only process smoke.
Validation run 5: README-only process smoke.
Validation run 6: README-only process smoke.
Validation run 7: README-only process smoke.
Validation run 8: README-only process smoke.
Validation run 9: README-only process smoke.
Validation run 10: README-only process smoke.
Validation run 11: README-only process smoke.
Validation run 12: README-only process smoke.
Validation run 13: README-only process smoke.
Validation run 14: README-only process smoke.
Validation run 15: README-only process smoke.
Validation run 16: README-only process smoke.
Validation run 17: README-only process smoke.
Validation run 18: README-only process smoke.
Validation run 23: README-only auto-review chat callback smoke.
