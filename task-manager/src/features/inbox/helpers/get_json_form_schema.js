const getJsonFormSchema = (form) => {
  let json_form_schema = {
    "type": "object",
    "properties": {

    }
  };

  form.fields.map((item) => {
    debugger;
    let schema_object = {
      type: item.type === 'calender' ? 'string' : item.type,
      minLength: item.minlength,
      maxLenght: item.maxlength,
      description: ""
    }
    if (item.type === 'dropdown') {
      let selected_choicelist = form.choicelist.filter((choice) => {
        return choice.choicename === item.choicename
      })
      schema_object.type = 'string';
      schema_object.enum = selected_choicelist.length && selected_choicelist[0].values.map((choice_value) => {
        return choice_value.value;
      })
    }
    if (item.type === 'calender') {
      schema_object.format = 'date';
    }
    json_form_schema["properties"][item.name] = schema_object;
  });
  return json_form_schema;
}

export default getJsonFormSchema;