import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Bruno's Hitmonchan",
         ja: "ブルーノのヒットモンチャン",
         fr: "Hitmonchan de Bruno",
         de: "Brunos Hitmonchan",
         es: "Hitmonchan de Bruno",
         it: "Hitmonchan di Bruno",
         pt: "Hitmonchan de Bruno",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [107],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Comet Punch",
            ja: "彗星パンチ",
            fr: "Punch de comète",
            de: "Komet Punch",
            es: "Cometa",
            it: "Punch di comete",
            pt: "Cometa Punch",
          },
          effect: {
            en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
            ja: "4コインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 4 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 4 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 4 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 4 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Lucky Punch",
            ja: "ラッキーパンチ",
            fr: "Coup de poing",
            de: "Glücklicher Schlag",
            es: "Lucky Punch",
            it: "Punch fortunato",
            pt: "Lucky Punch",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 30 more damage. If tails, this attack does 20 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて30ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 30 dégâts supplémentaires. Si Tails, cette attaque fait 20 dégâts.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 30 weitere Schäden. Wenn Schwänze, verursacht dieser Angriff 20 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 30 más de daño. Si Tails, este ataque hace 20 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 30 danni in più. Se le code, questo attacco infligge 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 30 mais danos. Se as caudas, esse ataque causam 20 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
