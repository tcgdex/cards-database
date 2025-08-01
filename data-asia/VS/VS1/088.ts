import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Karen's Magmar",
         ja: "カレンのマグマー",
         fr: "Magmar de Karen",
         de: "Karen's Magmar",
         es: "Magmar de Karen",
         it: "Karen's Magmar",
         pt: "Magmar de Karen",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [126],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Beat",
            ja: "ビート",
            fr: "Battre",
            de: "Schlagen",
            es: "Derrotar",
            it: "Colpo",
            pt: "Bater",
          },
          damage: 10,
        },
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
            en: "Discard a Fire Energy card attached to Karen’s Magmar in order to use this attack.",
            ja: "この攻撃を使用するために、カレンのマグマーに取り付けられた消防剤カードを捨ててください。",
            fr: "Jeter une carte d'énergie de feu attachée à Magmar de Karen afin d'utiliser cette attaque.",
            de: "Verwerfen Sie eine Feuerergiekarte, die an Karens Magmar befestigt ist, um diesen Angriff zu verwenden.",
            es: "Deseche una tarjeta de energía de fuego unida al magmar de Karen para usar este ataque.",
            it: "Scartare una carta di energia antincendio collegata alla magmar di Karen per usare questo attacco.",
            pt: "Descarte um cartão de energia de incêndio ligado ao Magmar de Karen para usar esse ataque.",
          },
          damage: 30,
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
