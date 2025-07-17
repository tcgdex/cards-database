import {Card} from "../../../interfaces"
import Set from "../neo2"

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

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [133],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
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
            en: "Whenever you attach an Energy card to Eevee, flip a coin. If heads, search your deck for a card that evolves from Eevee that is the same type as the Energy card you attached to Eevee. Attach that card to Eevee. This counts as evolving Eevee. Shuffle your deck afterward. This power can't be used if Eevee is Asleep, Confused, or Paralyzed.",
            ja: "Eeveeにエネルギーカードを取り付けるときはいつでも、コインをひっくり返します。頭の場合は、Eeveeに接続したエネルギーカードと同じタイプのEeveeから進化するカードをデッキに検索してください。そのカードをEeveeに添付します。これは進化するEeveeとしてカウントされます。その後、デッキをシャッフルします。 Eeveeが眠ったり、混乱したり、麻痺したりしている場合、このパワーは使用できません。",
            fr: "Chaque fois que vous attachez une carte d'énergie à Eevee, retournez une pièce. Si les têtes, recherchez votre jeu une carte qui évolue à partir d'Eevee qui est le même type que la carte d'énergie que vous avez attachée à Eevee. Fixez cette carte à Eevee. Cela compte comme un Eevee en évolution. Mélanger votre deck par la suite. Ce pouvoir ne peut pas être utilisé si Eevee est endormi, confus ou paralysé.",
            de: "Wenn Sie eine Energiekarte an Eevee anbringen, drehen Sie eine Münze. Wenn Sie Köpfe sind, suchen Sie Ihr Deck nach einer Karte, die sich von Eevee entwickelt, die den gleichen Typ wie die Energiekarte entspricht, die Sie an Eevee angeschlossen haben. Befestigen Sie diese Karte an eevee. Dies gilt als sich entwickelnde Eevee. Mischen Sie anschließend Ihr Deck. Diese Kraft kann nicht verwendet werden, wenn Eevee schläft, verwirrt oder gelähmt ist.",
            es: "Siempre que adjunte una tarjeta de energía a Eevee, voltee una moneda. Si se dirige, busque en su mazo una carta que evolucione de Eevee que es del mismo tipo que la tarjeta de energía que adjunta a Eevee. Adjunte esa tarjeta a Eevee. Esto cuenta como Eevee en evolución. Baraja tu mazo después. Este poder no se puede usar si Eevee está dormido, confundido o paralizado.",
            it: "Ogni volta che si collega una scheda energetica a Eevee, capovolgi una moneta. Se le teste, cerca nel tuo mazzo una carta che si evolve da Eevee che è lo stesso tipo della carta energetica che hai attaccato a Eevee. Allega quella scheda a Eevee. Questo conta come Eevee in evoluzione. Shuffle il tuo mazzo in seguito. Questo potere non può essere usato se Eevee è addormentato, confuso o paralizzato.",
            pt: "Sempre que você conectar um cartão de energia ao Eevee, vire uma moeda. Se as cabeças, procure um cartão para um cartão que evolui da Eevee, que é o mesmo tipo do cartão de energia que você anexou ao Eevee. Anexe esse cartão a Eevee. Isso conta como Eevee em evolução. Afaste seu baralho depois. Esse poder não pode ser usado se Eevee estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Smash Kick",
            ja: "スマッシュキック",
            fr: "Coup de pied",
            de: "Smash Kick",
            es: "Patada",
            it: "Smash Kick",
            pt: "Smash Kick",
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
