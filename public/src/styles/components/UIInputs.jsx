import React, { useEffect, useState } from 'react';
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";

export const UiFormsInputs = (props) => {
    return (
      <FormGroup>
        <FormControl
          size=''
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onchange}
          maxLength={props.maxLength}
          className={"form-control ui-inputs-with-radus"}
          value={props.value}
        />
      </FormGroup>
    )
  }