import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Azumarill",
         ja: "アズマリル",
         fr: "Azumarill",
         de: "Azumarill",
         es: "Azumarill",
         it: "Azumarill",
         pt: "Azumarill",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [184],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Drizzle",
            ja: "霧雨",
            fr: "Bruine",
            de: "Nieselregen",
            es: "Llovizna",
            it: "Tesi",
            pt: "Regue",
          },
          effect: {
            en: "If you have Water Energy cards in your hand, attach as many Water Energy cards as you like to any of your Active Pokemon.",
            ja: "手に水エネルギーカードがある場合は、アクティブなポケモンのいずれかに好きなだけ多くの水エネルギーカードを取り付けます。",
            fr: "Si vous avez des cartes d'énergie de l'eau dans votre main, fixez autant de cartes d'énergie d'eau que vous le souhaitez à l'un de vos Pokémon actifs.",
            de: "Wenn Sie Wasserergiekarten in der Hand haben, fügen Sie so viele Wasserergiekarten, wie Sie möchten, an Ihr aktives Pokémon.",
            es: "Si tiene tarjetas de energía de agua en su mano, coloque tantas tarjetas de energía de agua como desee a cualquiera de sus Pokémon activos.",
            it: "Se hai carte sull'energia idrica in mano, collega tutte le carte acquatiche che desideri a uno dei tuoi Pokemon attivi.",
            pt: "Se você tiver cartões de energia da água na mão, anexe o quantos cartões de energia da água quiser a qualquer um dos seus Pokémon ativos.",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Max Bubbles",
            ja: "マックスバブル",
            fr: "Bulles maximales",
            de: "Max Blasen",
            es: "Burbujas máximas",
            it: "Bolle massime",
            pt: "Bolhas máximas",
          },
          effect: {
            en: "Flip a coin for each Energy attached to all of your Active Pokemon. This attack does 30 damage times the number of heads.",
            ja: "すべてのアクティブなポケモンに取り付けられた各エネルギーのコインをひっくり返します。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Retournez une pièce pour chaque énergie attachée à tous vos Pokémon actifs. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Münze für jede Energie, die an all Ihren aktiven Pokémon angebracht ist, um. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltee una moneda para cada energía unida a todos sus Pokémon activos. Este ataque hace 30 veces el número de cabezas.",
            it: "Capovolgi una moneta per ogni energia attaccata a tutti i pokemon attivi. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Vire uma moeda para cada energia ligada a todos os seus Pokémon ativos. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 1,

};
