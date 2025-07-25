import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Luvdisc",
         ja: "luvdisc",
         fr: "Luvdisc",
         de: "Luvdisc",
         es: "Luvdisc",
         it: "Luvdisc",
         pt: "Luvdisc",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [370],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Even Game",
            ja: "ゲームでさえ",
            fr: "Même gibier",
            de: "Sogar Spiel",
            es: "Incluso juego",
            it: "Anche il gioco",
            pt: "Até o jogo",
          },
          effect: {
            en: "Count the number of your opponent's Pokemon. Search your deck for up to that number of Basic Pokemon and put them onto your Bench. Shuffle your deck afterward.",
            ja: "相手のポケモンの数を数えます。その数の基本的なポケモンまでデッキを検索し、ベンチに置きます。その後、デッキをシャッフルします。",
            fr: "Comptez le nombre de Pokémon de votre adversaire. Recherchez votre deck pour ce nombre de Pokémon de base et mettez-les sur votre banc. Mélanger votre deck par la suite.",
            de: "Zählen Sie die Anzahl der Pokémon Ihres Gegners. Suchen Sie Ihr Deck nach bis zu dieser Anzahl von Basic -Pokémon und legen Sie sie auf Ihre Bank. Mischen Sie anschließend Ihr Deck.",
            es: "Cuente el número de Pokémon de tu oponente. Busque en su mazo hasta ese número de Pokémon básicos y colóquelos en su banco. Baraja tu mazo después.",
            it: "Conta il numero del Pokemon del tuo avversario. Cerca nel tuo mazzo fino a quel numero di Pokemon di base e mettili in panchina. Shuffle il tuo mazzo in seguito.",
            pt: "Conte o número de Pokémon do seu oponente. Procure seu baralho até esse número de Pokémon básico e coloque -os em seu banco. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Stadium Play",
            ja: "スタジアムプレイ",
            fr: "Jeu de stade",
            de: "Stadionspiel",
            es: "Juego de estadio",
            it: "Play stadio",
            pt: "Jogo de estádio",
          },
          effect: {
            en: "If you have a Stadium card in play, remove 1 damage counter from each of your Pokemon. If your opponent has a Stadium card in play, this attack does 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "スタジアムカードをプレイしている場合は、ポケモンのそれぞれから1つのダメージカウンターを削除します。対戦相手がスタジアムカードをプレイしている場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si vous avez une carte de stade en jeu, retirez 1 compteur de dégâts de chacun de vos Pokémon. Si votre adversaire a une carte de stade en jeu, cette attaque fait 10 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Sie eine Stadionkarte im Spiel haben, entfernen Sie 1 Schadenschalter von jedem Ihrer Pokémon. Wenn Ihr Gegner eine Stadionkarte im Spiel hat, schadet dieser Angriff 10 Schäden an das Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tiene una carta del estadio en juego, elimine 1 contador de daño de cada uno de sus Pokémon. Si tu oponente tiene una carta del estadio en juego, este ataque hace 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se hai una carta stadio in gioco, rimuovi 1 contatore di danni da ciascuno dei tuoi Pokemon. Se il tuo avversario ha una carta dello stadio in gioco, questo attacco fa 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se você tiver uma carta de estádio em jogo, remova 1 contador de danos de cada um dos seus Pokémon. Se o seu oponente tiver uma carta de estádio em jogo, esse ataque causará 10 danos a cada um dos Pokémon em banco do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
