import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "ゴルダック（デルタ種）",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [55],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "デルタブロック",
                                                                      },
          effect: {
                        ja: "ホロンがその名に載っているスタジアムカードがプレイ中である限り、相手は彼または彼女の手からスタジアムカードをプレイすることができません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
                        ja: "マインドプレイ",
                                                                      },
          effect: {
                        ja: "見ずに相手の手から1枚のカードを1枚選択します。あなたが選んだカードを見てください。そのカードがトレーナーカードの場合、この攻撃は30のダメージに加えて30ダメージを与え、そのカードを破棄します。そのカードがトレーナーカードではない場合は、相手の手に返してください。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
