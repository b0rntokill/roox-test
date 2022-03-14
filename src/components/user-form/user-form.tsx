import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { User, UserRequest } from "../../types/users";
import CustomButton from "../common/custom-button/custom-button";
import CustomInput from "../common/custom-input/custom-input";
import { FormFields, INPUT_FIELDS } from "../user-info/const";
import "./user-form.scss";

type UserFormProps = {
  userInfo: User;
  isReadonly: boolean;
  onFormSubmit: (data: UserRequest) => void;
};

type UserFormFields = Record<FormFields, string>;

const getFormInitialState = (userInfo: User) => ({
  name: userInfo.name,
  username: userInfo.username,
  email: userInfo.email,
  street: userInfo.address.street,
  city: userInfo.address.city,
  zipCode: userInfo.address.zipcode,
  website: userInfo.website,
});

function UserForm({ userInfo, isReadonly, onFormSubmit }: UserFormProps): JSX.Element {
  const { id } = userInfo;
  const { control, handleSubmit } = useForm<UserFormFields>({
    defaultValues: getFormInitialState(userInfo),
  });

  const onSubmit: SubmitHandler<UserFormFields> = (data) => {
    const request = { ...data, id };
    onFormSubmit(request);
  };

  // TODO можно при необходимости настроить валидацию каждого поля в соответствии с критериями/ТЗ. Задан необходимый минимум по ТЗ.

  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        {INPUT_FIELDS.map((input) => (
          <Controller
            key={input.id}
            control={control}
            name={input.id}
            rules={{ required: true }}
            render={({ field: { onChange, value, name, ref }, fieldState: { error } }) => (
              <CustomInput
                error={error}
                onChange={onChange}
                inputRef={ref}
                name={name}
                label={input.label}
                type={input.type}
                value={value}
                readOnly={isReadonly}
              />
            )}
          />
        ))}
      </fieldset>
      <div className="user-form__btn-wrapper">
        <CustomButton text="Отправить" type="submit" disabled={isReadonly} />
      </div>
    </form>
  );
}

export default UserForm;
