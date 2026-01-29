import { Link } from '@tanstack/react-router';

import { cn } from '../utils/cn';

export function About() {
  const sectionStyles = 'space-y-4';
  const strongStyles = 'font-bold text-primary';
  const h2Styles = 'text-xl font-bold';
  const h3Styles = 'text-md font-medium';

  const ariaDescribedbyTitle = 'main-title-pomodoro';
  const ariaDescribedbyMain = 'about-the-pomodoro-technique';
  const ariaDescribedbyHowItWorks = 'how-it-works';
  const ariaDescribedbyDiferential = 'diferential-our-pomodoro';
  const ariaDescribedbyTimeCustomization = 'time-customization';
  const ariaDescribedbyOrganizationCycles = 'organization-cycles';
  const ariaDescribedbyVisualizationOfCycles = 'visualization-of-cycles';
  const ariaDescribedbyAutomaticHistory = 'automatic-history';
  const ariaDescribedbyWhyUse = 'why-use';

  return (
    <div
      aria-describedby={ariaDescribedbyTitle}
      className="flex flex-col gap-8"
    >
      <h1
        id={ariaDescribedbyTitle}
        className="flex flex-col items-center gap-2 text-center text-3xl font-bold sm:text-4xl"
      >
        A Técnica Pomodoro 🍅
      </h1>

      <div className="mx-auto flex w-full max-w-200 flex-col gap-8 text-center sm:text-start">
        <section
          aria-describedby={ariaDescribedbyMain}
          className={cn(sectionStyles)}
        >
          <p id={ariaDescribedbyMain}>
            A Técnica Pomodoro é uma metodologia de produtividade criada por{' '}
            <strong className={cn(strongStyles)}>Francesco Cirillo</strong>, que
            consiste em dividir o trabalho em blocos de tempo (os famosos
            "Pomodoros") intercalados com pausas. O objetivo é manter o foco
            total por um período curto e garantir descansos para evitar o
            cansaço mental.
          </p>

          <img aria-hidden="true" src="https://placehold.co/1920x1080" alt="" />
        </section>

        <section
          aria-describedby={ariaDescribedbyHowItWorks}
          className={cn(sectionStyles)}
        >
          <h2 id={ariaDescribedbyHowItWorks} className={cn(h2Styles)}>
            Como funciona o Pomodoro tradicional?
          </h2>

          <ul
            aria-label="Como funciona nosso pomodoro?"
            className="list-inside list-decimal text-start"
          >
            <li>
              <strong className={cn(strongStyles)}>Defina uma tarefa</strong>{' '}
              que você deseja realizar.
            </li>
            <li>
              <strong className={cn(strongStyles)}>
                Trabalhe nela por 25 minutos
              </strong>{' '}
              sem interrupções.
            </li>
            <li>
              <strong className={cn(strongStyles)}>
                Faça uma pausa curta de 5 minutos
              </strong>
              .
            </li>
            <li>
              <strong className={cn(strongStyles)}>
                A cada 4 ciclos, faça uma pausa longa
              </strong>{' '}
              (geralmente 15 a 30 minutos).
            </li>
          </ul>
        </section>

        <section
          aria-describedby={ariaDescribedbyDiferential}
          className={cn(sectionStyles)}
        >
          <h2 id={ariaDescribedbyDiferential} className={cn(h2Styles)}>
            Mas o <strong className={cn(strongStyles)}>Chronos Pomodoro</strong>{' '}
            tem um diferencial 🚀
          </h2>

          <p>
            Nosso app segue o conceito original, mas com algumas melhorias e
            personalizações pra deixar o processo ainda mais eficiente:
          </p>

          <section
            aria-describedby={ariaDescribedbyTimeCustomization}
            className={cn(sectionStyles)}
          >
            <h3 id={ariaDescribedbyTimeCustomization} className={cn(h3Styles)}>
              ⚙️ Personalização do tempo
            </h3>

            <p>
              Você pode configurar o tempo de foco, descanso curto e descanso
              longo do jeito que quiser! Basta acessar a{' '}
              <Link to="/settings/" className={cn('underline', strongStyles)}>
                página de configurações
              </Link>{' '}
              e ajustar os minutos como preferir.
            </p>
          </section>

          <section
            aria-describedby={ariaDescribedbyOrganizationCycles}
            className={cn(sectionStyles)}
          >
            <h3 id={ariaDescribedbyOrganizationCycles} className={cn(h3Styles)}>
              🔁 Ciclos organizados em sequência
            </h3>

            <p>
              A cada ciclo completado, uma nova task é adicionada
              automaticamente ao seu histórico, e o app já sugere o próximo
              ciclo (foco ou descanso).
            </p>

            <p>
              <strong className={cn(strongStyles)}>Nosso padrão:</strong>
            </p>
            <ul className="text-start">
              <li>
                Ciclos <strong className={cn(strongStyles)}>ímpares</strong>:
                Trabalho (foco).
              </li>
              <li>
                Ciclos <strong className={cn(strongStyles)}>pares</strong>:
                Descanso curto.
              </li>
              <li>
                Ciclo <strong className={cn(strongStyles)}>8</strong>: Descanso
                longo especial, pra resetar o ciclo completo.
              </li>
            </ul>
          </section>

          <section
            aria-describedby={ariaDescribedbyVisualizationOfCycles}
            className={cn(sectionStyles)}
          >
            <h3
              id={ariaDescribedbyVisualizationOfCycles}
              className={cn(h3Styles)}
            >
              🍅 Visualização dos ciclos
            </h3>

            <p>
              Logo abaixo do cronômetro, você verá bolinhas coloridas
              representando os ciclos:
            </p>

            <ul aria-label="Ciclos do nosso pomodoro" className="text-start">
              <li>🟡 Amarelo: Ciclo de trabalho (foco).</li>
              <li>🟢 Verde: Descanso curto.</li>
              <li>🔵 Azul: Descanso longo (aparece a cada 8 ciclos).</li>
            </ul>

            <p>
              Assim, você sempre sabe em que parte do processo está e o que vem
              a seguir. Não precisa mais anotar no papel ou ficar calculando de
              cabeça!
            </p>
          </section>

          <section
            aria-describedby={ariaDescribedbyAutomaticHistory}
            className={cn(sectionStyles)}
          >
            <h3 id={ariaDescribedbyAutomaticHistory}>
              📊 Histórico automático
            </h3>

            <p>
              Todas as suas tarefas e ciclos concluídos ficam salvos no{' '}
              <Link to="/history/" className={cn('underline', strongStyles)}>
                histórico
              </Link>
              , com status de completas ou interrompidas. Assim, você consegue
              acompanhar sua evolução ao longo do tempo.
            </p>
          </section>
        </section>

        <section
          aria-describedby={ariaDescribedbyWhyUse}
          className={cn(sectionStyles)}
        >
          <h2 id={ariaDescribedbyWhyUse} className={cn(h2Styles)}>
            Por que usar o Chronos Pomodoro?
          </h2>

          <ul aria-label="Por que usar o nosso pomodoro" className="text-start">
            <li>✅ Organize seu foco com clareza.</li>
            <li>✅ Trabalhe e descanse na medida certa.</li>
            <li>✅ Personalize seus próprios ciclos e tempos.</li>
            <li>✅ Acompanhe seu histórico automaticamente.</li>
          </ul>

          <p>
            <strong className={cn(strongStyles)}>Pronto pra focar?</strong> Bora
            lá <Link to="/">voltar para a página inicial</Link> e iniciar seus
            Pomodoros! 🍅🚀
          </p>

          <p>
            <em>"Foco total, sem pressa, sem pausa, só vai!"</em> 💪🧘‍♂️
          </p>
        </section>
      </div>
    </div>
  );
}
