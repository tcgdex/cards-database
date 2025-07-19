import {Card} from "../../../interfaces"
import Set from "../PCG6"

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
            en: "Once during your turn (before your attack), you may put Marill from your hand onto Azurill (this counts as evolving Azurill) and remove all damage counters from Azurill.",
            ja: "ターン中（攻撃の前に）一度、マリルを手から置くことができます（これは進化するアズリルとしてカウントされます）。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez mettre Marill de votre main sur Azurill (cela compte comme Azurill en évolution) et retirer tous les compteurs de dégâts d'Azurill.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Marill von Ihrer Hand auf Azurill stellen (dies zählt als weiterentwickelnde Azurill) und entfernen alle Schadenszähler von Azurill.",
            es: "Una vez durante su turno (antes de su ataque), puede colocar a Marill de su mano en Azurill (esto cuenta como Azurill en evolución) y eliminar todos los contadores de daño de Azurill.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi mettere Marill dalla tua mano su Azurill (questo conta come Azurill in evoluzione) e rimuovere tutti i contatori di danno da Azurill.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode colocar Marill da sua mão no Azurill (isso conta como evoluindo Azurill) e remover todos os contadores de danos de Azurill.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Type Match",
            ja: "タイプマッチ",
            fr: "Correspondance de type",
            de: "Typ Match",
            es: "Tipo de coincidencia",
            it: "Tipo corrispondenza",
            pt: "Tipo de correspondência",
          },
          effect: {
            en: "Choose a basic Energy card in your hand and show it to your opponent. Then, search your deck for a Basic Pokemon or Evolution card of that Energy type, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "あなたの手に基本的なエネルギーカードを選択し、それを相手に見せてください。次に、そのエネルギータイプの基本的なポケモンまたはエボリューションカードを検索し、相手に見せて、手に入れます。その後、デッキをシャッフルします。",
            fr: "Choisissez une carte d'énergie de base dans votre main et montrez-la à votre adversaire. Ensuite, recherchez votre deck pour une carte Pokémon ou Evolution de base de ce type d'énergie, montrez-la à votre adversaire et mettez-la dans votre main. Mélanger votre deck par la suite.",
            de: "Wählen Sie eine grundlegende Energiekarte in Ihrer Hand und zeigen Sie sie Ihrem Gegner. Suchen Sie dann Ihr Deck nach einer grundlegenden Pokemon- oder Evolutionskarte dieses Energiertyps, zeigen Sie es Ihrem Gegner und geben Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Elija una tarjeta de energía básica en su mano y muéstrela a su oponente. Luego, busque en su mazo un Pokémon o una tarjeta de evolución básica de ese tipo de energía, muéstrelo a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Scegli una scheda energetica di base in mano e mostrala al tuo avversario. Quindi, cerca nel tuo mazzo un Pokemon di base o una carta di evoluzione di quel tipo di energia, mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Escolha um cartão de energia básico em sua mão e mostre -o ao seu oponente. Em seguida, pesquise no seu baralho um cartão Pokemon ou evolução básico desse tipo de energia, mostre -o ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois.",
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
