export function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center justify-center gap-6">
      <a href="" className="text-muted text-sm">
        Entenda como funciona a técnica de pomodoro
      </a>
      <a href="" className="text-sm">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </a>
    </footer>
  );
}
