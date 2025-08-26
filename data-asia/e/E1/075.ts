import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
    set: Set,
    name: {
        ja: "マグビー",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [240],
    hp: 30,
    types: ["Fire"],
    stage: "Baby",

    attacks: [
        {
            cost: ["Fire"],
            name: {
                ja: "エネルギーキャッチ",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合は、捨てられた山から基本的なエネルギーカードを手に入れてください。",
            },
        },
    ],

    retreat: 1,

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
