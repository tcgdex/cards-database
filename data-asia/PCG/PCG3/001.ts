import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
    set: Set,
    name: {
        ja: "エカン",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [23],
    hp: 60,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "テールラップ",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            },
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
            stamp: ["1st edition"],
        },
        {
            type: "normal",
            subtype: "unlimited",
        },
    ],
};

export default card
