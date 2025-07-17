import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Dratini",
         ja: "ドラチーニ",
         fr: "Dratini",
         de: "Dratini",
         es: "Dratini",
         it: "Dratini",
         pt: "Dratini",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [147],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning", "Water"],
          name: {
            en: "Dragon Smash",
            ja: "ドラゴンスマッシュ",
            fr: "Dragon smash",
            de: "Dragon Smash",
            es: "Dragon Smash",
            it: "Dragon Smash",
            pt: "Dragon Smash",
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
          damage: 40,
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
