import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Wailord",
         ja: "ウェイロード",
         fr: "Wailord",
         de: "Wailord",
         es: "Gemelo",
         it: "WaiLord",
         pt: "Wailord",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [321],
      hp: 120,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
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
            en: "Wailord does 20 damage to itself.",
            ja: "Wailordはそれ自体に20のダメージを与えます。",
            fr: "Wailord fait 20 dégâts à lui-même.",
            de: "Wailord schädigt sich 20.",
            es: "Wailord hace 20 daños a sí mismo.",
            it: "WaiLord fa 20 danni a se stesso.",
            pt: "Wailord causa 20 danos a si mesmo.",
          },
          damage: 50,
        },
        {
          cost: ["Water", "Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Surf",
            ja: "サーフィン",
            fr: "Surf",
            de: "Surfen",
            es: "Navegar",
            it: "Navigare",
            pt: "Surf",
          },
          damage: 70,
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
