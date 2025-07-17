import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Slugma",
         ja: "slugma",
         fr: "Glissade",
         de: "Slugma",
         es: "Slugma",
         it: "Slugma",
         pt: "Slugma",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [218],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 10,
        },
        {
          cost: ["Fire"],
          name: {
            en: "Scorching Lava",
            ja: "焼ける溶岩",
            fr: "Lave torride",
            de: "Lava senkt",
            es: "Lava abrasadora",
            it: "Lava torrida",
            pt: "Lava escaldante",
          },
          effect: {
            en: "Discard a Fire Energy card attached to Slugma in order to use this attack. The Defending Pokemon is now Burned.",
            ja: "この攻撃を使用するために、Slugmaに取り付けられた消防エネルギーカードを廃棄します。防御ポケモンは現在燃やされています。",
            fr: "Discard a Fire Energy card attached to Slugma in order to use this attack. Le Pokémon en défense est maintenant brûlé.",
            de: "Verwerfen Sie eine an die Slugma befestigte Brandenergiekarte, um diesen Angriff zu verwenden. Das verteidigende Pokemon ist jetzt verbrannt.",
            es: "Deseche una tarjeta de energía de fuego unida a Slugma para usar este ataque. El Pokémon defensor ahora está quemado.",
            it: "Scartare una carta di energia antincendio collegata a Slugma per usare questo attacco. Il Pokemon in carica viene ora bruciato.",
            pt: "Descarte um cartão de energia de incêndio anexado ao Slugma para usar esse ataque. O Pokémon atual agora está queimado.",
          },
        },
      ],

      retreat: 2,

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
