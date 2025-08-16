import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Flaaffy",
         ja: "フラフィー",
         fr: "Flaaffy",
         de: "Flaaffy",
         es: "Flafy",
         it: "Flaaffy",
         pt: "Flaaffy",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [180],
      hp: 60,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Discharge",
            ja: "排出",
            fr: "Décharge",
            de: "Entladung",
            es: "Descargar",
            it: "Scarico",
            pt: "Descarga",
          },
          effect: {
            en: "Discard all Lightning Energy cards attached to Flaaffy in order to use this attack. Flip a number of coins equal to the number of Lightning Energy cards you discarded. This attack does 30 damage times the number of heads.",
            ja: "この攻撃を使用するために、Flaaffyに取り付けられたすべての稲妻エネルギーカードを廃棄します。廃棄した稲妻エネルギーカードの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Jetez toutes les cartes d'énergie Lightning attachées à Flaaffy afin d'utiliser cette attaque. Retournez un certain nombre de pièces égales au nombre de cartes d'énergie Lightning que vous avez jetées. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "Entsorgen Sie alle Blitzelenergiekarten, die an Flaaffy befestigt sind, um diesen Angriff zu verwenden. Drehen Sie eine Anzahl von Münzen um, die der Anzahl der von Ihnen verworfenen Blitzelenergiekarten entsprechen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Deseche todas las cartas de energía de Lightning unidas a Flaaffy para usar este ataque. Voltee una serie de monedas igual al número de tarjetas de energía de rayos que descartó. Este ataque hace 30 veces el número de cabezas.",
            it: "Scartare tutte le carte di energia fulmini attaccate al flaaffy per usare questo attacco. Capovolgi una serie di monete pari al numero di carte di energia fulmini che hai scartato. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Descarte todos os cartões de energia de raios ligados a Flaffy para usar esse ataque. Vire uma série de moedas iguais ao número de cartões de energia relâmpago que você descartou. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
        {
          cost: ["Lightning", "Lightning"],
          name: {
            en: "Electric Current",
            ja: "電流",
            fr: "Courant électrique",
            de: "Elektrischer Strom",
            es: "Corriente eléctrica",
            it: "Corrente elettrica",
            pt: "Corrente elétrica",
          },
          effect: {
            en: "Take 1 Lightning Energy card attached to Flaaffy and attach it to 1 of your Benched Pokemon. If you have no Benched Pokemon, discard that Energy card.",
            ja: "Flaaffyに取り付けられた1つのLightning Energyカードを使用して、ベンチ付きポケモンの1つに取り付けます。ベンチ付きポケモンがない場合は、そのエネルギーカードを捨ててください。",
            fr: "Prenez 1 carte d'énergie Lightning attachée à Flaaffy et fixez-la à 1 de votre pokemon banc. Si vous n'avez pas de Pokémon banc, jetez cette carte d'énergie.",
            de: "Nehmen Sie 1 Lightning Energy Card, die an Flaaffy befestigt ist, und befestigen Sie sie an 1 Ihres Bankpokémons. Wenn Sie kein Pokemon mit Bank haben, entsorgen Sie diese Energiekarte.",
            es: "Tome 1 tarjeta de energía Lightning unida a Flaaffy y colóquela a 1 de su Pokémon de banca. Si no tienes Pokémon de banca, deseche esa tarjeta de energía.",
            it: "Prendi 1 carta di energia Lightning attaccata a Flaaffy e attaccalo a 1 del tuo Pokemon in panchina. Se non hai Pokemon in panchina, scarta quella carta energetica.",
            pt: "Pegue 1 cartão de energia Lightning anexado a Flaaffy e prenda -o a 1 do seu Pokémon em banco. Se você não tiver Pokemon com bancada, descarte esse cartão de energia.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
