import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Will's Exeggutor",
         ja: "ウィルのexeggutor",
         fr: "Exagutor de Will",
         de: "Wills Exeggutor",
         es: "Exegguto de Will",
         it: "Will's Exeggutor",
         pt: "O exeggutor de Will",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [103],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Egg Bomb",
            ja: "卵爆弾",
            fr: "Bombe à œuf",
            de: "Eierbombe",
            es: "Bomba de huevo",
            it: "Bomba d'uovo",
            pt: "Bomba de ovo",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing and Will's Exeggutor does 20 damage to itself.",
            ja: "コインをひっくり返します。テールの場合、この攻撃は何もしません、そして、ウィルのexeggutorはそれ自体に20のダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien et l'exaguteur de Will se fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts und Wills Exeggutor von 20 Schäden an sich selbst.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada y el exegutor de Will hace 20 daños a sí mismo.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla e l'eseggatore di Will fa 20 danni a se stesso.",
            pt: "Vire uma moeda. Se as caudas, esse ataque não fazem nada e o exeggutor de Will causar 20 danos a si mesmo.",
          },
          damage: 40,
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
