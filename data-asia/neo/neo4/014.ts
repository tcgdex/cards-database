import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Vulpix",
         ja: "Vulpix",
         fr: "Vulpix",
         de: "Vulpix",
         es: "Vulpix",
         it: "Vulpix",
         pt: "Vulpix",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [37],
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
            en: "Discard 1 Fire Energy card attached to Vulpix in order to use this attack.",
            ja: "この攻撃を使用するために、Vulpixに接続された1つの消防エネルギーカードを破棄します。",
            fr: "Jetez la carte d'énergie de feu 1 attachée à Vulpix afin d'utiliser cette attaque.",
            de: "Legen Sie die an Vulpix befestigten Brandenergiekarte ab, um diesen Angriff zu verwenden.",
            es: "Descarte 1 Tarjeta de energía de fuego unida a Vulpix para usar este ataque.",
            it: "Scartare 1 carta di energia antincendio collegata a Vulpix per utilizzare questo attacco.",
            pt: "Descarte 1 cartão de energia de incêndio anexado ao Vulpix para usar esse ataque.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
