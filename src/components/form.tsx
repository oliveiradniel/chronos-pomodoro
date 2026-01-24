import { useForm } from 'react-hook-form';

import { PlayCircleIcon } from 'lucide-react';

import { Button } from './button';
import { Input } from './input';

export function Form() {
  const form = useForm<{ titleTask: string }>();

  const handleSubmit = form.handleSubmit(data => {
    console.log({ data });
  });

  return (
    <div className="mx-auto flex w-full flex-col items-center gap-6">
      <span>Título da tarefa</span>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[320px] flex-col items-center"
      >
        <Input
          {...form.register('titleTask')}
          name="task"
          placeholder="Tarefa"
        />

        <span className="mt-3 text-center text-sm">
          O próximo ciclo é de <strong>30min</strong>
        </span>

        <Button type="submit" className="mt-12">
          <PlayCircleIcon />
        </Button>
      </form>
    </div>
  );
}
