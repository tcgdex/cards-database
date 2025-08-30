import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "ゴルダック",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [55],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "カオスフラッシュ",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度、ゴルダックがあなたのアクティブなポケモンである場合、コインをひっくり返すことができます。頭の場合、防御するポカモン（2つある場合は1を選択してください）が混乱します。 Golduckが特別な状態の影響を受けている場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Water", "Psychic"],
          name: {
                        ja: "特別な打撃",
                                                                      },
          effect: {
                        ja: "ディフェンディングポケモンに特別なエネルギーカードが付いている場合、この攻撃は30ダメージに加えて40ダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};

export default card
