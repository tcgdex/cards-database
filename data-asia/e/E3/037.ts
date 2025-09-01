import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "ラントン",
    },

    rarity: "Uncommon",
    category: "Pokemon",
    dexId: [171],
    hp: 80,
    types: ["Water"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Lightning"],
            name: {
                ja: "稲妻",
            },
            damage: 20,
        },
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                ja: "伝導",
            },
            effect: {
                ja: "Lanturnに取り付けられたすべての稲妻エネルギーカードを捨てます。廃棄した稲妻エネルギーカードの数に等しい多数のコインをひっくり返します。この攻撃は、30のダメージに加えて、各ヘッドに対してさらに40のダメージを与えます。",
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
