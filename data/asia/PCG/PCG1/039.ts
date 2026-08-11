import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "マグナイト",
    },

    rarity: "Uncommon",
    category: "Pokemon",
    dexId: [81],
    hp: 50,
    types: ["Lightning"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "超音速",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            },
        },
        {
            cost: ["Lightning", "Colorless"],
            name: {
                ja: "スピードボール",
            },
            damage: 20,
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
