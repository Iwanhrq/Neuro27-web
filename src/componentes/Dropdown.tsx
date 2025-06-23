import { useState } from 'react';
import estilos from './Dropdown.module.css';

interface Participante {
  nome: string;
  texto: string;
}

const participantes: Participante[] = [
  {
    nome: 'Titúlo completo',
    texto: 'Neuro27: Aplicativo de Educação Neuropsicológica sobre Emoções e Neurotransmissores'
  },
  {
    nome: 'Proposta',
    texto: 'O Neuro27 é um aplicativo interativo que ensina, de forma lúdica e baseada em evidências científicas, o funcionamento dos neurotransmissores e suas relações com as emoções. A proposta é ajudar jovens a entenderem melhor seus sentimentos e desenvolverem inteligência emocional por meio do autoconhecimento e da neuroeducação.'
  },
  {
    nome: 'Justificativa',
    texto: 'Muitos jovens enfrentam desafios emocionais no ambiente escolar e fora dele, mas têm pouco acesso a informações claras e confiáveis sobre como o cérebro influencia suas emoções. O Neuro27 nasce da necessidade de transformar esse cenário, oferecendo uma ferramenta acessível, moderna e educativa para promover saúde emocional de forma preventiva.'

  },
  {
    nome: 'Hipóteses',
    texto: 'Se os estudantes compreenderem como os neurotransmissores atuam em suas emoções, poderão lidar melhor com situações desafiadoras. O uso do aplicativo pode despertar maior interesse por temas científicos como neurociência e psicologia.'
  },
  {
    nome: 'Público-alvo',
    texto: 'O Neuro27 é voltado principalmente para jovens e adultos em idade escolar ou formação profissional — pessoas em fase de construção de identidade e desenvolvimento das habilidades socioemocionais. Esse público, naturalmente conectado à tecnologia, é ideal para vivenciar experiências educativas baseadas na neurociência emocional. Além disso, o aplicativo pode ser usado por educadores e profissionais da saúde mental como apoio para o processo de alfabetização emocional. A proposta é tornar temas complexos da neurociência acessíveis, por meio de uma linguagem simples e visual, promovendo autoconhecimento e bem-estar.'
  }
];

export function Dropdown() {
  const [aberto, setAberto] = useState<number | null>(null);

  const toggle = (index: number) => {
    setAberto(aberto === index ? null : index);
  };

  return (
    <div className={estilos.dropdownContainer}>
      {participantes.map((p, index) => (
        <div key={index} className={estilos.itemContainer}>
          <button className={estilos.item} onClick={() => toggle(index)}>
            {p.nome}
          </button>
          {aberto === index && (
            <div className={estilos.texto}>
              {p.texto}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}



