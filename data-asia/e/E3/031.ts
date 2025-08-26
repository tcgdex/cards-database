import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "slowpoke",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [79],
    hp: 50,
    types: ["Water"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "釣りの尾",
            },
            effect: {
                ja: "廃棄の山、ベビーポケモン、基本的なポケモン、エボリューションカード、​​または基本エネルギーカードを検索し、対戦相手に見せてから手に入れます。",
            },
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "噛む",
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
