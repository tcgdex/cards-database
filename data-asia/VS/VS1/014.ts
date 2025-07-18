import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Whitney's Clefable",
         ja: "ホイットニーのクレファー",
         fr: "Clefable de Whitney",
         de: "Whitney ist geschmeidig",
         es: "Clefable de Whitney",
         it: "Whitney's Clefable",
         pt: "Clefable de Whitney",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [36],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Double Slap",
            ja: "ダブルスラップ",
            fr: "Slap double",
            de: "Doppelschlag",
            es: "Bofetada",
            it: "Doppio schiaffo",
            pt: "Double Slap",
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
      ],
};
