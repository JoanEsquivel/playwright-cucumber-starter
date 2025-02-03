module.exports ={
    default: {
        paths: [
            "src/tests/features"
        ], 
        dryRun: false,
        format: [
            "progress-bar",
            "summary",
            "json:reports/cucumber-report.json", // Generates a JSON report
            "html:reports/cucumber-report.html"
        ],
        formatOptions: {
            colorsEnabled: true,
            snippetInterface: "async-await"
        },
        require: [
            "src/tests/step-definitions/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ]
    }
}