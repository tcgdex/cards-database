import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Dragonair",
         ja: "ドラゴンエア",
         fr: "Dragonaire",
         de: "Dragonair",
         es: "Dragón",
         it: "Dragonair",
         pt: "Dragonair",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [148],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Water"],
          name: {
            en: "Spiral Wave",
            ja: "スパイラルウェーブ",
            fr: "Vague en spirale",
            de: "Spiralwelle",
            es: "Onda espiral",
            it: "Onda a spirale",
            pt: "Onda em espiral",
          },
          effect: {
            en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
            ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltea una moneda hasta que obtengas colas. Este ataque hace 20 veces el número de cabezas.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Questo attacco fa 20 danni il numero di teste.",
            pt: "Vire uma moeda até obter caudas. Este ataque causa 20 danos vezes o número de cabeças.",
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
