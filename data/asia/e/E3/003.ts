import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "vileplume",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [45],
    hp: 100,
    types: ["Grass"],
    stage: "Stage2",

    attacks: [
        {
            cost: ["Grass"],
            name: {
                ja: "毒の香り",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御するポケモンは毒され、混乱しています。尾の場合、防御するポケモンは毒され、眠っています。",
            },
        },
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                ja: "中毒性の花粉",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、対戦相手は次のターン中にサポーターカードをプレイできません。",
            },
            damage: 40,
        },
    ],

    retreat: 2,

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
