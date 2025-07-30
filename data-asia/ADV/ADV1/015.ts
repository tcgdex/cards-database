import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "航海",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [119],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
                        ja: "水の矢",
                                                                      },
          effect: {
                        ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "高速ストリーム",
                                                                      },
          effect: {
                        ja: "防御ポケモンに取り付けられた1つのエネルギーカードを他の防御ポケモンに移動します。 （対戦相手が1つの防御ポケモンしか持っていない場合、この効果を無視してください。）",
                                                                      },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
