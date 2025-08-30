import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "ZANGOOSE",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [335],
      hp: 70,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "毒抵抗",
                                                                      },
          effect: {
                        ja: "ザンゴースは毒されることはできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ターゲットスラッシュ",
                                                                      },
          effect: {
                        ja: "防御ポケモンがセビパーの場合、この攻撃は10ダメージに加えて30ダメージを与えます。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "スーパースラッシュ",
                                                                      },
          effect: {
                        ja: "防御ポケモンが進化したポケモンである場合、この攻撃は30ダメージに加えて30ダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};

export default card
