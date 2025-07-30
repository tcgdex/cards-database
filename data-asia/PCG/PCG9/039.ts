import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "クロイスター（デルタ種）",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [91],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "固体シェル",
                                                                      },
          effect: {
                        ja: "攻撃のすべての影響を防ぎます。これは、相手のPokã©Monがカードに載っているベンチポカモンに行われます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Fighting"],
          name: {
                        ja: "粉砕",
                                                                      },
          effect: {
                        ja: "10ダメージに加えて、クロイスターに付着した各エネルギーに対してさらに10ダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
