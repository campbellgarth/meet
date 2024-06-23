import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.browser }},
  {rules: [
    // other rules...
    'no-direct-node-access': 'off' // Change 'no-direct-node-access' to the actual rule name
]},
  pluginJs.configs.recommended,
  pluginReactConfig,
];

