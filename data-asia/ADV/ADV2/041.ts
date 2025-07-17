import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Azurill",
         ja: "アズリル",
         fr: "Azurill",
         de: "Azurill",
         es: "Azurill",
         it: "Azurill",
         pt: "Azurill",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [298],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Baby Evolution",
            ja: "赤ちゃんの進化",
            fr: "Évolution de bébé",
            de: "Babyentwicklung",
            es: "Evolución del bebé",
            it: "Evoluzione del bambino",
            pt: "Evolução do bebê",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may put Marill from your hand onto Azurill (this counts as evolving Azurill), and remove all damage counters from Azurill.",
            ja: "ターン中に（攻撃の前）</em> </em>、マリルを手から置くことができます（これは進化するアズリルとしてカウントされます）。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez mettre Marill de votre main sur Azurill (cela compte comme Azurill en évolution) et retirer tous les compteurs de dégâts d'Azurill.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie Marill von Ihrer Hand auf Azurill stellen (dies zählt als sich entwickelnde Azurill) und entfernen alle Schadenszähler von Azurill.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede poner a Marill de su mano en Azurill (esto cuenta como Azurill en evolución) y eliminar todos los contadores de daño de Azurill.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi mettere Marill dalla tua mano su Azurill (questo conta come Azurill in evoluzione) e rimuovere tutti i contatori di danno da Azurill.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode colocar Marill da sua mão no Azurill (isso conta como Azurill em evolução) e remover todos os contadores de danos do Azurill.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Jump Catch",
            ja: "ジャンプキャッチ",
            fr: "Prier",
            de: "Sprungfang",
            es: "Captura de salto",
            it: "Salta cattura",
            pt: "Pular captura",
          },
          effect: {
            en: "Search your deck for a Trainer card, show it to your opponent, and put it into your hand.  Shuffle your deck afterward.",
            ja: "デッキを検索して、トレーナーカードを検索し、相手に見せて、手に入れてください。  その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte d'entraînement, montrez-la à votre adversaire et mettez-la dans votre main.  Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Trainerkarte, zeigen Sie es Ihrem Gegner und geben Sie sie in Ihre Hand.  Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de entrenador, muéstrelo a su oponente y póngalo en su mano.  Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta dell'allenatore, mostralo al tuo avversario e mettilo in mano.  Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de uma carta de treinador, mostre -a ao seu oponente e coloque -o em sua mão.  Afaste seu baralho depois.",
          },
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
