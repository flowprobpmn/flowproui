const ui_schema = {
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "Control",
      "label": "Creditor",
      "scope": "#/properties/creditor"
    },
    {
      "type": "Control",
      "label": "Amount",
      "scope": "#/properties/amount"
    },
    {
      "type": "Control",
      "label": "Invoice Category",
      "scope": "#/properties/invoice-category"
    },
    {
      "type": "Control",
      "label": "Invoice Number",
      "scope": "#/properties/invoice-number"
    },
    {
      "type": "Control",
      "label": "Do you approve?",
      "scope": "#/properties/approve"
    }
  ]
}

export default ui_schema;