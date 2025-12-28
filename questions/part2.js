const part2Questions = [
  {
    id: "p2_q1",
    type: "multiple-choice",
    question: "In this scenario for Hair Concierge, what application is the source? \"Hair Concierge, a hair care product business, processes 200-400 daily transactions. They download orders, manually process them, confirm everything is correct, and then upload the orders to their accounting system.\nThe business will start moving to automation by first using the Celigo platform to pull customer and company data from their HubSpot account into Salesforce.\"",
    options: ["HubSpot", "Salesforce", "Celigo", "All of These"],
    correctAnswer: "HubSpot",
    explanation: "Hair Concierge is pulling data from their HubSpot account into Salesforce, making HubSpot the source.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p2_q2",
    type: "multiple-choice",
    question: "Hair Concierge wants Salesforce to get all the HubSpot contacts on a daily basis. Which option should the business choose under the \"What would you like to do?\"",
    options: ["Export records from source application", "Listen for real-time data from source application"],
    correctAnswer: "Export records from source application",
    explanation: "To transfer contacts daily, Hair Concierge should select the export records option.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p2_q3",
    type: "multiple-choice",
    question: "At a business luncheon,  a Hair Concierge manager mentioned plans to start using automation. An associate advised the manager to carefully choose how they make connections. The associate's employer had to redo their connections, after their IT department learned they were originally made using Secret URL. Why would using Secret URL cause concerns?",
    options: ["It's too new and hasn't been adopted by many applications.", "It requires expensive customization.", "It's the least secure verification type.", "It requires the purchase of an additional domain."],
    correctAnswer: "It's the least secure verification type.",
    explanation: "Secret URL is the least secure verification method and should be avoided when possible.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p2_q4",
    type: "matching",
    question: "Match the authentication/verification type with its definition.",
    rows: [
      { id: 1, text: "Custom", correct: "Allows you to define a unique authentication method not listed as another option." },
      { id: 2, text: "Basic", correct: "Uses username and password credentials from an external system." },
      { id: 3, text: "HMAC", correct: "Allows you to set what type of encryption and encoding needs to be done. Most secure." },
      { id: 4, text: "OAuth 2.0", correct: "Gives limited access to HTTP service on behalf of an account." },
      { id: 5, text: "Cookie", correct: "Places pieces of data into each http request header sent to the application." },
      { id: 6, text: "Token", correct: "Issues API key and password after verified server request." },
      { id: 7, text: "Digest", correct: "Calls server to receive data, which it then sends back to the server encrypted." },
      { id: 8, text: "Secret URL", correct: "Creates a custom parameter inside listener URL to verify the URL is valid; least secure." },
      { id: 9, text: "JWT Bearer", correct: "Securely sends information, which was digitally signed, between systems as a JSON object." },
      { id: 10, text: "WSSE", correct: "Use when a connecting application expecting crypto hash." },
      { id: 11, text: "OAuth 1.0", correct: "Requires signed requests for temporary credentials, then exchanged for long-lived tokens." }
    ],
    options: [
      "Allows you to define a unique authentication method not listed as another option.",
      "Uses username and password credentials from an external system.",
      "Allows you to set what type of encryption and encoding needs to be done. Most secure.",
      "Gives limited access to HTTP service on behalf of an account.",
      "Places pieces of data into each http request header sent to the application.",
      "Issues API key and password after verified server request.",
      "Calls server to receive data, which it then sends back to the server encrypted.",
      "Creates a custom parameter inside listener URL to verify the URL is valid; least secure.",
      "Securely sends information, which was digitally signed, between systems as a JSON object.",
      "Use when a connecting application expecting crypto hash.",
      "Requires signed requests for temporary credentials, then exchanged for long-lived tokens."
    ],
    explanation: "Match each authentication type with its correct definition.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p2_q5",
    type: "multiple-select",
    question: "When setting up the export, a Hair Concierge employee chose REST API, a generic universal connector, instead of the HubSpot form view. What are reasons they may have done this?",
    options: ["Create a temporary log-in account", "Use a new API update not in the application-specific connector", "Have more flexibility", "Needs access to another business' HubSpot account"],
    image: "images/p2_q5.png",
    correctAnswer: ["Use a new API update not in the application-specific connector", "Have more flexibility"],
    explanation: "REST API provides flexibility and access to newer API updates not available in form-based connectors.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
  },
  {
    id: "p2_q6",
    type: "multiple-choice",
    question: "Hair Concierge wants only the latest contacts and contact updates exported from HubSpot. Which type of export should they select?",
    options: ["All", "Delta", "Once", "Limit"],
    correctAnswer: "Delta",
    explanation: "Delta exports only capture new records and updates, making it ideal for ongoing incremental synchronization.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p2_q7",
    type: "multiple-choice",
    question: "Hair Concierge wants to see what one record from Shopify would look like in Salesforce. What export type should be selected?",
    options: ["Delta", "Once", "Limit"],
    correctAnswer: "Limit",
    explanation: "The Limit export type retrieves a limited number of records, perfect for testing how data maps before full import.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p2_q8",
    type: "multiple-choice",
    question: "We need to alert salespeople of items low in stock. I want daily records of the inventory available, not just updates or new items. What type of export should be selected for this?",
    options: ["Delta", "Once", "All"],
    correctAnswer: "All",
    explanation: "The All export type retrieves all records, providing complete inventory status daily.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p2_q9",
    type: "multiple-choice",
    question: "No changes are made to completed orders. Which export type would transfer records for completed orders without unnecessary repeated transfers for weekly, monthly, and quarterly runs of the flow?",
    options: ["Delta", "Once", "All"],
    correctAnswer: "Once",
    explanation: "The Once export type runs a single time, ideal for transferring static, completed records without repetition.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p2_q10",
    type: "multiple-choice",
    question: "Hair Concierge's customer list has expanded into the hundreds. What export type should be used for a flow transferring customer contact information that hasn't already been imported?",
    options: ["Delta", "Once", "All"],
    correctAnswer: "Delta",
    explanation: "Delta exports identify new records not previously transferred, efficient for large growing databases.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p2_q11",
    type: "multiple-choice",
    question: "\"Now that you’ve helped Hair Concierge complete their source export, let’s set up their flow’s destination. If you recall, the business is using the Celigo platform to post their HubSpot customer and company data to their Salesforce account.\"\n\nWhat application is the destination for Hair Concierge's flow in this scenario?",
    options: ["Celigo", "HubSpot", "Salesforce", "Shopify"],
    correctAnswer: "Salesforce",
    explanation: "Hair Concierge is importing HubSpot data into Salesforce, making Salesforce the destination.",
    chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
  },
  {
    id: "p2_q12",
    type: "multiple-choice",
    question: "Hair Concierge wants Salesforce to get HubSpot contacts on a daily basis. Which option should the business choose under the destination/lookup \"What would you like to do?\"",
    options: ["Import records into destination application", "Look up additional files (per record)", "Look up additional records (per record)", "Transfer files into the destination application"],
    correctAnswer: "Import records into destination application",
    explanation: "To load HubSpot contacts into Salesforce, select the import records option.",
    chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
  },
  {
    id: "p2_q13",
    type: "multiple-select",
    question: "Hair Concierge is building more flows. Which of the scenarios below would require adding a lookup?",
    options: [
      "The company has an HTTP source with the latest industry news export a story a day to its Slack channel. Hair Concierge wants to add a message from another HTTP source.",
      "Hair Concierge wants to add customer details to Shopify orders, before sending the information to Salesforce.",
      "The business is sending its MailChimp email campaign data to Salesforce. It wants the campaign folders combined with email campaign information when the data enters Salesforce.",
      "For the holiday shopping season, Hair Concierge wants to add an hourly export of Shopify orders in addition to a weekly export to Salesforce."
    ],
    correctAnswer: ["Hair Concierge wants to add customer details to Shopify orders, before sending the information to Salesforce.", "The business is sending its MailChimp email campaign data to Salesforce. It wants the campaign folders combined with email campaign information when the data enters Salesforce."],
    explanation: "Lookups are needed when you must retrieve and combine data from multiple sources during a flow.",
    chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
  },
  {
    id: "p2_q14",
    type: "multiple-choice",
    question: "Hair Concierge is importing additional contacts to Salesforce from an HTTP source. The source lists the shipping address state by the full state name. But the existing state field in Salesforce uses state abbreviations. What type of lookup mapping should be used in this scenario?",
    options: ["Static", "Dynamic"],
    correctAnswer: "Static",
    explanation: "Static lookup mapping uses a fixed, predefined table to convert full state names to abbreviations.",
    chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
  },
  {
    id: "p2_q15",
    type: "short-answer",
    question: "In the array below, what is the index number for '16 oz.'? ProductDescription: [\"8 oz.\", \"10 oz.\", \"12 oz.\", \"16 oz.\", \"28 oz.\"]",
    options: [],
    correctAnswer: "3",
    explanation: "Arrays are zero-indexed. Index 0 is '8 oz.', 1 is '10 oz.', 2 is '12 oz.', and 3 is '16 oz.'.",
    chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
  },
  {
    id: "p2_q16",
    type: "multiple-choice",
    question: "Hair Concierge set up a flow, which begins with exporting its Shopify orders to Salesforce. One of its hair products, VIP Finesse Shampoo, is transitioning to another label. The business wants to leave those product orders out of its Shopify export to Salesforce. What type of filter would be used in this situation?",
    options: ["Input Filter", "Output Filter"],
    correctAnswer: "Output Filter",
    explanation: "An output filter excludes records after export, preventing VIP Finesse Shampoo orders from being transferred.",
    chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
  },
  {
    id: "p2_q17",
    type: "multiple-select",
    question: "Select all five of the schedule settings shown in the cron expression. (Image reference: cron settings)",
    options: ["Minute 10", "Every 10 minutes", "Every hour", "Hour 10", "Every day", "Day 8", "Every month", "Every 10 months", "August", "September", "Sunday, Tuesday, Thursday", "Monday, Wednesday, Friday"],
    image: "images/p2_q17.png",
    correctAnswer: ["Every 10 minutes", "Every hour", "Every day", "August", "Monday, Wednesday, Friday"],
    explanation: "The cron expression specifies: every 10 minutes, every hour, every day, in August, on Monday/Wednesday/Friday.",
    chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
  },
  {
    id: "p2_q18",
    type: "multiple-select",
    question: "What does running a flow in Test Mode allow you to do in the Celigo platform? Select all that apply.",
    options: ["Run multiple sources simultaneously to test data accuracy", "Automatically enable a flow after testing", "Test a flow to fine-tune configurations and check for errors", "Verify flow behavior without impacting live data"],
    correctAnswer: ["Test a flow to fine-tune configurations and check for errors", "Verify flow behavior without impacting live data"],
    explanation: "Test Mode allows validation and configuration refinement without affecting production data.",
    chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
  },
  {
    id: "p2_q19",
    type: "multiple-select",
    question: "Which of the following are requirements for manually entering mock data?",
    options: ["Using the Celigo platform's canonical format", "Not exceeding 10 records or rows", "Selecting the \"Delete from server\" option for FTP exports", "Encrypting data"],
    correctAnswer: ["Using the Celigo platform's canonical format", "Not exceeding 10 records or rows"],
    explanation: "Mock data must follow Celigo's canonical format and be limited to 10 records or rows.",
    chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
  },
  {
    id: "p2_q20",
    type: "matching",
    question: "Sort the cards below into the tool they correctly describe.",
    rows: [
      { id: 1, text: "Is a built-in option for all Celigo flows", correct: "Test Mode" },
      { id: 2, text: "Does not write or upload real data", correct: "Test Mode" },
      { id: 3, text: "Requires a separate license for use", correct: "Sandbox Environment" },
      { id: 4, text: "Supports E2E development and testing", correct: "Sandbox Environment" }
    ],
    options: ["Test Mode", "Sandbox Environment"],
    explanation: "Test Mode is built-in and prevents data writes; Sandbox requires a license and supports full E2E testing.",
    chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
  },
  {
    id: "p2_q21",
    type: "yes-no",
    question: "What is the error source? (Image reference: error log showing internal error)",
    options: ["Internal", "External"],
    image: "images/p2_q21.png",
    correctAnswer: "Internal",
    explanation: "The error log shows an internal Celigo system error.",
    chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
  },
  {
    id: "p2_q22",
    type: "yes-no",
    question: "What is the error source? (Image reference: error log showing external error)",
    options: ["Internal", "External"],
    image: "images/p2_q22.png",
    correctAnswer: "External",
    explanation: "The error log shows an external application error.",
    chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
  },
  {
    id: "p2_q23",
    type: "multiple-choice",
    question: "What is the error source? (Image reference: error related to application)",
    options: ["Shopify", "BigCommerce", "Code", "404"],
    image: "images/p2_q23.png",
    correctAnswer: "BigCommerce",
    explanation: "The error originates from BigCommerce application.",
    chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
  },
  {
    id: "p2_q24",
    type: "multiple-choice",
    question: "What is the error source? (Image reference: error related to webhook)",
    options: ["invalid_key_or_ref", "NetSuite", "Post submit hook", "Deposit"],
    image: "images/p2_q24.png",
    correctAnswer: "Post submit hook",
    explanation: "The error is from a post submit hook webhook.",
    chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
  },
  {
    id: "p2_q25",
    type: "matching",
    question: "Match the tool/feature with its description.",
    rows: [
      { id: 1, text: "Celigo Support User Profile", correct: "Allows the option to grant Celigo Support access to customer environments for troubleshooting" },
      { id: 2, text: "Integration Lifecycle Management", correct: "Allows the ability to save versions of integrations before making changes" },
      { id: 3, text: "Flow Events Reports", correct: "Provides an audit trail of records processed through a flow" },
      { id: 4, text: "Trace Key", correct: "Used to uniquely identify a record for tracking and troubleshooting" }
    ],
    options: [
      "Allows the option to grant Celigo Support access to customer environments for troubleshooting",
      "Allows the ability to save versions of integrations before making changes",
      "Provides an audit trail of records processed through a flow",
      "Used to uniquely identify a record for tracking and troubleshooting"
    ],
    explanation: "Match each tool with its corresponding function in the Celigo platform.",
    chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources", "Level 2 - Exploring Flow Builder|Error Management"]
  },
  {
    id: "p2_q26",
    type: "multiple-choice",
    question: "A flow contains an export and three import steps. The first import step includes an input/import filter. If a record doesn't meet the criteria for this filter, what happens?",
    options: [
      "The record is excluded from the rest of the flow.",
      "The record is included in the first import step but skipped in the remaining imports.",
      "The record triggers an error and the flow stops running.",
      "The record is excluded from the first import step but not the remaining imports."
    ],
    image: "images/p2_q26.png",
    correctAnswer: "The record is excluded from the first import step but not the remaining imports.",
    explanation: "Input filters apply only to the specific step they're defined on; other imports are not affected.",
    chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
  },
  {
    id: "p2_q27",
    type: "multiple-choice",
    question: "A source field includes values such as 0922. When mapping, how will you identify that field should be treated as text and not a number?",
    options: [
      "In Settings for the mapped row, select the correct data type (string).",
      "In Settings for the mapped row, select the \"Immutable\" checkbox.",
      "In the Create/Edit Mapping panel, name the destination field \"Number as text.\"",
      "Use multifield mapping/handlebars expressions to add a \"#\" before the value."
    ],
    correctAnswer: "In Settings for the mapped row, select the correct data type (string).",
    explanation: "Setting the data type to string in the mapping row preserves leading zeros and treats the value as text.",
    chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
  },
  {
    id: "p2_q28",
    type: "multiple-choice",
    question: "Emma remembers reading that HMAC was the most secure way to connect to an application. But when she looks at the connection options for it, HMAC doesn't appear. What could be the reason?",
    options: [
      "HMAC verification is unavailable if it hasn't been configured in security settings.",
      "HMAC verification only appears if you are an administrator.",
      "Emma hasn't enabled developer mode.",
      "Emma isn't creating a webhook, and HMAC is a verification option when creating a webhook."
    ],
    correctAnswer: "Emma isn't creating a webhook, and HMAC is a verification option when creating a webhook.",
    explanation: "HMAC is specifically a webhook verification type, not a general connection authentication method.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p2_q29",
    type: "multiple-choice",
    question: "When creating an export for a flow, Josh doesn't see delta as an option in the export type drop-down box. How can he get the delta export option to appear?",
    options: [
      "Edit the connection to the application and select a different auth type.",
      "Enable developer mode on his account profile.",
      "Under the Advanced section on the export panel, decrease the Page size.",
      "Nothing. The export type options are determined by the source application."
    ],
    correctAnswer: "Nothing. The export type options are determined by the source application.",
    explanation: "The source application's API capabilities determine which export types are available.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p2_q30",
    type: "multiple-choice",
    question: "Anisha added a lookup to a flow to attach customer information to an invoice. What must she do next?",
    options: [
      "Define input variables for the flow",
      "Define validation rules for the flow",
      "Add results mapping to indicate how to handle the data from the lookup",
      "Add import mapping to indicate how to handle the data from the lookup"
    ],
    correctAnswer: "Add results mapping to indicate how to handle the data from the lookup",
    explanation: "After a lookup, results mapping is required to specify how to integrate the retrieved data.",
    chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
  },
  {
    id: "p2_q31",
    type: "multiple-choice",
    question: "Jim is creating a delta export from an API which doesn't follow the international data standard of YYYY-MM-DD. What options are available to use this API in a flow within Celigo?",
    options: [
      "Select the non-standard date format the API uses from the \"Override delta date format\" option.",
      "Use the \"Delta date lag offset\" to transform the incoming date format to the standard date format.",
      "Enable Developer mode under Account Profile to allow non-standard date formats.",
      "Switch to the All export type, which offers more date format options."
    ],
    correctAnswer: "Select the non-standard date format the API uses from the \"Override delta date format\" option.",
    explanation: "The Override delta date format option allows Celigo to handle non-standard date formats from source APIs.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  }
];

// Export or expose the array if needed elsewhere
// module.exports = { part2Questions };
