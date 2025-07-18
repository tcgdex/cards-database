import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Deoxys ex",
         ja: "Deoxys ex",
         fr: "Deoxys ex",
         de: "Deoxys ex",
         es: "DEOXYS EX",
         it: "Deoxys Ex",
         pt: "DEOXYS EX",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [386],
      hp: 90,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Form Change",
            ja: "フォームの変更",
            fr: "Changement de forme",
            de: "Formänderung",
            es: "Cambio de forma",
            it: "Modifica del modulo",
            pt: "Mudança de forma",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your deck for another Deoxys ex and switch it with Deoxys ex. (Any cards attached to Deoxys ex, damage counters, Special Conditions, and effects on it are now on the new PokÃ©mon.) If you do, put Deoxys ex on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change PokÃ©-Power each turn.",
            ja: "ターン中に（攻撃の前）、デッキを検索して別のDeoxys Exを検索し、Deoxys Exで切り替えることができます。 （Deoxys Ex、ダメージカウンター、特別な条件、およびそれに対する影響に添付されたカードは、現在新しいPokã©Mon。）にある場合は、Deoxys Exをデッキの上に置きます。その後、デッキをシャッフルします。ターンごとに1つ以上のフォーム変更Pokã©-Powerを使用することはできません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre deck un autre Deoxys ex et le changer avec Deoxys ex. (Toutes les cartes attachées à Deoxys ex, les compteurs de dégâts, les conditions spéciales et les effets à ce sujet sont maintenant sur le nouveau Pokã © Mon.) Si vous le faites, mettez Deoxys Ex sur votre jeu. Mélanger votre deck par la suite. Vous ne pouvez pas utiliser plus d'un changement de formulaire Pokã © -Power à chaque tour.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihr Deck nach einem anderen Desoxys Ex durchsuchen und es mit Deoxys Ex wechseln. (Alle Karten, die an Deoxys Ex, Schadenszähler, besondere Bedingungen und Auswirkungen auf die neuen Poké Mons sind.) Wenn Sie dies tun.) Wenn Sie dies tun, legen Sie Deoxys Ex auf Ihr Deck. Mischen Sie anschließend Ihr Deck. Sie können nicht mehr als 1 Formänderung Poké-Kraft in jeder Runde verwenden.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo otro Deoxys Ex y cambiarlo con Deoxys Ex. (Cualquier tarjetas adjuntas a Deoxys EX, contadores de daño, condiciones especiales y efectos en ellas ahora están en el nuevo Poké Mon.) Si lo hace, coloque Deoxys Ex sobre su mazo. Baraja tu mazo después. No puede usar más de 1 formulario de cambio de forma en cada vuelta.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo un altro Deoxys Ex e cambiarlo con Deoxys Ex. (Eventuali carte collegate a Deoxys Ex, contatori di danni, condizioni speciali ed effetti su di esso sono ora sul nuovo poké mon.) Se lo fai, metti Deoxys ex sopra il mazzo. Shuffle il tuo mazzo in seguito. Non è possibile utilizzare più di 1 modifica del modulo Poké-power ogni turno.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar no seu baralho por outro Deoxys ex e trocá -lo com Deoxys Ex. (Quaisquer cartões anexados a Deoxys Ex, contadores de danos, condições especiais e efeitos nela estão agora no novo Poké Mon.) Se o fizer, coloque Deoxys EX em cima do seu baralho. Afaste seu baralho depois. Você não pode usar mais de 1 forma de alteração de Poké-Power a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Psychic Shield",
            ja: "サイキックシールド",
            fr: "Bouclier psychique",
            de: "Psychischer Schild",
            es: "Escudo psíquico",
            it: "Scudo psichico",
            pt: "Escudo psíquico",
          },
          effect: {
            en: "Prevent all effects of attacks, including damage, done to Deoxys ex by your opponent's Pokemon-ex during your opponent's next turn.",
            ja: "対戦相手の次のターン中に、対戦相手のポケモンエクスがDeoxys Exに行うダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets des attaques, y compris les dégâts, causés à Deoxys ex par le Pokemon-Ex de votre adversaire lors du prochain tour de votre adversaire.",
            de: "Verhindern Sie alle Auswirkungen von Angriffen, einschließlich Schäden, die Desoxys Ex durch den Pokemon-EX Ihres Gegners in der nächsten Runde Ihres Gegners angerichtet wurden.",
            es: "Evite todos los efectos de los ataques, incluido el daño, hecho a Deoxys EX por el Pokémon-EX de tu oponente durante el próximo turno de tu oponente.",
            it: "Prevenire tutti gli effetti degli attacchi, incluso il danno, fatto a Deoxys Ex dal Pokemon-Ex del tuo avversario durante il prossimo turno del tuo avversario.",
            pt: "Evite todos os efeitos dos ataques, incluindo danos, causados a Deoxys EX pelo Pokemon-Ex do seu oponente durante o próximo turno do seu oponente.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
