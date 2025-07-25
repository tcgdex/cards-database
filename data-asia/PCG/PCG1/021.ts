import {Card} from "../../../interfaces"
import Set from "../PCG1"

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

      rarity: "Rare",
      category: "Pokemon",
      dexId: [59],
      hp: 90,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Flare",
            ja: "フレア",
            fr: "Éclater",
            de: "Fackel",
            es: "Llamarada",
            it: "Bagliore",
            pt: "Flare",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Heat Tackle",
            ja: "ヒートタックル",
            fr: "Tampon de chaleur",
            de: "Wärmeangriff",
            es: "Tacleada",
            it: "Attrezzatura di calore",
            pt: "Tackle de calor",
          },
          effect: {
            en: "Arcanine does 10 damage to itself.",
            ja: "アルカニンはそれ自体に10のダメージを与えます。",
            fr: "L'arcanine fait 10 dégâts à lui-même.",
            de: "Arcanine schädigt sich 10.",
            es: "Arcanine hace 10 daños a sí mismo.",
            it: "L'arcanina fa 10 danni a se stesso.",
            pt: "Arcanine causa 10 danos a si mesmo.",
          },
          damage: 70,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
