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
      types: ["Psychic"],
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
            en: "Copy",
            ja: "コピー",
            fr: "Copie",
            de: "Kopie",
            es: "Copiar",
            it: "Copia",
            pt: "Cópia",
          },
          effect: {
            en: "Choose 1 of the Defending Pokemon's attacks. Copy copies that attack. This attack does nothing if Ditto doesn't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Ditto performs that attack.",
            ja: "防御ポケモンの攻撃の1つを選択します。その攻撃をコピーします。この攻撃は、その攻撃を使用するのに必要なエネルギーがない場合、何もしません。 （その攻撃に必要な他のことをまだしなければなりません。）Dittoはその攻撃を実行します。",
            fr: "Choisissez 1 des attaques de Pokémon en défense. Copiez des copies de cette attaque. Cette attaque ne fait rien si Ditto n'a pas l'énergie nécessaire pour utiliser cette attaque. (Vous devez toujours faire tout ce qui est requis pour cette attaque.) Ditto effectue cette attaque.",
            de: "Wählen Sie 1 der Angriffe des Verteidigungspokemons. Kopieren Kopien diesen Angriff. Dieser Angriff tut nichts, wenn Ditto nicht über die Energie verfügt, die notwendig ist, um diesen Angriff zu verwenden. (Sie müssen noch alles tun, was für diesen Angriff erforderlich ist.) Das Gleiche führt diesen Angriff aus.",
            es: "Elija 1 de los ataques defensores de Pokémon. Copie copias que ataquen. Este ataque no hace nada si ídem no tiene la energía necesaria para usar ese ataque. (Aún debes hacer cualquier otra cosa necesaria para ese ataque). Ditto realiza ese ataque.",
            it: "Scegli 1 degli attacchi del Pokemon in carica. Copia copie quell'attacco. Questo attacco non fa nulla se Ditto non ha l'energia necessaria per usare quell'attacco. (Devi ancora fare qualsiasi altra cosa richiesta per quell'attacco.) Ditto esegue quell'attacco.",
            pt: "Escolha 1 dos ataques de Pokémon em defesa. Copie cópias que ataques. Este ataque não faz nada se o idem não tiver a energia necessária para usar esse ataque. (Você ainda deve fazer qualquer outra coisa necessária para esse ataque.) O Ditto realiza esse ataque.",
          },
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
