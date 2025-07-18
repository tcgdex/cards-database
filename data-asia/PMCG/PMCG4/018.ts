import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Squirtle",
         ja: "squirtle",
         fr: "Écourter",
         de: "Squirtle",
         es: "Chirriar",
         it: "Squirtle",
         pt: "Esguicho",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [7],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Shell Attack",
            ja: "シェル攻撃",
            fr: "Attaque de coquille",
            de: "Muschelangriff",
            es: "Ataque",
            it: "Attacco a conchiglia",
            pt: "Ataque de concha",
          },
          damage: 20,
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
