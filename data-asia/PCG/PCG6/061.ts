import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Ditto",
         ja: "同上",
         fr: "Idem",
         de: "Dito",
         es: "Ídem",
         it: "Idem",
         pt: "Idem",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [132],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Duplicate",
            ja: "重複",
            fr: "Double",
            de: "Duplikat",
            es: "Duplicado",
            it: "Duplicato",
            pt: "Duplicado",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your deck for another Ditto and switch it with Ditto. (Any cards attached to Ditto, damage counters, Special Conditions, and effects on it are now on the new PokÃ©mon.) If you do, put Ditto on top of your deck. Shuffle your deck afterward. You can't use more than 1 Duplicate PokÃ©-Power each turn.",
            ja: "ターン中（攻撃の前に）一度（攻撃の前）、デッキを別の同じように検索し、同じように切り替えることができます。 （同上に添付されたカード、ダメージカウンター、特別な条件、およびその影響は、現在新しいPokã©Mon。）になっている場合は、デッキの上にDittoを置きます。その後、デッキをシャッフルします。ターンごとに1つ以上の重複Pokã©-Powerを使用することはできません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre deck un autre idem et le changer avec idem. (Toutes les cartes attachées à Ditto, les compteurs de dégâts, les conditions spéciales et les effets à ce sujet sont maintenant sur le nouveau Pokã © lun.) Si vous le faites, mettez idem sur votre jeu. Mélanger votre deck par la suite. Vous ne pouvez pas utiliser plus de 1 poképlicatrice POK-Power à chaque tour.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihr Deck nach einem anderen dito durchsuchen und es mit dito wechseln. (Alle Karten, die an Ditto, Schadenszähler, besondere Bedingungen und Auswirkungen auf die neuen Poké Mons angeschlossen sind, befinden sich auf das neue Poké Mon. Mischen Sie anschließend Ihr Deck. Sie können nicht mehr als 1 doppelte Poké-Kraft in jeder Runde verwenden.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo otro ídem y cambiarlo con ídem. (Cualquier carta adjunta a ídem, contadores de daño, condiciones especiales y efectos en ellas ahora están en el nuevo Poké Mon.) Si lo hace, coloque ídem sobre su mazo. Baraja tu mazo después. No puede usar más de 1 duplicado Poké-Power cada turno.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo un altro idem e cambiarlo con Idem. (Eventuali carte collegate a idem, contatori di danni, condizioni speciali ed effetti su di esso sono ora sul nuovo Poké mon.) Se lo fai, metti idem sopra il mazzo. Shuffle il tuo mazzo in seguito. Non è possibile utilizzare più di 1 duplicata poké-power ogni turno.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode procurar seu deck por outro idem e trocá -lo com o Idem. (Quaisquer cartões anexados ao Idem, contadores de danos, condições especiais e efeitos nela estão agora no novo Poké Mon.) Se o fizer, coloque o Idem em cima do seu baralho. Afaste seu baralho depois. Você não pode usar mais de 1 Poké-Poké-Power.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Energy Link",
            ja: "エネルギーリンク",
            fr: "Lien énergétique",
            de: "Energieverbindung",
            es: "Enlace de energía",
            it: "Collegamento energetico",
            pt: "Energy Link",
          },
          effect: {
            en: "Search your discard pile for an Energy card and attach it to Ditto.",
            ja: "廃棄の山を検索して、エネルギーカードを添付し、それを同じように添付してください。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie et attachez-la à idem.",
            de: "Suchen Sie Ihren Abwurfstapel nach einer Energiekarte und befestigen Sie sie am dito.",
            es: "Busque en su pila de descarte en busca de una tarjeta de energía y colóquela a ídem.",
            it: "Cerca al tuo mucchio di scarti per una carta energetica e attaccalo a Idem.",
            pt: "Pesquise sua pilha de descarte por um cartão de energia e anexe -o ao Idem.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
