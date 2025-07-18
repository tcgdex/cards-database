import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Cleffa",
         ja: "クレファ",
         fr: "Cleffa",
         de: "Cleffa",
         es: "Cleffa",
         it: "Cleffa",
         pt: "Cleffa",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [173],
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
            en: "Once during your turn (before your attack), you may put Clefairy from your hand onto Cleffa (this counts as evolving Cleffa) and remove all damage counters from Cleffa.",
            ja: "ターン中に（攻撃の前に）、クレファリーを手からクレファに置き（これは進化するクレファとしてカウントされます）、クレファからすべてのダメージカウンターを削除することができます。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez mettre Clefairy de votre main sur Cleffa (cela compte comme Cleffa en évolution) et retirer tous les compteurs de dégâts de Cleffa.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) Clefairy aus Ihrer Hand auf Cleffa stellen können (dies zählt als sich entwickelnde Cleffa) und alle Schadenszähler von Cleffa entfernen.",
            es: "Una vez durante su turno (antes de su ataque), puede colocar Clefairy de su mano en Cleffa (esto cuenta como Cleffa evolucionado) y eliminar todos los contadores de daño de Cleffa.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi mettere Clefairy dalla tua mano a Cleffa (questo conta come Cleffa in evoluzione) e rimuovere tutti i contatori di danno da Cleffa.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode colocar a Clefairy da sua mão em Cleffa (isso conta como Cleffa em evolução) e remover todos os contadores de danos de Cleffa.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Eeeeeeek",
            ja: "eeeeeeek",
            fr: "Eeeeeek",
            de: "Eeeeeeeek",
            es: "Eeeeeeek",
            it: "Eeeeeek",
            pt: "Eeeeeeeeek",
          },
          effect: {
            en: "Shuffle your hand into your deck, then draw 6 cards.",
            ja: "手をデッキにシャッフルしてから、6枚のカードを描きます。",
            fr: "Merdez votre main dans votre deck, puis dessinez 6 cartes.",
            de: "Mischen Sie Ihre Hand in Ihr Deck und zeichnen Sie dann 6 Karten.",
            es: "Arrastra tu mano en tu mazo, luego dibuje 6 cartas.",
            it: "Shuffle la mano nel tuo mazzo, quindi disegna 6 carte.",
            pt: "Arraste sua mão no baralho e desenhe 6 cartas.",
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
