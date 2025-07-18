import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Falkner's Delibird",
         ja: "フォークナーのデリビード",
         fr: "Delibird de Falkner",
         de: "Falkners Delibird",
         es: "Delibird de Falkner",
         it: "Delibird di Falkner",
         pt: "Delibird de Falkner",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [225],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Ram",
            ja: "ラム",
            fr: "Bélier",
            de: "RAM",
            es: "RAM",
            it: "RAM",
            pt: "Bater",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Package Delivery",
            ja: "パッケージ配信",
            fr: "Livraison de colis",
            de: "Packungszustellung",
            es: "Entrega de paquetes",
            it: "Consegna del pacchetto",
            pt: "Entrega de pacotes",
          },
          effect: {
            en: "Put Falkner's Delibird and all cards attached to it on top of your deck. Search your deck for a Trainer card, show it to your opponent and put it into your hand. Shuffle your deck afterward. If you don't have any Benched Pokemon, this attack does nothing.",
            ja: "FalknerのDelibirdとすべてのカードをデッキの上に置きます。デッキを検索して、トレーナーカードを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。ベンチ付きポケモンがない場合、この攻撃は何もしません。",
            fr: "Mettez le Delibird de Falkner et toutes les cartes qui y sont attachées sur votre jeu. Recherchez votre jeu pour une carte d'entraînement, montrez-la à votre adversaire et mettez-la dans votre main. Mélanger votre deck par la suite. Si vous n'avez pas de Pokémon banc, cette attaque ne fait rien.",
            de: "Setzen Sie Falkners Delibird und alle Karten auf Ihr Deck. Suchen Sie Ihr Deck nach einer Trainerkarte, zeigen Sie es Ihrem Gegner und geben Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck. Wenn Sie kein Bank -Pokemon haben, tut dieser Angriff nichts.",
            es: "Ponga el Delibird de Falkner y todas las cartas adjuntas en la parte superior de tu mazo. Busque en su mazo una tarjeta de entrenador, muéstrelo a su oponente y póngalo en su mano. Baraja tu mazo después. Si no tienes ningún Pokémon de banca, este ataque no hace nada.",
            it: "Metti Delibird e tutte le carte di Falkner attaccate sopra il tuo mazzo. Cerca nel tuo mazzo una carta dell'allenatore, mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito. Se non hai Pokemon in panchina, questo attacco non fa nulla.",
            pt: "Coloque o Delibird de Falkner e todas as cartas anexadas a ele em cima do seu baralho. Pesquise seu baralho em busca de uma carta de treinador, mostre -a ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois. Se você não tem nenhum Pokémon em banco, esse ataque não faz nada.",
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
