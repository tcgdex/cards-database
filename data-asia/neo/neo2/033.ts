import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Tyrogue",
         ja: "タイログ",
         fr: "Tyrogue",
         de: "Tyrogue",
         es: "Tirógeno",
         it: "Tylogue",
         pt: "Tyrogue",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [236],
      hp: 30,
      types: ["Fighting"],
      stage: "Baby",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Smash Punch",
            ja: "スマッシュパンチ",
            fr: "Smash punch",
            de: "Smash Punch",
            es: "Punch Smash",
            it: "Smash Punch",
            pt: "Smash Punch",
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


      variants: [
        {
          type: "normal",
        },
      ],
};
