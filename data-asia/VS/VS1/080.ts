import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Forretress",
         ja: "Koga's Forretress",
         fr: "Forredress de Koga",
         de: "Koga's Forresress",
         es: "Koga's Forretress",
         it: "La Forressa di Koga",
         pt: "Forrerete de Koga",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [205],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Double-Edge",
            ja: "ダブルエッジ",
            fr: "À double bord",
            de: "Doppelkante",
            es: "De doble borde",
            it: "Doppio bordo",
            pt: "Dupla borda",
          },
          effect: {
            en: "Koga's Forretress does 20 damage to itself.",
            ja: "KogaのForretressは、それ自体に20のダメージを与えます。",
            fr: "Forredress de Koga fait 20 dégâts à lui-même.",
            de: "Kogas ForressRess schädigt sich 20.",
            es: "Forretress de Koga hace 20 daños a sí mismo.",
            it: "La Forressa di Koga fa 20 danni a se stesso.",
            pt: "A forragem de Koga causa 20 de dano a si mesmo.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
