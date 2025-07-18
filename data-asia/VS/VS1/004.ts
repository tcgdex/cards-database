import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Falkner's Dodrio",
         ja: "フォークナーのドドリオ",
         fr: "DODRIO de Falkner",
         de: "Falkners Dodrio",
         es: "DODRIO de Falkner",
         it: "Il Dodrio di Falkner",
         pt: "Dodrio de Falkner",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [85],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Triple Headbutt",
            ja: "トリプルヘッドバット",
            fr: "Triple bobutt",
            de: "Dreifach Headbutt",
            es: "Triple cabezal",
            it: "Triplo headbutt",
            pt: "Triple Headbutt",
          },
          effect: {
            en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 3 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
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
