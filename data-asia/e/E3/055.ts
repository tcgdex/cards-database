import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "プライム",
    },

    rarity: "Uncommon",
    category: "Pokemon",
    dexId: [57],
    hp: 80,
    types: ["Fighting"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Fighting", "Colorless"],
            name: {
                ja: "空手チョップ",
            },
            effect: {
                ja: "この攻撃による損傷は、Primeapeの各ダメージカウンターで10倍に減少します。",
            },
        },
        {
            cost: ["Fighting", "Colorless", "Colorless"],
            name: {
                ja: "突然の充電",
            },
            effect: {
                ja: "Primeapeはそれ自体に10ダメージを与えます。次に、対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。",
            },
            damage: 40,
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
