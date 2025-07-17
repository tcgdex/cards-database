import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Lugia",
         ja: "ルギア",
         fr: "Lugia",
         de: "Lugia",
         es: "Lugia",
         it: "Lugia",
         pt: "Lugia",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [249],
      hp: 90,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Water", "Lightning"],
          name: {
            en: "Elemental Blast",
            ja: "エレメンタルブラスト",
            fr: "Explosion élémentaire",
            de: "Elementare Explosion",
            es: "Explosión elemental",
            it: "Esplosione elementare",
            pt: "Explosão elementar",
          },
          effect: {
            en: "Discard a Fire Energy card, a Water Energy card, and a Lightning Energy card attached to Lugia in order to use this attack.",
            ja: "この攻撃を使用するために、Lugiaに取り付けられた消防エネルギーカード、水エネルギーカード、Lightning Energyカードを捨てます。",
            fr: "Jeter une carte d'énergie d'incendie, une carte d'énergie de l'eau et une carte d'énergie Lightning attachée à Lugia afin d'utiliser cette attaque.",
            de: "Verwerfen Sie eine Feuerergiekarte, eine Wasserergiekarte und eine Lightning Energy -Karte, die an Lugia angebracht ist, um diesen Angriff zu verwenden.",
            es: "Deseche una tarjeta de energía de fuego, una tarjeta de energía de agua y una tarjeta de energía relámpago unida a Lugia para usar este ataque.",
            it: "Scartare una carta di energia antincendio, una carta di energia idrica e una carta di energia fulmini attaccata a Lugia per utilizzare questo attacco.",
            pt: "Descarte um cartão de energia de incêndio, um cartão de energia da água e um cartão de energia de raios ligado a Lugia para usar esse ataque.",
          },
          damage: 90,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
