import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Falkner's Fearow",
         ja: "フォークナーの恐怖",
         fr: "Fearow de Falkner",
         de: "Falkners Angst",
         es: "Fearow de Falkner",
         it: "Fearow di Falkner",
         pt: "Fearow de Falkner",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [22],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Drill Peck",
            ja: "ドリルペック",
            fr: "Percez",
            de: "Bohrer Peck",
            es: "Bisagro",
            it: "Drill Peck",
            pt: "Peck de perfuração",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
