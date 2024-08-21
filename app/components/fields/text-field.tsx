import { useFormikContext } from "formik";
import React from "react";

export interface TextFieldType {
    id: string;
    value: string;
    label: string;
    [key: string]: unknown;
}

export function TextField({ id, value, label, ...props }: TextFieldType) {
  const { handleBlur, handleChange } = useFormikContext();

  return (
    <div className="relative w-full my-3">
      <input
        id={id}
        type="text"
        name={id}
        placeholder={label}
        value={value}
        className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-indigo-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
      <label
        htmlFor="name"
        className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-indigo-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
      >
        {label}
      </label>
    </div>
  );
}
