import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "ダンズパース",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [206],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "デッドロック",
                                                                      },
          effect: {
                        ja: "DunsparceがあなたのアクティブなPokã©Monである限り、あなたの相手のDunspheceは攻撃できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ダウンドロー",
                                                                      },
          effect: {
                        ja: "デッキの底から2枚のカードを描きます。",
                                                                      },
        },
        {
          cost: ["Colorless"],
          name: {
                        ja: "トリッピングターン",
                                                                      },
          effect: {
                        ja: "防御ポケモンは今混乱しています。 Dunspemonをベンチしたポケモンと一緒に切り替えることができます。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
