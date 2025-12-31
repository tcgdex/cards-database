import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "プライム",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [57],
    hp: 70,
    types: ["Fighting"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "トス",
            },
            effect: {
                ja: "多くのテクニカルマシンとポケモンツールカードと同じくらい多くのテクニカルマシンとポケモンのツールカードを捨てることができます。この攻撃は、廃棄したカードの数の30回のダメージ時間を実行します。",
            },
        },
        {
            cost: ["Fighting", "Colorless"],
            name: {
                ja: "ローキック",
            },
            damage: 40,
        },
    ],


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
