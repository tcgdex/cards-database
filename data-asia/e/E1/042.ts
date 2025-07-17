import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Machoke",
         ja: "マチョーク",
         fr: "Machoke",
         de: "Machoke",
         es: "Machoke",
         it: "Machoke",
         pt: "Machoke",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [67],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Punch",
            ja: "パンチ",
            fr: "Punch",
            de: "Stempel",
            es: "Puñetazo",
            it: "Punch",
            pt: "Soco",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Mega Kick",
            ja: "メガキック",
            fr: "Méga coup de pied",
            de: "Mega -Kick",
            es: "Mega patada",
            it: "Mega calcio",
            pt: "Mega chute",
          },
          damage: 50,
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
