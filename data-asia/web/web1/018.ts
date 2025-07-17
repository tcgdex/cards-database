import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Nidorino",
         ja: "ニドリーノ",
         fr: "Nidorino",
         de: "Nidorino",
         es: "Nido",
         it: "Nidorino",
         pt: "Nidorino",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [33],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Swift Lunge",
            ja: "迅速な突進",
            fr: "Fente rapide",
            de: "Swift Lunge",
            es: "Lavazos rápidos",
            it: "Affondo rapido",
            pt: "Swift Bunge",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing and this Pokemon does 20 damage to itself.",
            ja: "コインをひっくり返します。尾の場合、この攻撃には何もできず、このポケモンはそれ自体に20のダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien et ce Pokémon se fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts und dieses Pokémon schädigt sich 20.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada y este Pokémon hace 20 daños a sí mismo.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla e questo Pokemon fa 20 danni a se stesso.",
            pt: "Vire uma moeda. Se as caudas, esse ataque não fazem nada e esse Pokémon causa 20 danos a si mesmo.",
          },
          damage: 60,
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
