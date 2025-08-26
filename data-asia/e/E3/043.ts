import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "チンチョウ",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [170],
    hp: 50,
    types: ["Lightning"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "衝撃",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            },
        },
        {
            cost: ["Lightning", "Colorless"],
            name: {
                ja: "レイを混乱させます",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            },
            damage: 10,
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
