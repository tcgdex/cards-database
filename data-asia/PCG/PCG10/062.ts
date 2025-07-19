import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Mawile",
         ja: "マウィール",
         fr: "Mawile",
         de: "Mawile",
         es: "Mawile",
         it: "Mawile",
         pt: "Mawile",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [303],
      hp: 60,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Call for Family",
            ja: "家族を呼びます",
            fr: "Appel à la famille",
            de: "Rufen Sie nach Familie",
            es: "Llamar a la familia",
            it: "Chiama per la famiglia",
            pt: "Ligue para a família",
          },
          effect: {
            en: "Search your deck for a Basic Pokemon and put it onto your Bench. Shuffle your deck afterward.",
            ja: "デッキを検索して、基本的なポケモンを探して、ベンチに置きます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour un Pokémon de base et mettez-le sur votre banc. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem einfachen Pokémon und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un Pokémon básico y colóquelo en su banco. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo un Pokemon di base e mettilo in panchina. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por um Pokémon básico e coloque -o em seu banco. Afaste seu baralho depois.",
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
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
