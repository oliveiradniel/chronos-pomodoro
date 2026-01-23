import {
  HomeIcon,
  HistoryIcon,
  TimerIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';

import { Button } from './button';

export function Header() {
  return (
    <header className="flex flex-col gap-8">
      <h1 className="text-primary flex flex-col items-center gap-2 text-4xl font-bold">
        <TimerIcon aria-hidden="true" className="size-15" /> Chronos
      </h1>

      <nav className="flex items-center justify-center gap-4">
        <Button size="icon" type="button">
          <HomeIcon />
        </Button>

        <Button size="icon" type="button">
          <HistoryIcon />
        </Button>

        <Button size="icon" type="button">
          <SettingsIcon />
        </Button>

        <Button size="icon" type="button">
          <SunIcon />
        </Button>
      </nav>
    </header>
  );
}
