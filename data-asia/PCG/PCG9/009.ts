import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "ヘラクロス（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [214],
      hp: 70,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "輝くホーン",
                                                                      },
          effect: {
                        ja: "ヘラクロスがあなたがプレイしている唯一のポカモンである限り、あなたの対戦相手の基本的なポカモンは攻撃できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "深く掘ります",
                                                                      },
          effect: {
                        ja: "廃棄パイルを検索して、エネルギーカードを紹介し、相手に見せて、手に入れてください。",
                                                                      },
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
                        ja: "余分な爪",
                                                                      },
          effect: {
                        ja: "防御ポケモンがポケモンエクスの場合、この攻撃は30ダメージと20ダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 1,

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
