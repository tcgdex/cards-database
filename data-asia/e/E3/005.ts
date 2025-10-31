import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "パラ",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [46],
    hp: 50,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "胞子",
            },
            effect: {
                ja: "防御ポケモンは今眠っています。",
            },
        },
        {
            cost: ["Grass", "Colorless"],
            name: {
                ja: "胞子の進化",
            },
            effect: {
                ja: "パラから進化するカードをデッキで検索してください。パラに添付します。これは進化するパラとしてカウントされます。その後、デッキをシャッフルします。",
            },
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
