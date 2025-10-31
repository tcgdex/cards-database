import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "REMORAID",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [223],
    hp: 50,
    types: ["Water"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Water"],
            name: {
                ja: "スプラッタ",
            },
            effect: {
                ja: "プレイ中の対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。この攻撃に弱さや抵抗を適用しないでください。",
            },
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
            subtype: "unlimited",
        },
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
