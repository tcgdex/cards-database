import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Anorith",
         ja: "アノリス",
         fr: "Anorith",
         de: "Anorith",
         es: "Anorito",
         it: "Anorito",
         pt: "Anorith",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [347],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Fast Evolution",
            ja: "高速進化",
            fr: "Évolution rapide",
            de: "Schnelle Entwicklung",
            es: "Evolución rápida",
            it: "Evoluzione rapida",
            pt: "Evolução rápida",
          },
          effect: {
            en: "Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索して進化カードを探し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte d'évolution, montrez-la à votre adversaire et mettez-la dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Evolutionskarte, zeigen Sie es Ihrem Gegner und geben Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de evolución, muéstrela a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una scheda di evoluzione, mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de uma carta de evolução, mostre -a ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Pierce",
            ja: "ピアス",
            fr: "Percer",
            de: "Pierce",
            es: "Atravesar",
            it: "Forare",
            pt: "Pierce",
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
