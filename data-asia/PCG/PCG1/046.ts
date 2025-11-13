import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "ガストリー",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [92],
    hp: 50,
    types: ["Psychic"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "遅いトリップガス",
            },
            effect: {
                ja: "対戦相手の次のターンの終わりに、ディフェンディングポケモンは混乱しています。",
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
