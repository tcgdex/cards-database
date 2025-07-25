import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Eevee",
         ja: "Eevee",
         fr: "Eevee",
         de: "Eevee",
         es: "Eevee",
         it: "Eevee",
         pt: "Eevee",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [133],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Energy Evolution",
            ja: "エネルギーの進化",
            fr: "Évolution énergétique",
            de: "Energieentwicklung",
            es: "Evolución de la energía",
            it: "Evoluzione energetica",
            pt: "Evolução energética",
          },
          effect: {
            en: "Whenever you attach an Energy card from your hand to Eevee, you may search your deck for a card that evolves from Eevee that is the same type as the Energy card you attached to Eevee. Put that card onto Eevee. (This counts as evolving Eevee.) Shuffle your deck afterward. This power can't be used when you attach an Energy card to Eevee as part of an attack's effect.",
            ja: "手からイービーにエネルギーカードを取り付けるたびに、Eeveeに接続したエネルギーカードと同じタイプのEeveeから進化するカードをデッキを検索することができます。そのカードをEeveeに置きます。 （これは進化するEeveeとしてカウントされます。）その後、デッキをシャッフルします。攻撃の効果の一部としてEeveeにエネルギーカードを取り付ける場合、このパワーは使用できません。",
            fr: "Chaque fois que vous attachez une carte d'énergie de votre main à Eevee, vous pouvez rechercher votre jeu une carte qui évolue à partir d'Eevee qui est le même type que la carte d'énergie que vous avez attachée à Eevee. Mettez cette carte sur Eevee. (Cela compte comme un Eevee en évolution.) Mélanger votre deck par la suite. Cette puissance ne peut pas être utilisée lorsque vous attachez une carte d'énergie à Eevee dans le cadre de l'effet d'une attaque.",
            de: "Wenn Sie eine Energiekarte von Ihrer Hand an eevee anbringen, können Sie Ihr Deck nach einer Karte durchsuchen, die sich von Eevee entwickelt, die den gleichen Typ wie die Energiekarte entspricht, die Sie an Eevee angeschlossen haben. Legen Sie diese Karte auf eevee. (Dies gilt als weiterentwickelnde Eevee.) Mischen Sie anschließend Ihr Deck. Diese Leistung kann nicht verwendet werden, wenn Sie eine Energiekarte als Teil des Effekts eines Angriffs an Eevee anbringen.",
            es: "Cada vez que adjunta una tarjeta de energía de su mano a Eevee, puede buscar en su mazo una carta que evoluciona de Eevee que es del mismo tipo que la tarjeta de energía que adjunta a Eevee. Pon esa tarjeta en Eevee. (Esto cuenta como evolucionando eevee.) Arteza tu mazo después. Este poder no se puede usar cuando adjunta una tarjeta de energía a Eevee como parte del efecto de un ataque.",
            it: "Ogni volta che si collega una carta energetica dalla mano a Eevee, puoi cercare nel tuo mazzo una carta che si evolve da Eevee che è lo stesso tipo della scheda energetica che hai collegato a Eevee. Metti quella carta su Eevee. (Questo conta come Eevee in evoluzione.) Shuffle il tuo mazzo in seguito. Questa potenza non può essere utilizzata quando si collega una carta energetica a Eevee come parte dell'effetto di un attacco.",
            pt: "Sempre que você anexa uma carta de energia da sua mão a Eevee, você pode pesquisar no seu baralho uma carta que evolui da Eevee, que é do mesmo tipo do cartão de energia que você anexou ao Eevee. Coloque esse cartão em Eevee. (Isso conta como evoluindo o eevee.) Embaralhe seu baralho depois. Esse poder não pode ser usado quando você anexa um cartão de energia a Eevee como parte do efeito de um ataque.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tail Whap",
            ja: "尾のwhap",
            fr: "Bap",
            de: "Schwanzpeak",
            es: "Cola whap",
            it: "Coda whap",
            pt: "Tail Whap",
          },
          damage: 10,
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
