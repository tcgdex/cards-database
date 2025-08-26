import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "馬",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [116],
    hp: 40,
    types: ["Water"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Water"],
            name: {
                ja: "バブル",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            },
            damage: 10,
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
