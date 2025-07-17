import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Geodude",
         ja: "ジオドード",
         fr: "Géodude",
         de: "Geodude",
         es: "Geodudas",
         it: "Geodude",
         pt: "Geodude",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [74],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Stone Barrage",
            ja: "石の弾幕",
            fr: "Barrage en pierre",
            de: "Steinscheibe",
            es: "Bomba de piedra",
            it: "Barratura in pietra",
            pt: "Barragem de pedra",
          },
          effect: {
            en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
            ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltea una moneda hasta que obtengas colas. Este ataque hace 10 veces el número de cabezas.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Vire uma moeda até obter caudas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
          damage: None,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
