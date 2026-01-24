import type { ComponentProps } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button>;

const button = tv({
  base: 'bg-primary text-over-primary h-10 hover:bg-primary/70 flex  cursor-pointer items-center justify-center rounded-sm transition-colors focus-visible:outline-2 outline-offset-2 outline-primary',
  variants: {
    size: {
      default: 'w-full',
      icon: 'w-10',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export function Button({ className, size, ...props }: ButtonProps) {
  return <button className={button({ size, className })} {...props} />;
}
