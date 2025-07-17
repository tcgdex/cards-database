import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Clefairy",
         ja: "クリーフ",
         fr: "Clefairy",
         de: "Clefairy",
         es: "Clefairy",
         it: "Clefairy",
         pt: "Clefairy",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [35],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Doubleslap",
            ja: "doubleslap",
            fr: "Double",
            de: "Doppelklappe",
            es: "Duplana",
            it: "Doppbleslap",
            pt: "Doubleslap",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Squaredance",
            ja: "二乗",
            fr: "Carré",
            de: "Quadrat",
            es: "Cuadrado",
            it: "Squaredance",
            pt: "Quadrado",
          },
          effect: {
            en: "Flip a number of coins equal to the total number of Pokemon in play. For each heads, you may search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "プレイ中のポケモンの総数に等しい多数のコインをひっくり返します。各ヘッドについて、デッキを検索して基本的なエネルギーカードを検索し、相手に見せて、手に渡すことができます。その後、デッキをシャッフルします。",
            fr: "Retournez un certain nombre de pièces égales au nombre total de Pokémon en jeu. Pour chaque tête, vous pouvez rechercher votre jeu une carte d'énergie de base, le montrer à votre adversaire et le mettre dans votre main. Mélanger votre deck par la suite.",
            de: "Drehen Sie eine Reihe von Münzen um, die der Gesamtzahl der Pokémon im Spiel entsprechen. Für jeden Köpfe können Sie Ihr Deck nach einer grundlegenden Energiekarte durchsuchen, es Ihrem Gegner zeigen und in Ihre Hand legen. Mischen Sie anschließend Ihr Deck.",
            es: "Voltee una serie de monedas igual al número total de Pokémon en juego. Para cada cabezal, puede buscar en su mazo una carta de energía básica, mostrarla a su oponente y ponerlo en su mano. Baraja tu mazo después.",
            it: "Capovolgi un numero di monete pari al numero totale di Pokemon in gioco. Per ogni testa, puoi cercare nel tuo mazzo una carta di energia di base, mostrarlo al tuo avversario e metterlo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Vire uma série de moedas iguais ao número total de Pokemon em jogo. Para cada cabeça, você pode pesquisar um cartão de energia básico, mostrá -lo ao seu oponente e colocá -lo em sua mão. Afaste seu baralho depois.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
