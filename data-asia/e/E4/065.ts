import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Eevee",
         ja: "Eevee",
         fr: "Eevee",
         de: "Eevee",
         es: "Eevee",
         it: "Eevee",
         pt: "Eevee",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [133],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Smash Kick",
            ja: "スマッシュキック",
            fr: "Coup de pied",
            de: "Smash Kick",
            es: "Patada",
            it: "Smash Kick",
            pt: "Smash Kick",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
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
            en: "Eevee does 10 damage to itself.",
            ja: "Eeveeはそれ自体に10ダメージを与えます。",
            fr: "Eevee fait 10 dégâts à lui-même.",
            de: "Eevee schädigt sich 10.",
            es: "Eevee hace 10 daños a sí mismo.",
            it: "Eevee fa 10 danni a se stesso.",
            pt: "Eevee causa 10 danos a si mesmo.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

};
