import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Trapinch",
         ja: "トラピンチ",
         fr: "Piétiner",
         de: "Trapinch",
         es: "Trapinch",
         it: "Trapinch",
         pt: "Trapinch",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [328],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Surprise Attack",
            ja: "奇襲",
            fr: "Attaque surprise",
            de: "Überraschungsangriff",
            es: "Ataque sorpresa",
            it: "Attacco a sorpresa",
            pt: "Ataque surpresa",
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
