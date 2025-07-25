import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Mightyena",
         ja: "マイティエナ",
         fr: "Puissant",
         de: "Mightyena",
         es: "Mightyena",
         it: "Potente",
         pt: "Mightyena",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [262],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Seek Out",
            ja: "探してください",
            fr: "Chercher",
            de: "Suchen",
            es: "Buscar",
            it: "Cercare",
            pt: "Procurar",
          },
          effect: {
            en: "Search your deck for 1 card and put it into your hand. Shuffle your deck afterward.",
            ja: "デッキを1枚のカードを検索し、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour 1 carte et mettez-la dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach 1 Karte und stecken Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo 1 carta y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo per 1 carta e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por 1 cartão e coloque -o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Pull Away",
            ja: "引き離します",
            fr: "Se retirer",
            de: "Zurückziehen",
            es: "Arrancar",
            it: "Tira via",
            pt: "Afaste -se",
          },
          effect: {
            en: "If your opponent has 5 or more cards in his or her hand, your opponent discards a number of cards until your opponent has 4 cards left in his or her hand.",
            ja: "相手が手に5枚以上のカードを持っている場合、対戦相手が4枚のカードが残っているまで、相手は多数のカードを破棄します。",
            fr: "Si votre adversaire a 5 cartes ou plus dans sa main, votre adversaire rejette un certain nombre de cartes jusqu'à ce que votre adversaire ait 4 cartes dans sa main.",
            de: "Wenn Ihr Gegner 5 oder mehr Karten in seiner Hand hat, verwirft Ihr Gegner eine Reihe von Karten, bis Ihr Gegner 4 Karten in seiner Hand hat.",
            es: "Si tu oponente tiene 5 o más cartas en su mano, tu oponente descarta una serie de cartas hasta que tu oponente le quedan 4 cartas en su mano.",
            it: "Se il tuo avversario ha 5 o più carte nella sua mano, il tuo avversario scarta un numero di carte fino a quando il tuo avversario non ha 4 carte rimaste in mano.",
            pt: "Se o seu oponente tiver 5 ou mais cartas em sua mão, seu oponente descarta várias cartas até que seu oponente tenha 4 cartas restantes na mão dele.",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
