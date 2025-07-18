import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Jigglypuff",
         ja: "jigglypuff",
         fr: "Jigglypuff",
         de: "Wacklypuff",
         es: "Jigglypuff",
         it: "Jigglypuff",
         pt: "Jigglypuff",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [39],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Rollout",
            ja: "ロールアウトする",
            fr: "Dérouler",
            de: "Ausrollen",
            es: "Despliegue",
            it: "Lancio",
            pt: "Sair da cama",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Sleepy Song",
            ja: "眠そうな歌",
            fr: "Chanson endormie",
            de: "Schläfriges Lied",
            es: "Canción somnolienta",
            it: "Canzone assonnata",
            pt: "Música sonolenta",
          },
          effect: {
            en: "Each Defending Pokemon is now Asleep.",
            ja: "防御するポケモンはそれぞれ眠っています。",
            fr: "Chaque Pokémon défendant est maintenant endormi.",
            de: "Jedes verteidigende Pokemon schläft jetzt.",
            es: "Cada Pokémon defensor ahora está dormido.",
            it: "Ogni Pokemon in difesa ora dorme.",
            pt: "Cada Pokemon defensor agora está dormindo.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
