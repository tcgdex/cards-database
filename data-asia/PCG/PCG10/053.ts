import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Poochyena",
         ja: "プーチエナ",
         fr: "Poochyena",
         de: "Poochyena",
         es: "Poochyena",
         it: "Poochyena",
         pt: "Poochyena",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [261],
      hp: 50,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness"],
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

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
