import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Nuzleaf",
         ja: "ヌズリーフ",
         fr: "Nuzleaf",
         de: "Nuzleaf",
         es: "Nuzleaf",
         it: "Nuzleaf",
         pt: "Nuzleaf",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [274],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Steady Punch",
            ja: "安定したパンチ",
            fr: "Poinçon régulier",
            de: "Stetiger Schlag",
            es: "Golpe constante",
            it: "Punch costante",
            pt: "Soco constante",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 10 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 10 altri danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 danos.",
          },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Razor Leaf",
            ja: "かみそりの葉",
            fr: "Feuille de rasoir",
            de: "Rasiererblatt",
            es: "Hojas de afeitar",
            it: "Foglia di rasoio",
            pt: "Folha de barbear",
          },
          damage: 40,
        },
      ],

      retreat: 1,

};
