import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Deoxys ex - 045/082",
         ja: "Deoxys ex -045/082",
         fr: "Deoxys ex - 045/082",
         de: "Deoxys ex - 045/082",
         es: "DEOXYS EX - 045/082",
         it: "Deoxys Ex - 045/082",
         pt: "DEOXYS EX - 045/082",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [386],
      hp: 110,
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
            en: "Once during your turn (before your attack), you may search your deck for another Deoxys ex and switch it with Deoxys ex. (Any cards attached to Deoxys ex, damage counters, Special Conditions, and effects on it are now on the new PokÃ©mon.) If you do, put Deoxys ex on top of your deck. Shuffle your deck afterward.  You can't use more than 1 Form Change PokÃ©-Power each turn.",
            ja: "ターン中に（攻撃の前）、デッキを検索して別のDeoxys Exを検索し、Deoxys Exで切り替えることができます。 （Deoxys Ex、ダメージカウンター、特別な条件、およびそれに対する影響に添付されたカードは、現在新しいPokã©Mon。）にある場合は、Deoxys Exをデッキの上に置きます。その後、デッキをシャッフルします。  ターンごとに1つ以上のフォーム変更Pokã©-Powerを使用することはできません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre deck un autre Deoxys ex et le changer avec Deoxys ex. (Toutes les cartes attachées à Deoxys ex, les compteurs de dégâts, les conditions spéciales et les effets à ce sujet sont maintenant sur le nouveau Pokã © Mon.) Si vous le faites, mettez Deoxys Ex sur votre jeu. Mélanger votre deck par la suite.  Vous ne pouvez pas utiliser plus d'un changement de formulaire Pokã © -Power à chaque tour.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihr Deck nach einem anderen Desoxys Ex durchsuchen und es mit Deoxys Ex wechseln. (Alle Karten, die an Deoxys Ex, Schadenszähler, besondere Bedingungen und Auswirkungen auf die neuen Poké Mons sind.) Wenn Sie dies tun.) Wenn Sie dies tun, legen Sie Deoxys Ex auf Ihr Deck. Mischen Sie anschließend Ihr Deck.  Sie können nicht mehr als 1 Formänderung Poké-Kraft in jeder Runde verwenden.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo otro Deoxys Ex y cambiarlo con Deoxys Ex. (Cualquier tarjetas adjuntas a Deoxys EX, contadores de daño, condiciones especiales y efectos en ellas ahora están en el nuevo Poké Mon.) Si lo hace, coloque Deoxys Ex sobre su mazo. Baraja tu mazo después.  No puede usar más de 1 formulario de cambio de forma en cada vuelta.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo un altro Deoxys Ex e cambiarlo con Deoxys Ex. (Eventuali carte collegate a Deoxys Ex, contatori di danni, condizioni speciali ed effetti su di esso sono ora sul nuovo poké mon.) Se lo fai, metti Deoxys ex sopra il mazzo. Shuffle il tuo mazzo in seguito.  Non è possibile utilizzare più di 1 modifica del modulo Poké-power ogni turno.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar no seu baralho por outro Deoxys ex e trocá -lo com Deoxys Ex. (Quaisquer cartões anexados a Deoxys Ex, contadores de danos, condições especiais e efeitos nela estão agora no novo Poké Mon.) Se o fizer, coloque Deoxys EX em cima do seu baralho. Afaste seu baralho depois.  Você não pode usar mais de 1 forma de alteração de Poké-Power a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Psyburst",
            ja: "Psyburst",
            fr: "Psychure",
            de: "Psyburst",
            es: "Psíquico",
            it: "Psyburst",
            pt: "Psyburst",
          },
          effect: {
            en: "You may discard 2 Energy attached to Deoxys ex. If you do, this attack does 50 damage plus 20 more damage for each Energy attached to the Defending Pokemon.",
            ja: "Deoxys Exに取り付けられた2つのエネルギーを捨てることができます。もしそうなら、この攻撃は50のダメージに加えて、防御ポケモンに取り付けられた各エネルギーに対して20のダメージをさらに20回かけます。",
            fr: "Vous pouvez éliminer 2 énergie attachée à Deoxys Ex. Si vous le faites, cette attaque fait 50 dégâts plus 20 dégâts supplémentaires pour chaque énergie attachée au Pokémon en défense.",
            de: "Sie können 2 Energie verwerfen, die an Deoxys Ex gebunden sind. Wenn Sie dies tun, verursacht dieser Angriff 50 Schäden plus 20 weitere Schäden für jede an das verteidigende Pokémon angeschlossene Energie.",
            es: "Puede descartar 2 energía unida a Deoxys Ex. Si lo hace, este ataque hace 50 daños más 20 más de daño por cada energía unida al Pokémon defensor.",
            it: "È possibile scartare 2 energia attaccata a Deoxys Ex. Se lo fai, questo attacco infligge 50 danni più 20 danni in più per ogni energia attaccata al Pokemon in difesa.",
            pt: "Você pode descartar 2 energia anexada a Deoxys Ex. Se o fizer, esse ataque causa 50 danos mais 20 mais danos para cada energia ligada ao pokemon defensor.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
