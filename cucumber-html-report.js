const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/reports/cucumber-json',
	reportPath: 'cypress/reports/',
    metadata:{
    browser: {
        name: 'chrome',
        version: 'latest'
    },
    device: 'Local test machine',
    platform: {
        name: 'windows',
        version: '10'
    }
},
customData: {
    title: 'Run info',
    data: [
        {label: 'Project', value: 'Swimlane'},
        {label: 'Release', value: '1.0.0'},
    ]
}
});
