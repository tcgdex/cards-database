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
    hp: 50,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Grass", "Colorless"],
            name: {
                ja: "ブロット",
            },
            effect: {
                ja: "Bellsproutから1つのダメージカウンターを取り外します。",
            },
            damage: 20,
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
