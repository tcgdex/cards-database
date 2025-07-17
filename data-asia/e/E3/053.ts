import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Slowking - 053/087",
         ja: "スローキング-053/087",
         fr: "Slowking - 053/087",
         de: "Slowking - 053/087",
         es: "Slowing - 053/087",
         it: "Slowking - 053/087",
         pt: "Slowking - 053/087",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [199],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Bursting Hand",
            ja: "バーストハンド",
            fr: "La main",
            de: "Hände platzen",
            es: "Mano revestida",
            it: "Mano esplodente",
            pt: "Mão cheia",
          },
          effect: {
            en: "Look at your opponent's hand. This attack does 10 damage times the number of Energy cards there are.",
            ja: "相手の手を見てください。この攻撃は、エネルギーカードの数の10倍のダメージを与えます。",
            fr: "Regardez la main de votre adversaire. Cette attaque fait 10 dégâts le nombre de cartes d'énergie.",
            de: "Schauen Sie sich die Hand Ihres Gegners an. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Energiekarten.",
            es: "Mira la mano de tu oponente. Este ataque hace 10 veces el número de cartas de energía que hay.",
            it: "Guarda la mano del tuo avversario. Questo attacco fa 10 danni volte il numero di carte energetiche che ci sono.",
            pt: "Olhe para a mão do seu oponente. Este ataque causa 10 danos vezes o número de cartões de energia que existem.",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Shuffle Attack",
            ja: "シャッフル攻撃",
            fr: "Attaque de méchant",
            de: "Shuffle Attack",
            es: "Atacar",
            it: "Shuffle Attack",
            pt: "Ataque de embaralhamento",
          },
          effect: {
            en: "Look at a number of cards on top of your opponent's deck equal to the number of Energy cards attached to the Defending Pokemon. Put those cards in any order, and then put them back on top of your opponent's deck.",
            ja: "防御ポケモンに接続されたエネルギーカードの数に等しい相手のデッキの上にある多くのカードを見てください。それらのカードを任意の順序に置き、対戦相手のデッキの上に戻します。",
            fr: "Regardez un certain nombre de cartes au-dessus du deck de votre adversaire égal au nombre de cartes d'énergie attachées au Pokémon en défense. Mettez ces cartes dans n'importe quel ordre, puis remettez-les sur le jeu de votre adversaire.",
            de: "Schauen Sie sich eine Reihe von Karten über das Deck Ihres Gegners an, das der Anzahl der an das verteidigenden Pokemon angeschlossenen Energiekarten entspricht. Setzen Sie diese Karten in jeder Reihenfolge und legen Sie sie dann wieder auf das Deck Ihres Gegners.",
            es: "Mire una serie de cartas en la parte superior del mazo de su oponente igual a la cantidad de cartas de energía unidas al Pokémon defensor. Coloque esas cartas en cualquier orden y luego vuelva a colocarlas en la parte superior del mazo de tu oponente.",
            it: "Guarda una serie di carte in cima al mazzo del tuo avversario pari al numero di carte di energia collegate al Pokemon in carica. Metti quelle carte in qualsiasi ordine, quindi rimettile sopra il mazzo del tuo avversario.",
            pt: "Veja várias cartas no topo do baralho do seu oponente, igual ao número de cartas de energia anexadas ao Pokémon defensor. Coloque essas cartas em qualquer ordem e depois as coloque de volta no baralho do seu oponente.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

};
