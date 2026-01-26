import type { ComponentProps } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button>;

const button = tv({
  base: 'h-10 flex cursor-pointer items-center justify-center rounded-sm transition-colors focus-visible:outline-2 outline-offset-2 outline-primary',
  variants: {
    size: {
      default: 'w-full',
      icon: 'w-10',
    },
    background: {
      default: 'bg-primary text-over-primary hover:bg-primary/70',
      destructive: 'bg-error text-over-error hover:bg-error/70',
    },
  },
  defaultVariants: {
    size: 'default',
    background: 'default',
  },
});

export function Button({ className, size, background, ...props }: ButtonProps) {
  return (
    <button className={button({ size, background, className })} {...props} />
  );
}
