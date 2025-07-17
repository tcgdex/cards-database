import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Metapod",
         ja: "メタポッド",
         fr: "Métapode",
         de: "Metapod",
         es: "Metapod",
         it: "Metapode",
         pt: "Metapod",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [11],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Harden",
            ja: "硬化します",
            fr: "Durcir",
            de: "Härten",
            es: "Endurecer",
            it: "Indurire",
            pt: "Endurecer",
          },
          effect: {
            en: "During your opponent's next turn, whenever 20 or less damage is done to Metapod (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen).",
            ja: "対戦相手の次のターン中に、メタポッドに20回以下の損傷が行われたときはいつでも（脱力感と抵抗を適用した後）、その損傷を防ぎます。 （攻撃の他の影響はまだ発生します）。",
            fr: "Pendant le prochain virage de votre adversaire, chaque fois que 20 dégâts ou moins sont causés à Metapod (après avoir appliqué une faiblesse et une résistance), empêchez ces dommages. (Tous les autres effets des attaques se produisent toujours).",
            de: "Verhindern Sie während der nächsten Kurve Ihres Gegners, wenn 20 oder weniger Schäden an Metapod angerichtet werden (nach Auftragen von Schwäche und Widerstand) diesen Schaden verhindern. (Alle anderen Auswirkungen von Angriffen treten immer noch auf).",
            es: "Durante el próximo turno de su oponente, siempre que se haga 20 o menos daño a Metapod (después de aplicar debilidad y resistencia), evite ese daño. (Cualquier otro efecto de los ataques todavía ocurren).",
            it: "Durante il prossimo turno dell'avversario, ogni volta che vengono fatti 20 o meno danni al metapod (dopo aver applicato la debolezza e la resistenza), prevenire tale danno. (Qualsiasi altro effetto degli attacchi si verificano ancora).",
            pt: "Durante o próximo turno do seu oponente, sempre que 20 ou menos danos são causados ao Metapod (após aplicar fraqueza e resistência), impedem esse dano. (Quaisquer outros efeitos dos ataques ainda acontecem).",
          },
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Hatch",
            ja: "ハッチ",
            fr: "Trappe",
            de: "Luke",
            es: "Escotilla",
            it: "Schiudere",
            pt: "Chocar",
          },
          effect: {
            en: "Flip a coin. If heads, remove all damage counters from Metapod. Then, search your deck for a card that evolves from Metapod and attach that card to Metapod. This counts as evolving Metapod. Shuffle your deck afterward.",
            ja: "コインをひっくり返します。ヘッドの場合、メタポッドからすべてのダメージカウンターを削除します。次に、メタポッドから進化するカードをデッキで検索し、そのカードをメタポッドに取り付けます。これは進化するメタポッドとしてカウントされます。その後、デッキをシャッフルします。",
            fr: "Retourner une pièce. Si les têtes, retirez tous les compteurs de dégâts de Metapod. Ensuite, recherchez votre jeu une carte qui évolue à partir de Metapod et attachez cette carte à Metapod. Cela compte comme un métapod en évolution. Mélanger votre deck par la suite.",
            de: "Eine Münze drehen. Wenn Köpfe, entfernen Sie alle Schadenszähler von Metapod. Suchen Sie dann Ihr Deck nach einer Karte, die sich aus Metapod entwickelt, und fügen Sie diese Karte an Metapod hinzu. Dies gilt als sich entwickelnde Metapod. Mischen Sie anschließend Ihr Deck.",
            es: "Voltea una moneda. Si se dirige, retire todos los contadores de daño de Metapod. Luego, busque en su mazo una carta que evolucione desde Metapod y adjunte esa carta a Metapod. Esto cuenta como en evolución de Metapod. Baraja tu mazo después.",
            it: "Capovolgi una moneta. Se le teste, rimuovere tutti i contatori di danno da Metapod. Quindi, cerca nel tuo mazzo una carta che si evolve da Metapod e collega quella carta a Metapod. Questo conta come metapode in evoluzione. Shuffle il tuo mazzo in seguito.",
            pt: "Vire uma moeda. Se as cabeças, remova todos os contadores de danos do Metapod. Em seguida, pesquise no seu baralho uma carta que evolui do Metapod e anexe essa carta ao Metapod. Isso conta como metapod em evolução. Afaste seu baralho depois.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
