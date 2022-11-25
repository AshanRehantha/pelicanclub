import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'

export const UiPrimaryButton = (props) => {
    return (
      <Fragment>
        <div className='d-grid gap-2 butn'>
          <Button
            variant={props.variant}
            disabled={props.disabled}
            size={''}
            onClick={props.onClick}
            type={props.type}
            id={props.id}
            className={props.variant == "primary" ? "butn butn__primary" : "butn__primary"}
          >
            {props.text}
          </Button>
        </div>
      </Fragment>
    )
  }