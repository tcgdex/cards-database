import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "Clefable ex",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [36],
    hp: 100,
    types: ["Colorless"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "メトロノーム",
            },
            effect: {
                ja: "防御ポケモンの攻撃の1つを選択します。メトロノームは、エネルギーコストを除いて攻撃するコピーをコピーします。 （その攻撃を使用するには、他のことをまだしなければなりません。）（ポケモンがどんなタイプであっても、Clefable Exのタイプはまだ無色です。）Clefable Exはその攻撃を実行します。",
            },
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "月の衝撃",
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
            stamp: ["1st edition"],
        },
    ],
};

export default card
