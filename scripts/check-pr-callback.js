const checklist = [
  'PR URL is recorded',
  'Head SHA is recorded',
  'Webhook reviewer spawn is observed',
  'Formal GitHub review is posted by the reviewer',
  'cmux_chat callback is observed, or agent-mail fallback reason is recorded',
  'npm test result is recorded',
]

console.log('PR callback smoke checklist')
for (const item of checklist) {
  console.log(`- [ ] ${item}`)
}
