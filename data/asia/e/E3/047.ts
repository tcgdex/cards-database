import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "フラフィー",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [180],
    hp: 80,
    types: ["Lightning"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "サンダーショック",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            },
            damage: 10,
        },
        {
            cost: ["Lightning", "Lightning", "Colorless"],
            name: {
                ja: "スパーク",
            },
            effect: {
                ja: "対戦相手がベンチでポケモンを持っている場合は、1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            },
            damage: 30,
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
            subtype: "unlimited",
        }, {
            type: "normal",
            stamp: ["1st edition"],
        },
    ],
};

export default card
