const task_data = {
  "login": {
    "userId": "",
    "lastLoggedTime": "10-Mar-2020",
    "menus": [
      {
        "name": "My Tasks",
        "iconName": "",
        "url": "",
        "defaultOpen": "Y"
      },
      {
        "name": "Enquiry",
        "iconName": "",
        "url": "",
        "defaultOpen": "N"
      }
    ],
    "launchProcessList": [
      {
        "processName": "Invoice Processing",
        "id": "P001"
      },
      {
        "processName": "Invoice Launch",
        "id": "P002"
      }
    ]
  },
  "taskList": [
    {
      "taskId": "10001",
      "refId": "1234567890",
      "taskName": "Approve Invoice 1",
      "processName": "Invoice Processing",
      "taskSubject": "Invoice for customer XXX",
      "stepName": "Approve Invoice 3",
      "createdDate": "10-Mar-2020",
      "dueDate": "15-Mar-2020",
      "lockedUser": "1111"
    },
    {
      "taskId": "10002",
      "refId": "1234567890",
      "taskName": "Approve Invoice 2",
      "processName": "Invoice Preparation",
      "stepName": "Approve Invoice 5",
      "taskSubject": "Invoice for customer YYY",
      "createdDate": "10-Mar-2020",
      "dueDate": "15-Mar-2020",
      "lockedUser": "1111"
    },
    {
      "taskId": "10003",
      "refId": "1234567890",
      "taskName": "Approve Invoice 3",
      "processName": "Invoice Preparation",
      "stepName": "Approve Invoice 6",
      "taskSubject": "Invoice for customer ZZZ",
      "createdDate": "10-Mar-2020",
      "dueDate": "15-Mar-2020",
      "lockedUser": "1111"
    }
  ],
  "processStepList": [
    {
      "name": "Invoice Processing",
      "id": "P001",
      "steps": [
        {
          "name": "APPRINV3",
          "label": "Approve Invoice 3"
        },
        {
          "name": "APPRINV4",
          "label": "Approve Invoice 4"
        }
      ]
    },
    {
      "name": "Invoice Preparation",
      "id": "P002",
      "steps": [
        {
          "name": "APPRINV5",
          "label": "Approve Invoice 5"
        },
        {
          "name": "APPRINV6",
          "label": "Approve Invoice 6"
        }
      ]
    }
  ],
  "taskDetails": [
    {
      "taskId": "10001",
      "refId": "1234567890",
      "taskName": "Approve Invoice 1",
      "processName": "Invoice Processing 1",
      "taskSubject": "Invoice for customer XXX 1",
      "createdDate": "10-Mar-2020",
      "dueDate": "15-Mar-2020",
      "lockedUser": "1111",
      "formData": {
        "fieldmatrix": "2x2",
        "fields": [
          {
            "name": "email",
            "label": "Email",
            "value": "",
            "type": "string",
            "maxlength": 100,
            "minlength": 2,
            "choicename": "",
            "visibility": "",
            "helpText": ""
          },
          {
            "name": "name",
            "label": "Name",
            "value": "",
            "type": "string",
            "maxlength": 100,
            "minlength": 2,
            "choicename": "",
            "visibility": "",
            "helpText": ""
          },
          {
            "name": "DOB",
            "label": "Date",
            "value": "",
            "type": "calender",
            "maxlength": 100,
            "minlength": 2,
            "choicename": "",
            "visibility": ""
          },
          {
            "name": "country",
            "label": "Country",
            "value": "",
            "type": "dropdown",
            "maxlength": 100,
            "minlength": 2,
            "choicename": "countrylist",
            "visibility": "",
            "helpText": ""
          }
        ],
        "choicelist": [
          {
            "choicename": "countrylist",
            "values": [
              {
                "label": "India",
                "value": "IN"
              },
              {
                "label": "Pakistan",
                "value": "PK"
              },
              {
                "label": "Bangladesh",
                "value": "BD"
              }
            ]
          }
        ],
        "actions": [
          {
            "name": "Reject",
            "style": "reject",
            "commentsReq": "N"
          },
          {
            "name": "Approve",
            "style": "default",
            "commentsReq": "Y"
          }
        ]
      }
    },
    {
      "taskId": "10002",
      "refId": "1234567890",
      "taskName": "Approve Invoice 2",
      "processName": "Invoice Processing 2",
      "taskSubject": "Invoice for customer XXX 2",
      "createdDate": "10-Mar-2020",
      "dueDate": "15-Mar-2020",
      "lockedUser": "1111",
      "formData": {
        "fieldmatrix": "2x2",
        "fields": [
          {
            "name": "email",
            "label": "Email",
            "value": "",
            "type": "string",
            "maxlength": 100,
            "minlength": 2,
            "choicename": "",
            "visibility": "",
            "helpText": ""
          },
          {
            "name": "name",
            "label": "Name",
            "value": "",
            "type": "string",
            "maxlength": 100,
            "minlength": 2,
            "choicename": "",
            "visibility": "",
            "helpText": ""
          },
          {
            "name": "DOB",
            "label": "Date",
            "value": "",
            "type": "calender",
            "maxlength": 100,
            "minlength": 2,
            "choicename": "",
            "visibility": ""
          },
          {
            "name": "country",
            "label": "Country",
            "value": "",
            "type": "dropdown",
            "maxlength": 100,
            "minlength": 2,
            "choicename": "countrylist",
            "visibility": "",
            "helpText": ""
          }
        ],
        "choicelist": [
          {
            "choicename": "countrylist",
            "values": [
              {
                "label": "India",
                "value": "IN"
              },
              {
                "label": "Pakistan",
                "value": "PK"
              },
              {
                "label": "Bangladesh",
                "value": "BD"
              }
            ]
          }
        ],
        "actions": [
          {
            "name": "Reject",
            "style": "reject",
            "commentsReq": "N"
          },
          {
            "name": "Approve",
            "style": "default",
            "commentsReq": "Y"
          }
        ]
      }
    },
    {
      "taskId": "10003",
      "refId": "1234567890",
      "taskName": "Approve Invoice 3",
      "processName": "Invoice Processing 3",
      "taskSubject": "Invoice for customer XXX 3",
      "createdDate": "10-Mar-2020",
      "dueDate": "15-Mar-2020",
      "lockedUser": "1111",
      "formData": {
        "fieldmatrix": "2x2",
        "fields": [
          {
            "name": "email",
            "label": "Email",
            "value": "",
            "type": "string",
            "maxlength": 100,
            "minlength": 2,
            "choicename": "",
            "visibility": "",
            "helpText": ""
          },
          {
            "name": "name",
            "label": "Name",
            "value": "",
            "type": "string",
            "maxlength": 100,
            "minlength": 2,
            "choicename": "",
            "visibility": "",
            "helpText": ""
          },
          {
            "name": "DOB",
            "label": "Date",
            "value": "",
            "type": "calender",
            "maxlength": 100,
            "minlength": 2,
            "choicename": "",
            "visibility": ""
          },
          {
            "name": "country",
            "label": "Country",
            "value": "",
            "type": "dropdown",
            "maxlength": 100,
            "minlength": 2,
            "choicename": "countrylist",
            "visibility": "",
            "helpText": ""
          }
        ],
        "choicelist": [
          {
            "choicename": "countrylist",
            "values": [
              {
                "label": "India",
                "value": "IN"
              },
              {
                "label": "Pakistan",
                "value": "PK"
              },
              {
                "label": "Bangladesh",
                "value": "BD"
              }
            ]
          }
        ],
        "actions": [
          {
            "name": "Reject",
            "style": "reject",
            "commentsReq": "N"
          },
          {
            "name": "Approve",
            "style": "default",
            "commentsReq": "Y"
          }
        ]
      }
    }
  ]
}

export default task_data;
