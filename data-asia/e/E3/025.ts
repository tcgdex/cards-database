import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "Rapidash",
    },

    rarity: "Uncommon",
    category: "Pokemon",
    dexId: [78],
    hp: 70,
    types: ["Fire"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "敏ility性",
            },
            effect: {
                ja: "コインをひっくり返します。ヘッドが、相手の次のターン中に、RapidAshに行われた損害を含む攻撃のすべての影響を防ぎます。",
            },
            damage: 10,
        },
        {
            cost: ["Fire", "Colorless", "Colorless"],
            name: {
                ja: "ギャロップ",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合は、Rapidashに取り付けられた消防エネルギーカードを捨ててください。この攻撃は30ダメージに加えて20ダメージを与えます。",
            },
        },
    ],


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
