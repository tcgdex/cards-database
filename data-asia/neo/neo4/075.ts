import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Hitmonlee",
         ja: "Hitmonlee",
         fr: "Hitmonlee",
         de: "Hitmonlee",
         es: "Hitmonlee",
         it: "Hitmonlee",
         pt: "Hitmonlee",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [106],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "One-Two Kick",
            ja: "ワンツーキック",
            fr: "Coup de pied un deux",
            de: "Ein zwei Kick",
            es: "One-Two Kick",
            it: "Un secondo calcio",
            pt: "Um dois chute",
          },
          effect: {
            en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Fighting"],
          name: {
            en: "Heel Drop",
            ja: "ヒールドロップ",
            fr: "Baisse du talon",
            de: "Fersenabfall",
            es: "Gota de tacón",
            it: "Drop del tallone",
            pt: "Cair do calcanhar",
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
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
