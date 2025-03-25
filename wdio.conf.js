exports.config = {
  runner: "local",

  specs: ["./features/**/*.feature"],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 10,

  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  logLevel: "info",

  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  framework: "cucumber",

  reporters: ["spec"],

  cucumberOpts: {
    require: ["./features/step-definitions/steps.js"],
    backtrace: false,

    requireModule: [],

    dryRun: false,
    failFast: false,
    name: [],
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};
