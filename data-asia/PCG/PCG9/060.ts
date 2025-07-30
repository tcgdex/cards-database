import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "nidoqueen（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [31],
      hp: 100,
      types: ["Metal"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "招待",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度（攻撃の前）、基本的なPokã©MonまたはEvolutionカードを検索し、相手に見せて、手に渡すことができます。その後、デッキをシャッフルします。 Nidoqueenが特別な状態の影響を受けている場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "復讐",
                                                                      },
          effect: {
                        ja: "基本的なポケモンごとに30のダメージに加えて、廃棄パイル内の各進化カードに対してさらに10ダメージを与えます。この方法で60以上のダメージを追加することはできません。",
                                                                      },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
