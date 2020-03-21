const json_form_schema = {
  "type": "object",
  "properties": {
    "creditor": {
      "type": "string",
      "minLength": 3,
      "description": ""
    },
    "amount": {
      "type": "string",
      "description": ""
    },
    "invoice-category": {
      "type": "string",
      "description": ""
    },
    "invoice-number": {
      "type": "string",
      "description": ""
    },
    "approve": {
      "type": "boolean"
    }
  }
};

export default json_form_schema;
