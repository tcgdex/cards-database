import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Vulpix",
         ja: "Vulpix",
         fr: "Vulpix",
         de: "Vulpix",
         es: "Vulpix",
         it: "Vulpix",
         pt: "Vulpix",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [37],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 10,
        },
        {
          cost: ["Fire"],
          name: {
            en: "Ascension",
            ja: "上昇",
            fr: "Ascension",
            de: "Aufstieg",
            es: "Ascensión",
            it: "Ascensione",
            pt: "Ascensão",
          },
          effect: {
            en: "Search your deck for a card that evolves from Vulpix and put it on Vulpix. (This counts as evolving Vulpix.) Shuffle your deck afterward.",
            ja: "Vulpixから進化するカードをデッキで検索し、Vulpixに置きます。 （これは進化するVulpixとしてカウントされます。）その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu une carte qui évolue à partir de Vulpix et mettez-la sur Vulpix. (Cela compte comme en évolution de Vulpix.) Tandez votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Karte, die sich aus Vulpix entwickelt, und setzen Sie es auf Vulpix. (Dies gilt als sich entwickelnde Vulpix.) Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una carta que evolucione de Vulpix y coloque en Vulpix. (Esto cuenta como en evolución de Vulpix.) Arrobable tu mazo después.",
            it: "Cerca nel tuo mazzo una carta che si evolve da Vulpix e mettila su Vulpix. (Questo conta come vulpix in evoluzione.) Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por uma carta que evolui da Vulpix e coloque -a no Vulpix. (Isso conta como vulpix em evolução.) Embaralhe seu baralho depois.",
          },
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
