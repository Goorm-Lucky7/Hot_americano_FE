import { postCheckNickname, postEmailCode, postEmailVerify } from '@/apis/member';
import { RegisterOptions, UseFormSetValue, useForm } from 'react-hook-form';
import { ExtendedSignupForm } from '@/types/member';
import { Button, InputField } from '@/components';
import { useInput } from '@/hooks/useInput';
import { useState } from 'react';

import * as S from './styles';

const SignupCheck = ({
  setValue,
  label,
  value,
  registerOptions,
}: {
  setValue: UseFormSetValue<ExtendedSignupForm>;
  label: string;
  value: string;
  registerOptions: RegisterOptions;
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<{ [key: string]: string }>({
    mode: 'onChange',
    defaultValues: { [value]: '' },
  });
  const [isView, setIsView] = useState<boolean>(false);
  const onSubmit = async (form: { [key: string]: string }) => {
    const value = Object.keys(form)[0];
    if (value === 'email') {
      await postEmailCode(form as { email: string }).then(() => {
        setValue('isCheckedEmail', true, { shouldValidate: true });
        setValue('email', form.email, { shouldValidate: true }), setIsView(true);
      });
    } else {
      await postCheckNickname(form as { nickname: string }).then(() => {
        console.log('hill');
        setValue('isCheckedNickname', true, { shouldValidate: true });
        setValue('nickname', form.nickname, { shouldValidate: true });
      });
    }
  };
  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <InputField
        register={register(value, registerOptions)}
        error={errors[value]}
        label={label}
        value={value}
        inputType="alert"
        disabled={isView}
      />
      <Button buttonType="reverseRectangleGray" size="sm" type="submit" disabled={isView}>
        {value === 'email' ? '인증번호 받기' : '중복확인'}
      </Button>
      {isView && <CheckInputBox email={getValues('email')} />}
    </S.Container>
  );
};

const CheckInputBox = ({ email }: { email: string }) => {
  const [form, onChange] = useInput({ code: '' });
  const onClickVerifyEmail = async () => {
    await postEmailVerify({ code: form.code, email });
  };
  return (
    <S.CheckInputBox>
      <S.CheckModalInput
        name="code"
        placeholder="코드 입력"
        value={form.code}
        onChange={onChange}
      />
      <Button
        buttonType="reverseRectangleGray"
        size="sm"
        type="button"
        onClick={onClickVerifyEmail}
      >
        인증
      </Button>
    </S.CheckInputBox>
  );
};

export default SignupCheck;
