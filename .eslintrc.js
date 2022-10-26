module.exports = {
  globals: {
    $message: true,
    $dialog: true,
    $loadingBar: true,
  },
  extends: ['@antfu', './.eslintrc-auto-import.json'],
  rules: {
    'vue/component-tags-order': 'off',
    'vue/define-macros-order': 'off',
    'prefer-promise-reject-errors': 'off',
  },
}
