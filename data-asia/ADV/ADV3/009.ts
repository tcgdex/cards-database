import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Magcargo ex",
         ja: "Magcargo Ex",
         fr: "Magcargo ex",
         de: "Magcargo ex",
         es: "Magcargo ex",
         it: "Magcargo Ex",
         pt: "Magcargo Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [219],
      hp: 100,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Melting Mountain",
            ja: "溶けた山",
            fr: "Montagne à fond",
            de: "Schmelzberg",
            es: "Montaña derretida",
            it: "Montagna di scioglimento",
            pt: "Montanha derretida",
          },
          effect: {
            en: "Discard the top card from your deck. If that card is a basic Energy card, attach it to Magcargo ex.",
            ja: "デッキからトップカードを捨ててください。そのカードが基本的なエネルギーカードの場合は、Magcargo Exに添付してください。",
            fr: "Jetez la carte supérieure de votre deck. Si cette carte est une carte d'énergie de base, fixez-la à Magcargo Ex.",
            de: "Verwerfen Sie die obere Karte von Ihrem Deck. Wenn diese Karte eine grundlegende Energiekarte ist, fügen Sie sie an Magcargo Ex an.",
            es: "Deseche la carta superior de su mazo. Si esa tarjeta es una tarjeta de energía básica, adjunte a Magcargo ex.",
            it: "Scarta la carta superiore dal tuo mazzo. Se quella carta è una carta energetica di base, collegala a Magcargo Ex.",
            pt: "Descarte a carta superior do seu baralho. Se esse cartão for um cartão de energia básico, anexe -o ao Magcargo Ex.",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Lava Flow",
            ja: "溶岩流",
            fr: "Flux de lave",
            de: "Lavastrom",
            es: "Flujo de lava",
            it: "Flusso di lava",
            pt: "Fluxo de lava",
          },
          effect: {
            en: "You may discard any number of basic Energy cards attached to Magcargo ex when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each basic Energy card you discarded.",
            ja: "この攻撃を使用すると、Magcargo Exに接続された基本エネルギーカードを廃棄できます。そうした場合、この攻撃は40ダメージに加えて、廃棄した基本エネルギーカードごとに20ダメージを与えます。",
            fr: "Vous pouvez éliminer n'importe quel nombre de cartes d'énergie de base attachées à Magcargo Ex lorsque vous utilisez cette attaque. Si vous le faites, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires pour chaque carte d'énergie de base que vous avez jetée.",
            de: "Sie können eine beliebige Anzahl von grundlegenden Energiekarten verwerfen, die an Magcargo EX verbunden sind, wenn Sie diesen Angriff verwenden. Wenn Sie dies tun, verursacht dieser Angriff 40 Schäden plus 20 weitere Schäden für jede grundlegende Energiekarte, die Sie weggeworfen haben.",
            es: "Puede descartar cualquier cantidad de cartas de energía básicas unidas a Magcargo EX cuando use este ataque. Si lo hace, este ataque hace 40 daños más 20 más de daño por cada tarjeta de energía básica que descartó.",
            it: "È possibile scartare qualsiasi numero di carte di energia di base collegate a Magcargo Ex quando usi questo attacco. Se lo fai, questo attacco infligge 40 danni più 20 danni in più per ogni carta energetica di base che hai scartato.",
            pt: "Você pode descartar qualquer número de cartões de energia básicos anexados ao Magcargo ex quando usar esse ataque. Se o fizer, esse ataque causa 40 danos mais 20 mais danos para cada cartão de energia básico que você descartou.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
