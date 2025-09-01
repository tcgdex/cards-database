import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "サボテン",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [332],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "ポイズンの見返り",
                                                                      },
          effect: {
                        ja: "Cacturneがアクティブなポカモンであり、対戦相手の攻撃によって損傷を受けている場合（サボテンがノックアウトされたとしても）、攻撃するポカモンは現在毒されます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "FEINT攻撃",
                                                                      },
          effect: {
                        ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに40のダメージを与えます。この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、またはそのポケモンへのその他の影響の影響を受けません。",
                                                                      },
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
