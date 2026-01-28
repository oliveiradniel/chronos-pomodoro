import { Outlet } from '@tanstack/react-router';

import { Footer } from '../components/footer';
import { Header } from '../components/header';

export function Layout() {
  return (
    <div className="mx-auto max-w-300 p-4 pt-16">
      <Header />

      <main className="flex flex-col gap-12">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
