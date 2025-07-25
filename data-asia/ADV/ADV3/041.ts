import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Flygon",
         ja: "フライゴン",
         fr: "Flygon",
         de: "Flygon",
         es: "Flygon",
         it: "Flygon",
         pt: "Flygon",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [330],
      hp: 120,
      types: ["Colorless"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass", "Lightning"],
          name: {
            en: "Energy Shower",
            ja: "エネルギーシャワー",
            fr: "Douche énergétique",
            de: "Energiedusche",
            es: "Ducha de energía",
            it: "Doccia energetica",
            pt: "Chuveiro de energia",
          },
          effect: {
            en: "Attach any number of basic Energy cards from your hand to your Pokemon in any way you like.",
            ja: "あなたが好きな方法であなたの手からあなたの手からあなたの手からあなたの手から任意の数の基本的なエネルギーカードを添付します。",
            fr: "Attachez un certain nombre de cartes d'énergie de base de votre main à votre Pokémon de quelque manière que ce soit.",
            de: "Fügen Sie eine beliebige Anzahl grundlegender Energiekarten von Ihrer Hand auf Ihr Pokémon in eine Weise hinzu, die Sie möchten.",
            es: "Adjunte cualquier cantidad de tarjetas de energía básicas de su mano a su Pokémon de la manera que desee.",
            it: "Attacca qualsiasi numero di carte di energia di base dalla tua mano al tuo Pokemon in ogni modo che desideri.",
            pt: "Anexe qualquer número de cartões básicos de energia da sua mão ao seu Pokémon da maneira que desejar.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Rainbow Burn",
            ja: "レインボーバーン",
            fr: "Arc-en-ciel",
            de: "Regenbogenbrand",
            es: "Quemadura del arco iris",
            it: "Arcobaleno brucia",
            pt: "Arco -íris queima",
          },
          effect: {
            en: "Does 30 damage plus 10 more damage for each type of basic Energy card attached to Flygon.",
            ja: "Flygonに取り付けられた基本エネルギーカードごとに30のダメージと10ダメージを与えます。",
            fr: "Fait 30 dégâts plus 10 dommages supplémentaires pour chaque type de carte d'énergie de base attachée à Flygon.",
            de: "Fügt 30 Schäden plus 10 weitere Schäden für jede Art von Basiskarte, die an Flygon angebracht ist.",
            es: "Hace 30 daños más 10 daños más para cada tipo de tarjeta de energía básica unida a Flygon.",
            it: "Fa 30 danni più 10 danni in più per ciascun tipo di carta di energia di base collegata a Flygon.",
            pt: "Causam 30 danos mais 10 mais danos para cada tipo de cartão de energia básico anexado ao Flygon.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
