import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Duskull",
         ja: "duskull",
         fr: "Saillie",
         de: "Dämmerung",
         es: "Engaño",
         it: "Duskull",
         pt: "Duskull",
      },


      category: "Pokemon",
      dexId: [355],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
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
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
