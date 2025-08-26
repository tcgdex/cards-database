import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "スニーエル",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [215],
    hp: 60,
    types: ["Darkness"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Darkness"],
            name: {
                ja: "ロブ",
            },
            effect: {
                ja: "相手の手を見てください。そこにすべてのテクニカルマシンとポケモンのツールカードを選択し、それらを彼または彼女のデッキに入れます。あなたの対戦相手はその後デッキをシャッフルします。",
            },
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "爪",
            },
            effect: {
                ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
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
