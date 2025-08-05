import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "Dustox",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [269],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "保護ダスト",
                                                                      },
          effect: {
                        ja: "攻撃するポカンによるダストックスに与えられた損傷を除く攻撃のすべての影響を防ぎます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
                        ja: "有毒",
                                                                      },
          effect: {
                        ja: "防御ポケモンは現在中毒になっています。ターンの間に防御ポケモンに1つではなく2つのダメージカウンターを置きます。",
                                                                      },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
                        ja: "突風",
                                                                      },
          damage: 50,
        },
      ],


      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
