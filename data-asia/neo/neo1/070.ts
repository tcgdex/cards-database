import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Cleffa",
         ja: "クレファ",
         fr: "Cleffa",
         de: "Cleffa",
         es: "Cleffa",
         it: "Cleffa",
         pt: "Cleffa",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [173],
      hp: 30,
      types: ["Colorless"],
      stage: "Baby",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Eeeeeeek",
            ja: "eeeeeeek",
            fr: "Eeeeeek",
            de: "Eeeeeeeek",
            es: "Eeeeeeek",
            it: "Eeeeeek",
            pt: "Eeeeeeeeek",
          },
          effect: {
            en: "Shuffle your hand into your deck, then draw 7 cards.",
            ja: "手をデッキにシャッフルしてから、7枚のカードを描きます。",
            fr: "Merdez votre main dans votre deck, puis dessinez 7 cartes.",
            de: "Mischen Sie Ihre Hand in Ihr Deck und zeichnen Sie dann 7 Karten.",
            es: "Arrastra tu mano en tu mazo, luego dibuje 7 cartas.",
            it: "Shuffle la mano nel tuo mazzo, quindi disegna 7 carte.",
            pt: "Arraste sua mão no baralho e desenhe 7 cartas.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
