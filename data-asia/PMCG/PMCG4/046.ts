import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Raticate",
         ja: "暗いラティテート",
         fr: "Raticate sombre",
         de: "Dunkel ratatisch",
         es: "Raticato oscuro",
         it: "Raticata oscura",
         pt: "Raticato escuro",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [20],
      hp: 50,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Gnaw",
            ja: "gnaw",
            fr: "Ronger",
            de: "Nagen",
            es: "Roer",
            it: "Rosicchiare",
            pt: "Roer",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Hyper Fang",
            ja: "ハイパーファング",
            fr: "Hyper Fang",
            de: "Hyper Fang",
            es: "Hiper colmillo",
            it: "Hyper Fang",
            pt: "Hyper Fang",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 50,
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
