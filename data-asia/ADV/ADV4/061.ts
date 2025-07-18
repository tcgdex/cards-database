import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Igglybuff",
         ja: "Igglybuff",
         fr: "Igglybuff",
         de: "IgglyBuff",
         es: "Igglybuff",
         it: "Igglybuff",
         pt: "IgglyBuff",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [174],
      hp: 50,
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
            en: "Once during your turn (before your attack), you may put Jigglypuff from your hand onto Igglybuff (this counts as evolving Igglybuff), and remove all damage counters from Igglybuff.",
            ja: "ターン中（攻撃の前に）一度、Jigglypuffを手からIgglybuff（これは進化するIgglybuffとしてカウント）に置き、Igglybuffからすべてのダメージカウンターを削除することができます。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez mettre Jigglypuff de votre main sur Igglybuff (cela compte comme igglybuff en évolution) et retirer tous les compteurs de dégâts d'Igglybuff.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Jigglypuff aus Ihrer Hand auf IgglyBuff legen (dies zählt als sich entwickelnde Igllybuff) und alle Schadenszähler von Igllybuff entfernen.",
            es: "Una vez durante su turno (antes de su ataque), puede colocar Jigglypuff de su mano en Igglybuff (esto cuenta como IgGlybuff en evolución) y eliminar todos los contadores de daño de Igglybuff.",
            it: "Una volta durante il tuo turno (prima dell'attacco), puoi mettere Jigglypuff dalla tua mano su igglybuff (questo conta come igglybuff in evoluzione) e rimuovere tutti i contatori di danno da igglybuff.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode colocar o Jigglypuff da sua mão no IgglyBuff (isso conta como evoluindo o IgglyBuff) e remover todos os contadores de danos do IgglyBuff.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Set Song",
            ja: "曲をセットします",
            fr: "Set",
            de: "Set Song",
            es: "Establecer una canción",
            it: "Set Song",
            pt: "Set Song",
          },
          effect: {
            en: "Search your deck for a Basic Pokemon and a basic Energy card, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索して、基本的なポケモンと基本的なエネルギーカードを探し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour un Pokémon de base et une carte d'énergie de base, montrez-les à votre adversaire et mettez-les dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem einfachen Pokémon und einer grundlegenden Energiekarte, zeigen Sie sie Ihrem Gegner und geben Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un Pokémon básico y una tarjeta de energía básica, muéstrelos a su oponente y póngalos en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo un Pokemon di base e una carta di base di base, mostrali al tuo avversario e mettili in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por um Pokémon básico e um cartão de energia básico, mostre -os ao seu oponente e coloque -os em sua mão. Afaste seu baralho depois.",
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
