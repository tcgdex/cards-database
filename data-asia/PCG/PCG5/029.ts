import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "Walrein Ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [365],
      hp: 150,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "氷のオーラ",
                                                                      },
          effect: {
                        ja: "Walrein ExがアクティブなPokã©Monである限り、WaterPokã©Monを除く、ターンの合間にアクティブなPokã©Mon（あなたと対戦相手の両方）に1つのダメージカウンターを置きます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
                        ja: "水の矢",
                                                                      },
          effect: {
                        ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに40のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
                        ja: "アイススロー",
                                                                      },
          effect: {
                        ja: "防御ポケモンが戦闘ポケモンである場合、この攻撃の基本ダメージは80ではなく120です。",
                                                                      },
          damage: 80,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
