import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Chansey",
         ja: "チャンジー",
         fr: "Chansey",
         de: "Chansey",
         es: "Chansey",
         it: "Chansey",
         pt: "Chansey",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [113],
      hp: 100,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Rollout",
            ja: "ロールアウトする",
            fr: "Dérouler",
            de: "Ausrollen",
            es: "Despliegue",
            it: "Lancio",
            pt: "Sair da cama",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Double-edge",
            ja: "ダブルエッジ",
            fr: "À double bord",
            de: "Doppelkante",
            es: "De doble borde",
            it: "Doppio bordo",
            pt: "Dupla borda",
          },
          effect: {
            en: "Chansey does 40 damage to itself.",
            ja: "Chanseyはそれ自体に40のダメージを与えます。",
            fr: "Chansey se fait 40 dégâts.",
            de: "Chansey schädigt sich 40.",
            es: "Chansey hace 40 daños a sí mismo.",
            it: "Chansey fa 40 danni a se stesso.",
            pt: "Chansey causa 40 danos a si mesmo.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
