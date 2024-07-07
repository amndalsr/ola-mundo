import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpeg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou a Amanda!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto da Amanda sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou desenvolvedora fullstack e estou feliz de te ver
        por aqui.
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou no ensino médio integrado ao
        curso de Informática, na Escola Técnica Estadual (ETE). Eu aprendi
        lógica de programação e o básico de várias linguagens, mas sem
        aprofundar muito em cada uma delas. Eu gostava muito de estudar
        programação, mas na época não fazia ideia de que trabalharia com isso
        hoje.
      </p>
      <p className={styles.paragrafo}>
        No ensino superior, escolhi cursar Ciência da Computação na Universidade
        Católica de Pernambuco (UNICAP). Lá eu consegui ter ainda mais contato
        com a tecnologia e com linguagens de programação como Java, Python,
        JavaScript e descobri minha paixão tanto pelo frontend quanto pelo
        backend. Lá também tive a oportunidade de contribuir em alguns projetos
        e de começar os meus próprios.
      </p>
      <p className={styles.paragrafo}>
        Com isso tive minha experiência de dev mais próxima da realidade, com
        prazos de implementação dos projetos, e aprendi muito enquanto
        codificava.
      </p>
      <p className={styles.paragrafo}>
        E foi ainda na faculdade que consegui meu primeiro estágio como
        desenvolvedora mobile após uma empresa me encontrar por eu ter
        participado de uma maratona de programação. Lá pude evoluir muito tanto
        como profissional quanto pessoa e desenvolvi ainda mais interesse por
        certas áreas. Fui muito acolhida e foi muito gratificante ter essa como
        minha primera experiência no mercado de trabalho.
      </p>
      <p className={styles.paragrafo}>
        Desde então, tem sido apenas aprendizados atrás de aprendizados. 
        E estou no momento me aperfeiçoando ainda mais para novas oportunidades 
        e expandir meus horizontes. 
      </p>
      <p className={styles.paragrafo}>
        Agora que você conhece um pouco mais sobre mim espero te ajudar com meu conteúdo!
      </p>
    </PostModelo>
  );
}
