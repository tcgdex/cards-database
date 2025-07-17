import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Shining Magikarp",
         ja: "輝くマジカルプ",
         fr: "Magikarp brillant",
         de: "Leuchtender Magikarp",
         es: "Magikarp brillante",
         it: "Shining Magikarp",
         pt: "Magikarp brilhante",
      },

      rarity: "Secret Rare",
      category: "Pokemon",
      dexId: [129],
      hp: 30,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Gold Scale",
            ja: "ゴールドスケール",
            fr: "Gamme d'or",
            de: "Goldskala",
            es: "Escala de oro",
            it: "Scala d'oro",
            pt: "Escala de ouro",
          },
          effect: {
            en: "Your opponent may draw 2 cards. Either way, you may draw 2 cards.",
            ja: "対戦相手は2枚のカードを描くことができます。いずれにせよ、2枚のカードを描くことができます。",
            fr: "Votre adversaire peut dessiner 2 cartes. Quoi qu'il en soit, vous pouvez dessiner 2 cartes.",
            de: "Ihr Gegner kann 2 Karten ziehen. In jedem Fall können Sie 2 Karten zeichnen.",
            es: "Tu oponente puede dibujar 2 cartas. De cualquier manera, puedes dibujar 2 cartas.",
            it: "Il tuo avversario può disegnare 2 carte. Ad ogni modo, puoi disegnare 2 carte.",
            pt: "Seu oponente pode desenhar 2 cartas. De qualquer maneira, você pode desenhar 2 cartas.",
          },
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Dragon Bond",
            ja: "ドラゴンボンド",
            fr: "Lien de dragon",
            de: "Drachenbindung",
            es: "Vínculo de dragón",
            it: "Dragon Bond",
            pt: "Dragon Bond",
          },
          effect: {
            en: "Search your deck for a card named Gyarados, Dark Gyarados, or Shining Gyarados. Show it to your opponent and put it into your hand. Shuffle your deck afterward.",
            ja: "Gyarados、Dark Gyarados、またはShining Gyaradosという名前のカードを検索してください。それを相手に見せて、あなたの手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck une carte nommée Gyarados, Gyarados sombres ou gyarados brillants. Montrez-le à votre adversaire et mettez-le dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Karte namens Gyarados, Dark Gyarados oder Shining Gyarados. Zeigen Sie es Ihrem Gegner und stecken Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una carta llamada Gyarados, Dark Gyarados o Gyarados brillantes. Muéstralo a tu oponente y póngalo en tu mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta di nome Gyarados, Dark Gyarados o Shining Gyarados. Mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por uma carta chamada Gyarados, Gyarados escuro ou gyarados brilhantes. Mostre ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois.",
          },
        },
      ],

      retreat: 1,

};
