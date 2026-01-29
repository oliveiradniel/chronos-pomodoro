import { createFileRoute } from '@tanstack/react-router';

import { About } from '../pages/about';

export const Route = createFileRoute('/sobre-a-tecnica-pomodoro')({
  component: About,
});
