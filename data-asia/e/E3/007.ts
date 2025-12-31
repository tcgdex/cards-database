import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "ベルスプラウト",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [69],
    hp: 40,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "毒vine",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
            },
        },
        {
            cost: ["Grass"],
            name: {
                ja: "鋭い葉",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
            },
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
