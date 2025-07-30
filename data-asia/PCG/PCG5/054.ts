import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "カブトップス",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [141],
      hp: 110,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "古代の殻",
                                                                      },
          effect: {
                        ja: "OmanyteまたはOmastarがプレイされている限り、攻撃によってKabutopsに与えられた損害は20増加します（脱力感と抵抗を適用した後）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Fighting"],
          name: {
                        ja: "エネルギーストリーム",
                                                                      },
          effect: {
                        ja: "廃棄の山を検索して、基本的なエネルギーカードを調べ、カブトップに添付してください。",
                                                                      },
          damage: 30,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
                        ja: "余分な爪",
                                                                      },
          effect: {
                        ja: "防御ポケモンがポケモン-Exの場合、この攻撃は50のダメージと30ダメージを与えます。",
                                                                      },
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
