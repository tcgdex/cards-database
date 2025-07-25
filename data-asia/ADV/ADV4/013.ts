import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Gulpin",
         ja: "ガルピン",
         fr: "Gorgée",
         de: "Gulpin",
         es: "Gulpina",
         it: "Gulpin",
         pt: "Gulpin",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [316],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Yawn",
            ja: "あくび",
            fr: "Bâillement",
            de: "Gähnen",
            es: "Bostezo",
            it: "Sbadiglio",
            pt: "Bocejar",
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
        {
          cost: ["Grass"],
          name: {
            en: "Spit Poison",
            ja: "スピット毒",
            fr: "Cracher du poison",
            de: "Gift spucken",
            es: "Veneno",
            it: "Spit Poison",
            pt: "Cuspir veneno",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
