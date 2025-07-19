import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Meditite",
         ja: "瞑想",
         fr: "Méditer",
         de: "Meditit",
         es: "Meditita",
         it: "Meditite",
         pt: "Meditite",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [307],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Kick",
            ja: "キック",
            fr: "Coup",
            de: "Kick",
            es: "Patada",
            it: "Calcio",
            pt: "Chute",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Pure Power",
            ja: "純粋な力",
            fr: "Puissance pure",
            de: "Reine Kraft",
            es: "Poder puro",
            it: "Pura potenza",
            pt: "Poder puro",
          },
          effect: {
            en: "Put 2 damage counters on your opponent's Pokemon in any way you like.",
            ja: "相手のポケモンに2つのダメージカウンターを、好きなように配置します。",
            fr: "Mettez 2 compteurs de dégâts sur le pokemon de votre adversaire de quelque manière que ce soit.",
            de: "Setzen Sie 2 Schadenszähler auf das Pokémon Ihres Gegners auf eine Weise, die Sie möchten.",
            es: "Pon 2 contadores de daño en el Pokémon de tu oponente de la manera que quieras.",
            it: "Metti 2 contatori di danno sul Pokemon del tuo avversario in ogni modo che desideri.",
            pt: "Coloque 2 contadores de danos no Pokémon do seu oponente da maneira que desejar.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
