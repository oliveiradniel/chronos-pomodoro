import { useEffect, useState } from 'react';

import {
  HomeIcon,
  HistoryIcon,
  TimerIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';

import { Button } from './button';

type AvailableThemes = 'dark' | 'light';

export function Header() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const currentTheme = localStorage.getItem('theme') as AvailableThemes;

    return currentTheme === undefined ? 'dark' : currentTheme;
  });

  function handleToggleTheme() {
    setTheme(prevState => {
      const newTheme = prevState === 'dark' ? 'light' : 'dark';

      localStorage.setItem('theme', newTheme);

      return newTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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

        <Button
          aria-label="Alterar o tema"
          title="Alterar o tema"
          size="icon"
          type="button"
          onClick={handleToggleTheme}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
      </nav>
    </header>
  );
}
