import React from 'react'

type Props = {
  name: string,
  label: string,
  type: string,
  value: string,
  maxLength: number,
  placeholder: string,
  required?: boolean,
  autoFocus?: boolean,
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input = (props: Props) => {
  return (
    <div className="flex relative flex-col group">
      <label htmlFor={props.name} className='block mb-1 text-sm font-medium'>
        {props.label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:border-transparent focus:ring-1 focus:ring-neutral-600 focus:outline-none block w-full p-2.5"
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleOnChange}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        autoComplete='on'
        required={props.required}
        autoFocus={props.autoFocus}
      />
    </div>
  )
}

export default Input