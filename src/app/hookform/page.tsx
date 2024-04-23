'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FieldErrors } from '../../../node_modules/react-hook-form/dist/types/errors'
import { DeepPartial } from '../../../node_modules/react-hook-form/dist/types/utils'
import { useEffect, useState } from 'react'

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other'
}

interface IFormInput {
  firstName: string
  gender: GenderEnum
  mail: string
}

export default function Page() {
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    watch,
    resetField,
    formState: { errors, isValid }
  } = useForm<IFormInput>({ criteriaMode: 'all' })

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data)
  }

  // console.log(watch('firstName'))
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const onSubmitHandler = (e: any) => {
    console.log(getValues())
    resetField('firstName')
    if (e.target.value.length > 4) {
      setError('firstName', {
        type: 'react',
        message: 'b입니다.'
      })
    }
    if (e.target.value.length < 4) {
      setError('firstName', {
        type: 'ac',
        message: '적은 숫자'
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-20 mt-16  bg-emerald-200 ">
      <label>First Name</label>
      <input
        type="text"
        placeholder="firstName"
        {...register('firstName', {
          required: true
        })}
        onBlur={onSubmitHandler}
      />
      {errors.firstName?.types?.manual && <p>{errors.firstName?.message}</p>}
      {/* {errors.firstName?.types?.minLength && <p>{errors.firstName?.message}</p>} */}
      {errors.firstName && errors.firstName.type === 'react' && (
        <p>{errors.firstName.message}</p>
      )}
      <label>mail</label>
      <input
        placeholder="mail"
        {...register('mail', {
          required: '메일 입력해주세요.',
          pattern: emailRegex
        })}></input>
      {errors.mail && <p>올바른 이메일을 작성해주세요.</p>}
      <label>Gender Selection</label>
      <select {...register('gender')}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>

      <button
        onClick={onSubmitHandler}
        type="submit">
        제출
      </button>
    </form>
  )
}
