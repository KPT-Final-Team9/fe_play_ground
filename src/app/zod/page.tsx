'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}
interface IFormInput {
  firstName: string;
  gender: GenderEnum;
  email: string;
  married: boolean;
  password: string;
  age: number;
}
const enumToList = (enumObj: any) => {
  return Object.values(enumObj);
};
const lis = enumToList(GenderEnum) as unknown as [string, ...string[]];

const User = z.object({
  firstName: z
    .string()
    .min(1, { message: '이름은 필수' })
    .min(6, { message: '이름은 6이상 12이하' })
    .max(12, { message: '이름은 6이상 12이하' }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: '비번은 6이상 12이하' })
    .max(12, { message: '비번은 6이상 12이하' })
    .regex(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/, {
      message: '영문+숫자+특수문자(! @ # $ % & * ?)',
    }),
  age: z
    .number()
    .int()
    .min(2, { message: '비번은 6이상 12이하' })
    .max(20, { message: '비번은 6이상 12이하' }),
  isMarried: z.boolean().optional(),
  gender: z.enum(lis).default(GenderEnum.other),
});

export default function Page() {
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    watch,
    resetField,
    clearErrors,
    getFieldState,
    setValue,
    trigger,

    formState: { errors, isValid, isLoading, isSubmitted, isSubmitting },
  } = useForm<IFormInput>({
    criteriaMode: 'all',
    resolver: zodResolver(User),
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
  };

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleKeyDown = (event: any) => {
    if (!/[0-9]/.test(event.key) && event.key !== 'Backspace') {
      event.preventDefault();
      console.log('set error');
      setError('age', {
        type: 'ac',
        message: ' 숫자만적어라',
      });
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-20 mt-16  bg-white flex-col flex gap-8 font-semibold text-lg">
        {/* 이름 */}
        <div>
          <label className="mr-3">First Name</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="firstName"
            {...register('firstName')}
          />
          <ErrorMsg>{errors.firstName?.message}</ErrorMsg>
        </div>
        {/* 이메일 */}
        <div>
          <label className="mr-3">mail</label>
          <input
            className="input input-bordered w-full max-w-xs"
            placeholder="mail"
            {...register('email')}
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        </div>
        {/* 비밀번호 */}
        <div>
          <label className="mr-3">비밀번호</label>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs "
            placeholder="mail"
            {...register('password', {
              required: '올바른 비밀번호를 입력해주세요.',
              pattern: emailRegex,
            })}
          />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
        </div>
        <div>
          <label className="mr-3">나이</label>
          {/* 나이 */}
          <input
            className="input input-bordered w-full max-w-xs"
            placeholder="age"
            onKeyDownCapture={handleKeyDown}
            type="number"
            min={1}
            max={60}
            id={'age'}
            {...register('age', { valueAsNumber: true })}
            aria-invalid={errors?.age ? 'true' : 'false'}
          />
          {errors.age && (
            <ErrorMsg aria-label={'age'}>{errors.age.message}</ErrorMsg>
          )}
        </div>
        <div>
          {/* 결혼했니 */}
          <label className="mr-3">결혼했니</label>
          <input
            type="radio"
            value="true"
            {...register('married', { required: '결혼 여부를 선택해주세요.' })}
          />{' '}
          예
          <input
            type="radio"
            value="false"
            {...register('married', { required: '결혼 여부를 선택해주세요.' })}
          />{' '}
          아니오
          {errors.married && <ErrorMsg>{errors.married.message}</ErrorMsg>}
        </div>
        <div>
          <label className="mr-3">Gender Selection</label>
          <select {...register('gender')}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-accent">
          제출
        </button>
      </form>
    </>
  );
}

function ErrorMsg({ children, ...props }: { children: React.ReactNode }) {
  return (
    <p
      className="text-red-500 text-sm"
      {...props}>
      {children}
    </p>
  );
}
