import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "Pupitar",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [247],
    hp: 80,
    types: ["Fighting"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                ja: "スラッシュ",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて10ダメージを与えます。尾の場合、Pupitarはそれ自体に10ダメージを与えます。",
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
