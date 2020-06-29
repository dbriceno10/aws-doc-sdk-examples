/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with Version 3 (V3) of the AWS JavaScript SDK,
which is scheduled for release by September 2020. The pre-release version of the SDK is available
at https://github.com/aws/aws-sdk-js-v3. The 'SDK for JavaScript Developer Guide' for V3 is also
scheduled for release September 2020, and the topic containing this example will be hosted at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide//sns-examples-sending-sms.html.

Purpose:
sns_checkphoneoptout.test.js demonstrates how to determine whether a phone number has opted out of receiving AWS SMS messages.

Inputs:
- REGION (into command line below)
- PHONE_NUMBER  (into command line below)

Running the code:
node sns_checkphoneoptout.js REGION PHONE_NUMBER
 */
// snippet-start:[sns.JavaScript.v3.SMS.checkIfPhoneNumberIsOptedOut]

// Import required AWS SDK clients and commands for Node.js
const {SNS, CheckIfPhoneNumberIsOptedOutCommand} = require("@aws-sdk/client-sns");
// Set the AWS Region
const region = process.argv[2];
// Create SNS service object
const sns = new SNS(region);
// Set the parameters
const params = {phoneNumber: process.argv[3]}

async function run() {
    try {
        const data = await sns.send(new CheckIfPhoneNumberIsOptedOutCommand(params));
        console.log("Phone Opt Out is " + data.isOptedOut);
    } catch (err) {
        console.error(err, err.stack);
    }
};
run();
// snippet-end:[sns.JavaScript.v3.SMS.checkIfPhoneNumberIsOptedOut]
exports.run = run; //for unit tests only
