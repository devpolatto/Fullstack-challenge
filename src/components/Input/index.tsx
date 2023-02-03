import React, {useRef, useEffect} from 'react';
import { useField } from '@unform/core'

import {  IInterface } from '../../@types'


export const Input: React.FC = ({name, placeholder, type, ...rest}: IInterface) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const { fieldName, defaultValue, registerField } = useField(name)

    useEffect(() => {}, [])

  return(
    <input name={name}
    type={type}
    placeholder={placeholder} 
    {...rest}/>
  );
}