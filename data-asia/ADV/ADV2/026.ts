import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "xatu",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [178],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "癒しの風",
                                                                      },
          effect: {
                        ja: "ターン中に（攻撃の前）、アクティブなPokã©Monから1つのダメージカウンターを削除できます。 Xatuが特別な状態の影響を受けている場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
                        ja: "psyimpact",
                                                                      },
          effect: {
                        ja: "相手のポケモンのそれぞれに1つのダメージカウンターを置きます。",
                                                                      },
        },
      ],


      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
