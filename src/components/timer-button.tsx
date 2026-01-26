import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { Button, type ButtonProps } from './button';

export type TimerButtonProps = ButtonProps & {
  status: 'running' | 'finished';
};

export function TimerButton({ status, className, ...props }: TimerButtonProps) {
  const background = status === 'running' ? 'destructive' : 'default';
  const ariaLabel =
    status === 'running' ? 'Parar cronômetro' : 'Iniciar cronômetro';

  return (
    <Button
      aria-label={ariaLabel}
      background={background}
      className={className}
      {...props}
    >
      {status === 'running' ? <StopCircleIcon /> : <PlayCircleIcon />}
    </Button>
  );
}
