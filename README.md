# Stackery Hello World - Node.js 8

This is a sample template for a serverless AWS Lambda application, written in Node.js.

This application contains two Lambda Functions.  The getWelcomePage function
responds to web request events from an API Gateway endpoint.  The logErrors
function processes a centralized stream of all Lambda errors within this app.

The application architecture is defined in template.yaml, a Serverless
Application Model (SAM) template which can be managed through the Stackery UI
at app.stackery.io.

Here is an overview of the files:

```bash
.
├── README.md                   <-- This README file
├── src                         <-- Source code dir for all AWS Lambda functions
│   ├── getWelcomePage          <-- Source code dir for getWelcomePage function
│   │   ├── README.md           <-- Function-specific README
│   │   ├── index.js            <-- Lambda function code
│   │   ├── package.json        <-- NodeJS dependencies
│   │   └── welcome.html        <-- HTML welcome page returned by Lambda function
│   └── logErrors               <-- Source code dir for logErrors function
│       ├── README.md           <-- Function-specific README
│       ├── index.js            <-- Lambda function code
│       └── package.json        <-- NodeJS dependencies
└── template.yaml               <-- SAM infrastructure-as-code template
```

