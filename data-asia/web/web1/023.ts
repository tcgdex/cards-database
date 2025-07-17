import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Arcanine",
         ja: "アルカニン",
         fr: "Arcanine",
         de: "Arcanine",
         es: "Arcanina",
         it: "Arcanina",
         pt: "Arcanine",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [59],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Take Down",
            ja: "降ろす",
            fr: "Démonter",
            de: "Notieren",
            es: "Derribar",
            it: "Prendere nota",
            pt: "Derrubar",
          },
          effect: {
            en: "Arcanine does 20 damage to itself.",
            ja: "アルカニンはそれ自体に20の損傷を与えます。",
            fr: "L'arcanine se fait 20 dégâts.",
            de: "Arcanine schädigt sich 20.",
            es: "Arcanine hace 20 daños a sí mismo.",
            it: "L'arcanina fa 20 danni a se stesso.",
            pt: "Arcanine causa 20 danos a si mesmo.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

};
