import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "ポニータ",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [77],
    hp: 40,
    types: ["Fire"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "取り組む",
            },
            damage: 10,
        },
        {
            cost: ["Fire", "Colorless"],
            name: {
                ja: "ember",
            },
            effect: {
                ja: "Ponytaに取り付けられた消防エネルギーカードを捨てます。",
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
            subtype: "unlimited",
        }, {
            type: "normal",
            stamp: ["1st edition"],
        },
    ],
};

export default card
