import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "beedrill（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [15],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "最終的な刺し傷",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度、Beedrillをノックアウトすることができます。もしそうなら、対戦相手の防御Pokã©Monの1つを選択してください。そのポカンは今や麻痺し、毒されています。ターンの間にそのpokã©Monに1つではなく2つのダメージカウンターを置きます。 Beedrillが特別な状態の影響を受けている場合、この力は使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Grass", "Metal", "Colorless"],
          name: {
                        ja: "スーパースラッシュ",
                                                                      },
          effect: {
                        ja: "防御ポケモンが進化したポケモンである場合、この攻撃は50のダメージと30のダメージを与えます。",
                                                                      },
        },
      ],


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
