import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Lanturn - 037/087",
         ja: "ラントゥーン-037/087",
         fr: "Lanturn - 037/087",
         de: "Lanturn - 037/087",
         es: "Lanturn - 037/087",
         it: "Lanturn - 037/087",
         pt: "Lanturn - 037/087",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [171],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Lightning Ball",
            ja: "稲妻",
            fr: "Balle de foudre",
            de: "Blitzball",
            es: "Bola de rayo",
            it: "Sfera di fulmini",
            pt: "Bola Lightning",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Conduction",
            ja: "伝導",
            fr: "Conduction",
            de: "Leitung",
            es: "Conducción",
            it: "Conduzione",
            pt: "Condução",
          },
          effect: {
            en: "Discard all Lightning Energy cards attached to Lanturn. Flip a number of coins equal to the number of Lightning Energy cards you discarded. This attack does 30 damage plus 40 more damage for each heads.",
            ja: "Lanturnに取り付けられたすべての稲妻エネルギーカードを捨てます。廃棄した稲妻エネルギーカードの数に等しい多数のコインをひっくり返します。この攻撃は、30のダメージに加えて、各ヘッドに対してさらに40のダメージを与えます。",
            fr: "Jeter toutes les cartes d'énergie Lightning attachées à Lanturn. Retournez un certain nombre de pièces égales au nombre de cartes d'énergie Lightning que vous avez jetées. Cette attaque fait 30 dégâts plus 40 dégâts supplémentaires pour chaque tête.",
            de: "Entsorgen Sie alle Blitzelenergiekarten, die an Lanturn befestigt sind. Drehen Sie eine Anzahl von Münzen um, die der Anzahl der von Ihnen verworfenen Blitzelenergiekarten entsprechen. Dieser Angriff verursacht 30 Schäden plus 40 weitere Schäden für jeden Köpfe.",
            es: "Deseche todas las tarjetas de energía del rayo unidas a Lanturn. Voltee una serie de monedas igual al número de tarjetas de energía de rayos que descartó. Este ataque hace 30 daños más 40 daños más para cada cabezal.",
            it: "Scartare tutte le carte energetiche di fulmine attaccate a Lanturn. Capovolgi una serie di monete pari al numero di carte di energia fulmini che hai scartato. Questo attacco infligge 30 danni più 40 danni in più per ogni teste.",
            pt: "Descarte todos os cartões de energia de raios ligados a Lanturn. Vire uma série de moedas iguais ao número de cartões de energia relâmpago que você descartou. Este ataque causa 30 danos mais 40 mais danos para cada cabeça.",
          },
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
