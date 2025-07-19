import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Torkoal",
         ja: "トルコール",
         fr: "Torkoal",
         de: "Torkoal",
         es: "Torkoal",
         it: "Torkoal",
         pt: "Torkoal",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [324],
      hp: 80,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Cry for Help",
            ja: "助けを求めて泣きます",
            fr: "Cry à l'aide",
            de: "Hilfe weinen",
            es: "Llorar por ayuda",
            it: "Piangere di aiuto",
            pt: "Chorar por ajuda",
          },
          effect: {
            en: "Search your deck for a Fire Pokemon (excluding Pokemon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索して、ファイアポケモン（ポケモンエクスを除く）を検索し、対戦相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour un Pokémon de feu (à l'exclusion de Pokemon-Ex), montrez-le à votre adversaire et mettez-le dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem Feuerpokémon (ohne Pokemon-ex), zeigen Sie es Ihrem Gegner und geben Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un Pokémon de fuego (excluyendo Pokémon-EX), muéstrelo a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo un Pokemon Fire (escluso Pokemon-Ex), mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por um Pokémon de Fogo (excluindo Pokemon-Ex), mostre-o ao seu oponente e coloque-o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Fireworks",
            ja: "花火",
            fr: "Feux d'artifice",
            de: "Feuerwerk",
            es: "Fuegos artificiales",
            it: "Fuochi d'artificio",
            pt: "Fogos de artifício",
          },
          effect: {
            en: "Flip a coin. If tails, discard a Fire Energy attached to Torkoal.",
            ja: "コインをひっくり返します。尾の場合、トルコールに取り付けられた火エネルギーを捨ててください。",
            fr: "Retourner une pièce. Si les queues, jettent une énergie de feu attachée à Torkoal.",
            de: "Eine Münze drehen. Wenn Schwänze, entsorgen Sie eine Feuerergie, die mit Torkoal verbunden ist.",
            es: "Voltea una moneda. Si las colas, deseche una energía de fuego unida a Torkoal.",
            it: "Capovolgi una moneta. Se coda, scartare un'energia di fuoco attaccata a Torkoal.",
            pt: "Vire uma moeda. Se caudas, descarte uma energia de incêndio anexada ao Torkoal.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
