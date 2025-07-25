import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Flygon ex",
         ja: "Flygon Ex",
         fr: "Flygon ex",
         de: "Flygon ex",
         es: "Flygon ex",
         it: "Flygon ex",
         pt: "Flygon Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [330],
      hp: 150,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Emerge Charge",
            ja: "充電充電",
            fr: "Émerger",
            de: "Emerge -Gebühr",
            es: "Emerge Charge",
            it: "Emerge Charge",
            pt: "Carga emerge",
          },
          effect: {
            en: "Once during your turn, when you play Flygon ex from your hand to evolve 1 of your PokÃ©mon, you may search your discard pile for up to 2 Energy cards and attach them to Flygon ex.",
            ja: "ターン中に、手からフライゴンEXをプレイしてPokã©Monの1つを進化させると、Discard Pileを最大2枚のエネルギーカードで検索し、Flygon Exに取り付けることができます。",
            fr: "Une fois pendant votre tour, lorsque vous jouez à Flygon Ex de votre main pour évoluer 1 de votre pokã © Mon, vous pouvez rechercher votre tas de défausse jusqu'à 2 cartes d'énergie et les attacher à Flygon Ex.",
            de: "Sobald Sie während Ihres Zuges Flygon Ex von Ihrer Hand spielen, um 1 Ihres Poké Mon Mons zu entwickeln, können Sie Ihren Enttäuschungsstapel nach bis zu 2 Energiekarten durchsuchen und sie an Flygon EX befestigen.",
            es: "Una vez durante su turno, cuando juegas Flygon Ex de tu mano para evolucionar 1 de tu Poké Mon, puedes buscar en tu pila de descarte hasta 2 tarjetas de energía y adjuntarlas a Flygon Ex.",
            it: "Una volta durante il tuo turno, quando giochi a Flygon Ex dalla tua mano per evolvere 1 del tuo poké mon, puoi cercare la pila di scarto per un massimo di 2 carte energia e attaccarle a Flygon Ex.",
            pt: "Uma vez durante o seu turno, quando você joga Flygon Ex da sua mão para evoluir 1 do seu Poké Mon, você pode pesquisar sua pilha de descarte por até 2 cartões de energia e conectá -los ao Flygon Ex.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Reactive Blast",
            ja: "反応性の爆発",
            fr: "Explosion réactive",
            de: "Reaktive Explosion",
            es: "Explosión reactiva",
            it: "Esplosione reattiva",
            pt: "Explosão reativa",
          },
          effect: {
            en: "You may discard any number of React Energy cards attached to Flygon ex. If you do, this attack does 40 damage plus 30 more damage for each React Energy card you discarded.",
            ja: "Flygon Exに接続された任意の数のReact Energyカードを廃棄することができます。もしそうなら、この攻撃は40ダメージに加えて、廃棄したReactエネルギーカードごとに30ダメージを与えます。",
            fr: "Vous pouvez éliminer n'importe quel nombre de cartes d'énergie React attachées à Flygon Ex. Si vous le faites, cette attaque fait 40 dégâts plus 30 dégâts supplémentaires pour chaque carte d'énergie React que vous avez jetée.",
            de: "Sie können eine beliebige Anzahl von React -Energiekarten verwerfen, die an Flygon EX angeschlossen sind. Wenn Sie dies tun, verursacht dieser Angriff 40 Schäden plus 30 weitere Schäden für jede von Ihnen verworfene React -Energiekarte.",
            es: "Puede descartar cualquier cantidad de tarjetas de energía React unidas a Flygon Ex. Si lo hace, este ataque hace 40 daños más 30 más de daño por cada carta de energía React que descartó.",
            it: "È possibile scartare qualsiasi numero di carte di energia react collegate a Flygon Ex. Se lo fai, questo attacco infligge 40 danni più 30 danni in più per ogni carta di energia di reazione che hai scartato.",
            pt: "Você pode descartar qualquer número de cartões de energia do React anexados ao Flygon Ex. Se o fizer, esse ataque causa 40 danos mais 30 mais danos para cada cartão de energia do React que você descartou.",
          },
        },
        {
          cost: ["Grass", "Lightning", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Dragon Claw",
            ja: "ドラゴンクロー",
            fr: "Griffe de dragon",
            de: "Drachenklaue",
            es: "Garra de dragón",
            it: "Dragon Claw",
            pt: "Garra de dragão",
          },
          damage: 100,
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
