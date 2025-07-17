import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Wurmple",
         ja: "Wurmple",
         fr: "Wurmple",
         de: "Wurmlich",
         es: "Wurmple",
         it: "Wurmple",
         pt: "Wurmple",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [265],
      hp: 50,
      types: ["Grass"],
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
            en: "Search your deck for Silcoon and Beautifly, or Cascoon and Dustox cards. Show 1 card or both cards of a pair to your opponent and put them into your hand. Shuffle your deck afterward.",
            ja: "シルクーンと美味しく、またはカスクーンとダストックスカードを求めてデッキを検索してください。ペアのカードまたは両方のカードを相手に見せて、それらを手に入れます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu de silcoon et magnifique, ou des cartes Cascoon et Dustox. Affichez 1 carte ou les deux cartes d'une paire à votre adversaire et mettez-les dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach Silcoon und schönem oder Cascoon- und Dustox -Karten. Zeigen Sie Ihrem Gegner eine Karte oder beide Karten eines Paares und geben Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo el Silcoon y Beautifly, o las cartas Cascoon y Docox. Muestre 1 carta o ambas cartas de un par a tu oponente y póngalas en tu mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo Silcoon e Beauty, o Cascoon e Duspox. Mostra 1 carta o entrambe le carte di una coppia al tuo avversario e mettile in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por Silcoon e Beautifly, ou Cascoon e Polox Cards. Mostre 1 cartão ou ambos os cartões de um par para o seu oponente e coloque -os em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Poison Barb",
            ja: "毒バーブ",
            fr: "Barre de poison",
            de: "Gifte Barb",
            es: "Barbilla de envenenamiento",
            it: "Veleno Barb",
            pt: "Poison Barb",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
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
