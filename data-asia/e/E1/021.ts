import {Card} from "../../../interfaces"
import Set from "../E1"

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

      rarity: "Common",
      category: "Pokemon",
      dexId: [66],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Punch",
            ja: "パンチ",
            fr: "Punch",
            de: "Stempel",
            es: "Puñetazo",
            it: "Punch",
            pt: "Soco",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Double Chop",
            ja: "ダブルチョップ",
            fr: "Hacher",
            de: "Double Chop",
            es: "Picar doble",
            it: "Double Chop",
            pt: "Costeleta dupla",
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
