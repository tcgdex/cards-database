import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "natu",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [177],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "ミラーコート",
                                                                      },
          effect: {
                        ja: "NATUが敵の攻撃によって燃やされたり、毒されたりした場合（NATUがノックアウトされたとしても）、攻撃するポケモンは、同じ特別な条件の影響を受けます（1つしかない場合は1）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "かみそりの風",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
                                                                      },
          damage: 20,
        },
      ],

      retreat: 1,

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
