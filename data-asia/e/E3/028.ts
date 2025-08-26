import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "Tentacool",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [72],
    hp: 50,
    types: ["Water"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "毒物",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
            },
        },
        {
            cost: ["Water"],
            name: {
                ja: "回復する",
            },
            effect: {
                ja: "この攻撃を使用するために、Tentacoolに取り付けられた1つの水エネルギーカードを廃棄します。 Tentacoolからすべてのダメージカウンターを削除します。",
            },
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
