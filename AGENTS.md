# Agent Process Smoke

This repository exists only to test automated agent workflow plumbing:
branch creation, small edits, PR creation, webhook-triggered PR review,
GitHub review posting, and cmux chat callbacks.

Keep changes tiny and reversible. Prefer documentation-only edits unless a
test explicitly needs code.

## Commands

```bash
npm test
```

## Review Rule

Every PR must receive an independent `pr_reviewer` review before merge.
Reviewer callbacks should use `cmux_chat` when the parent workspace is live,
and agent-mail only as the offline fallback.
