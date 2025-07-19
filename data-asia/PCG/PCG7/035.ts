import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Deoxys (Delta Species)",
         ja: "deoxys（デルタ種）",
         fr: "Deoxys (espèces delta)",
         de: "Deoxys (Delta -Arten)",
         es: "DEOXYS (especie delta)",
         it: "Deoxys (Delta Species)",
         pt: "Deoxys (espécies Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [386],
      hp: 70,
      types: ["Colorless"],
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
            en: "Once during your turn (before your attack), you may search your deck for another Deoxys and switch it with Deoxys. (Any cards attached to Deoxys, damage counters, Special Conditions, and effects on it are now on the new PokÃ©mon.) If you do, put Deoxys on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change PokÃ©-Power each turn.",
            ja: "ターン中（攻撃の前）になったら、デッキを別のdeoxysに検索し、Deoxysで切り替えることができます。 （Deoxys、ダメージカウンター、特別な条件、およびその影響に添付されたカードは、現在、新しいPokã©Mon。）になります。）デッキの上にDeoxysを置きます。その後、デッキをシャッフルします。ターンごとに1つ以上のフォーム変更Pokã©-Powerを使用することはできません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre deck un autre Deoxys et le changer avec Deoxys. (Toutes les cartes attachées aux désoxys, les compteurs de dégâts, les conditions spéciales et les effets à ce sujet sont maintenant sur le nouveau Pokã © lun.) Si vous le faites, mettez Deoxys sur votre jeu. Mélanger votre deck par la suite. Vous ne pouvez pas utiliser plus d'un changement de formulaire Pokã © -Power à chaque tour.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihr Deck nach anderen Desoxys durchsuchen und es mit Desoxys wechseln. (Alle Karten, die an Desoxys, Schadenszähler, besondere Bedingungen und Auswirkungen angeschlossen sind, befinden sich jetzt auf dem neuen Poké mon.) Wenn Sie dies tun, legen Sie Desoxys auf Ihr Deck. Mischen Sie anschließend Ihr Deck. Sie können nicht mehr als 1 Formänderung Poké-Kraft in jeder Runde verwenden.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo otro Deoxys y cambiarlo con Deoxys. (Cualquier tarjetas adjuntas a los desoxys, contadores de daños, condiciones especiales y efectos en ellas ahora están en el nuevo Poké Mon.) Si lo hace, coloque axys encima de su mazo. Baraja tu mazo después. No puede usar más de 1 formulario de cambio de forma en cada vuelta.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo un altro Deoxys e cambiarlo con Deoxys. (Eventuali carte collegate a deossys, contatori di danni, condizioni speciali ed effetti su di esso sono ora sul nuovo poké mon.) Se lo fai, metti Deoxys sopra il tuo mazzo. Shuffle il tuo mazzo in seguito. Non è possibile utilizzare più di 1 modifica del modulo Poké-power ogni turno.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar no seu baralho por outro Deoxys e trocá -lo com Deoxys. (Quaisquer cartões anexados a Deoxys, contadores de danos, condições especiais e efeitos nela estão agora no novo Poké Mon.) Se o fizer, coloque Deoxys no topo do seu baralho. Afaste seu baralho depois. Você não pode usar mais de 1 forma de alteração de Poké-Power a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Crystal Laser",
            ja: "クリスタルレーザー",
            fr: "Laser cristallin",
            de: "Kristalllaser",
            es: "Láser de cristal",
            it: "Laser cristallino",
            pt: "Laser de cristal",
          },
          effect: {
            en: "During your next turn, Deoxys's attacks do 40 more damage to the Defending Pokemon (before applying Weakness and Resistance).",
            ja: "次のターン中に、Deoxys攻撃は防御ポケモンに40個のダメージを与えます（脱力感と抵抗を適用する前）。",
            fr: "Au cours de votre prochain tour, les attaques Deoxys font 40 dégâts supplémentaires au Pokémon en défense (avant d'appliquer une faiblesse et une résistance).",
            de: "Während Ihrer nächsten Kurve verursachen DEOXYS -Angriffe 40 weitere Schäden am verteidigenden Pokémon (bevor sie Schwäche und Widerstand anwenden).",
            es: "Durante su próximo turno, los ataques de Deoxys hacen 40 daños más al Pokémon defensor (antes de aplicar debilidad y resistencia).",
            it: "Durante il turno successivo, gli attacchi Deoxys fanno altri 40 danni al Pokemon in difesa (prima di applicare la debolezza e la resistenza).",
            pt: "Durante o seu próximo turno, os ataques de Deoxys causam mais 40 danos ao Pokémon atual (antes de aplicar fraqueza e resistência).",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
