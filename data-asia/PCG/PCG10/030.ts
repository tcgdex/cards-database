import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Pichu",
         ja: "ピチュ",
         fr: "Pichu",
         de: "Pichu",
         es: "Pichu",
         it: "Pichu",
         pt: "Pichu",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [172],
      hp: 50,
      types: ["Lightning"],
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
            en: "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.",
            ja: "ターン中（攻撃の前に）一度、ピカチュウをピチュに手から置いて（これは進化するピチュとしてカウントされます）、ピチュからすべてのダメージカウンターを削除することができます。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez mettre Pikachu de votre main sur Pichu (cela compte comme Pichu en évolution) et retirer tous les compteurs de dégâts de Pichu.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) Pikachu aus Ihrer Hand auf Pichu stellen können (dies zählt als sich entwickelnde Pichu) und alle Schadenszähler von Pichu entfernen.",
            es: "Una vez durante su turno (antes de su ataque), puede colocar a Pikachu de su mano en Pichu (esto cuenta como Pichu en evolución) y eliminar todos los contadores de daño de Pichu.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi mettere Pikachu dalla mano a Pichu (questo conta come Pichu in evoluzione) e rimuovere tutti i contatori di danno da Pichu.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode colocar Pikachu da sua mão no Pichu (isso conta como evoluindo o Pichu) e remover todos os contadores de danos de Pichu.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Cry for Help",
            ja: "助けを求めて泣きます",
            fr: "Cry à l'aide",
            de: "Hilfe weinen",
            es: "Llorar por ayuda",
            it: "Piangere di aiuto",
            pt: "Chorar por ajuda",
          },
          effect: {
            en: "Search your deck for a Lightning Pokemon (excluding Pokemon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索して、稲妻ポケモン（ポケモンエクスを除く）を検索し、対戦相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour un Pokémon Lightning (à l'exclusion de Pokemon-Ex), montrez-le à votre adversaire et mettez-le dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem Blitzpokémon (ohne Pokemon-ex), zeigen Sie es Ihrem Gegner und geben Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un Pokémon Lightning (excluyendo Pokemon-EX), muéstrelo a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Search your deck for a Lightning Pokemon (excluding Pokemon-ex), show it to your opponent, and put it into your hand. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por um Pokémon Lightning (excluindo Pokemon-Ex), mostre-o ao seu oponente e coloque-o em sua mão. Afaste seu baralho depois.",
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
