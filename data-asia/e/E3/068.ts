import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Miltank",
         ja: "ミルタンク",
         fr: "Miltan",
         de: "Miltank",
         es: "Miltaquero",
         it: "Miltank",
         pt: "Miltank",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [241],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
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
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Continuous Tumble",
            ja: "連続的なタンブル",
            fr: "Chute continue",
            de: "Kontinuierliches Sturz",
            es: "Caída continua",
            it: "Tumble continuo",
            pt: "Tumble contínuo",
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
