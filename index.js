const BillingReporter = require('./billing_reporter');
const SlackWebhooker = require('./slack_webhooker');
const DataStudio = require('./slack_webhooker');

const PROJECT_ID = process.env.PROJECT_ID;
const BILLING_ACCOUNT_ID = process.env.BILLING_ACCOUNT_ID.replace(/-/g, '_');
const WEBHOOK_URL = process.env.WEBHOOK_URL;
const BILLING_DATASET = process.env.BILLING_DATASET;

function main() {
    const billingReporter = new BillingReporter(
        PROJECT_ID,
        BILLING_ACCOUNT_ID,
        BILLING_DATASET,
    
    );
    const slackWebhooker = new SlackWebhooker(WEBHOOK_URL);

    return billingReporter.query().then(
        result => slackWebhooker.post(result)
    ).then(console.log).catch(console.error);     
}

// function datastudio() {
//     const billingReporter = new BillingReporter(
//         PROJECT_ID,
//         BILLING_ACCOUNT_ID,
//         BILLING_DATASET,
    
//     );
//     const slackWebhooker = new SlackWebhooker(WEBHOOK_URL);

//     return billingReporter.query().then(
//         slackWebhooker.post('testing 123')
//     ).then(console.log).catch(console.error);
// }

// function datastudio() {
//     const slackWebhooker = new SlackWebhooker(WEBHOOK_URL);
//     const announce       = "this is a test";

//     return announce(
//         announce => slackWebhooker.post(announce)
//     )
// }

module.exports.main = main;
// module.exports.datastudio = datastudio;
