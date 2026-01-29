import { Link } from '@tanstack/react-router';

export function NotFound() {
  const ariaDescribedby = 'not-found';

  return (
    <div aria-describedby={ariaDescribedby} className="flex flex-col gap-8">
      <h1
        id={ariaDescribedby}
        className="flex flex-col items-center gap-2 text-center text-3xl font-bold sm:text-4xl"
      >
        404 - Página não encontrada
      </h1>

      <div className="mx-auto flex w-full max-w-200 flex-col gap-4 text-center sm:text-start">
        <p>
          Opa! Parece que a página que você está tentando acessar não existe.
          Talvez ela tenha tirado férias, resolvido explorar o universo ou se
          perdido em algum lugar entre dois buracos negros. 🌌
        </p>

        <p>
          Mas calma, você não está perdido no espaço (ainda). Dá pra voltar em
          segurança para a{' '}
          <Link to="/" replace className="text-primary font-bold">
            página principal
          </Link>{' '}
          ou para o histórico — ou pode ficar por aqui e fingir que achou uma
          página secreta que só os exploradores mais legais conseguem acessar.
          🧭✨
        </p>

        <p>
          Se você acha que essa página deveria existir (ou se quiser bater um
          papo sobre viagem no tempo e buracos de minhoca), é só entrar em
          contato. Caso contrário, use o menu para voltar ao mundo real.
        </p>

        <p>
          Enquanto isso, fica aqui uma reflexão: "Se uma página não existe na
          internet, será que ela existiu de verdade?" 🤔💭
        </p>
      </div>
    </div>
  );
}
