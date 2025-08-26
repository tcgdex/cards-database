import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "マンキー",
    },

    rarity: "Uncommon",
    category: "Pokemon",
    dexId: [56],
    hp: 50,
    types: ["Fighting"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "いたずら",
            },
            effect: {
                ja: "相手のデッキをシャッフルします。",
            },
        },
        {
            cost: ["Fighting", "Colorless"],
            name: {
                ja: "軽いパンチ",
            },
            damage: 30,
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
