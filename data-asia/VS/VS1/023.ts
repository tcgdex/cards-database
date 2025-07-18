import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Morty's Marowak",
         ja: "モーティのマロワック",
         fr: "Marowak de Morty",
         de: "Morty ist Marowak",
         es: "Morty's Marowak",
         it: "Morty's Marowak",
         pt: "Morty's Marowak",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [105],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Bone Rush",
            ja: "骨ラッシュ",
            fr: "Ruée",
            de: "Knochenrausch",
            es: "Apresuramiento de huesos",
            it: "Corsa ossea",
            pt: "Rush Bone",
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
      ],
};
