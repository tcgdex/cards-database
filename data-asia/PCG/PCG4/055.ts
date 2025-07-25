import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Unown",
         ja: "未知",
         fr: "À la main",
         de: "Unown",
         es: "Sin ojo",
         it: "Unto",
         pt: "Unido",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [201],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Shuffle",
            ja: "シャッフル",
            fr: "Mélanger",
            de: "Shuffle",
            es: "Barajar",
            it: "Shuffle",
            pt: "Embaralhar",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your deck for another Unown and switch it with Unown. (Any cards attached to Unown, damage counters, Special Conditions, and effects on it are now on the new PokÃ©mon.) If you do, put Unown on top of your deck. Shuffle your deck afterward. You can't use more than 1 Shuffle PokÃ©-Power each turn.",
            ja: "ターン中（攻撃の前）になったら、デッキを検索して別のデッキを検索して、未使用で切り替えることができます。 （未発生のダメージカウンター、特別な条件、およびその影響に添付されたカードは、新しいPokã©Mon。）にある場合は、デッキの上に置かれていません。その後、デッキをシャッフルします。ターンごとに1つ以上のシャッフルポカ - パワーを使用することはできません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre deck un autre et le changer avec non-bas. (Toutes les cartes attachées aux compteurs de dégâts non-bas, les conditions spéciales et les effets à ce sujet sont maintenant sur le nouveau Pokã © lun.) Si vous le faites, mettez Unwed sur votre jeu. Mélanger votre deck par la suite. Vous ne pouvez pas utiliser plus d'un shuffle poké-puissance à chaque tour.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihr Deck nach einem anderen Unown durchsuchen und es mit Unown wechseln. (Alle Karten, die an Unown, Schadenszähler, besonderen Bedingungen und Auswirkungen angeschlossen sind, befinden sich jetzt auf dem neuen Poké mon.) Wenn Sie dies tun, legen Sie es auf Ihr Deck. Mischen Sie anschließend Ihr Deck. Sie können nicht mehr als 1 Shuffle Poké-Kraft in jeder Runde verwenden.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo otro Unlow y cambiarlo sin Own. (Cualquier carta adjunta a los contadores de daño, contadores de daños, condiciones especiales y efectos en ellas ahora están en el nuevo Poké Mon.) Si lo hace, coloque Unlow en la parte superior de su mazo. Baraja tu mazo después. No puede usar más de 1 poke-potencia de poke en cada turno.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo un altro Unwnown e cambiarlo con Unown. (Eventuali carte collegate a Unown, contatori di danni, condizioni speciali ed effetti su di esso sono ora sul nuovo poké mon.) Se lo fai, metti un po 'in cima al tuo mazzo. Shuffle il tuo mazzo in seguito. Non puoi usare più di 1 shuffle poké-power ogni turno.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar no seu baralho por outro mundo e trocá -lo com o UNOWN. (Quaisquer cartões anexados ao Unwnow, contadores de danos, condições especiais e efeitos agora estão no novo Poké Mon.) Se o fizer, coloque o UNOWN em cima do seu baralho. Afaste seu baralho depois. Você não pode usar mais de 1 Shuffle Poké-Power a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Hidden Power",
            ja: "隠された力",
            fr: "Pouvoir caché",
            de: "Versteckte Kraft",
            es: "Poder oculto",
            it: "Potere nascosto",
            pt: "Poder oculto",
          },
          effect: {
            en: "Search your deck for a card that evolves from 1 of your Pokemon and put it on that Pokemon. (This counts as evolving that Pokemon.) If you do, put 1 damage counter on Unown. Shuffle your deck afterward.",
            ja: "ポケモンの1匹から進化するカードをデッキで検索し、そのポケモンに置いてください。 （これはポケモンの進化としてカウントされます。）もしそうなら、1つのダメージカウンターを使用していない。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu une carte qui évolue à partir de 1 de votre Pokémon et mettez-la sur ce pokemon. (Cela compte comme évoluant ce Pokémon.) Si vous le faites, mettez 1 compteur de dégâts sur Unown. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Karte, die sich von 1 Ihres Pokémon entwickelt, und legen Sie sie auf dieses Pokémon. (Dies zählt so, dass sich dieses Pokemon weiterentwickelt.) Wenn Sie dies tun, setzen Sie 1 Schadenschalter auf Unown. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una carta que evolucione de 1 de su Pokémon y póngala en ese Pokémon. (Esto cuenta como evolucionando a ese Pokémon). Si lo hace, ponga 1 contador de daño en Under. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta che si evolve da 1 del tuo Pokemon e mettilo su quel Pokemon. (Questo conta come evoluzione di quel Pokemon.) Se lo fai, metti 1 contatore di danni su UNOW. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de uma carta que evolui de 1 do seu Pokémon e coloque -o nesse Pokémon. (Isso conta como evoluindo esse Pokemon.) Se o fizer, coloque 1 contador de danos no UNOWN. Afaste seu baralho depois.",
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
