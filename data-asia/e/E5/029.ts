import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Lapras",
         ja: "ラプラス",
         fr: "Lapras",
         de: "Lapras",
         es: "Lapras",
         it: "Lapras",
         pt: "LaPras",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [131],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Assist",
            ja: "アシスト",
            fr: "Assister",
            de: "Helfen",
            es: "Asistir",
            it: "Assistere",
            pt: "Assistência",
          },
          effect: {
            en: "Search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索してサポーターカードを探し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte supporte, montrez-la à votre adversaire et mettez-la dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Unterstützerkarte, zeigen Sie es Ihrem Gegner an und legen Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una carta de seguidores, muéstrela a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una scheda di sostenitori, mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de uma carta de apoiadores, mostre -a ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Hypnoblast",
            ja: "催眠芽球",
            fr: "Hypnoblaste",
            de: "Hypnoblast",
            es: "Hipnoblasto",
            it: "Ipnoblasto",
            pt: "Hipnoblasto",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
            fr: "Retourner une pièce. Si la tête, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora addormentato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está dormindo.",
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
