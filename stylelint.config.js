module.exports = {
  plugins: ['stylelint-order'],
  extends: 'stylelint-config-standard',
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
  },
};
