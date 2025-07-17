import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Arcanine - 017/092",
         ja: "アルカニン-017/092",
         fr: "Arcanine - 017/092",
         de: "Arcanine - 017/092",
         es: "Arcanine - 017/092",
         it: "Arcanina - 017/092",
         pt: "Arcanine - 017/092",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [59],
      hp: 90,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Extreme Speed",
            ja: "極端な速度",
            fr: "Vitesse extrême",
            de: "Extreme Geschwindigkeit",
            es: "Velocidad extrema",
            it: "Velocità estrema",
            pt: "Velocidade extrema",
          },
          effect: {
            en: "You pay Colorless less to retreat Arcanine for each Energy attached to it.",
            ja: "あなたはそれに取り付けられた各エネルギーについてアルカニンを後退させるために無色の少ない支払いをします。",
            fr: "Vous payez moins incolore pour retirer l'arcanine pour chaque énergie qui y est attachée.",
            de: "Sie zahlen farblos weniger, um Arcanin für jede damit verbundene Energie zurückzuziehen.",
            es: "Pagas menos incoloro para retirar arcanina por cada energía adjunta.",
            it: "Paghi incolore meno per ritirare l'Arcanina per ogni energia attaccata ad esso.",
            pt: "Você paga menos incolor para recuar a arcanina por cada energia anexada a ele.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Fire Blow",
            ja: "火の打撃",
            fr: "Coup de feu",
            de: "Feuerblasen",
            es: "Golpe de fuego",
            it: "Colpo di fuoco",
            pt: "Golpe de fogo",
          },
          effect: {
            en: "You may discard any number of Fire Energy cards attached to Arcanine when you use this attack. If you do, flip a number of coins equal to the number of Fire Energy cards you discarded. This attack does 30 damage plus 30 more damage for each heads.",
            ja: "この攻撃を使用すると、アルカニンに取り付けられた火災エネルギーカードを廃棄することができます。そうした場合は、廃棄した火災エネルギーカードの数に等しい数のコインをひっくり返します。この攻撃は、30のダメージに加えて、各ヘッドに対してさらに30のダメージを与えます。",
            fr: "Vous pouvez jeter un certain nombre de cartes d'énergie de feu attachées à l'arcanine lorsque vous utilisez cette attaque. Si vous le faites, retournez un certain nombre de pièces égales au nombre de cartes d'énergie de feu que vous avez jetées. Cette attaque fait 30 dégâts plus 30 dégâts supplémentaires pour chaque tête.",
            de: "Sie können eine beliebige Anzahl von Brandenergiekarten verwerfen, die Arcanine bei der Verwendung dieses Angriffs an Arcanine angeschlossen sind. Wenn Sie dies tun, drehen Sie eine Reihe von Münzen um, die der Anzahl der von Ihnen verworfenen Brandenergiekarten entsprechen. Dieser Angriff verursacht 30 Schäden plus 30 weitere Schäden für jeden Köpfe.",
            es: "Puede descartar cualquier cantidad de cartas de energía de fuego unidas a Arcanine cuando use este ataque. Si lo hace, voltee una serie de monedas igual al número de tarjetas de energía de fuego que descartó. Este ataque hace 30 daños más 30 más de daño para cada cabezal.",
            it: "Puoi scartare qualsiasi numero di carte di energia del fuoco collegate all'arcanina quando si utilizza questo attacco. Se lo fai, capovolgi una serie di monete pari al numero di carte di energia del fuoco che hai scartato. Questo attacco infligge 30 danni più 30 danni per ogni teste.",
            pt: "Você pode descartar qualquer número de cartões de energia de incêndio anexados ao Arcanine quando usa esse ataque. Se o fizer, vire várias moedas iguais ao número de cartões de energia de incêndio que você descartou. Este ataque causa 30 danos mais 30 mais danos para cada cabeça.",
          },
        },
      ],

      retreat: 3,

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
