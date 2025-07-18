import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Articuno ex",
         ja: "Articuno Ex",
         fr: "Articuno ex",
         de: "Articuno Ex",
         es: "Articuno ex",
         it: "Articuno ex",
         pt: "Articuno Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [144],
      hp: 110,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Legendary Ascent",
            ja: "伝説的な上昇",
            fr: "Ascension légendaire",
            de: "Legendärer Aufstieg",
            es: "Ascenso legendario",
            it: "Ascesa leggendaria",
            pt: "Ascensão lendária",
          },
          effect: {
            en: "Once during your turn, when you put Articuno ex from your hand onto your Bench, you may switch 1 of your Active PokÃ©mon with Articuno ex. If you do, you may also move any number of basic Water Energy cards attached to your PokÃ©mon to Articuno ex.",
            ja: "ターン中に、Articuno Exを手からベンチに置くと、Articuno ExでアクティブなPokã©Monの1を切り替えることができます。もしそうなら、あなたはあなたのポカモンに取り付けられた任意の数の基本的な水エネルギーカードをArticuno Exに移動することもできます。",
            fr: "Une fois pendant votre tour, lorsque vous mettez Articuno Ex de votre main sur votre banc, vous pouvez changer 1 de votre pokã © mon actif avec Articuno Ex. Si vous le faites, vous pouvez également déplacer n'importe quel nombre de cartes d'énergie de l'eau de base attachées à votre poké mon à Articuno Ex.",
            de: "Sobald Sie in Ihrem Zug, wenn Sie Articuno Ex von Ihrer Hand auf Ihre Bank legen, können Sie 1 Ihres aktiven Pokémon mit Articuno Ex wechseln. Wenn Sie dies tun, können Sie auch eine beliebige Anzahl von grundlegenden Wasserergiekarten, die an Ihren Poké Mon angebracht sind, nach Articuno Ex weiterleiten.",
            es: "Una vez durante su turno, cuando coloque Articuno Ex de su mano en su banco, puede cambiar 1 de su Poké activo con Articuno Ex. Si lo hace, también puede mover cualquier cantidad de tarjetas básicas de energía de agua unidas a su Poké Mon a Articuno Ex.",
            it: "Una volta durante il tuo turno, quando metti Articuno ex dalla tua mano sulla panchina, puoi cambiare 1 del tuo poké attivo con Articuno ex. In tal caso, puoi anche spostare un numero qualsiasi di carte di energia idrica di base collegate al tuo poké a Articuno ex.",
            pt: "Uma vez durante o seu turno, quando você coloca Articuno Ex da sua mão em seu banco, você pode alternar 1 do seu Poké Mon ativo com Articuno Ex. Se o fizer, você também pode mover qualquer número de cartões básicos de energia da água anexada ao seu Poké Mon para Articuno Ex.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Cold Crush",
            ja: "コールドクラッシュ",
            fr: "Coup de froid",
            de: "Kaltes Schwarm",
            es: "Aplastamiento frío",
            it: "Cotta fredda",
            pt: "Paixão fria",
          },
          effect: {
            en: "You may discard an Energy card attached to Articuno ex. If you do, your opponent discards an Energy card attached to the Defending Pokemon.",
            ja: "Articuno Exに取り付けられたエネルギーカードを破棄できます。もしそうなら、相手は防御ポケモンに取り付けられたエネルギーカードを破棄します。",
            fr: "Vous pouvez jeter une carte d'énergie attachée à Articuno Ex. Si vous le faites, votre adversaire élimine une carte d'énergie attachée au Pokémon en défense.",
            de: "Sie können eine Energiekarte verwerfen, die Articuno Ex angeschlossen ist. Wenn Sie dies tun, verengt Ihr Gegner eine Energiekarte, die dem verteidigenden Pokémon angeschlossen ist.",
            es: "Puede descartar una tarjeta de energía adjunta a Articuno Ex. Si lo haces, tu oponente descarta una tarjeta de energía unida al Pokémon defensor.",
            it: "È possibile scartare una carta energetica collegata a Articuno Ex. Se lo fai, il tuo avversario scarta una carta energetica collegata al Pokemon in difesa.",
            pt: "Você pode descartar um cartão de energia anexado ao Articuno Ex. Se o fizer, seu oponente descarta um cartão de energia ligado ao Pokémon defensor.",
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
