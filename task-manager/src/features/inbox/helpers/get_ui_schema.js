const getUiSchema = (form) => {
  let ui_schema = {
    "type": "VerticalLayout",
    "elements": [

    ]
  }
  form.fields.map((item) => {
    let schema_object = {
      type: "Control",
      label: item.label,
      scope: `#/properties/${item.name}`
    }
    if (item.type === 'dropdown') {
      let selected_choicelist = form.choicelist.filter((choice) => {
        return choice.choicename === item.choicename
      })
      schema_object.suggestion = selected_choicelist.length && selected_choicelist[0].values.map((choice_value) => {
        return choice_value.name;
      })
    }
    ui_schema["elements"].push(schema_object);
  })
}

export default getUiSchema;