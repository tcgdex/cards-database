import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Poliwag",
         ja: "poliwag",
         fr: "Poliwag",
         de: "Poliwag",
         es: "Poliwag",
         it: "Poliwag",
         pt: "Poliwag",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [60],
      hp: 40,
      types: ["Water"],
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
          cost: ["Water"],
          name: {
            en: "Hypnosis",
            ja: "催眠",
            fr: "Hypnose",
            de: "Hypnose",
            es: "Hipnosis",
            it: "Ipnosi",
            pt: "Hipnose",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
