import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Ponyta",
         ja: "ポニータ",
         fr: "Ponyta",
         de: "Ponyta",
         es: "Ponyta",
         it: "Ponyta",
         pt: "Ponyta",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [77],
      hp: 40,
      types: ["Fire"],
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
          cost: ["Fire", "Colorless"],
          name: {
            en: "Ember",
            ja: "ember",
            fr: "Bilan",
            de: "Glut",
            es: "Ascua",
            it: "Ember",
            pt: "Brasa",
          },
          effect: {
            en: "Discard a Fire Energy card attached to Ponyta.",
            ja: "Ponytaに取り付けられた消防エネルギーカードを捨てます。",
            fr: "Jeter une carte d'énergie d'incendie attachée à Ponyta.",
            de: "Verwerfen Sie eine an Ponyta befestigte Brandenergiekarte.",
            es: "Deseche una tarjeta de energía de fuego unida a Ponyta.",
            it: "Scartare una carta di energia antincendio attaccata a Ponyta.",
            pt: "Descarte um cartão de energia de incêndio anexado a Ponyta.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

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
