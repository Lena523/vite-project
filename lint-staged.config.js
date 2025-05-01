export default {
  '*.{ts,tsx}': [() => 'tsc --noEmit', 'prettier --write'],
}