import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Zapdos ex",
         ja: "Zapdos Ex",
         fr: "Zapdos ex",
         de: "Zapdos ex",
         es: "Zapdos ex",
         it: "Zapdos Ex",
         pt: "Zapdos Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [145],
      hp: 110,
      types: ["Lightning"],
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
            en: "Once during your turn, when you put Zapdos ex from your hand onto your Bench, you may switch 1 of your Active PokÃ©mon with Zapdos ex. If you do, you may also move any number of basic Lightning Energy cards attached to your PokÃ©mon to Zapdos ex.",
            ja: "ターン中に、Zapdos Exを手からベンチに置くと、Zapdos ExでアクティブなPokã©Monの1を切り替えることができます。そうする場合は、Pokã©Monに取り付けられた数の基本的な稲妻エネルギーカードをZapdos Exに移動することもできます。",
            fr: "Une fois pendant votre tour, lorsque vous mettez Zapdos Ex de votre main sur votre banc, vous pouvez changer 1 de votre poké actif avec Zapdos Ex. Si vous le faites, vous pouvez également déplacer n'importe quel nombre de cartes d'énergie de Lightning de base attachées à votre pokã © Mon à Zapdos Ex.",
            de: "Sobald Sie während Ihres Zuges Zapdos Ex von Ihrer Hand auf Ihre Bank legen, können Sie 1 Ihres aktiven Pokémon mit Zapdos EX wechseln. Wenn Sie dies tun, können Sie auch eine beliebige Anzahl grundlegender Blitzelenergiekarten an Ihren Poké Mon in Zapdos ex verschieben.",
            es: "Una vez durante su turno, cuando coloque Zapdos Ex de su mano en su banco, puede cambiar 1 de su Poké activo con Zapdos Ex. Si lo hace, también puede mover cualquier cantidad de tarjetas de energía básicas unidas a su Poké Mon a Zapdos Ex.",
            it: "Una volta durante il tuo turno, quando metti Zapdos Ex dalla tua mano sulla panchina, puoi cambiare 1 del tuo poké attivo con Zapdos Ex. Se lo fai, puoi anche spostare un numero qualsiasi di carte di energia di base di energia collegate al tuo poké a Zapdos Ex.",
            pt: "Uma vez durante o seu turno, quando você coloca o Zapdos Ex da sua mão em seu banco, você pode alternar 1 do seu Poké Mon ativo com Zapdos Ex. Se o fizer, você também pode mover qualquer número de cartões básicos de energia de raios anexados ao seu Poké Mon para Zapdos Ex.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Electron Crush",
            ja: "電子クラッシュ",
            fr: "Écrasement d'électrons",
            de: "Elektronenschwarm",
            es: "Triturador de electrones",
            it: "Crush di elettroni",
            pt: "Esmagamento de elétrons",
          },
          effect: {
            en: "You may discard an Energy card attached to Zapdos ex. If you do, this attack does 50 damage plus 20 more damage.",
            ja: "Zapdos Exに取り付けられたエネルギーカードを破棄できます。そうした場合、この攻撃は50ダメージに加えて20ダメージを与えます。",
            fr: "Vous pouvez jeter une carte d'énergie attachée à Zapdos Ex. Si vous le faites, cette attaque fait 50 dégâts plus 20 dégâts supplémentaires.",
            de: "Sie können eine Energiekarte verwerfen, die an Zapdos EX angebracht ist. Wenn Sie dies tun, verursacht dieser Angriff 50 Schäden plus 20 weitere Schäden.",
            es: "Puede descartar una tarjeta de energía unida a Zapdos Ex. Si lo haces, este ataque hace 50 daños más 20 más de daño.",
            it: "È possibile scartare una carta energetica collegata a Zapdos Ex. Se lo fai, questo attacco infligge 50 danni più 20 danni in più.",
            pt: "Você pode descartar um cartão de energia anexado ao Zapdos Ex. Se o fizer, esse ataque causa 50 danos mais 20 mais danos.",
          },
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
