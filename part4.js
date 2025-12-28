const part4Questions = [
  {
    id: "p4_q1",
    type: "multiple-select",
    question: "Select all the actions below which use the Celigo platform API.",
    options: ["Inviting a new Celigo platform user", "Searching the Celigo Marketplace", "Creating an API token in Celigo", "Modifying a flow in Celigo"],
    correctAnswer: ["Inviting a new Celigo platform user", "Searching the Celigo Marketplace", "Creating an API token in Celigo", "Modifying a flow in Celigo"],
    explanation: "All actions within the Celigo platform use the API, including user management, Marketplace searches, token creation, and flow modifications.",
    chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
  },
  {
    id: "p4_q2",
    type: "multiple-choice",
    question: "What formatting is used with the Celigo platform API?",
    options: ["Plain Text", "HTML", "JSON", "SQL"],
    correctAnswer: "JSON",
    explanation: "The Celigo platform API uses JSON format for all data exchanges.",
    chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
  },
  {
    id: "p4_q3",
    type: "multiple-choice",
    question: "What type of authentication does the Celigo platform API use?",
    options: ["Basic", "Bearer token", "Custom", "WSSE"],
    correctAnswer: "Bearer token",
    explanation: "The Celigo platform API uses bearer token authentication.",
    chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
  },
  {
    id: "p4_q4",
    type: "matching",
    question: "Match the scenario with the correct base URI for the Celigo platform API.",
    rows: [
      { id: 1, text: "External call for EU servers", correct: "https://api.eu.integrator.io/v1/" },
      { id: 2, text: "Browser call for North America servers", correct: "https://integrator.io/api/" },
      { id: 3, text: "External call for North America servers", correct: "https://api.integrator.io/v1/" },
      { id: 4, text: "Browser call for EU servers", correct: "https://eu.integrator.io/api/" }
    ],
    options: [
      "https://api.eu.integrator.io/v1/",
      "https://integrator.io/api/",
      "https://api.integrator.io/v1/",
      "https://eu.integrator.io/api/"
    ],
    explanation: "Each scenario uses different base URIs depending on server location and whether accessed from a browser or external application.",
    chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
  },
  {
    id: "p4_q5",
    type: "multiple-select",
    question: "Select all the HTTP methods the Celigo platform API supports.",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: ["GET", "POST", "PUT", "DELETE"],
    explanation: "The Celigo platform API supports GET, POST, PUT, and DELETE HTTP methods.",
    chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
  },
  {
    id: "p4_q6",
    type: "multiple-choice",
    question: "Who can access the Celigo platform API from a web browser?",
    options: ["Account owners", "Administrators", "Account owners and administrators", "All users with developer mode activated"],
    correctAnswer: "Account owners",
    explanation: "Only account owners can access the Celigo platform API from a web browser.",
    chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
  },
  {
    id: "p4_q7",
    type: "multiple-choice",
    question: "Identify the resource ID in the following URL:",
    options: ["integrations", "652835eb123c6d2a15412cb4", "flowBuilder", "987835f12345040ecbfd0d76"],
    image: "images/p4_q7.png",
    correctAnswer: "987835f12345040ecbfd0d76",
    explanation: "The resource ID is the final identifier in the path before the query string, which represents the specific flow resource.",
    chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
  },
  {
    id: "p4_q8",
    type: "yes-no",
    question: "True or False: When looking at a resource on the Celigo platform, you can always use both the resource name and ID shown on the URL to make a call through a browser.",
    options: ["True", "False"],
    image: "images/p4_q8.png",
    correctAnswer: "False",
    explanation: "Not all resources shown in URLs can be used interchangeably; some require specific IDs for API calls.",
    chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
  },
  {
    id: "p4_q9",
    type: "yes-no",
    question: "Only Celigo platform account owners are permitted to create API tokens.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Both account owners and administrators can create API tokens in Celigo.",
    chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
  },
  {
    id: "p4_q10",
    type: "multiple-choice",
    question: "What type of API access can a token provide to a Celigo account?",
    options: ["Full access", "Custom access", "All of the answers listed."],
    correctAnswer: "All of the answers listed.",
    explanation: "API tokens can be configured to provide full access, custom access, or other access levels.",
    chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
  },
  {
    id: "p4_q11",
    type: "multiple-choice",
    question: "What's the purpose of the Celigo platform Playground?",
    options: [
      "It allows you to experiment outside of an integration.",
      "It allows you to run flows that export to a demo environment.",
      "It allows you to access previous versions of integrations.",
      "All of the above answers"
    ],
    correctAnswer: "It allows you to experiment outside of an integration.",
    explanation: "The Playground is a testing environment where you can experiment with configurations without affecting live integrations.",
    chapter: ["Level 4 - Introducing Developer Tools|Playground"]
  },
  {
    id: "p4_q12",
    type: "multiple-choice",
    question: "Where can you find the Playground in the Celigo platform?",
    options: ["Home", "Dashboard", "Tools", "Resources", "Marketplace"],
    correctAnswer: "Tools",
    explanation: "The Playground is located in the Tools menu of the Celigo platform.",
    chapter: ["Level 4 - Introducing Developer Tools|Playground"]
  },
  {
    id: "p4_q13",
    type: "yes-no",
    question: "The only place on the Celigo platform you'll find advanced field editors (AFEs) is in the Playground.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "AFEs are available in multiple places throughout the Celigo platform, not just in the Playground.",
    chapter: ["Level 4 - Introducing Developer Tools|Playground"]
  },
  {
    id: "p4_q14",
    type: "yes-no",
    question: "Data in a Playground AFE is automatically saved every five minutes.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Playground data is not automatically saved; users must manually save their work.",
    chapter: ["Level 4 - Introducing Developer Tools|Playground"]
  },
  {
    id: "p4_q15",
    type: "yes-no",
    question: "You can only use sample data in Playground.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Playground allows both sample data and actual data from your integrations.",
    chapter: ["Level 4 - Introducing Developer Tools|Playground"]
  },
  {
    id: "p4_q16",
    type: "matching",
    question: "Match the AFE type with its description.",
    rows: [
      { id: 1, text: "XML parser helper", correct: "Converts XML values into JSON" },
      { id: 2, text: "Handlebars editor", correct: "Allows you to create and test handlebar expressions against raw data" },
      { id: 3, text: "SQL query builder", correct: "Allows you to build SQL queries with handlebars and JSON as an input" },
      { id: 4, text: "JavaScript editor", correct: "Allows you to run JavaScript safely in a secure runtime environment" },
      { id: 5, text: "Transform editor", correct: "Allows you to reshape a JSON object with simple pairs to generate the preferred output" }
    ],
    options: [
      "Converts XML values into JSON",
      "Allows you to create and test handlebar expressions against raw data",
      "Allows you to build SQL queries with handlebars and JSON as an input",
      "Allows you to run JavaScript safely in a secure runtime environment",
      "Allows you to reshape a JSON object with simple pairs to generate the preferred output"
    ],
    explanation: "Each AFE type has a specific purpose for different data transformation and testing tasks.",
    chapter: ["Level 4 - Introducing Developer Tools|Playground"]
  },
  {
    id: "p4_q17",
    type: "matching",
    question: "Match the AFE type with its description (Version 2).",
    rows: [
      { id: 1, text: "CSV parser helper", correct: "Comma separated values into JSON" },
      { id: 2, text: "Form builder", correct: "Allows you to create custom forms to use within the user interface" },
      { id: 3, text: "Filter editor", correct: "Allows you to visually define an expression to include or exclude records" },
      { id: 4, text: "JavaScript editor", correct: "Allows you to run JavaScript safely in a secure runtime environment" },
      { id: 5, text: "Transform 2.0 editor", correct: "Offers options to create an output record or row from an input record" }
    ],
    options: [
      "Comma separated values into JSON",
      "Allows you to create custom forms to use within the user interface",
      "Allows you to visually define an expression to include or exclude records",
      "Allows you to run JavaScript safely in a secure runtime environment",
      "Offers options to create an output record or row from an input record"
    ],
    explanation: "Each AFE has distinct capabilities for specific transformation and form-building tasks.",
    chapter: ["Level 4 - Introducing Developer Tools|Playground"]
  },
  {
    id: "p4_q18",
    type: "multiple-choice",
    question: "What types of AFEs include the auto-suggestions menu?",
    options: ["AFEs that use handlebars expressions", "AFEs that use XML", "Form builder", "All AFEs"],
    correctAnswer: "AFEs that use handlebars expressions",
    explanation: "Auto-suggestions menus are available in AFEs that use handlebars expressions.",
    chapter: ["Level 4 - Introducing Developer Tools|Playground", "Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p4_q19",
    type: "multiple-select",
    question: "Select all that apply: What types of JavaScript hooks are available in the Celigo platform?",
    options: ["preSavePage", "postResponseMap", "preMap", "postMap", "postSubmit", "postAggregate"],
    correctAnswer: ["preSave page", "postResponseMap", "preMap", "postMap", "postSubmit", "postAggregate"],
    explanation: "Celigo supports multiple JavaScript hooks including pre- and post-processing hooks.",
    chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p4_q20",
    type: "yes-no",
    question: "True or False: JavaScript hooks can perform calculations, data comparisons, transformation and trigger functions.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "JavaScript hooks are powerful and can perform various data manipulations and operations.",
    chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p4_q21",
    type: "matching",
    question: "Match the JavaScript hook type with a common use for it.",
    rows: [
      { id: 1, text: "preMap", correct: "Formatting data needed for mapping" },
      { id: 2, text: "postMap", correct: "Setting default values based on mapped data" },
      { id: 3, text: "postSubmit", correct: "Validating the response from the target system" }
    ],
    options: [
      "Formatting data needed for mapping",
      "Setting default values based on mapped data",
      "Validating the response from the target system"
    ],
    explanation: "Each JavaScript hook type has common use cases in the data processing pipeline.",
    chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p4_q22",
    type: "matching",
    question: "Match the script editor sections with their purpose.",
    rows: [
      { id: 1, text: "Script", correct: "This is where you will enter the code to manipulate the data." },
      { id: 2, text: "FunctionInput", correct: "This area houses the example data you can use for your data." },
      { id: 3, text: "FunctionOutput", correct: "This is where you can preview the newly transformed data." }
    ],
    options: [
      "This is where you will enter the code to manipulate the data.",
      "This area houses the example data you can use for your data.",
      "This is where you can preview the newly transformed data."
    ],
    explanation: "The script editor has three main sections for code entry, input data, and output preview.",
    chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
  },
  {
    id: "p4_q23",
    type: "multiple-select",
    question: "Handlebars can be used within the Celigo platform in which of the following places.",
    options: ["Mappings", "Request Bodies", "Request Parameters"],
    correctAnswer: ["Mappings", "Request Bodies", "Request Parameters"],
    explanation: "Handlebars expressions can be used in mappings, request bodies, and request parameters.",
    chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p4_q24",
    type: "matching",
    question: "Match the correct symbol to the correct handlebar helper.",
    rows: [
      { id: 1, text: "Data Variable", correct: "@" },
      { id: 2, text: "Block Helper", correct: "#" },
      { id: 3, text: "Custom Helper", correct: " " }
    ],
    options: ["@", "#", " "],
    explanation: "Handlebars uses symbols to denote different helper types: @ for data variables, # for block helpers.",
    chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p4_q25",
    type: "multiple-choice",
    question: "This handlebar helper is commonly used for data manipulation.",
    options: ["Custom Helper", "Block Helper", "Data Variable"],
    correctAnswer: "Custom Helper",
    explanation: "Custom helpers are frequently used for data manipulation tasks.",
    chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p4_q26",
    type: "multiple-choice",
    question: "This handlebar helper is commonly used for iterating through data.",
    options: ["Custom Helper", "Block Helper", "Data Variable"],
    correctAnswer: "Block Helper",
    explanation: "Block helpers are used for looping and iterating through collections of data.",
    chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p4_q27",
    type: "multiple-choice",
    question: "This handlebar helper is used to access data within an array.",
    options: ["Custom Helper", "Block Helper", "Data Variable"],
    correctAnswer: "Data Variable",
    explanation: "Data variables are used to access and reference data within arrays and objects.",
    chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p4_q28",
    type: "multiple-select",
    question: "Which Celigo platform resource supports making a request to a specified URL? Select all that apply.",
    options: ["Webhooks", "JavaScript API", "Celigo platform API"],
    correctAnswer: ["Webhooks", "JavaScript API", "Celigo platform API"],
    explanation: "All three resources—webhooks, JavaScript API, and Celigo platform API—can make requests to specified URLs.",
    chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)", "Level 4 - Introducing Developer Tools|Celigo Platform API"]
  },
  {
    id: "p4_q29",
    type: "multiple-choice",
    question: "Which resource supports returning a response in a format other than JSON?",
    options: ["Webhooks", "JavaScript API", "Celigo platform API"],
    correctAnswer: "JavaScript API",
    explanation: "The JavaScript API can return responses in various formats beyond JSON.",
    chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
  },
  {
    id: "p4_q30",
    type: "matching",
    question: "Sort the characteristics in the cards below into the correct Celigo resource.",
    rows: [
      { id: 1, text: "Actionable Data Response", correct: "JavaScript API" },
      { id: 2, text: "Run Synchronously", correct: "JavaScript API" },
      { id: 3, text: "Use JavaScript Functions", correct: "JavaScript API" },
      { id: 4, text: "Success/Failed response", correct: "Webhook" },
      { id: 5, text: "Run Asynchronously", correct: "Webhook" },
      { id: 6, text: "Debug Logs", correct: "Webhook" },
      { id: 7, text: "JSON data format", correct: "Webhook" }
    ],
    options: ["JavaScript API", "Webhook"],
    explanation: "JavaScript API runs synchronously with actionable responses, while webhooks run asynchronously with success/failure responses.",
    chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
  },
  {
    id: "p4_q31",
    type: "matching",
    question: "Sort the characteristics in the cards below into the correct Celigo resource (Version 2).",
    rows: [
      { id: 1, text: "JavaScript Manage Error Handling", correct: "JavaScript API" },
      { id: 2, text: "Any data format", correct: "JavaScript API" },
      { id: 3, text: "JSON data format", correct: "Celigo Platform API" },
      { id: 4, text: "Uses error dashboard or Error endpoint", correct: "Celigo Platform API" }
    ],
    options: ["JavaScript API", "Celigo Platform API"],
    explanation: "JavaScript API handles errors internally and supports any format, while Celigo Platform API uses JSON and error management systems.",
    chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)", "Level 4 - Introducing Developer Tools|Celigo Platform API"]
  },
  {
    id: "p4_q32",
    type: "multiple-choice",
    question: "Why isn't the log, error, and dashboard information updated for a JavaScript API?",
    options: [
      "These API calls are made outside the platform.",
      "Developer mode must be activated.",
      "It hasn't been more than 24 hours since the JavaScript API invoked a component.",
      "All of these answers."
    ],
    correctAnswer: "These API calls are made outside the platform.",
    explanation: "JavaScript API calls made externally don't update the platform's internal logs and dashboards.",
    chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
  },
  {
    id: "p4_q33",
    type: "matching",
    question: "Sort the cards in the correct category.",
    rows: [
      { id: 1, text: "Only written in JavaScript", correct: "Scripts" },
      { id: 2, text: "Hosted on Celigo", correct: "Scripts" },
      { id: 3, text: "Hosts codes", correct: "Stacks" },
      { id: 4, text: "Can be written in any languages", correct: "Stacks" }
    ],
    options: ["Scripts", "Stacks"],
    explanation: "Scripts are JavaScript-based and hosted on Celigo; Stacks can host code in any language.",
    chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
  },
  {
    id: "p4_q34",
    type: "multiple-select",
    question: "In addition to a name, what two items are needed to create a JavaScript API resource?",
    options: ["Array", "Script", "Destination application name", "Function"],
    correctAnswer: ["Script", "Function"],
    explanation: "Creating a JavaScript API resource requires a name, a script, and a function.",
    chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
  },
  {
    id: "p4_q35",
    type: "multiple-select",
    question: "When creating a JavaScript API resource, which of the following actions are available? Select all that apply.",
    options: ["Create a script", "Select a script", "Edit a script", "Duplicate a script"],
    correctAnswer: ["Select a script", "Edit a script"],
    explanation: "When creating a JavaScript API resource, you can select an existing script or edit one.",
    chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
  },
  {
    id: "p4_q36",
    type: "multiple-choice",
    question: "Where is the URL for a JavaScript API resource found?",
    options: ["Connections", "Edit API window", "Account > Profile", "Resources > Scripts"],
    correctAnswer: "Edit API window",
    explanation: "The JavaScript API resource URL is located in the Edit API window.",
    chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
  },
  {
    id: "p4_q37",
    type: "multiple-select",
    question: "What are the two items needed when using a JavaScript API resource?",
    options: ["On-premise agent", "Authentication token", "URL to invoke/call", "iClient"],
    correctAnswer: ["Authentication token", "URL to invoke/call"],
    explanation: "To use a JavaScript API resource, you need an authentication token and the URL to invoke it.",
    chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
  },
  {
    id: "p4_q38",
    type: "yes-no",
    question: "JavaScript API resources invoking an import require a request body.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "A request body is required when a JavaScript API invokes an import.",
    chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
  },
  {
    id: "p4_q39",
    type: "multiple-select",
    question: "In most cases, what should the request body of a JavaScript API resource invoking an import at least include? (Select all that apply.)",
    options: ["an agent", "a handleRequest function", "an import ID", "data to import"],
    correctAnswer: ["an import ID", "data to import"],
    explanation: "The request body should include the import ID and the data to be imported.",
    chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
  },
  {
    id: "p4_q40",
    type: "multiple-choice",
    question: "What is a virtual export/import?",
    options: [
      "A resource that only exists when it's being executed",
      "A resource listed in the Stacks section of the Resources menu",
      "Any resource that can be reused",
      "A resource that appears in the Resource menu but was created outside of the Celigo platform"
    ],
    correctAnswer: "A resource that only exists when it's being executed",
    explanation: "Virtual exports/imports are temporary resources created and executed on-demand.",
    chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
  },
  {
    id: "p4_q41",
    type: "multiple-choice",
    question: "Alejandro has logged into the Celigo platform, viewed his account profile, and browsed through the menus and Marketplace. His supervisor asks if Alejandro has had a chance to use the Celigo platform API. What would be an accurate response from Alejandro?",
    options: [
      "Yes. Anyone who uses the Celigo platform is using its API.",
      "No. But I would have if I had installed one of the items in the Marketplace.",
      "No. I need extra permissions to access the API.",
      "No. I looked through the site and pushed some buttons, but I didn't build anything."
    ],
    correctAnswer: "Yes. Anyone who uses the Celigo platform is using its API.",
    explanation: "All Celigo platform interactions use the API; it's not a separate system but the foundation of the platform.",
    chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
  },
  {
    id: "p4_q42",
    type: "multiple-select",
    question: "Which of the following are scenarios where you can use handlebars helpers? Select all that apply.",
    options: [
      "Creating a webhook listener",
      "Formatting data",
      "Using conditional logic, such as IF statements",
      "Transforming data"
    ],
    correctAnswer: ["Formatting data", "Using conditional logic, such as IF statements", "Transforming data"],
    explanation: "Handlebars helpers are useful for data formatting, conditional logic, and data transformation.",
    chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p4_q43",
    type: "multiple-select",
    question: "What types of JavaScript hooks are available in the Celigo platform? Select all that apply.",
    options: ["preSave", "preAggregate", "postSession", "postSubmit"],
    correctAnswer: ["preSave", "postSubmit"],
    explanation: "The Celigo platform provides preSave and postSubmit hooks among other pre- and post-processing hooks.",
    chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p4_q44",
    type: "multiple-select",
    question: "Martha is in the United States and on a call with a coworker in France. She's demonstrating how to make a Celigo API request through a browser. Her demonstration works, but when the coworker copies her steps, the coworker gets an error. Which of the following could be reasons for this? Select all that apply.",
    options: [
      "The coworker is using the Celigo base URI for North America, instead of the one for European accounts.",
      "Martha has browser-mode selected in the API tokens settings.",
      "The coworker doesn't have Developer Mode enabled.",
      "Unlike Martha, the coworker is not an account owner."
    ],
    correctAnswer: ["The coworker is using the Celigo base URI for North America, instead of the one for European accounts.", "Unlike Martha, the coworker is not an account owner."],
    explanation: "The error could be due to different regional base URIs or the coworker lacking account owner permissions.",
    chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API", "Level 1 - Understanding Celigo Fundamentals|Account Settings"]
  },
  {
    id: "p4_q45",
    type: "multiple-select",
    question: "How does My API differ from the Celigo Platform API? Select all that apply.",
    options: [
      "The Celigo Platform API functions as a webhook.",
      "My API data requests are prioritized over Celigo Platform API requests.",
      "My API sends a response with actionable data.",
      "All users automatically have access to the Celigo Platform API."
    ],
    correctAnswer: ["My API sends a response with actionable data.", "All users automatically have access to the Celigo Platform API."],
    explanation: "My API provides actionable data responses, and the Celigo Platform API is universally accessible to all users.",
    chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)", "Level 4 - Introducing Developer Tools|Celigo Platform API"]
  }
];

// Export or expose the array if needed elsewhere
// module.exports = { part4Questions };
