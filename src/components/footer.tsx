import { Link } from '@tanstack/react-router';

export function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center justify-center gap-4">
      <Link
        to="/sobre-a-tecnica-pomodoro"
        className="text-sm text-gray-300 underline transition-all hover:underline"
      >
        Entenda como funciona a técnica de pomodoro
      </Link>
      <span className="text-xs">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </span>
    </footer>
  );
}
