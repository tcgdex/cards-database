import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Cubone",
         ja: "キューボン",
         fr: "Cubone",
         de: "Cubone",
         es: "Cuboo",
         it: "Cubone",
         pt: "Cubone",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [104],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Beat",
            ja: "ビート",
            fr: "Battre",
            de: "Schlagen",
            es: "Derrotar",
            it: "Colpo",
            pt: "Bater",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Bone Smash",
            ja: "骨スマッシュ",
            fr: "Smash",
            de: "Knochenschlag",
            es: "Bone Smash",
            it: "Bone Smash",
            pt: "BONE Smash",
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

};
