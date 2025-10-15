import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "シール",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [86],
    hp: 50,
    types: ["Water"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Water"],
            name: {
                ja: "ホーンハザード",
            },
            effect: {
                ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            },
            damage: 30,
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
            stamp: ["1st edition"],
        },
    ],
};

export default card
