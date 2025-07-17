import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Typhlosion",
         ja: "暗い染色",
         fr: "Typhlosion sombre",
         de: "Dunkle Typhlosion",
         es: "Tiflosión oscura",
         it: "Typhlosion scuro",
         pt: "Tyflosão escura",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [157],
      hp: 80,
      types: ["Fire"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Claw Swipe",
            ja: "爪のスワイプ",
            fr: "Coup de griffe",
            de: "Klaue streift",
            es: "Golpear con garra",
            it: "Claw Swipe",
            pt: "Deslizamento da garra",
          },
          damage: 20,
        },
        {
          cost: ["Fire"],
          name: {
            en: "Rushing Flames",
            ja: "急いで炎",
            fr: "Flammes précipitées",
            de: "Rushing Flammen",
            es: "Llamas apresuradas",
            it: "Fiamme affrettate",
            pt: "Chamas apressadas",
          },
          effect: {
            en: "You may discard any number of Fire Energy cards attached to your Pokemon. Flip a coin for each Fire Energy card discarded in this way. This attack does 40 damage times the number of heads.",
            ja: "ポケモンに取り付けられた火災エネルギーカードを廃棄することができます。この方法で破棄された各火エネルギーカードのコインをひっくり返します。この攻撃は、ヘッド数の40回のダメージ倍になります。",
            fr: "Vous pouvez jeter un certain nombre de cartes d'énergie de feu attachées à votre Pokémon. Retournez une pièce pour chaque carte d'énergie de feu jetée de cette manière. Cette attaque fait 40 dégâts de temps le nombre de têtes.",
            de: "Sie können eine beliebige Anzahl von Brandenergiekarten verwerfen, die an Ihr Pokémon angebracht sind. Drehen Sie eine Münze für jede auf diese Weise verworfene Feuerergiekarte um. Dieser Angriff verursacht 40 Schadenszeiten der Anzahl der Köpfe.",
            es: "Puede descartar cualquier cantidad de tarjetas de energía de fuego unidas a su Pokémon. Voltee una moneda para cada tarjeta de energía de fuego descartada de esta manera. Este ataque hace 40 veces el número de cabezas.",
            it: "Puoi scartare qualsiasi numero di carte di energia del fuoco collegate al tuo Pokemon. Capolare una moneta per ogni carta di energia di fuoco scartata in questo modo. Questo attacco fa 40 danni il numero di teste.",
            pt: "Você pode descartar qualquer número de cartões de energia de incêndio anexados ao seu Pokémon. Vire uma moeda para cada cartão de energia de fogo descartado dessa maneira. Este ataque causa 40 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
