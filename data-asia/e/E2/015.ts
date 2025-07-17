import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Growlithe - 015/092",
         ja: "Growlithe -015/092",
         fr: "Growlithe - 015/092",
         de: "Growlithe - 015/092",
         es: "Growlithe - 015/092",
         it: "Growlithe - 015/092",
         pt: "Growlithe - 015/092",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [58],
      hp: 60,
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
            en: "Discard a Fire Energy card attached to Growlithe.",
            ja: "Growlitheに取り付けられた消防エネルギーカードを廃棄します。",
            fr: "Jeter une carte d'énergie d'incendie attachée au grognement.",
            de: "Verwerfen Sie eine Brandergiekarte, die an Knurren angebracht ist.",
            es: "Deseche una tarjeta de energía de fuego unida a Growlithe.",
            it: "Scartare una carta di energia antincendio attaccata a Growlithe.",
            pt: "Descarte um cartão de energia de incêndio ligado ao rosqueado.",
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
          stamp: ["1st edition"],
        },
      ],
};
