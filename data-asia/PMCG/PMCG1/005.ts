import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoran M",
         ja: "ニドランm",
         fr: "Nidoran m",
         de: "Nidoran m",
         es: "Nidoran M",
         it: "Nidoran m",
         pt: "Nidoran m",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [32],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Horn Hazard",
            ja: "ホーンハザード",
            fr: "Danger de corne",
            de: "Horngefahr",
            es: "Peligro de bocina",
            it: "Pericolo di corno",
            pt: "Perigo da buzina",
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
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
