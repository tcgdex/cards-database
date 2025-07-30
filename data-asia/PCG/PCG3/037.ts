import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "xatu",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [178],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "ミラーコート",
                                                                      },
          effect: {
                        ja: "Xatuが対戦相手の攻撃によって焼かれたり毒されたりした場合（Xatuがノックアウトされたとしても）、攻撃するポカモンは同じ特別な条件の影響を受けます（1が1つしかない場合）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "まばゆいばかりのダンス",
                                                                      },
          effect: {
                        ja: "防御するポケモンはそれぞれ混乱しています。",
                                                                      },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
                        ja: "ピループ",
                                                                      },
          effect: {
                        ja: "30のダメージに加えて、対戦相手がプレイしているトレーナーカードごとに30ダメージを与えます。",
                                                                      },
        },
      ],


      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
