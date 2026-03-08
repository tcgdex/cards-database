import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "チャンジー",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [113],
    hp: 90,
    types: ["Colorless"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "歌う",
            },
            effect: {
                ja: "防御ポケモンは今眠っています。",
            },
        },
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                ja: "卵の驚き",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、チャンシーは防御ポケモンに50のダメージを与えます。テールの場合、Chanseyから5つのダメージカウンターを削除します。 （5歳未満の場合はすべて5歳未満の場合）",
            },
        },
    ],

    retreat: 2,

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
