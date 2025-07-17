import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Unown K",
         ja: "k",
         fr: "Unwn",
         de: "Unown k",
         es: "K",
         it: "Unown k",
         pt: "Unown k",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [201],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "KEEP [Keep]",
            ja: "[保持]",
            fr: "Continuez [Keep]",
            de: "Halten [halten]",
            es: "Mantener [mantenimiento]",
            it: "Keep [Keep]",
            pt: "Mantenha [mantenha]",
          },
          effect: {
            en: "Your opponent's attacks, Pokémon Powers, and Trainer cards can't discard Energy cards from your Pokémon with Unown in their names. <em>(Any other effects still happen.)</em>",
            ja: "対戦相手の攻撃、ポケモンのパワー、トレーナーカードは、名前が付けられていないポケモンからエネルギーカードを捨てることはできません。 <em>（他の効果はまだ発生します。）</em>",
            fr: "Les attaques de votre adversaire, les pouvoirs des Pokémon et les cartes d'entraînement ne peuvent pas éliminer les cartes d'énergie de votre Pokémon avec un-bas dans leur nom. <em> (tous les autres effets se produisent.) </em>",
            de: "Die Angriffe, Pokémon -Kräfte und Trainerkarten Ihres Gegners können Energiekarten nicht von Ihrem Pokémon mit Unown in ihren Namen entwerfen. <em> (noch andere Effekte treten auf.) </em>",
            es: "Los ataques de tu oponente, los poderes de Pokémon y las tarjetas de entrenador no pueden descartar cartas de energía de tu Pokémon sin Own en sus nombres. <em> (todavía suceden otros efectos). </em>",
            it: "Gli attacchi del tuo avversario, i poteri dei Pokémon e le carte dell'allenatore non possono scartare le carte energetiche dai tuoi Pokémon con Unown nei loro nomi. <em> (qualsiasi altro effetto ancora accade.) </em>",
            pt: "Os ataques do seu oponente, poderes de Pokémon e cartões de treinador não podem descartar os cartões de energia do seu Pokémon com Unnown em seus nomes. <em> (outros efeitos ainda acontecem.) </em>",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Hidden Power",
            ja: "隠された力",
            fr: "Pouvoir caché",
            de: "Versteckte Kraft",
            es: "Poder oculto",
            it: "Potere nascosto",
            pt: "Poder oculto",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
