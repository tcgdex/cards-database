import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "マウィール",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [303],
      hp: 60,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "詐欺",
                                                                      },
          effect: {
                        ja: "相手の手を見てください。あなたはあなたが彼または彼女のデッキにそこにあるサポーターカードをシャッフルさせるかもしれません。もしそうなら、相手はカードを描きます。",
                                                                      },
        },
        {
          cost: ["Metal", "Colorless"],
          name: {
                        ja: "メタルフック",
                                                                      },
          effect: {
                        ja: "ダメージを与える前に、1つの防御ポケモンで相手のベンチポケモンを1つ切り替えることができます。もしそうなら、この攻撃は新しい防御ポケモンに20のダメージを与えます。",
                                                                      },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

export default card
