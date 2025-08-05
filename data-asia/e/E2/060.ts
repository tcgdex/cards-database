import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Togepi",
         ja: "togepi",
         fr: "Togepi",
         de: "Togepi",
         es: "Tegepi",
         it: "Togepi",
         pt: "TOGEPI",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [175],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Minor Errand-Running",
            ja: "マイナーな用事が走る",
            fr: "Correction des courses mineures",
            de: "Kleiner Besorgnis",
            es: "Corriente de recados menores",
            it: "Minore commissioni",
            pt: "Pequenas recados",
          },
          effect: {
            en: "Flip 2 coins. For each heads, search your deck for a basic Energy card. Show those cards to your opponent, and then put them into your hand. Shuffle your deck afterward.",
            ja: "2つのコインをフリップします。各ヘッドについて、デッキを検索して基本的なエネルギーカードを探してください。それらのカードを相手に見せてから、それらを手に入れます。その後、デッキをシャッフルします。",
            fr: "Flip 2 pièces. Pour chaque tête, recherchez votre deck pour une carte d'énergie de base. Montrez ces cartes à votre adversaire, puis mettez-les dans votre main. Mélanger votre deck par la suite.",
            de: "2 Münzen umdrehen. Suchen Sie für jeden Köpfe Ihr Deck nach einer grundlegenden Energiekarte. Zeigen Sie diese Karten Ihrem Gegner und legen Sie sie dann in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Flip 2 monedas. Para cada cabezal, busque en su mazo una tarjeta de energía básica. Muestre esas cartas a tu oponente y luego póngalas en tu mano. Baraja tu mazo después.",
            it: "Flip 2 monete. Per ogni testa, cerca nel tuo mazzo una carta energetica di base. Mostra quelle carte al tuo avversario e poi mettile in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Flip 2 moedas. Para cada cabeças, procure um cartão de energia básico. Mostre essas cartas ao seu oponente e depois coloque -as em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Pound",
            ja: "ポンド",
            fr: "Livre",
            de: "Pfund",
            es: "Libra",
            it: "Libbra",
            pt: "Libra",
          },
          damage: 10,
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
