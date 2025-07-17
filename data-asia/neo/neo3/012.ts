import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Goldeen",
         ja: "ゴールデン",
         fr: "Or",
         de: "Goldene",
         es: "Goldeen",
         it: "Goldoen",
         pt: "Goldeen",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [118],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Fin Smack",
            ja: "フィンスマック",
            fr: "Natte",
            de: "Fin Smack",
            es: "Aleta",
            it: "Pinma",
            pt: "Fin Smack",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
