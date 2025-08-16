import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "レイカザ（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [384.1],
      hp: 80,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "ハイドロバリア",
                                                                      },
          effect: {
                        ja: "RayquazaにHolon Energy Cardsが付いている限り、それぞれのWaterPokã©Monには弱点はありません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "デルタ検索",
                                                                      },
          effect: {
                        ja: "デッキを検索してホロンエネルギーカードを探して、レイカザに添付してください。その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Water", "Metal", "Colorless", "Colorless"],
          name: {
                        ja: "オゾンフレア",
                                                                      },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
