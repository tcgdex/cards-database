import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Bagon (Delta Species)",
         ja: "バゴン（デルタ種）",
         fr: "Bagon (espèce delta)",
         de: "Bagon (Delta -Arten)",
         es: "Bagon (especie delta)",
         it: "Bagon (Delta Species)",
         pt: "Bagon (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [371],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
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
            en: "Discard a Fire Energy card attached to Bagon.",
            ja: "バゴンに取り付けられた消防剤カードを捨てます。",
            fr: "Jeter une carte d'énergie d'incendie attachée à Bagon.",
            de: "Entsorgen Sie eine an Bagon befestigte Brandenergiekarte.",
            es: "Deseche una tarjeta de energía de fuego unida a Bagon.",
            it: "Scartare una carta di energia antincendio attaccata a Bagon.",
            pt: "Descarte um cartão de energia de incêndio anexado a Bagon.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
