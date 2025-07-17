import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Bruno's Machamp",
         ja: "ブルーノのマチャンプ",
         fr: "Machamp de Bruno",
         de: "Brunos Machamp",
         es: "Machamp de Bruno",
         it: "Bruno's Machamp",
         pt: "Machamp de Bruno",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [68],
      hp: 80,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Double Lariat",
            ja: "ダブルラリアット",
            fr: "Double lariat",
            de: "Doppellariat",
            es: "Doble lariat",
            it: "Double Lariat",
            pt: "Duplo lariat",
          },
          effect: {
            en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の50回のダメージ時間を実行します。",
            fr: "Flip 2 pièces. Cette attaque fait 50 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 50 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 50 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 50 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 50 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 3,

};
