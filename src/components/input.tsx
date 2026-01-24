import type { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

export function Input({ name, placeholder, type, ...props }: InputProps) {
  return (
    <div className="relative w-full">
      <input
        {...props}
        id={name}
        type={type ?? 'text'}
        placeholder=" "
        className="peer outline-primary focus:border-primary w-full border-b-2 border-gray-600 px-3 py-2 pt-4 transition-all focus:outline-none focus-visible:outline-2"
      />

      <label
        htmlFor={name}
        className="text-primary pointer-events-none absolute top-1 left-3 text-xs transition-all select-none peer-placeholder-shown:top-4 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600"
      >
        {placeholder}
      </label>
    </div>
  );
}
