import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Growlithe",
         ja: "うなり声",
         fr: "Grogner",
         de: "Knurren",
         es: "Gruñido",
         it: "Growlithe",
         pt: "Growlithe",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [58],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Flare",
            ja: "フレア",
            fr: "Éclater",
            de: "Fackel",
            es: "Llamarada",
            it: "Bagliore",
            pt: "Flare",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Double Kick",
            ja: "ダブルキック",
            fr: "Coup de pied",
            de: "Double Kick",
            es: "Doble patada",
            it: "Doppio calcio",
            pt: "Chute duplo",
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
