import React, {useRef} from 'react';

import {} from '@unform/core'
import { Form } from '@unform/web'

import {Input} from '../Input'

const DataForm: React.FC = () => {

    

    function handleSubmit(data: any) {
        console.log(data)
    }

  return(
    <Form onSubmit={handleSubmit}>
        <Input name={}/>
    </Form>
  )
}

export default DataForm;