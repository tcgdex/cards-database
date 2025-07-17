import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Ponyta",
         ja: "ポニータ",
         fr: "Ponyta",
         de: "Ponyta",
         es: "Ponyta",
         it: "Ponyta",
         pt: "Ponyta",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [77],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Ember",
            ja: "ember",
            fr: "Bilan",
            de: "Glut",
            es: "Ascua",
            it: "Ember",
            pt: "Brasa",
          },
          effect: {
            en: "Discard 1 Fire Energy card attached to Ponyta in order to use this attack.",
            ja: "この攻撃を使用するために、ポニータに取り付けられた1つのファイアエネルギーカードを廃棄します。",
            fr: "Jetez 1 carte d'énergie de feu attachée à Ponyta afin d'utiliser cette attaque.",
            de: "Legen Sie die an Ponyta befestigten Brandenergiekarte ab, um diesen Angriff zu verwenden.",
            es: "Deseche 1 Tarjeta de energía de fuego unida a Ponyta para usar este ataque.",
            it: "Scartare 1 carta di energia antincendio collegata a Ponyta per usare questo attacco.",
            pt: "Descarte 1 cartão de energia de incêndio anexado ao Ponyta para usar esse ataque.",
          },
          damage: 30,
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
