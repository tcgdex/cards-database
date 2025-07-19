import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Shelgon (Delta Species)",
         ja: "シェルゴン（デルタ種）",
         fr: "Shelgon (espèce delta)",
         de: "Shelgon (Delta -Arten)",
         es: "Shelgon (especie delta)",
         it: "Shelgon (Delta Species)",
         pt: "Shelgon (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [372],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Headbutt",
            ja: "ヘッドバット",
            fr: "Coup de tête",
            de: "Headbutt",
            es: "Cabezal",
            it: "Headbutt",
            pt: "Cabeça",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
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
            en: "Shelgon does 10 damage to itself.",
            ja: "シェルゴンはそれ自体に10ダメージを与えます。",
            fr: "Shelgon se fait 10 dégâts.",
            de: "Shelgon schädigt sich 10.",
            es: "Shelgon hace 10 daños a sí mismo.",
            it: "Shelgon fa 10 danni a se stesso.",
            pt: "Shelgon causa 10 danos a si mesmo.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
