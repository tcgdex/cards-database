import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Wynaut",
         ja: "wynaut",
         fr: "Wynaut",
         de: "Wynaut",
         es: "Wynaut",
         it: "Wynaut",
         pt: "Wynaut",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [360],
      hp: 50,
      types: ["Psychic"],
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
            en: "Once during your turn (before your attack), you may put Wobbuffet from your hand onto Wynaut (this counts as evolving Wynaut), and remove all damage counters from Wynaut.",
            ja: "ターン中に（攻撃の前に）、Wobbuffetを手からWynaut（これは進化するWynautとしてカウント）に置き、Wynautからすべてのダメージカウンターを削除することができます。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez mettre Wobbuffet de votre main sur Wynaut (cela compte comme en évolution de Wynaut) et retirer tous les compteurs de dégâts de Wynaut.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Wobbuffet aus Ihrer Hand auf Wynaut legen (dies zählt als sich entwickelnde Wynaut) und entfernen alle Schadenszähler von Wynaut.",
            es: "Una vez durante su turno (antes de su ataque), puede colocar Wobbuffet de su mano en Wynaut (esto cuenta como Wynaut en evolución) y eliminar todos los contadores de daño de Wynaut.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi mettere Wobbuffet dalla tua mano su Wynaut (questo conta come Wynaut in evoluzione) e rimuovere tutti i contatori di danno da Wynaut.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode colocar Wobbuffet da sua mão em Wynaut (isso conta como evoluindo Wynaut) e remover todos os contadores de danos de Wynaut.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Alluring Smile",
            ja: "魅力的な笑顔",
            fr: "Sourire séduisant",
            de: "Verführerisches Lächeln",
            es: "Atracción",
            it: "Sorriso seducente",
            pt: "Sorriso atraente",
          },
          effect: {
            en: "Search your deck for a Basic Pokemon card or Evolution card for each Energy attached to Wynaut, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
            ja: "Wynautに取り付けられた各エネルギーの基本的なポケモンカードまたはEvolution Cardをデッキに検索し、相手に見せて、手に入れます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour une carte Pokémon ou une carte d'évolution de base pour chaque énergie attachée à Wynaut, montrez-les à votre adversaire et mettez-les dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer einfachen Pokemon -Karte oder Evolutionskarte für jede an Wynaut verbundene Energie, zeigen Sie sie Ihrem Gegner und geben Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una carta de Pokémon básica o una carta de evolución para cada energía adjunta a Wynaut, muéstrelos a su oponente y póngalos en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una scheda Pokemon di base o una scheda Evolution per ogni energia collegata a Wynaut, mostrali al tuo avversario e mettili in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de um cartão Pokemon básico ou evolução para cada energia anexada a Wynaut, mostre -os ao seu oponente e coloque -os em sua mão. Afaste seu baralho depois.",
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
