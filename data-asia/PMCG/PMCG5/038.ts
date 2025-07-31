import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lt. Surge's Voltorb",
         ja: "Surge's Voltorb中t",
         fr: "Voltorb du lieutenant",
         de: "Lt. Surge's Voltorb",
         es: "Voltorb del teniente Surge",
         it: "Voltorb di Tenente Surge",
         pt: "Voltorb do tenente Surge",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [100],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Spin Ball",
            ja: "スピンボール",
            fr: "Rotation",
            de: "Spinkugel",
            es: "Bola de giro",
            it: "Palla girare",
            pt: "Bola de spin",
          },
          effect: {
            en: "Flip 1 coin. This attack does 20 damage times the number of heads.",
            ja: "フリップ1コイン。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 1 Coin. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "1 Münze umgeben. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 1 moneda. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 1 moneta. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 1 moeda. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Double Spin",
            ja: "ダブルスピン",
            fr: "Roter",
            de: "Doppelspin",
            es: "Doble giro",
            it: "Doppio giro",
            pt: "Giro duplo",
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
