import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Machop",
         ja: "マチョップ",
         fr: "Machop",
         de: "Machop",
         es: "Machop",
         it: "Machop",
         pt: "Machop",
      },


      category: "Pokemon",
      dexId: [66],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

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
          damage: 20,
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Submission",
            ja: "提出",
            fr: "Soumission",
            de: "Vorlage",
            es: "Envío",
            it: "Sottomissione",
            pt: "Submissão",
          },
          effect: {
            en: "Machop does 10 damage to itself.",
            ja: "Machopはそれ自体に10ダメージを与えます。",
            fr: "Machop fait 10 dégâts à lui-même.",
            de: "Machop schädigt sich 10.",
            es: "Machop hace 10 daños a sí mismo.",
            it: "Machop fa 10 danni a se stesso.",
            pt: "Machop causa 10 danos a si mesmo.",
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
