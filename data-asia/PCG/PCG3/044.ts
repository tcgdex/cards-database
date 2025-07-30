import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "メタグロス",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [376],
      hp: 100,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "スーパー接続",
                                                                      },
          effect: {
                        ja: "ターン中に（攻撃の前に）、廃棄物の山を検索して、サイキックまたはメタルのエネルギーカードを検索し、アクティブなPokã©Monに添付することができます。次に、そのpokã©Monに1つのダメージカウンターを置きます。 Metagrossが特別な状態の影響を受ける場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
                        ja: "リンクブラスト",
                                                                      },
          effect: {
                        ja: "Metagrossと防御ポケモンのエネルギーが異なるエネルギーを持っている場合、この攻撃のベースダメージは70ではなく40です。",
                                                                      },
          damage: 70,
        },
      ],

      retreat: 2,

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
