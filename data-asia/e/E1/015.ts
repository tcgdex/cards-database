import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Corsola",
         ja: "コルサラ",
         fr: "Corsola",
         de: "Korsola",
         es: "Corsola",
         it: "Corsola",
         pt: "Corsola",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [222],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Spike Cannon",
            ja: "スパイクキャノン",
            fr: "Canon à pointe",
            de: "Spike -Kanone",
            es: "Cañón de espiga",
            it: "Cannone a spike",
            pt: "Canhão de spike",
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

      retreat: 2,

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
