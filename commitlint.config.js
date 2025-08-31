// commitlint.config.js
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",    // new feature
        "fix",     // bug fix
        "chore",   // maintenance
        "docs",    // documentation
        "style",   // formatting only (whitespace, etc.)
        "refactor",// refactor without behavior change
        "test",    // adding or updating tests
        "ci",      // CI/CD related changes
        "perf"     // performance improvement
      ],
    ],
    "subject-case": [0], // no restriction on subject case
  },
};
