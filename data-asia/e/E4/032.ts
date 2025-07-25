import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Mantine",
         ja: "マンティン",
         fr: "Mante",
         de: "Mantine",
         es: "Mantil",
         it: "Mantino",
         pt: "Mantino",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [226],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
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
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Aqua Sonic",
            ja: "アクアソニック",
            fr: "Aqua sonic",
            de: "Aqua Sonic",
            es: "Aqua Sonic",
            it: "Aqua Sonic",
            pt: "Aqua Sonic",
          },
          effect: {
            en: "Don't apply Resistance.",
            ja: "抵抗を適用しないでください。",
            fr: "N'appliquez pas la résistance.",
            de: "Wenden Sie keinen Widerstand an.",
            es: "No aplique resistencia.",
            it: "Non applicare resistenza.",
            pt: "Não aplique resistência.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
