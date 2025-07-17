import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Magikarp",
         ja: "Magikarp",
         fr: "Magikarp",
         de: "Magikarp",
         es: "Magikarp",
         it: "Magikarp",
         pt: "Magikarp",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [129],
      hp: 30,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Signs of Evolution",
            ja: "進化の兆候",
            fr: "Signes d'évolution",
            de: "Zeichen der Evolution",
            es: "Signos de evolución",
            it: "Segni di evoluzione",
            pt: "Sinais de evolução",
          },
          effect: {
            en: "Flip a coin. If heads, search your deck for a card that evolves from Magikarp, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "コインをひっくり返します。頭の場合は、マジカルプから進化するカードをデッキに検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Retourner une pièce. Si les têtes, recherchez votre jeu une carte qui évolue de Magikarp, montrez-la à votre adversaire et mettez-la dans votre main. Mélanger votre deck par la suite.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, suchen Sie Ihr Deck nach einer Karte, die sich von Magikarp entwickelt, zeigen Sie es Ihrem Gegner und stecken Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Voltea una moneda. Si se dirige, busque en su mazo una carta que evolucione de Magikarp, muéstrela a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Capovolgi una moneta. Se le teste, cerca nel tuo mazzo una carta che si evolve da Magikarp, mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Vire uma moeda. Se as cabeças, procure um cartão para um cartão que evolui do Magikarp, mostre -o ao seu oponente e coloque -o na sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Water"],
          name: {
            en: "Splash",
            ja: "スプラッシュ",
            fr: "Éclabousser",
            de: "Spritzen",
            es: "Chapoteo",
            it: "Spruzzare",
            pt: "Respingo",
          },
          damage: 10,
        },
      ],

      retreat: 1,

};
