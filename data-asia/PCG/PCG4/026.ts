import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Feraligatr",
         ja: "feraligatr",
         fr: "Ferraligatr",
         de: "Feraligatr",
         es: "Salvaje",
         it: "Feraligatr",
         pt: "Feraligatr",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [160],
      hp: 120,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Intimidating Fang",
            ja: "恐ろしい牙",
            fr: "Fang intimidant",
            de: "Fang einschüchtern",
            es: "Colmillo intimidante",
            it: "Tang intimidatorio",
            pt: "Fang intimidante",
          },
          effect: {
            en: "As long as Feraligatr is your Active PokÃ©mon, any damage done by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
            ja: "FeraligatrがアクティブなPokã©Monである限り、相手の攻撃によって与えられた損害は10増加します（脱力感と抵抗を適用する前）。",
            fr: "Tant que Feraligatr est votre poké actif, tout dommage causé par l'attaque d'un adversaire est réduit de 10 (avant d'appliquer une faiblesse et une résistance).",
            de: "Solange Feraligatr Ihr aktiver Pokémon ist, wird jeder Schaden, der durch den Angriff eines Gegners angerichtet wird, um 10 reduziert (bevor Schwäche und Widerstand angewendet werden).",
            es: "Mientras Feraligatr sea su Poké Mon activo, cualquier daño causado por el ataque de un oponente se reduce en 10 (antes de aplicar debilidad y resistencia).",
            it: "Finché Faraligatr è il tuo poké attivo, qualsiasi danno causato dall'attacco di un avversario è ridotto di 10 (prima di applicare debolezza e resistenza).",
            pt: "Enquanto Feraligatr for o seu Poké ativo, qualquer dano causado pelo ataque de um oponente é reduzido em 10 (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
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
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Tonnage",
            ja: "トン数",
            fr: "Tonnage",
            de: "Tonnage",
            es: "Tonelaje",
            it: "Tonnellaggio",
            pt: "Tonelagem",
          },
          effect: {
            en: "You may do 50 damage plus 30 more damage. If you do, Feraligatr does 30 damage to itself.",
            ja: "50ダメージに加えて30ダメージを与えることができます。もしそうなら、Feraligatrはそれ自体に30のダメージを与えます。",
            fr: "Vous pouvez faire 50 dégâts plus 30 dégâts supplémentaires. Si vous le faites, Feraligatr se fait 30 dégâts.",
            de: "Sie können 50 Schäden plus 30 weitere Schäden anrichten. Wenn Sie dies tun, verursacht Feraligatr 30 Schäden an sich.",
            es: "Puede causar 50 daños más 30 más de daño. Si lo hace, Feraligatr hace 30 daños a sí mismo.",
            it: "Puoi fare 50 danni più 30 danni in più. Se lo fai, Feraligatr fa 30 danni a se stesso.",
            pt: "Você pode causar 50 danos mais 30 mais danos. Se o fizer, Feraligatr causa 30 danos a si mesmo.",
          },
        },
      ],

      retreat: 2,

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
