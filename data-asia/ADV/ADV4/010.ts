import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Seedot",
         ja: "種子",
         fr: "Graine",
         de: "Seedot",
         es: "Seedot",
         it: "Seedot",
         pt: "Seedot",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [273],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Growth Spurt",
            ja: "成長が急上昇します",
            fr: "Poussée de croissance",
            de: "Wachstumsschub",
            es: "Crecimiento",
            it: "Scatto di crescita",
            pt: "Surto de crescimento",
          },
          effect: {
            en: "Attach a Grass Energy card from your hand to Seedot.",
            ja: "手からsedeotに草のエネルギーカードを取り付けます。",
            fr: "Fixez une carte d'énergie de l'herbe de votre main à Seedot.",
            de: "Befestigen Sie eine Grasergiekarte von Ihrer Hand an Seedot.",
            es: "Adjunte una tarjeta de energía de hierba de su mano a Seedot.",
            it: "Attacca una carta di energia erba dalla mano a Seedot.",
            pt: "Anexe um cartão de energia da grama da sua mão a semente.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Trip Over",
            ja: "旅をします",
            fr: "Faire une trébuche",
            de: "Auslösen",
            es: "Tropezar",
            it: "Inciampare",
            pt: "Viaje",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 daños más.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 10 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
